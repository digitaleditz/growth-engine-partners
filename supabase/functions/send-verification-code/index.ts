import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const codeEmailHtml = (code: string) => `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
</head>
<body style="margin:0;padding:0;background-color:#ffffff;font-family:'Segoe UI',Arial,sans-serif;">
<div style="background-color:#ffffff;padding:40px 20px;">
  <div style="max-width:520px;margin:0 auto;background-color:#ffffff;border-radius:16px;border:1px solid #e5e7eb;overflow:hidden;">
    <div style="background-color:#0f172a;padding:26px 32px;text-align:center;">
      <h1 style="color:#3bc2f8;font-size:21px;font-weight:700;margin:0 0 4px;">DigitalEditz</h1>
      <p style="color:#94a3b8;font-size:11px;letter-spacing:2px;text-transform:uppercase;margin:0;">Verify your email</p>
    </div>
    <div style="padding:34px 32px;">
      <p style="color:#475569;font-size:15px;line-height:1.7;margin:0 0 22px;">
        Use the code below to verify your email and submit your enquiry. It expires in 10 minutes.
      </p>
      <div style="background-color:#f0f9ff;border:1px solid #bae6fd;border-radius:12px;padding:22px;text-align:center;margin-bottom:22px;">
        <p style="color:#0f172a;font-size:32px;font-weight:700;letter-spacing:8px;margin:0;">${code}</p>
      </div>
      <p style="color:#94a3b8;font-size:12px;line-height:1.6;margin:0;">
        If you did not request this, you can safely ignore this email.
      </p>
    </div>
    <div style="background-color:#f8fafc;border-top:1px solid #e5e7eb;padding:18px 32px;text-align:center;">
      <p style="color:#94a3b8;font-size:12px;margin:0;">© ${new Date().getFullYear()} DigitalEditz · Gurugram, India</p>
    </div>
  </div>
</div>
</body>
</html>`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { email } = await req.json();
    const cleanEmail = typeof email === "string" ? email.trim().toLowerCase() : "";

    if (!cleanEmail || cleanEmail.length > 255 || !EMAIL_RE.test(cleanEmail)) {
      return json({ error: "Please enter a valid email address." }, 400);
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Rate limit: max 3 codes per email per 15 minutes
    const since = new Date(Date.now() - 15 * 60 * 1000).toISOString();
    const { count } = await supabase
      .from("email_verification_codes")
      .select("id", { count: "exact", head: true })
      .eq("email", cleanEmail)
      .gte("created_at", since);

    if ((count ?? 0) >= 3) {
      return json({ error: "Too many code requests. Please try again in a few minutes." }, 429);
    }

    const code = String(Math.floor(100000 + Math.random() * 900000));
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString();

    const { error: insertError } = await supabase
      .from("email_verification_codes")
      .insert({ email: cleanEmail, code, expires_at: expiresAt });

    if (insertError) {
      console.error("Failed to store verification code:", insertError);
      return json({ error: "Could not send the code. Please try again." }, 500);
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return json({ error: "Email service unavailable. Please try again later." }, 500);
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "DigitalEditz <info@digitaleditz.com>",
        to: [cleanEmail],
        subject: `${code} is your DigitalEditz verification code`,
        html: codeEmailHtml(code),
      }),
    });

    if (!res.ok) {
      console.error("Resend verification email error:", res.status, await res.text());
      return json({ error: "Could not send the code. Please check the email address." }, 502);
    }

    return json({ success: true });
  } catch (err) {
    console.error("Error:", err);
    return json({ error: "Internal server error" }, 500);
  }
});
