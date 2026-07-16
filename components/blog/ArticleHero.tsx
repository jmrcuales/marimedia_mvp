import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import type { BlogPostCta } from "@/lib/blog-posts";
import { formatBlogDate } from "@/lib/blog-posts";

interface ArticleHeroProps {
  category: string;
  title: string;
  intro: string;
  ctas?: BlogPostCta[];
  author: string;
  publishedAt: string;
  readTimeMinutes: number;
  image?: { src: string; alt: string; width: number; height: number };
}

export default function ArticleHero({
  category,
  title,
  intro,
  ctas,
  author,
  publishedAt,
  readTimeMinutes,
  image,
}: ArticleHeroProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-center mb-4">
      <div className="max-w-[820px]">
        <span className="text-sm font-semibold text-[#D6216E] uppercase tracking-wider">
          {category}
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] mt-3 mb-6 leading-tight">
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
          <span>{author}</span>
          <span aria-hidden="true">&bull;</span>
          <span>{formatBlogDate(publishedAt)}</span>
          <span aria-hidden="true">&bull;</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-4 h-4" aria-hidden="true" />
            {readTimeMinutes} min read
          </span>
        </div>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          {intro}
        </p>

        {ctas && ctas.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {ctas.map((cta, index) => (
              <Link
                key={cta.href}
                href={cta.href}
                className={
                  index === 0
                    ? "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 h-12 px-8 text-base bg-[#D6216E] text-white hover:bg-[#C2185B] hover:shadow-xl hover:-translate-y-0.5"
                    : "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 h-12 px-8 text-base bg-white text-[#222222] border-2 border-[#222222] hover:bg-[#222222] hover:text-white hover:-translate-y-0.5"
                }
              >
                {cta.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {image && (
        <div className="relative w-full max-w-md mx-auto lg:max-w-none aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 420px, (min-width: 768px) 60vw, 90vw"
            className="object-cover"
            priority
          />
        </div>
      )}
    </div>
  );
}
