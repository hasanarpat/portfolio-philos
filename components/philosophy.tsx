"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function Philosophy() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="px-6 md:px-12 py-24 max-w-4xl">
      <div 
        className={`space-y-4 border-l-2 border-primary pl-8 box-glow transition-all duration-700 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
      >
        <p 
          className="text-foreground text-lg md:text-xl leading-relaxed font-medium"
          style={{ transitionDelay: "0.1s" }}
        >
          I build systems with <span className="text-primary text-glow">longevity in mind</span>. Code is both{" "}
          <span className="text-secondary">logic</span> and <span className="text-secondary">craft</span>—precise,
          deliberate, and thoughtful.
        </p>
        <p 
          className={`text-foreground/70 text-base md:text-lg leading-relaxed font-mono transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          Architecture over aesthetics. Substance over speed. Systems over symptoms.
        </p>
        <p 
          className={`text-muted-foreground text-sm md:text-base leading-relaxed italic transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          Good infrastructure compounds. Build accordingly.
        </p>
      </div>
    </section>
  )
}
