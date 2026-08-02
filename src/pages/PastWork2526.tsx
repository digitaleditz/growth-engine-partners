import { useEffect } from "react";
import { Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import pdfAsset from "@/assets/pastwork-2526.pdf.asset.json";

const PastWork2526 = () => {
  useEffect(() => {
    document.title = "Past Work 2025-26 | DigitalEditz";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "View DigitalEditz past work portfolio for 2025-26 — campaigns, growth systems and results delivered for leading brands."
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
              Past Work
            </h1>
          </div>
          <a href={pdfAsset.url} download target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full font-semibold gap-2 glow-accent">
              <Download size={16} />
              Download PDF
            </Button>
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border/50 glass-strong">
          <object
            data={pdfAsset.url}
            type="application/pdf"
            className="w-full h-[80vh] min-h-[520px]"
            aria-label="DigitalEditz Past Work 2025-26 PDF"
          >
            <iframe
              src={pdfAsset.url}
              title="DigitalEditz Past Work 2025-26"
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
            Open the PDF in a new tab
          </a>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default PastWork2526;
