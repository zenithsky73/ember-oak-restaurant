type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#C7A66A]">
          {eyebrow}
        </p>
      )}

      <h2 className="font-heading text-5xl font-light leading-tight md:text-7xl">
        {title}
      </h2>
    </div>
  );
}