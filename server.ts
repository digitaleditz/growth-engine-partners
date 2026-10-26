import express from "express";
import { GoogleGenAI } from "@google/genai";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProd = process.env.NODE_ENV === "production";
const PORT = isProd ? (Number(process.env.PORT) || 3000) : 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  // Initialize official Google GenAI client safely if key is available
  let ai: GoogleGenAI | null = null;
  if (process.env.GEMINI_API_KEY) {
    try {
      ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    } catch (e) {
      console.warn("Could not initialize GoogleGenAI client:", e);
    }
  }

  const SYSTEM_INSTRUCTION = `You are EditzAI, the official intelligent digital growth consultant and assistant for DigitalEditz (digitaleditz.com).
DigitalEditz is a premier performance and growth agency based in Gurugram, India, serving clients across the country and globally.

Key agency capabilities & services:
1. Performance Marketing & Paid Acquisition (Meta Ads, Google Ads, YouTube, LinkedIn)
2. High-Converting Content & Short-Form Video (Reels, TikTok, UGC, Brand Films)
3. Full-Funnel Growth Systems & WhatsApp Funnels
4. High-Performance Web & Landing Pages (Next.js, React, Tailwind, Shopify, Webflow)
5. Brand Identity & Creative Direction

Notable Client Results:
- VIVO: High-impact digital campaigns
- Kapahi Properties: WhatsApp lead funnels with 700% Peak ROAS and 100k+ qualified leads
- Pushti Turf: Playground turf & sports arena launch campaign
- Kashmir Ply Co. (The KPC): B2B building materials growth
- MOS P&D Usman Majid: Public outreach and citizen engagement
- J&K District Administration: Tourism and public sector engagement

Call-to-Action:
Always encourage interested clients to book a free 30-minute discovery call at:
https://calendly.com/digitaleditz01/free-discovery-call
Or reach out via email: info@digitaleditz.com

Tone:
Sharp, consultative, energetic, data-driven, and highly professional. Keep answers punchy, well-structured with clear bullet points, and avoid robotic fluff.`;

  // Multi-turn Chat API Endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;

      if (!Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: "Messages array is required." });
      }

      // Convert messages to GenAI format
      const contents = messages.map((m: { role: string; text: string }) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.text }],
      }));

      if (!ai) {
        throw new Error("Gemini API Key is not configured.");
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      const replyText = response.text || "I'm sorry, I couldn't generate a response. Please try again.";
      return res.json({ reply: replyText });
    } catch (error: unknown) {
      console.warn("Gemini API Error, using consultative fallback:", error);
      const { messages } = req.body;
      const lastUserMsg = (Array.isArray(messages) && messages[messages.length - 1]?.text?.toLowerCase()) || "";

      let fallbackReply = "DigitalEditz is a performance and growth systems agency. We architect brand identity, high-conversion websites, scroll-stopping content, and performance acquisition funnels.\n\n• Performance Marketing: Meta, Google Ads & YouTube\n• Creative Production: High-converting brand films, UGC, short-form reels\n• Conversion Systems: WhatsApp automated funnels & high-speed landing pages\n\nWould you like to schedule a free 30-minute discovery call at calendly.com/digitaleditz01/free-discovery-call?";

      if (lastUserMsg.includes("package") || lastUserMsg.includes("price") || lastUserMsg.includes("cost")) {
        fallbackReply = "We offer flexible growth retainers tailored to your stage:\n\n1. Content Engine: Weekly short-form reels, brand films, and creative direction.\n2. Scale Accelerator: Full-funnel Meta & Google ad management, creative production, and landing page optimization.\n3. Enterprise Growth Partner: Automated WhatsApp funnels, dedicated creative squad, high-scale acquisition, and real-time attribution.\n\nLet's discuss which model fits your goals: calendly.com/digitaleditz01/free-discovery-call";
      } else if (lastUserMsg.includes("roas") || lastUserMsg.includes("kapahi") || lastUserMsg.includes("case") || lastUserMsg.includes("result") || lastUserMsg.includes("pushti")) {
        fallbackReply = "Here are a few benchmark results we've delivered for our partners:\n\n• Kapahi Properties: 700% Peak ROAS & 100k+ qualified leads via WhatsApp funnels\n• Pushti Turf: Record-breaking launch campaign and booking velocity\n• VIVO: High-visibility regional digital campaigns\n• Kashmir Ply Co: Scaled B2B dealer and contractor pipelines\n\nExplore our /case-studies page or book a discovery call to see our playbook for your sector!";
      } else if (lastUserMsg.includes("call") || lastUserMsg.includes("contact") || lastUserMsg.includes("book") || lastUserMsg.includes("calendly")) {
        fallbackReply = "You can book a free 30-minute discovery call directly with our team here:\n👉 https://calendly.com/digitaleditz01/free-discovery-call\n\nOr email us at info@digitaleditz.com.";
      }

      return res.json({ reply: fallbackReply });
    }
  });

  // Vite middleware in development vs static serving in production
  if (!isProd) {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, "dist")));
    app.get("*", (_req, res) => {
      res.sendFile(path.resolve(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`DigitalEditz server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Server startup error:", err);
  process.exit(1);
});
