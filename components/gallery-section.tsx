"use client"

import { useState } from "react"
import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import Link from "next/link"

const galleryItems = [
  {
    type: "photo",
    title: "Midnight Architecture",
    category: "Photography",
    description: "Brutalist structures in nocturnal silence",
    image: "/dark-brutalist-architecture-at-night.png",
    slug: "midnight-architecture",
  },
  {
    type: "art",
    title: "Digital Decay",
    category: "Generative Art",
    description: "Algorithmic exploration of entropy and form",
    image: "/abstract-dark-digital-art-glitch-aesthetic.png",
    slug: "digital-decay",
  },
  {
    type: "blog",
    title: "On Building Systems That Last",
    category: "Engineering Essays",
    description: "Thoughts on long-term thinking in software architecture",
    date: "2024.01.15",
    slug: "on-building-systems-that-last",
  },
  {
    type: "photo",
    title: "Industrial Ruins",
    category: "Photography",
    description: "Abandoned factories and forgotten machinery",
    image: "/abandoned-industrial-factory-ruins-dark-moody.png",
    slug: "industrial-ruins",
  },
  {
    type: "art",
    title: "Neural Patterns",
    category: "Generative Art",
    description: "Machine learning visualizations",
    image: "/neural-network-visualization-dark-cyberpunk.png",
    slug: "neural-patterns",
  },
  {
    type: "blog",
    title: "The Philosophy of Code",
    category: "Technical Writing",
    description: "Why engineering is more than logic",
    date: "2023.12.08",
    slug: "the-philosophy-of-code",
  },
]

export function GallerySection() {
  const [filter, setFilter] = useState<"all" | "photo" | "art" | "blog">("all")
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.05 })

  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter((item) => item.type === filter)

  return (
    <section ref={sectionRef} className="min-h-screen py-24 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 space-y-8">
          <h2 
            className={`font-serif text-4xl md:text-5xl lg:text-6xl text-foreground transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Archive <span className="text-muted-foreground font-mono text-2xl md:text-3xl">//</span>
          </h2>
          <p 
            className={`text-muted-foreground font-mono text-sm md:text-base max-w-2xl transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            A collection of thoughts, imagery, and experiments that exist outside the bounds of conventional
            engineering. The intersection of craft, art, and obsession.
          </p>

          {/* Filters */}
          <div 
            className={`flex flex-wrap gap-4 font-mono text-sm transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            {["all", "photo", "art", "blog"].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType as typeof filter)}
                className={`px-4 py-2 border transition-all duration-300 hover-lift ${
                  filter === filterType
                    ? "border-primary bg-primary/10 text-primary box-glow"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                [{filterType.toUpperCase()}]
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid - Asymmetric Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Link
              href={`/archive/${item.type}/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
              key={`${item.title}-${index}`}
              className={`group relative border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden bg-card/50 backdrop-blur-sm hover-lift cursor-pointer ${
                item.type === "blog" ? "md:col-span-1" : index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${0.3 + index * 0.08}s` }}
            >
              {/* Visual Items (Photo/Art) */}
              {item.type !== "blog" && item.image && (
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Gothic overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                  {/* Noise texture overlay */}
                  <div
                    className="absolute inset-0 opacity-40 mix-blend-overlay"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii45IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIiB0eXBlPSJmcmFjdGFsTm9pc2UiLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHBhdGggZD0iTTAgMGgzMDB2MzAwSDB6IiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==")`,
                      backgroundSize: "200px 200px",
                    }}
                  />
                </div>
              )}

              {/* Content Overlay */}
              <div className={`${item.type === "blog" ? "p-8" : "absolute bottom-0 left-0 right-0 p-6"} space-y-2`}>
                <div className="font-mono text-xs text-secondary uppercase tracking-widest">{item.category}</div>
                <h3
                  className={`${
                    item.type === "blog" ? "font-serif text-2xl md:text-3xl" : "font-serif text-xl md:text-2xl"
                  } text-foreground group-hover:text-primary transition-colors duration-300`}
                >
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm font-mono">{item.description}</p>
                {item.type === "blog" && item.date && (
                  <div className="pt-4 text-xs font-mono text-muted-foreground/60">{item.date}</div>
                )}
              </div>

              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>

        {/* Load More CTA */}
        <div className="mt-16 text-center">
          <Link href="/archive" className="font-mono text-sm px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 box-glow">
            → LOAD MORE ENTRIES
          </Link>
        </div>
      </div>
    </section>
  )
}
