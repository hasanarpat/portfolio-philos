import { Metadata } from "next"
import { BLOG_POSTS } from "@/lib/blog"
import { BlogPostClient } from "./BlogPostClient"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  console.log('Debugging Metadata:', { slug })
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Post Not Found | System.Init",
    }
  }

  return {
    title: `${post.title} | System.Init`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Hasan Arpat"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  }
}

// export function generateStaticParams() {
//   return BLOG_POSTS.map((post) => ({
//     slug: post.slug,
//   }))
// }

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  console.log('Debugging Blog Post 2:', { slug, found: !!post, postTitle: post?.title })
  // JSON-LD Structured Data
  const jsonLd = post ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Hasan Arpat",
    },
  } : null

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BlogPostClient slug={slug} />
    </>
  )
}
