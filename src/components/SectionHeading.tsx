import { ReactNode } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) => {
  const centered = align === "center";
  return (
    <ScrollReveal>
      <div
        className={`${centered ? "text-center max-w-2xl mx-auto" : "max-w-2xl"} mb-14 md:mb-16 ${className}`}
      >
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="display-lg mt-5">{title}</h2>
        {description && <p className="body-lg mt-5">{description}</p>}
      </div>
    </ScrollReveal>
  );
};

export default SectionHeading;
