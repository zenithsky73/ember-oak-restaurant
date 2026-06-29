import { ArrowRight } from "lucide-react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] transition-all duration-300";

  const variants = {
    primary:
      "bg-[#C7A66A] text-[#111111] hover:-translate-y-1 hover:bg-[#D8B875] hover:shadow-[0_20px_50px_rgba(199,166,106,.25)]",
    outline:
      "border border-[#C7A66A]/70 text-[#F6F3EE] hover:-translate-y-1 hover:bg-[#C7A66A] hover:text-[#111111]",
    ghost:
      "text-[#C7A66A] hover:text-white",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {children}
      <ArrowRight
        size={16}
        className="transition duration-300 group-hover:translate-x-1"
      />
    </a>
  );
}