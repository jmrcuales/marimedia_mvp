import type { StatItem } from "@/lib/blog-posts";

export default function StatGrid({ items }: { items: StatItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 my-8">
      {items.map((item) => (
        <div
          key={item.label}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
        >
          <p className="text-4xl font-bold text-[#D6216E] mb-1">
            {item.value}
          </p>
          <h3 className="text-sm font-bold text-[#222222] uppercase tracking-wide mb-2">
            {item.label}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
