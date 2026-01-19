"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const galleryItems = [
  {
    id: 1,
    title: "Digital Decay",
    medium: "Digital Art",
    year: "2024",
    description: "Glitch aesthetics meet brutalist architecture in this exploration of technological entropy.",
    image: "/abstract-dark-digital-art-glitch-aesthetic.png",
  },
  {
    id: 2,
    title: "Concrete Dreams",
    medium: "Photography",
    year: "2024",
    description: "Brutalist architecture photographed at night, revealing the poetry in raw concrete.",
    image: "/dark-brutalist-architecture-at-night.png",
  },
  {
    id: 3,
    title: "Industrial Remnants",
    medium: "Photography",
    year: "2023",
    description: "Abandoned factory spaces that once hummed with activity, now silent monuments to industry.",
    image: "/abandoned-industrial-factory-ruins-dark-moody.png",
  },
  {
    id: 4,
    title: "Neural Pathways",
    medium: "Generative Art",
    year: "2024",
    description: "Cyberpunk visualization of neural networks, where data flows like electricity through the void.",
    image: "/neural-network-visualization-dark-cyberpunk.png",
  },
]

export function HorizontalGallerySlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const currentItem = galleryItems[currentIndex]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        prevSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault()
        if (e.deltaX > 30 && !isTransitioning) {
          nextSlide()
        } else if (e.deltaX < -30 && !isTransitioning) {
          prevSlide()
        }
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false })
      return () => container.removeEventListener("wheel", handleWheel)
    }
  }, [currentIndex, isTransitioning])

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
    setTimeout(() => setIsTransitioning(false), 700)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
    setTimeout(() => setIsTransitioning(false), 700)
  }

  return (
    <div ref={containerRef} className="fixed inset-0 bg-background overflow-hidden">
      {/* Dramatic scan line effect */}
      <div className="absolute inset-0 pointer-events-none z-30 opacity-20">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-pulse"
          style={{ animationDuration: "4s" }}
        />
      </div>
      {/* Full-screen slider container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Background Image with parallax effect */}
        <div className="absolute inset-0 transition-all duration-700 ease-out">
          <Image
            src={currentItem.image || "/placeholder.svg"}
            alt={currentItem.title}
            fill
            className="object-cover opacity-40 blur-sm scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background" />
        </div>

        {/* Main Content Grid: Image + Info */}
        <div className="relative z-10 w-full h-full max-w-[95vw] mx-auto flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full px-8">
            {/* Left: Image (65%) */}
            <div className="lg:col-span-8 flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] border border-primary/30 box-glow overflow-hidden group">
                <Image
                  src={currentItem.image || "/placeholder.svg"}
                  alt={currentItem.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Image overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Right: Info (35%) */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
              <div className="border border-primary/20 bg-card/30 p-8 box-glow">
                <div className="font-mono text-xs text-primary mb-4 uppercase tracking-widest">
                  [{currentItem.medium}]
                </div>

                <h1 className="font-serif text-4xl md:text-5xl mb-4 text-foreground text-balance">
                  {currentItem.title}
                </h1>

                <p className="text-foreground/70 leading-relaxed mb-6">{currentItem.description}</p>

                <div className="flex items-center justify-between text-sm font-mono text-muted-foreground border-t border-primary/20 pt-4">
                  <span>Year: {currentItem.year}</span>
                  <span>
                    {currentIndex + 1} / {galleryItems.length}
                  </span>
                </div>
              </div>

              {/* Navigation Info */}
              <div className="border border-primary/20 bg-card/20 p-6">
                <div className="font-mono text-xs text-muted-foreground space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">←→</span>
                    <span>Arrow keys to navigate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">⇄</span>
                    <span>Horizontal scroll</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">□</span>
                    <span>Click buttons below</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-primary/30 bg-card/50 backdrop-blur-sm flex items-center justify-center hover:border-primary hover:bg-card/80 transition-all duration-300 box-glow disabled:opacity-50 disabled:cursor-not-allowed group"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6 text-primary group-hover:text-glow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-primary/30 bg-card/50 backdrop-blur-sm flex items-center justify-center hover:border-primary hover:bg-card/80 transition-all duration-300 box-glow disabled:opacity-50 disabled:cursor-not-allowed group"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6 text-primary group-hover:text-glow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Bottom Progress Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                if (!isTransitioning && index !== currentIndex) {
                  setIsTransitioning(true)
                  setCurrentIndex(index)
                  setTimeout(() => setIsTransitioning(false), 700)
                }
              }}
              disabled={isTransitioning}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? "w-16 h-1 bg-primary box-glow"
                  : "w-8 h-1 bg-primary/30 hover:bg-primary/60 hover:w-12"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Top Right: Close/Exit indicator */}
        <div className="absolute top-8 right-8 z-20">
          <div className="font-mono text-xs text-muted-foreground border border-primary/20 bg-card/30 px-4 py-2">
            [GALLERY.VIEW]
          </div>
        </div>
      </div>
    </div>
  )
}
