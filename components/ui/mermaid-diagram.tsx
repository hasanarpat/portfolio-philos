"use client"

import React, { useEffect, useRef, useState } from "react"
import mermaid from "mermaid"

mermaid.initialize({
    startOnLoad: false,
    theme: "dark",
    securityLevel: "loose",
    fontFamily: "var(--font-mono)",
})

interface MermaidDiagramProps {
    chart: string
}

export const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [svg, setSvg] = useState<string>("")
    const [processed, setProcessed] = useState(false)

    useEffect(() => {
        if (processed || !chart) return

        const renderChart = async () => {
            try {
                const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`
                const { svg } = await mermaid.render(id, chart)
                setSvg(svg)
                setProcessed(true)
            } catch (error) {
                console.error("Failed to render mermaid diagram:", error)
                setSvg(`<div class="text-red-500 text-xs font-mono p-4 border border-red-500/20 bg-red-500/10">Failed to render diagram. Check console for details.</div>`)
                setProcessed(true)
            }
        }

        renderChart()
    }, [chart, processed])

    return (
        <div
            ref={ref}
            className="my-8 overflow-x-auto border border-primary/20 bg-card/20 p-6 flex justify-center"
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    )
}
