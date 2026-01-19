"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function Footer() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 })

  return (
    <footer ref={ref} className="py-24 px-6 md:px-12 border-t border-muted/10">
      <div 
        className={`max-w-6xl flex flex-col md:flex-row justify-between items-start gap-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="space-y-1">
          <p className="text-muted-foreground/60 text-sm font-mono">Contact</p>
          <a
            href="mailto:contact@example.com"
            className="text-foreground/80 hover:text-primary text-base transition-colors duration-300 link-underline"
          >
            contact@example.com
          </a>
        </div>

        <div 
          className={`space-y-1 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          <p className="text-muted-foreground/60 text-sm font-mono">Links</p>
          <div className="flex gap-6 text-foreground/80">
            <a href="#" className="hover:text-primary transition-colors duration-300 text-sm link-underline">
              GitHub
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300 text-sm link-underline">
              Twitter
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300 text-sm link-underline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
