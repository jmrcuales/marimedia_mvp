import { cn } from "@/lib/utils";

export default function SectionEyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "block text-sm font-semibold text-[#D6216E] uppercase tracking-wider mb-3",
        className
      )}
    >
      {children}
    </span>
  );
}
