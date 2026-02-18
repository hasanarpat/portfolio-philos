"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Designing for Decades: The Long-Term Architecture Philosophy",
    excerpt:
      "Most software is built to last months, maybe years. What if we designed systems with a 20-year horizon in mind? Exploring trade-offs, dependencies, and resilience patterns.",
    date: "2026-03-15",
    readTime: "12 min",
    category: "Architecture",
    featured: true,
  },
  {
    id: 2,
    title: "The Terminal as a Design Pattern",
    excerpt:
      "Why command-line interfaces outlast most GUI applications, and what that teaches us about building lasting digital experiences.",
    date: "2026-02-28",
    readTime: "8 min",
    category: "Design",
    featured: false,
  },
  {
    id: 3,
    title: "Observability Beyond Metrics: Building Systems That Explain Themselves",
    excerpt:
      "Modern observability isn't just about dashboards and alerts. It's about creating systems with introspection capabilities built into their core.",
    date: "2026-02-10",
    readTime: "15 min",
    category: "Systems",
    featured: true,
  },
  {
    id: 4,
    title: "Rust, Complexity, and the Cost of Safety",
    excerpt: "An honest reflection on building production systems in Rust after two years of deployment.",
    date: "2026-01-22",
    readTime: "10 min",
    category: "Engineering",
    featured: false,
  },
  {
    id: 5,
    title: "Against Premature Abstraction",
    excerpt:
      "Code should reveal intention, not hide it. On the balance between DRY principles and clarity in system design.",
    date: "2026-12-18",
    readTime: "7 min",
    category: "Philosophy",
    featured: false,
  },
  {
    id: 6,
    title: "Network Protocols I've Known and Loved",
    excerpt:
      "A nostalgic tour through SMTP, IRC, and the beauty of simple, text-based protocols that still power the internet.",
    date: "2026-11-30",
    readTime: "11 min",
    category: "Systems",
    featured: false,
  },
]

export function BlogAsymmetricLayout() {
  const [filter, setFilter] = useState<string>("all")
  const [isVisible, setIsVisible] = useState(false)
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 })

  const categories = ["all", "Architecture", "Design", "Systems", "Engineering", "Philosophy"]

  const filteredPosts = filter === "all" ? blogPosts : blogPosts.filter((post) => post.category === filter)

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  // Trigger scattered animation after mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  // Re-trigger animation when filter changes
  useEffect(() => {
    setIsVisible(false)
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [filter])

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header with terminal aesthetic */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="border border-primary/30 bg-card/30 p-8 box-glow">
          <div className="font-mono text-xs text-muted-foreground mb-2">[SYSTEM.BLOG]</div>
          <h1 className="font-serif text-5xl md:text-6xl mb-4 text-primary text-glow">System Logs & Essays</h1>
          <p className="text-foreground/70 text-lg max-w-2xl leading-relaxed">
            Technical writings on architecture, systems thinking, and building software that lasts. Occasional
            reflections on craft and process.
          </p>
        </div>
      </div>

      {/* Asymmetric Layout: 40/60 split */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Filters and Featured Post (40%) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Category Filters */}
            <div className="border border-primary/20 bg-card/20 p-6">
              <div className="font-mono text-xs text-primary mb-4 uppercase tracking-widest">[Filter.Categories]</div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 font-mono text-xs uppercase tracking-wider border transition-all duration-300 ${filter === cat
                      ? "border-primary bg-primary/20 text-primary text-glow"
                      : "border-border/50 text-foreground/60 hover:border-primary/50 hover:text-primary"
                      }`}
                  >
                    {cat}
                    {cat !== "all" && (
                      <span className="ml-2 opacity-50">({blogPosts.filter((p) => p.category === cat).length})</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Post */}
            {featuredPost && filter === "all" && (
              <div className="border border-secondary/30 bg-card/30 p-6 box-glow-copper group cursor-pointer hover:border-secondary/60 transition-all duration-300">
                <div className="font-mono text-xs text-secondary mb-3 uppercase tracking-widest text-glow-copper">
                  [Featured]
                </div>
                <h3 className="font-serif text-2xl mb-3 text-foreground group-hover:text-secondary transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-foreground/60 mb-4 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span>{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            )}

            {/* Archive Stats */}
            <div className="border border-primary/20 bg-card/10 p-6">
              <div className="font-mono text-xs text-primary mb-4 uppercase tracking-widest">[Archive.Stats]</div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Total Posts</span>
                  <span className="font-mono text-primary text-glow">{blogPosts.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Categories</span>
                  <span className="font-mono text-primary text-glow">{categories.length - 1}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Last Updated</span>
                  <span className="font-mono text-primary text-glow">{blogPosts[0].date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Blog Posts List (60%) */}
          <div ref={sectionRef} className="lg:col-span-7 space-y-6">
            {filteredPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className={`scatter-item block border border-primary/20 bg-card/20 p-6 hover:border-primary/50 hover:bg-card/30 transition-all duration-300 group hover-lift ${isVisible ? "visible" : ""
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="font-mono text-xs text-primary/70 uppercase tracking-wider">[{post.category}]</span>
                  <span className="font-mono text-xs text-muted-foreground">{post.readTime}</span>
                </div>

                <h2 className="font-serif text-2xl md:text-3xl mb-3 text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h2>

                <p className="text-foreground/60 mb-4 leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">{post.date}</span>
                  <span className="font-mono text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    [Read More →]
                  </span>
                </div>

                {/* Progress bar animation on hover */}
                <div className="h-[1px] bg-primary/0 group-hover:bg-primary/30 transition-all duration-500 mt-4" />
              </Link>
            ))}

            {/* No results message */}
            {filteredPosts.length === 0 && (
              <div className="border border-primary/20 bg-card/10 p-12 text-center">
                <div className="font-mono text-sm text-muted-foreground">[No posts found in this category]</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
