import type { ArticleBlock } from "@/lib/blog-posts";
import SectionEyebrow from "./SectionEyebrow";
import EditorialQuote from "./EditorialQuote";
import FeatureCardGrid from "./FeatureCardGrid";
import ChecklistPanel from "./ChecklistPanel";
import Callout from "./Callout";
import StatGrid from "./StatGrid";
import ArticleImage from "./ArticleImage";

/**
 * Renders a data-driven article body. Each `ArticleBlock` maps to a single
 * reusable component so long-form posts stay authored as typed data (see
 * `lib/blog-posts.ts`) instead of one-off JSX per article.
 */
/** Block types set in a narrow, comfortable reading column. */
const NARROW_TYPES = new Set<ArticleBlock["type"]>([
  "eyebrow",
  "heading",
  "paragraph",
  "quote",
  "checklist",
  "callout",
]);

export default function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        const content = <ArticleBlockRenderer block={block} />;
        if (NARROW_TYPES.has(block.type)) {
          return (
            <div key={index} className="max-w-[760px] mx-auto">
              {content}
            </div>
          );
        }
        return <div key={index}>{content}</div>;
      })}
    </>
  );
}

function ArticleBlockRenderer({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "eyebrow":
      return <SectionEyebrow className="mt-12 first:mt-0">{block.text}</SectionEyebrow>;

    case "heading": {
      if (block.level === 2) {
        return (
          <h2
            id={block.id}
            className="text-2xl md:text-3xl font-bold text-[#222222] mt-2 mb-5 leading-tight scroll-mt-28"
          >
            {block.text}
          </h2>
        );
      }
      return (
        <h3
          id={block.id}
          className="text-lg md:text-xl font-bold text-[#222222] mt-8 mb-3 leading-snug scroll-mt-28"
        >
          {block.text}
        </h3>
      );
    }

    case "paragraph":
      return (
        <p className="text-gray-700 leading-relaxed mb-5 text-base md:text-lg">
          {block.text}
        </p>
      );

    case "quote":
      return <EditorialQuote text={block.text} />;

    case "image":
      return (
        <ArticleImage
          src={block.src}
          alt={block.alt}
          width={block.width}
          height={block.height}
          caption={block.caption}
        />
      );

    case "cardGrid":
      return <FeatureCardGrid items={block.items} columns={block.columns} />;

    case "checklist":
      return <ChecklistPanel heading={block.heading} items={block.items} />;

    case "callout":
      return (
        <Callout variant={block.variant} title={block.title} text={block.text} />
      );

    case "statGrid":
      return <StatGrid items={block.items} />;

    case "twoColumn":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 my-6 max-w-4xl mx-auto">
          {block.columns.map((column, columnIndex) => (
            <div key={columnIndex}>
              <ArticleBody blocks={column} />
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}
