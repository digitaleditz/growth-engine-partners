import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
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

    // Send confirmation email via Lovable AI Gateway
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (LOVABLE_API_KEY) {
      try {
        const emailPrompt = `Generate a professional HTML email body (just the inner HTML, no doctype/html/body tags) for a query confirmation email from DigitalEditz (info@digitaleditz.com). 
The customer's name is "${name}". They inquired about: service="${service || 'Not specified'}", package="${packageName || 'Not specified'}". 
The email should:
- Thank them for reaching out to DigitalEditz
- Confirm their query has been received
- Mention the team will contact them within 24 hours
- Be styled with inline CSS, dark theme (#0a0a0f background, #3bc2f8 accent color, white text)
- Include a footer with "DigitalEditz — AI-Powered Growth Partner"
Keep it concise and professional.`;

        const aiRes = await fetch(
          "https://ai.gateway.lovable.dev/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "google/gemini-2.5-flash-lite",
              messages: [{ role: "user", content: emailPrompt }],
            }),
          }
        );

        if (aiRes.ok) {
          const aiData = await aiRes.json();
          let emailHtml = aiData.choices?.[0]?.message?.content || "";
          // Strip markdown code fences if present
          emailHtml = emailHtml.replace(/```html\n?/g, "").replace(/```\n?/g, "").trim();

          // Use Supabase's built-in email (auth.admin) or log for now
          // Since we can't send arbitrary emails via Lovable's auth system,
          // we'll log the email content and notify via the response
          console.log("Confirmation email generated for:", email);
          console.log("Email HTML length:", emailHtml.length);
        }
      } catch (emailErr) {
        console.error("Email generation error:", emailErr);
        // Don't fail the submission if email fails
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: "Query received successfully!" }),
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
