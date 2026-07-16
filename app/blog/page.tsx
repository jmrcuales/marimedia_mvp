import type { Metadata } from "next";
import Link from "next/link";
import { Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts, formatBlogDate } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Health Blog",
  description:
    "Practical, research-informed articles on functional medicine, preventive health, and the online health summits shaping wellness in 2026, from the Mari Media team.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Health Blog | Mari Media",
    description:
      "Practical, research-informed articles on functional medicine, preventive health, and the online health summits shaping wellness in 2026.",
    type: "website",
    url: "/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="overflow-x-hidden">
        <section className="pt-40 pb-20 px-4 bg-[#FFF5F7]">
          <div className="container mx-auto max-w-6xl text-center">
            <span className="text-sm font-semibold text-[#D6216E] uppercase tracking-wider">
              Health Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#222222] mt-3 mb-5">
              Functional Medicine & Preventive Health Insights
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Clear, practical guides on functional medicine, preventive
              health, and the health summits and trends shaping wellness in
              2026 — written by the Mari Media team.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div
              className={`grid gap-6 ${
                blogPosts.length === 1
                  ? "max-w-sm mx-auto"
                  : blogPosts.length === 2
                    ? "md:grid-cols-2 max-w-3xl mx-auto"
                    : "md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {blogPosts.map((post) => {
                const Icon = post.icon;
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-[#FFF5F7] rounded-xl flex items-center justify-center mb-5">
                      <Icon
                        className="w-6 h-6 text-[#D6216E]"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-xs font-semibold text-[#D6216E] uppercase tracking-wider mb-2">
                      {post.category}
                    </span>
                    <h2 className="text-lg font-bold text-[#222222] mb-3 leading-snug group-hover:text-[#D6216E] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                      <span>{formatBlogDate(post.publishedAt)}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                        {post.readTimeMinutes} min read
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
