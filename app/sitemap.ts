import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://marimedia.co',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://marimedia.co/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      url: `https://marimedia.co/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
