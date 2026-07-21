import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/blog/Breadcrumbs";
import ArticleHero from "@/components/blog/ArticleHero";
import ArticleBody from "@/components/blog/ArticleBody";
import ReferenceList from "@/components/blog/ReferenceList";
import MedicalDisclaimer from "@/components/blog/MedicalDisclaimer";
import {
  getAllBlogSlugs,
  getBlogPostBySlug,
  formatBlogDate,
} from "@/lib/blog-posts";

const siteUrl = "https://marimedia.co";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.featuredImage,
          alt: post.featuredImageAlt ?? post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.featuredImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${siteUrl}${post.featuredImage}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Mari Media",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    articleSection: post.category,
    keywords: post.tags.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Health Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Health Blog", href: "/blog" },
    { label: post.title },
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navigation />
      <main id="main-content" className="overflow-x-hidden">
        <article>
          {post.body ? (
            <>
              <section className="pt-36 md:pt-44 pb-8 md:pb-10 px-4 bg-[#FFF5F7]">
                <div className="container mx-auto max-w-6xl">
                  <div className="mb-7">
                    <Breadcrumbs items={breadcrumbItems} />
                  </div>
                  <ArticleHero
                    category={post.category}
                    title={post.title}
                    intro={post.heroIntro ?? post.excerpt}
                    ctas={post.heroCtas}
                    author={post.author}
                    publishedAt={post.publishedAt}
                    readTimeMinutes={post.readTimeMinutes}
                    image={
                      post.featuredImage
                        ? {
                            src: post.featuredImage,
                            alt: post.featuredImageAlt ?? post.title,
                            width: 1050,
                            height: 1400,
                          }
                        : undefined
                    }
                  />
                </div>
              </section>

              <section className="py-14 md:py-24 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                  <ArticleBody blocks={post.body} />

                  {post.references && post.references.length > 0 && (
                    <div className="max-w-[760px] mx-auto mt-14">
                      <h2 className="text-2xl md:text-3xl font-bold text-[#222222] mb-6 leading-tight">
                        References
                      </h2>
                      <ReferenceList items={post.references} />
                    </div>
                  )}

                  <div className="max-w-[760px] mx-auto mt-10">
                    <MedicalDisclaimer text={post.disclaimer} />
                  </div>

                  <div className="max-w-[760px] mx-auto mt-14 pt-10 border-t border-gray-100 text-center">
                    <p className="text-sm font-semibold text-[#D6216E] uppercase tracking-wider mb-4">
                      Keep Reading
                    </p>
                    <Link
                      href="/blog"
                      className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 h-12 px-8 text-base bg-[#D6216E] text-white hover:bg-[#C2185B] hover:shadow-xl hover:-translate-y-0.5"
                    >
                      Explore More Articles
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <div className="pt-40 pb-24 px-4 bg-white">
              <div className="container mx-auto max-w-3xl">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#D6216E] hover:text-[#C2185B] transition-colors mb-8"
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  Back to Health Blog
                </Link>

                <span className="text-sm font-semibold text-[#D6216E] uppercase tracking-wider">
                  {post.category}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] mt-3 mb-6 leading-tight">
                  {post.title}
                </h1>

                <div className="flex items-center gap-4 text-sm text-gray-500 pb-8 mb-8 border-b border-gray-100">
                  <span>{post.author}</span>
                  <span aria-hidden="true">&bull;</span>
                  <span>{formatBlogDate(post.publishedAt)}</span>
                  <span aria-hidden="true">&bull;</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    {post.readTimeMinutes} min read
                  </span>
                </div>

                <div className="prose prose-lg max-w-none">
                  {post.content?.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-gray-700 leading-relaxed mb-6 text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                  <Link
                    href="/blog"
                    className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 h-12 px-8 text-base bg-[#D6216E] text-white hover:bg-[#C2185B] hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Read More Articles
                  </Link>
                </div>
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
