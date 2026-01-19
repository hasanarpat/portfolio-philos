"use client"

import { useEffect, useState, useRef } from "react"
import { AnimatedTerminal } from "./animated-terminal"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Trigger entrance animations after mount
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Subtle parallax on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height
      setMousePosition({ x: x * 10, y: y * 10 })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-16 max-w-[1800px] mx-auto relative overflow-hidden"
    >
      {/* Subtle animated background gradient */}
      <div 
        className="absolute inset-0 opacity-30 transition-transform duration-700 ease-out"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, oklch(0.7 0.12 145 / 0.08) 0%, transparent 50%)",
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />

      <div className="w-full grid grid-cols-1 lg:grid-cols-[35%_65%] gap-12 lg:gap-24 relative z-10">
        {/* Left 35%: Text content with staggered entrance */}
        <div className="flex flex-col justify-center space-y-8 max-w-xl">
          {/* Headline with text reveal */}
          <div className="overflow-hidden">
            <h1 
              className={`font-serif text-5xl md:text-6xl lg:text-7xl text-primary text-glow tracking-[0.02em] leading-[1.05] transition-all duration-1000 ease-out ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
            >
              Systems that think in <span className="text-secondary text-glow-copper italic">decades</span>.
            </h1>
          </div>

          <div className={`space-y-4 stagger-children ${isLoaded ? "revealed" : ""}`}>
            <p className="text-primary text-base md:text-lg font-mono tracking-wider">
              &gt; ENGINEER · ARCHITECT · OBSESSIVE
            </p>
            <p className="text-foreground/80 text-sm md:text-base font-mono tracking-wide border-l-2 border-primary pl-4 box-glow line-expand revealed">
              Long-term systems · Deliberate craft · Relentless execution
            </p>
            <p className="text-muted-foreground text-xs md:text-sm font-mono italic">
              Building the infrastructure of tomorrow, today.
            </p>
          </div>
        </div>

        {/* Mobile/Tablet Terminal */}
        <div
          className={`lg:hidden relative min-h-[320px] border border-primary/20 box-glow animate-breathe transition-all duration-1000 ease-out ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{
            transitionDelay: "0.3s",
          }}
        >
          <AnimatedTerminal />
        </div>

        {/* Right 65%: Animated terminal with Matrix effect */}
        <div 
          className={`hidden lg:block relative min-h-[600px] border border-primary/20 box-glow animate-breathe transition-all duration-1000 ease-out ${
            isLoaded ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
          }`}
          style={{
            transitionDelay: "0.3s",
            transform: isLoaded ? `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` : "translateX(48px)",
          }}
        >
          <AnimatedTerminal />
        </div>
      </div>
    </section>
  )
}
