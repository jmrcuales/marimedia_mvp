import { AlertTriangle, FlaskConical, Info } from "lucide-react";
import type { CalloutVariant } from "@/lib/blog-posts";
import { cn } from "@/lib/utils";

interface CalloutProps {
  variant: CalloutVariant;
  title?: string;
  text: string;
}

const variantStyles: Record<
  CalloutVariant,
  { wrapper: string; icon: string; title: string; text: string }
> = {
  safety: {
    wrapper: "bg-amber-50 border-amber-300",
    icon: "text-amber-600",
    title: "text-amber-900",
    text: "text-amber-900/90",
  },
  evidence: {
    wrapper: "bg-sky-50 border-sky-200",
    icon: "text-sky-600",
    title: "text-sky-900",
    text: "text-sky-900/90",
  },
  info: {
    wrapper: "bg-[#FFF5F7] border-gray-200",
    icon: "text-gray-500",
    title: "text-[#222222]",
    text: "text-gray-700",
  },
  disclaimer: {
    wrapper: "bg-gray-50 border-gray-200",
    icon: "text-gray-400",
    title: "text-gray-600",
    text: "text-gray-600",
  },
};

const variantIcon: Record<CalloutVariant, typeof AlertTriangle> = {
  safety: AlertTriangle,
  evidence: FlaskConical,
  info: Info,
  disclaimer: Info,
};

export default function Callout({ variant, title, text }: CalloutProps) {
  const styles = variantStyles[variant];
  const Icon = variantIcon[variant];
  const paragraphs = text.split("\n\n");
  const isDisclaimer = variant === "disclaimer";

  return (
    <div
      role={variant === "safety" ? "note" : undefined}
      className={cn(
        "rounded-2xl border p-5 md:p-6 my-6 flex gap-4",
        styles.wrapper,
        isDisclaimer && "italic text-sm"
      )}
    >
      <Icon
        className={cn("w-5 h-5 mt-0.5 shrink-0", styles.icon)}
        aria-hidden="true"
      />
      <div className="min-w-0">
        {title && (
          <p className={cn("font-bold mb-1.5 not-italic", styles.title)}>
            {title}
          </p>
        )}
        <div className={cn("leading-relaxed space-y-3", styles.text)}>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
