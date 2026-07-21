import type { FeatureCardItem } from "@/lib/blog-posts";

const columnClasses: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

interface FeatureCardGridProps {
  items: FeatureCardItem[];
  columns: 2 | 3 | 4;
}

export default function FeatureCardGrid({
  items,
  columns,
}: FeatureCardGridProps) {
  return (
    <div className={`grid grid-cols-1 gap-5 my-8 ${columnClasses[columns]}`}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="flex flex-col bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          >
            <div className="w-12 h-12 bg-[#FFF5F7] rounded-xl flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-[#D6216E]" aria-hidden="true" />
            </div>
            <h3 className="text-base font-bold text-[#222222] mb-2 leading-snug">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
