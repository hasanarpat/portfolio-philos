"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function Footer() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 })

  return (
    <footer ref={ref} className="py-24 px-6 md:px-12 border-t border-muted/10">
      <div
        className={`max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <div className="space-y-1">
          <p className="text-muted-foreground/60 text-sm font-mono">Contact</p>
          <a
            href="mailto:hasanarpat99@gmail.com"
            className="text-foreground/80 hover:text-primary text-base transition-colors duration-300 link-underline"
          >
            hasanarpat99@gmail.com
          </a>
        </div>

        <div
          className={`space-y-1 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{ transitionDelay: "0.1s" }}
        >
          <p className="text-muted-foreground/60 text-sm font-mono">Links</p>
          <div className="flex gap-6 text-foreground/80">
            <a href="https://github.com/hasanarpat" className="hover:text-primary transition-colors duration-300 text-sm link-underline">
              GitHub
            </a>
            <a href="https://hasanarpat.github.io/" className="hover:text-primary transition-colors duration-300 text-sm link-underline">
              Blog <img src="/favicon-32x32.png" alt="ikon" width={16} height={16} className="inline-block" />
            </a>
            <a href="https://www.linkedin.com/in/hasan-arpat/" className="hover:text-primary transition-colors duration-300 text-sm link-underline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
