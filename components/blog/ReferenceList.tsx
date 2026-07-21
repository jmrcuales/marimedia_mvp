import { ExternalLink } from "lucide-react";
import type { ReferenceItem } from "@/lib/blog-posts";

export default function ReferenceList({ items }: { items: ReferenceItem[] }) {
  return (
    <div>
      <ol className="space-y-4">
        {items.map((item, index) => (
          <li
            key={item.url}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-4"
          >
            <span
              className="text-sm font-bold text-[#D6216E] shrink-0"
              aria-hidden="true"
            >
              {index + 1}.
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                {item.source}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-1.5 font-semibold text-[#222222] hover:text-[#D6216E] transition-colors leading-snug"
              >
                <span>{item.title}</span>
                <ExternalLink
                  className="w-3.5 h-3.5 mt-1 shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </li>
        ))}
      </ol>
      <p className="text-sm text-gray-500 italic mt-5">
        Inclusion in this list does not mean every source endorses every
        statement, claim, or treatment associated with functional medicine.
      </p>
    </div>
  );
}
