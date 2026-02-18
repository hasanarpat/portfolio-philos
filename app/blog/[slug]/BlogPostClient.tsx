"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"

import { BLOG_POSTS } from "@/lib/blog"

// Helper to get YouTube ID
function getYouTubeId(url: string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
}

export function BlogPostClient({ slug }: { slug: string }) {
    const router = useRouter()
    const [isLoaded, setIsLoaded] = useState(false)

    const post = BLOG_POSTS.find((p) => p.slug === slug)
    const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === slug)
    const nextPost = currentIndex >= 0 && currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100)
        return () => clearTimeout(timer)
    }, [])

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center space-y-4">
                    <div className="font-mono text-primary text-glow">[404]</div>
                    <p className="text-foreground/70">Post not found</p>
                    <Link href="/blog" className="text-primary hover:text-glow transition-all">
                        [Back to Blog]
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-24 pb-20">
            <article className="max-w-3xl mx-auto px-6">
                {/* Back Link */}
                <Link
                    href="/blog"
                    className={`inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary mb-8 transition-all duration-500 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                        }`}
                >
                    <span>←</span>
                    <span>[Back to Blog]</span>
                </Link>

                {/* Header */}
                <header
                    className={`mb-12 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="flex items-center gap-4 mb-4 font-mono text-xs">
                        <span className="text-primary">[{post.category}]</span>
                        <span className="text-muted-foreground">{post.date}</span>
                        <span className="text-muted-foreground">{post.readTime}</span>
                    </div>

                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                        {post.title}
                    </h1>

                    <p className="text-foreground/70 text-xl leading-relaxed">{post.excerpt}</p>
                </header>

                {/* Divider */}
                <div
                    className={`h-px bg-primary/30 mb-12 transition-all duration-1000 origin-left ${isLoaded ? "scale-x-100" : "scale-x-0"
                        }`}
                    style={{ transitionDelay: "0.3s" }}
                />

                {/* Content */}
                <div
                    className={`prose prose-invert prose-lg max-w-none transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    style={{ transitionDelay: "0.4s" }}
                >
                    {post.content.split("\n\n").map((block, index) => {
                        const paragraph = block.trim()
                        if (!paragraph) return null

                        if (paragraph.startsWith("## ")) {
                            return (
                                <h2 key={index} className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
                                    {paragraph.replace("## ", "")}
                                </h2>
                            )
                        }

                        // Image support: ![alt](src) or ![alt](src) followed by caption
                        const imageMatch = paragraph.match(/^!\[(.*?)\]\((.*?)\)(\n[\s\S]*)?$/)
                        if (imageMatch) {
                            const [_, alt, src, captionWithNewline] = imageMatch
                            const caption = captionWithNewline ? captionWithNewline.trim().replace(/^\*/, "").replace(/\*$/, "") : ""
                            return (
                                <div key={index} className="my-8">
                                    <div className="relative rounded-lg overflow-hidden border border-primary/20 bg-black/50">
                                        <img src={src} alt={alt} className="w-full h-auto object-cover" />
                                    </div>
                                    {caption && (
                                        <p className="mt-3 text-sm text-muted-foreground text-center font-mono italic">
                                            {caption}
                                        </p>
                                    )}
                                </div>
                            )
                        }

                        if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                            return (
                                <p key={index} className="text-primary font-medium mb-6">
                                    {paragraph.replace(/\*\*/g, "")}
                                </p>
                            )
                        }

                        if (paragraph.startsWith("> ")) {
                            return (
                                <blockquote key={index} className="border-l-2 border-primary pl-6 py-2 my-8 italic text-foreground/80 bg-primary/5">
                                    {paragraph.replace(/^> /, "")}
                                </blockquote>
                            )
                        }

                        // Handle YouTube links [Watch: Title](url) or just [text](url) where url is youtube
                        const linkMatch = paragraph.match(/^\[(.*?)\]\((.*?)\)$/)
                        if (linkMatch) {
                            const [_, text, url] = linkMatch
                            const youtubeId = getYouTubeId(url)
                            if (youtubeId) {
                                return (
                                    <div key={index} className="my-8">
                                        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-primary/20 bg-black/50">
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={`https://www.youtube.com/embed/${youtubeId}`}
                                                title={text}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="absolute top-0 left-0 w-full h-full"
                                            ></iframe>
                                        </div>
                                        <p className="mt-3 text-sm text-muted-foreground text-center font-mono italic">
                                            [{text}]
                                        </p>
                                    </div>
                                )
                            }
                        }

                        return (
                            <div key={index} className="text-foreground/80 leading-relaxed mb-6 whitespace-pre-line">
                                {paragraph.split("\n").map((line, i) => {
                                    // Basic bold handling
                                    const parts = line.split(/(\*\*.*?\*\*)/g)
                                    return (
                                        <span key={i} className="block mb-1">
                                            {parts.map((part, j) => {
                                                if (part.startsWith("**") && part.endsWith("**")) {
                                                    return <strong key={j} className="text-primary font-normal">{part.slice(2, -2)}</strong>
                                                }
                                                // Handle links [text](url) - basic implementation
                                                const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/)
                                                if (linkMatch) {
                                                    // This is very naive, supports only one link per segment. Sufficient for now.
                                                    const [full, text, url] = linkMatch
                                                    const youtubeId = getYouTubeId(url)

                                                    // Verify if it is a youtube link, if so render as a link with icon or similar (optional)
                                                    // For now just render regular link

                                                    const [pre, post] = part.split(full)
                                                    return (
                                                        <span key={j}>
                                                            {pre}
                                                            <a
                                                                href={url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-primary underline decoration-primary/30 hover:decoration-primary"
                                                            >
                                                                {text}
                                                            </a>
                                                            {post}
                                                        </span>
                                                    )
                                                }
                                                return part
                                            })}
                                        </span>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>

                {/* Footer */}
                <footer
                    className={`mt-16 pt-8 border-t border-primary/20 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    style={{ transitionDelay: "0.6s" }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="font-mono text-xs text-muted-foreground self-start md:self-center">
                            Published: {post.date}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                            {nextPost && (
                                <Link
                                    href={`/blog/${nextPost.slug}`}
                                    className="font-mono text-xs text-primary hover:text-glow transition-all px-4 py-2 border border-primary/30 hover:border-primary/60 text-center w-full sm:w-auto"
                                >
                                    [Next: {nextPost.title.length > 30 ? nextPost.title.substring(0, 30) + '...' : nextPost.title} →]
                                </Link>
                            )}

                            <button
                                onClick={() => router.back()}
                                className="font-mono text-xs text-muted-foreground hover:text-primary transition-all px-4 py-2 border border-primary/10 hover:border-primary/30 w-full sm:w-auto"
                            >
                                [← Back]
                            </button>
                        </div>
                    </div>
                </footer>
            </article>
        </div>
    )
}
