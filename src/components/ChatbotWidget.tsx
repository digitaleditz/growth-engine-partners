import { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  RotateCcw,
  Bot,
  User,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}

const INITIAL_MESSAGE: ChatMessage = {
  id: "welcome-1",
  role: "model",
  text: "Hello! I'm EditzAI, your digital growth consultant at DigitalEditz. How can I help you scale your brand today? Feel free to ask about our performance packages, client case studies, or WhatsApp funnels.",
  timestamp: new Date(),
};

const SUGGESTIONS = [
  "What packages & pricing do you offer?",
  "How did you get 700% ROAS for Kapahi Properties?",
  "What's included in Full-Funnel Systems?",
  "Book a free discovery call",
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const handleSend = async (textToSend?: string) => {
    const userText = (textToSend || input).trim();
    if (!userText || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: userText,
      timestamp: new Date(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      // Send conversation history to the server-side Gemini endpoint
      const payloadMessages = newMessages.map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: payloadMessages }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: "model",
        text: data.reply || "I'm here to help! Could you please clarify your request?",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Chat error:", err);
      const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        role: "model",
        text: "I couldn't connect to the server right now. You can reach out directly via email at info@digitaleditz.com or schedule a call at calendly.com/digitaleditz01/free-discovery-call.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  // If user clicked the permanent remove cross button on the floating widget
  if (isDismissed && !isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsDismissed(false)}
        className="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-secondary/80 border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 text-xs transition-all opacity-60 hover:opacity-100"
        title="Restore AI Chatbot"
      >
        <Bot size={16} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-3 w-[92vw] sm:w-[390px] h-[520px] max-h-[82vh] rounded-2xl bg-card/95 backdrop-blur-2xl border border-border/80 shadow-[0_12px_45px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-250">
          {/* Header */}
          <div className="px-4 py-3 bg-secondary/60 border-b border-border/60 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                <Sparkles size={16} />
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border border-card" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-sm text-foreground flex items-center gap-1.5 leading-none">
                  EditzAI
                  <span className="text-[10px] font-mono font-normal uppercase tracking-wider px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                    Online
                  </span>
                </h3>
                <p className="text-[11px] text-muted-foreground mt-0.5 leading-none">
                  Digital Growth Consultant
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleReset}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                title="Reset conversation"
              >
                <RotateCcw size={14} />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                title="Close chat window"
                aria-label="Close chatbot"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-sm select-text">
            {messages.map((m) => {
              const isUser = m.role === "user";
              return (
                <div
                  key={m.id}
                  className={`flex gap-2.5 ${isUser ? "justify-end" : "justify-start"}`}
                >
                  {!isUser && (
                    <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Bot size={13} />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl leading-relaxed whitespace-pre-wrap break-words ${
                      isUser
                        ? "bg-primary text-primary-foreground rounded-br-sm font-medium"
                        : "bg-secondary/80 text-foreground border border-border/50 rounded-bl-sm"
                    }`}
                  >
                    {m.text}
                  </div>

                  {isUser && (
                    <div className="w-6 h-6 rounded-full bg-secondary border border-border/60 text-muted-foreground flex items-center justify-center shrink-0 mt-0.5">
                      <User size={13} />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-2.5 items-center">
                <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                  <Bot size={13} />
                </div>
                <div className="px-3.5 py-2.5 rounded-2xl bg-secondary/80 border border-border/50 rounded-bl-sm flex items-center gap-1.5 text-muted-foreground text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                  <span className="ml-1 text-[11px]">Thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Chips */}
          {messages.length <= 2 && (
            <div className="px-3 py-2 bg-secondary/30 border-t border-border/40 flex flex-wrap gap-1.5">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => handleSend(s)}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-card hover:bg-secondary border border-border/60 text-secondary-foreground hover:text-primary transition-colors text-left"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input Box */}
          <div className="p-3 bg-secondary/40 border-t border-border/60">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about packages, funnels, ROAS..."
                disabled={isLoading}
                className="flex-1 bg-card border border-border/60 focus:border-primary/60 rounded-xl px-3.5 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className="w-8 h-8 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all shrink-0"
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </div>
            <div className="mt-1.5 flex items-center justify-between text-[10px] text-muted-foreground/70 px-1">
              <span>Powered by Gemini 3.8 Flash</span>
              <a
                href="https://calendly.com/digitaleditz01/free-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors inline-flex items-center gap-0.5"
              >
                Book Call <ArrowUpRight size={9} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button + Close/Remove Button */}
      {!isOpen && (
        <div className="flex items-center gap-1.5 group">
          {/* Main Chatbot Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-xs shadow-[0_8px_25px_rgba(56,189,248,0.35)] hover:shadow-[0_12px_32px_rgba(56,189,248,0.45)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            aria-label="Open AI Chatbot"
          >
            <div className="relative">
              <MessageSquare size={16} />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 border border-primary" />
            </div>
            <span className="tracking-tight">Chat with EditzAI</span>
          </button>

          {/* Viewer's Cross Button to completely dismiss/remove the floating button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsDismissed(true);
            }}
            className="w-7 h-7 rounded-full bg-secondary/80 hover:bg-secondary border border-border/60 text-muted-foreground hover:text-foreground flex items-center justify-center transition-all shadow-md opacity-80 hover:opacity-100"
            title="Remove chatbot from view"
            aria-label="Remove chatbot for viewer"
          >
            <X size={13} />
          </button>
        </div>
      )}
    </div>
  );
}
