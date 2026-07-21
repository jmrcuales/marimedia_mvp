import Link from "next/link";
import { CheckCircle2, ExternalLink } from "lucide-react";
import type { ChecklistItem } from "@/lib/blog-posts";

interface ChecklistPanelProps {
  heading?: string;
  items: ChecklistItem[];
}

export default function ChecklistPanel({ heading, items }: ChecklistPanelProps) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100 my-6">
      {heading && (
        <h3 className="text-base font-bold text-[#222222] mb-4">{heading}</h3>
      )}
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.text} className="flex items-start gap-3">
            <CheckCircle2
              className="w-5 h-5 text-[#D6216E] mt-0.5 shrink-0"
              aria-hidden="true"
            />
            {item.href ? (
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-1.5 text-gray-700 leading-relaxed font-semibold text-[#D6216E] hover:text-[#C2185B] underline underline-offset-2 transition-colors"
              >
                <span>{item.text}</span>
                <ExternalLink
                  className="w-3.5 h-3.5 mt-1 shrink-0"
                  aria-hidden="true"
                />
                <span className="sr-only"> (opens certificationmatters.org in a new tab)</span>
              </Link>
            ) : (
              <span className="text-gray-700 leading-relaxed">{item.text}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
