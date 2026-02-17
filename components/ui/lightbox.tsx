"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { X, ZoomIn, ZoomOut, Maximize2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface LightboxProps {
    isOpen: boolean
    src: string
    alt: string
    caption?: string
    onClose: () => void
}

export function Lightbox({ isOpen, src, alt, caption, onClose }: LightboxProps) {
    const [scale, setScale] = useState(1)
    const [isDragging, setIsDragging] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [startPos, setStartPos] = useState({ x: 0, y: 0 })

    // Reset state when opened
    useEffect(() => {
        if (isOpen) {
            setScale(1)
            setPosition({ x: 0, y: 0 })
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return
            if (e.key === "Escape") onClose()
            if (e.key === "+" || e.key === "=") handleZoomIn()
            if (e.key === "-") handleZoomOut()
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [isOpen, onClose])

    const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.5, 4))
    const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.5, 1))
    const handleReset = () => {
        setScale(1)
        setPosition({ x: 0, y: 0 })
    }

    // Mouse drag logic (simplified for basic panning when zoomed)
    const handleMouseDown = (e: React.MouseEvent) => {
        if (scale > 1) {
            setIsDragging(true)
            setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y })
        }
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging && scale > 1) {
            setPosition({
                x: e.clientX - startPos.x,
                y: e.clientY - startPos.y,
            })
        }
    }

    const handleMouseUp = () => setIsDragging(false)

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md animate-in fade-in duration-200"
            onClick={onClose}
        >
            {/* Controls */}
            <div
                className="absolute top-4 right-4 z-[110] flex gap-2"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={handleZoomIn}
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors border border-primary/20"
                    title="Zoom In (+)"
                >
                    <ZoomIn className="w-5 h-5" />
                </button>
                <button
                    onClick={handleZoomOut}
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors border border-primary/20"
                    title="Zoom Out (-)"
                >
                    <ZoomOut className="w-5 h-5" />
                </button>
                <button
                    onClick={handleReset}
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors border border-primary/20"
                    title="Reset View"
                >
                    <Maximize2 className="w-5 h-5" />
                </button>
                <button
                    onClick={onClose}
                    className="p-2 rounded-full bg-destructive/10 hover:bg-destructive/20 text-destructive transition-colors border border-destructive/20 ml-2"
                    title="Close (Esc)"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Image Container */}
            <div
                className={cn(
                    "relative w-full h-full flex items-center justify-center p-4 transition-transform duration-200 ease-out",
                    isDragging ? "cursor-grabbing" : scale > 1 ? "cursor-grab" : "cursor-default"
                )}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image area
            >
                <div
                    style={{
                        transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                        transition: isDragging ? 'none' : 'transform 0.2s ease-out'
                    }}
                    className="relative w-full max-w-7xl max-h-[85vh] flex items-center justify-center"
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={src}
                        alt={alt}
                        className="max-w-full max-h-[85vh] object-contain shadow-2xl ring-1 ring-primary/20"
                    />
                </div>
            </div>

            {/* Caption */}
            {caption && (
                <div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[110] max-w-2xl w-full px-6"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="bg-background/80 backdrop-blur-md border border-primary/20 p-4 text-center rounded-sm">
                        <p className="font-mono text-xs text-primary/80 uppercase tracking-widest mb-1">[ARTIFACT.CAPTION]</p>
                        <p className="font-serif text-lg text-foreground/90 leading-snug">{caption}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
