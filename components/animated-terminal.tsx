"use client"

import { useEffect, useRef, useState } from "react"

const logTemplates = [
  [
    "$ wrangler deploy workers-edge",
    "→ bundling modules...",
    "✓ minify: enabled",
    "→ uploading to Cloudflare...",
    "✓ routes: /api/* bound",
    "✓ workers deploy complete",
    "$ tail -f workers.log",
  ],
  [
    "$ next build",
    "→ optimizing production build...",
    "✓ compiled successfully",
    "→ collecting page data...",
    "✓ generating static pages (12/12)",
    "✓ build complete",
    "$ ready to start: next start",
  ],
  [
    "$ processing pipeline:start",
    "→ ingesting assets...",
    "→ transcoding media...",
    "✓ artifacts cached",
    "→ warming edge nodes...",
    "✓ processing complete",
    "$ idle: awaiting next job",
  ],
]

export function AnimatedTerminal() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const logLinesRef = useRef(logTemplates[0])
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)

  useEffect(() => {
    logLinesRef.current = logTemplates[Math.floor(Math.random() * logTemplates.length)]
  }, [])

  // Matrix-style falling characters effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()

    const columns = Math.floor(canvas.width / 20)
    const drops: number[] = Array(columns).fill(1)

    const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"

    function draw() {
      if (!ctx || !canvas) return

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "rgba(72, 187, 120, 0.4)" // Muted green
      ctx.font = "14px monospace"

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)]
        const x = i * 20
        const y = drops[i] * 20

        ctx.fillText(text, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)
    window.addEventListener("resize", resizeCanvas)
    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  // Terminal typing effect
  useEffect(() => {
    if (currentLineIndex >= logLinesRef.current.length) {
      // Reset after all lines
      const timeout = setTimeout(() => {
        logLinesRef.current = logTemplates[Math.floor(Math.random() * logTemplates.length)]
        setDisplayedLines([])
        setCurrentLineIndex(0)
        setCurrentChar(0)
      }, 3000)
      return () => clearTimeout(timeout)
    }

    const currentLine = logLinesRef.current[currentLineIndex]

    if (currentChar < currentLine.length) {
      const timeout = setTimeout(() => {
        setCurrentChar(currentChar + 1)
      }, 50)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines([...displayedLines, currentLine])
        setCurrentLineIndex(currentLineIndex + 1)
        setCurrentChar(0)
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [currentLineIndex, currentChar, displayedLines])

  return (
    <div className="relative w-full h-full">
      {/* Matrix falling characters background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" />

      {/* Terminal overlay */}
      <div className="absolute inset-0 p-8 flex flex-col justify-center font-mono text-sm">
        <div className="space-y-2 max-h-[400px] overflow-hidden">
          {displayedLines.map((line, i) => (
            <div
              key={i}
              className="text-primary/90 animate-pulse-once tracking-wide"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {line}
            </div>
          ))}
          {currentLineIndex < logLinesRef.current.length && (
            <div className="text-primary flex items-center tracking-wide">
              {logLinesRef.current[currentLineIndex].slice(0, currentChar)}
              <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse"></span>
            </div>
          )}
        </div>
      </div>

      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-secondary"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary"></div>
    </div>
  )
}
