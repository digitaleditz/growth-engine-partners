import { useEffect } from "react";
import { Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import pdfAsset from "@/assets/pastwork2526.pdf.asset.json";

const PastWork2526 = () => {
  useEffect(() => {
    document.title = "pastwork2526 | DigitalEditz";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "View pastwork2526 — DigitalEditz portfolio of campaigns, growth systems and results delivered for leading brands."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container pt-32 pb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-3">
              Portfolio / 2025-26
            </p>
            <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
              pastwork2526
            </h1>
          </div>
          <a href={pdfAsset.url} download="pastwork2526.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full font-semibold gap-2 glow-accent">
              <Download size={16} />
              Download pastwork2526.pdf
            </Button>
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border/50 glass-strong">
          <object
            data={pdfAsset.url}
            type="application/pdf"
            className="w-full h-[80vh] min-h-[520px]"
            aria-label="pastwork2526 PDF"
          >
            <iframe
              src={pdfAsset.url}
              title="pastwork2526"
              className="w-full h-[80vh] min-h-[520px]"
            />
          </object>
        </div>

        <p className="text-sm text-muted-foreground mt-4">
          Trouble viewing?{" "}
          <a
            href={pdfAsset.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Open pastwork2526.pdf in a new tab
          </a>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default PastWork2526;
