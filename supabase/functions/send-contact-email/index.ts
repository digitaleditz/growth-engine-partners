import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, businessName, email, phone, service, packageName, message } =
      await req.json();

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Store in database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        business_name: businessName || null,
        email,
        phone: phone || null,
        service: service || null,
        package: packageName || null,
        message: message || null,
      });

    if (dbError) {
      console.error("DB error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send confirmation email via Resend
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ success: true, message: "Query saved but email not sent (missing API key)" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const serviceText = service && service !== "Custom / Other" ? service : "Not specified";
    const packageText = packageName && packageName !== "Custom / Other" ? packageName : "Not specified";

    const emailHtml = `
    <div style="background-color:#0a0a0f;padding:40px 20px;font-family:'Segoe UI',Arial,sans-serif;">
      <div style="max-width:560px;margin:0 auto;background:linear-gradient(135deg,#111118 0%,#0d0d14 100%);border-radius:24px;border:1px solid rgba(59,194,248,0.15);overflow:hidden;">
        <div style="padding:40px 36px 20px;">
          <div style="text-align:center;margin-bottom:32px;">
            <h1 style="color:#3bc2f8;font-size:24px;font-weight:700;margin:0 0 4px;">DigitalEditz</h1>
            <p style="color:rgba(255,255,255,0.4);font-size:11px;letter-spacing:2px;text-transform:uppercase;margin:0;">AI-Powered Growth Partner</p>
          </div>
          <div style="width:40px;height:2px;background:linear-gradient(90deg,#3bc2f8,transparent);margin:0 auto 32px;"></div>
          <h2 style="color:#ffffff;font-size:20px;font-weight:600;margin:0 0 16px;">Hi ${name},</h2>
          <p style="color:rgba(255,255,255,0.7);font-size:15px;line-height:1.7;margin:0 0 24px;">
            Thank you for reaching out to <strong style="color:#ffffff;">DigitalEditz</strong>. We've received your query and our growth strategists will get back to you within <strong style="color:#3bc2f8;">24 hours</strong>.
          </p>
          <div style="background:rgba(59,194,248,0.06);border:1px solid rgba(59,194,248,0.12);border-radius:16px;padding:24px;margin-bottom:24px;">
            <p style="color:rgba(255,255,255,0.4);font-size:11px;letter-spacing:1.5px;text-transform:uppercase;margin:0 0 16px;">Your Inquiry Summary</p>
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="color:rgba(255,255,255,0.5);font-size:13px;padding:6px 0;width:100px;">Service</td>
                <td style="color:#ffffff;font-size:13px;padding:6px 0;">${serviceText}</td>
              </tr>
              <tr>
                <td style="color:rgba(255,255,255,0.5);font-size:13px;padding:6px 0;">Package</td>
                <td style="color:#ffffff;font-size:13px;padding:6px 0;">${packageText}</td>
              </tr>
              ${businessName ? `<tr><td style="color:rgba(255,255,255,0.5);font-size:13px;padding:6px 0;">Business</td><td style="color:#ffffff;font-size:13px;padding:6px 0;">${businessName}</td></tr>` : ""}
            </table>
          </div>
          <p style="color:rgba(255,255,255,0.5);font-size:13px;line-height:1.6;margin:0 0 28px;">
            In the meantime, feel free to reach us directly on
            <a href="https://wa.me/919149958270" style="color:#3bc2f8;text-decoration:none;"> WhatsApp</a>
            for a quicker response.
          </p>
        </div>
        <div style="background:rgba(255,255,255,0.02);border-top:1px solid rgba(255,255,255,0.06);padding:20px 36px;text-align:center;">
          <p style="color:rgba(255,255,255,0.3);font-size:12px;margin:0;">
            © ${new Date().getFullYear()} DigitalEditz · Gurugram, India
          </p>
        </div>
      </div>
    </div>`;

    // Send to customer
    const customerEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "DigitalEditz <info@digitaleditz.com>",
        to: [email],
        subject: "We've received your query — DigitalEditz",
        html: emailHtml,
      }),
    });

    if (!customerEmailRes.ok) {
      const errBody = await customerEmailRes.text();
      console.error("Resend customer email error:", customerEmailRes.status, errBody);
    } else {
      console.log("Confirmation email sent to:", email);
    }

    // Send notification to team
    const teamNotifHtml = `
    <div style="font-family:'Segoe UI',Arial,sans-serif;padding:20px;">
      <h2 style="color:#333;">New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%;">
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:600;width:120px;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${name}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:600;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${email}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:600;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${phone || "Not provided"}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:600;">Business</td><td style="padding:8px;border-bottom:1px solid #eee;">${businessName || "Not provided"}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:600;">Service</td><td style="padding:8px;border-bottom:1px solid #eee;">${serviceText}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:600;">Package</td><td style="padding:8px;border-bottom:1px solid #eee;">${packageText}</td></tr>
        <tr><td style="padding:8px;font-weight:600;vertical-align:top;">Message</td><td style="padding:8px;">${message || "No message"}</td></tr>
      </table>
    </div>`;

    const teamEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "DigitalEditz Form <info@digitaleditz.com>",
        to: ["info@digitaleditz.com"],
        subject: `New Inquiry from ${name} — ${serviceText}`,
        html: teamNotifHtml,
      }),
    });

    if (!teamEmailRes.ok) {
      const errBody = await teamEmailRes.text();
      console.error("Resend team email error:", teamEmailRes.status, errBody);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Query received and confirmation email sent!" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
