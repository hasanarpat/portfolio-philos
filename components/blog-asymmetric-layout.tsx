"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

import { BLOG_POSTS } from "@/lib/blog"

// Sample blog posts data
const blogPosts = BLOG_POSTS

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
              <Link href={`/blog/${featuredPost.slug}`} className="block border border-secondary/30 bg-card/30 p-6 box-glow-copper group cursor-pointer hover:border-secondary/60 transition-all duration-300">
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
              </Link>
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
                href={`/blog/${post.slug}`}
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
