"use client"

import Image, { ImageProps } from "next/image"
import { useLightbox } from "@/components/providers/lightbox-provider"
import { cn } from "@/lib/utils"
import { ZoomIn } from "lucide-react"

interface ZoomableImageProps extends Omit<ImageProps, "onClick"> {
    caption?: string
    className?: string
}

export function ZoomableImage({ src, alt, caption, className, ...props }: ZoomableImageProps) {
    const { openLightbox } = useLightbox()

    return (
        <figure className={cn("group relative my-12 border border-primary/20 bg-card/10 overflow-hidden", className)}>
            <div
                className="relative aspect-video cursor-zoom-in"
                onClick={() => openLightbox(src as string, alt, caption)}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                    {...props}
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/5 flex items-center justify-center pointer-events-none">
                    <div className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 bg-background/80 backdrop-blur-sm p-3 rounded-full border border-primary/20">
                        <ZoomIn className="w-6 h-6 text-primary" />
                    </div>
                </div>
            </div>
            {caption && (
                <figcaption className="p-4 border-t border-primary/10 font-mono text-[10px] uppercase tracking-widest text-primary/60 text-center bg-card/5">
                    [{caption}]
                </figcaption>
            )}
        </figure>
    )
}
