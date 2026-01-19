"use client"

import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"

// Sample blog posts data (same as in blog-asymmetric-layout)
const blogPosts = [
  {
    id: 1,
    title: "Designing for Decades: The Long-Term Architecture Philosophy",
    excerpt:
      "Most software is built to last months, maybe years. What if we designed systems with a 20-year horizon in mind?",
    content: `
      Most software is built to last months, maybe years. The typical enterprise application gets rewritten every 18 months—a cycle that burns resources and institutional knowledge alike.

      But what if we designed systems with a 20-year horizon in mind?

      ## The Cost of Short-Term Thinking

      When we optimize for delivery speed over longevity, we accumulate what I call "architectural debt"—decisions that compound negatively over time. A quick fix becomes a pattern, that pattern becomes convention, and before long, we're maintaining systems that actively resist change.

      ## Principles for Long-Term Design

      **1. Prefer boring technology.** The best systems are built on foundations that have survived decades of production use. PostgreSQL over the hot new database. Plain HTTP over WebSockets unless you truly need bidirectional communication.

      **2. Design for replacement.** Every component should be removable. If your architecture depends on a specific vendor or implementation, you've created a single point of fragility.

      **3. Optimize for understanding.** Code is read far more often than it's written. Clarity beats cleverness, always.

      ## The Compound Effect

      Good architecture compounds. Each thoughtful decision makes future decisions easier. Each abstraction that reveals rather than hides complexity makes debugging faster.

      Build accordingly.
    `,
    date: "2024-03-15",
    readTime: "12 min",
    category: "Architecture",
  },
  {
    id: 2,
    title: "The Terminal as a Design Pattern",
    excerpt:
      "Why command-line interfaces outlast most GUI applications, and what that teaches us about building lasting digital experiences.",
    content: `
      The terminal is one of the oldest user interfaces still in active use. While countless GUIs have come and gone, the command line persists—and thrives.

      ## Why Terminals Endure

      The terminal's longevity isn't nostalgia or stubbornness. It's a superior interface for many tasks, and understanding why can inform how we build other systems.

      **Composability.** Unix pipes let you combine simple tools into complex workflows. Each command does one thing well. This modularity has proven remarkably adaptable.

      **Text as Universal Interface.** Everything in the terminal is text—input, output, configuration. Text is inspectable, searchable, versionable, and portable.

      **Low Bandwidth, High Information.** A terminal conveys more actionable information per pixel than most GUIs. No chrome, no decoration—just content.

      ## Lessons for Modern Systems

      Modern interfaces could learn from the terminal's durability. Design for composability. Prefer text-based configuration. Minimize the distance between user intent and system action.

      The best interfaces don't try to anticipate every use case. They provide primitives that users can combine in unexpected ways.
    `,
    date: "2024-02-28",
    readTime: "8 min",
    category: "Design",
  },
  {
    id: 3,
    title: "Observability Beyond Metrics: Building Systems That Explain Themselves",
    excerpt:
      "Modern observability isn't just about dashboards and alerts. It's about creating systems with introspection capabilities built into their core.",
    content: `
      Observability has become a buzzword, often reduced to "the three pillars"—logs, metrics, and traces. But true observability goes deeper.

      ## The Problem with Pillar-Based Thinking

      Logs, metrics, and traces are outputs, not capabilities. They tell you what happened, but not why. A system that generates terabytes of logs isn't observable—it's noisy.

      ## Systems That Explain Themselves

      The goal isn't more data. It's understanding. An observable system can answer questions you didn't know to ask when you built it.

      **Structured Events over Logs.** Instead of printf debugging, emit structured events with rich context. Every event should be queryable, filterable, correlatable.

      **Causality over Correlation.** Metrics show correlation; traces show causality. Invest in distributed tracing that captures the full request lifecycle.

      **Runtime Introspection.** The best debugging happens in production. Build systems that can describe their own state—current connections, active transactions, resource utilization—without deploying new code.

      ## Building Introspection In

      Observability isn't something you add after the fact. It's an architectural decision that shapes how you build from day one.
    `,
    date: "2024-02-10",
    readTime: "15 min",
    category: "Systems",
  },
]

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)

  const postId = Number(params.id)
  const post = blogPosts.find((p) => p.id === postId)

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
          className={`inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary mb-8 transition-all duration-500 ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
        >
          <span>←</span>
          <span>[Back to Blog]</span>
        </Link>

        {/* Header */}
        <header
          className={`mb-12 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
          className={`h-px bg-primary/30 mb-12 transition-all duration-1000 origin-left ${
            isLoaded ? "scale-x-100" : "scale-x-0"
          }`}
          style={{ transitionDelay: "0.3s" }}
        />

        {/* Content */}
        <div
          className={`prose prose-invert prose-lg max-w-none transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          {post.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={index} className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
                  {paragraph.replace("## ", "")}
                </h2>
              )
            }
            if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
              return (
                <p key={index} className="text-primary font-medium">
                  {paragraph.replace(/\*\*/g, "")}
                </p>
              )
            }
            if (paragraph.trim()) {
              return (
                <p key={index} className="text-foreground/80 leading-relaxed mb-6">
                  {paragraph}
                </p>
              )
            }
            return null
          })}
        </div>

        {/* Footer */}
        <footer
          className={`mt-16 pt-8 border-t border-primary/20 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="font-mono text-xs text-muted-foreground">
              Published: {post.date}
            </div>
            <button
              onClick={() => router.back()}
              className="font-mono text-xs text-primary hover:text-glow transition-all px-4 py-2 border border-primary/30 hover:border-primary/60"
            >
              [← Back]
            </button>
          </div>
        </footer>
      </article>
    </div>
  )
}
