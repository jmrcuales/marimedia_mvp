"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts, formatBlogDate } from "@/lib/blog-posts";

const featuredPosts = blogPosts.slice(0, 3);

export default function HealthBlog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="health-blog" className="py-24 md:py-32 px-4 bg-[#FFF5F7]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#D6216E] uppercase tracking-wider">
            Health Blog
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mt-3 mb-5">
            Functional Medicine & Preventive Health Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Clear, practical guides on functional medicine, preventive health,
            and the health summits and trends shaping wellness in 2026.
          </p>
        </motion.div>

        <div
          className={`grid gap-6 mb-12 ${
            featuredPosts.length === 1
              ? "max-w-sm mx-auto"
              : featuredPosts.length === 2
                ? "md:grid-cols-2 max-w-3xl mx-auto"
                : "md:grid-cols-3"
          }`}
        >
          {featuredPosts.map((post, index) => {
            const Icon = post.icon;
            return (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-[#FFF5F7] rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#D6216E]" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold text-[#D6216E] uppercase tracking-wider mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#222222] mb-3 leading-snug group-hover:text-[#D6216E] transition-colors">
                    {post.title}
                  </h3>
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
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 h-14 px-10 text-lg bg-white text-[#222222] border-2 border-[#222222] hover:bg-[#222222] hover:text-white hover:-translate-y-0.5"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
