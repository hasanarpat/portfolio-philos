"use client"

import { useEffect, useState, useRef } from "react"
import { X, ZoomIn, ZoomOut, Maximize2, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface LightboxProps {
    isOpen: boolean
    src: string
    alt: string
    caption?: string
    onClose: () => void
    onNext?: () => void
    onPrev?: () => void
    hasNext?: boolean
    hasPrev?: boolean
}

export function Lightbox({
    isOpen,
    src,
    alt,
    caption,
    onClose,
    onNext,
    onPrev,
    hasNext,
    hasPrev
}: LightboxProps) {
    const [scale, setScale] = useState(1)
    const [isDragging, setIsDragging] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [startPos, setStartPos] = useState({ x: 0, y: 0 })
    const imgRef = useRef<HTMLImageElement>(null)

    // Reset state when opened or image changes
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
    }, [isOpen, src])

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return

            switch (e.key) {
                case "Escape": onClose(); break
                case "+":
                case "=": handleZoomIn(); break
                case "-": handleZoomOut(); break
                case "ArrowRight": if (hasNext && onNext) onNext(); break
                case "ArrowLeft": if (hasPrev && onPrev) onPrev(); break
            }
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [isOpen, onClose, onNext, onPrev, hasNext, hasPrev])

    const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.5, 4))
    const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.5, 1))
    const handleReset = () => {
        setScale(1)
        setPosition({ x: 0, y: 0 })
    }

    // Mouse drag logic
    const handleMouseDown = (e: React.MouseEvent) => {
        if (scale > 1) {
            setIsDragging(true)
            setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y })
        }
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging && scale > 1 && imgRef.current) {
            // Calculate boundaries
            // The container is `transform: scale(...)`. The content unscaled size is what we need?
            // Let's rely on the scaled rendering size.

            const rect = imgRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // Calculate the maximum offsets allowed from center.
            // position.x is the translation value.
            // The total scaled width is rect.width.
            // If rect.width < viewportWidth, we should force x=0.
            // If rect.width > viewportWidth, the max drift is (rect.width - viewportWidth) / 2.
            // Note: The `rect` already accounts for the scale transform because it's on the parent div which wraps the img.
            // Wait, the transform is applied to the wrappers wrapper? or the wrapper?
            // <div style={{ transform... }}> <img /> </div>
            // So `imgRef` is inside the transformed div. `getBoundingClientRect` will return the scaled dimensions.

            const scaledWidth = imgRef.current.offsetWidth * scale
            const scaledHeight = imgRef.current.offsetHeight * scale

            const maxX = Math.max(0, (scaledWidth - viewportWidth) / 2)
            const maxY = Math.max(0, (scaledHeight - viewportHeight) / 2)

            const newX = e.clientX - startPos.x
            const newY = e.clientY - startPos.y

            setPosition({
                x: Math.max(-maxX, Math.min(newX, maxX)),
                y: Math.max(-maxY, Math.min(newY, maxY))
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

            {/* Navigation Buttons */}
            {hasPrev && (
                <button
                    onClick={(e) => { e.stopPropagation(); onPrev?.() }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-[110] p-3 rounded-full bg-background/50 hover:bg-primary/20 text-primary transition-all border border-primary/20 hover:scale-110"
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>
            )}

            {hasNext && (
                <button
                    onClick={(e) => { e.stopPropagation(); onNext?.() }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-[110] p-3 rounded-full bg-background/50 hover:bg-primary/20 text-primary transition-all border border-primary/20 hover:scale-110"
                >
                    <ChevronRight className="w-8 h-8" />
                </button>
            )}

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
                onClick={(e) => e.stopPropagation()}
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
                        ref={imgRef}
                        src={src}
                        alt={alt}
                        className="max-w-full max-h-[85vh] object-contain shadow-2xl ring-1 ring-primary/20 select-none"
                        draggable={false}
                    />
                </div>
            </div>

            {/* Caption */}
            {caption && (
                <div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[110] max-w-2xl w-full px-6"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="bg-background/80 backdrop-blur-md border border-primary/20 p-4 text-center rounded-sm animate-in slide-in-from-bottom-4 duration-300">
                        <p className="font-mono text-xs text-primary/80 uppercase tracking-widest mb-1">[ARTIFACT.CAPTION]</p>
                        <p className="font-serif text-lg text-foreground/90 leading-snug">{caption}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
