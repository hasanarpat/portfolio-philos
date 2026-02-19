"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/thinkings", label: "Thinkings" },
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "About" },
]

export function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])


  return (
    <>
      <div
        className={`fixed inset-0 z-30 transition-opacity duration-500 pointer-events-none ${menuOpen ? "opacity-100" : "opacity-0"
          }`}
      >
        <div className="absolute inset-0 bg-background/40 backdrop-blur-md" />
      </div>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || menuOpen
          ? "bg-background/80 backdrop-blur-md border-b border-primary/20 box-glow"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <Link
              href="/"
              className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-primary hover:text-secondary transition-colors text-glow group"
            >
              <div className="relative w-8 h-8 overflow-hidden rounded-sm border border-primary/30 group-hover:border-primary/60 transition-colors bg-black/20">
                <img src="/favicon-32x32.png" alt="System Init" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              </div>
              <span>[System.Init]</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative font-mono text-xs uppercase tracking-wider transition-all duration-300 group ${isActive ? "text-primary text-glow" : "text-foreground/60 hover:text-primary"
                      }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {/* Underline effect */}
                    <span
                      className={`absolute bottom-0 left-0 h-[1px] bg-primary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      style={{
                        boxShadow: "0 0 8px oklch(0.7 0.12 145 / 0.6)",
                      }}
                    />
                    {/* Terminal cursor on active */}
                    {isActive && <span className="inline-block ml-1 w-1.5 h-3 bg-primary animate-pulse" />}
                  </Link>
                )
              })}
            </div>

            {/* Status indicator */}
            <div className="hidden md:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse box-glow" />
              <span className="font-mono text-xs text-muted-foreground">[ONLINE]</span>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="md:hidden relative h-10 w-10 border border-primary/30 bg-card/20 text-primary hover:border-primary/60 transition-all duration-300"
            >
              <span
                className={`absolute left-2 right-2 top-3 h-[2px] bg-primary transition-all duration-300 ${menuOpen ? "translate-y-[5px] rotate-45" : ""
                  }`}
              />
              <span
                className={`absolute left-2 right-2 top-5 h-[2px] bg-primary transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"
                  }`}
              />
              <span
                className={`absolute left-2 right-2 top-7 h-[2px] bg-primary transition-all duration-300 ${menuOpen ? "-translate-y-[5px] -rotate-45" : ""
                  }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
          />
          <div
            className={`absolute left-4 right-4 top-20 border border-primary/30 bg-background/90 text-primary transition-all duration-500 ${menuOpen ? "translate-y-0 scale-100 opacity-100" : "-translate-y-4 scale-95 opacity-0"
              }`}
          >
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(90,255,180,0.08)_48%,transparent_100%)] opacity-50" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(90,255,180,0.2),transparent_60%)]" />

              <div className="relative border-b border-primary/20 px-4 py-3 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-primary">[NAV.MENU]</span>
                <span className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  SIGNAL
                </span>
              </div>

              <div className="relative px-4 py-4 space-y-2">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`group flex items-center justify-between border border-primary/20 px-4 py-3 font-mono text-xs uppercase tracking-widest transition-all duration-300 ${isActive
                        ? "bg-primary/10 text-primary text-glow border-primary/50"
                        : "text-foreground/70 hover:text-primary hover:border-primary/40 hover:bg-card/30"
                        }`}
                      style={{ transitionDelay: `${index * 40}ms` }}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-primary/60">▸</span>
                        {item.label}
                      </span>
                      <span className="text-primary/40 group-hover:text-primary">↗</span>
                    </Link>
                  )
                })}
              </div>

              <div className="relative border-t border-primary/20 px-4 py-3 text-[10px] font-mono text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>ROUTE SYNC</span>
                  <span className="text-primary/70">ACTIVE</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <span
                      key={`pulse-${i}`}
                      className={`block h-1 w-2 rounded-sm border border-primary/20 ${i % 4 === 0 ? "bg-primary/60" : "bg-primary/10"
                        } ${menuOpen ? "opacity-100" : "opacity-50"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
