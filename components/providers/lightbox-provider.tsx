"use client"

import React, { createContext, useContext, useState, ReactNode, useCallback } from "react"
import { Lightbox } from "@/components/ui/lightbox"

interface LightboxImage {
    src: string
    alt: string
    caption: string
}

interface LightboxContextType {
    openLightbox: (src: string) => void
    closeLightbox: () => void
    nextImage: () => void
    prevImage: () => void
    hasNext: boolean
    hasPrev: boolean
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined)

export function LightboxProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)
    const [images, setImages] = useState<LightboxImage[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)

    const openLightbox = useCallback((src: string) => {
        // 1. Find all zoomable images on the page to build the gallery
        const elements = document.querySelectorAll(".js-lightbox-item")
        const gallery: LightboxImage[] = Array.from(elements).map((el) => ({
            src: el.getAttribute("data-src") || "",
            alt: el.getAttribute("data-alt") || "",
            caption: el.getAttribute("data-caption") || "",
        }))

        setImages(gallery)

        // 2. Find index of clicked image
        const index = gallery.findIndex((img) => img.src === src)
        setCurrentIndex(index !== -1 ? index : 0)

        setIsOpen(true)
    }, [])

    const closeLightbox = useCallback(() => {
        setIsOpen(false)
    }, [])

    const nextImage = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }, [images.length])

    const prevImage = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }, [images.length])

    const currentImage = images[currentIndex] || { src: "", alt: "", caption: "" }

    return (
        <LightboxContext.Provider
            value={{
                openLightbox,
                closeLightbox,
                nextImage,
                prevImage,
                hasNext: images.length > 1,
                hasPrev: images.length > 1
            }}
        >
            {children}
            <Lightbox
                isOpen={isOpen}
                src={currentImage.src}
                alt={currentImage.alt}
                caption={currentImage.caption}
                onClose={closeLightbox}
                onNext={nextImage}
                onPrev={prevImage}
                hasNext={images.length > 1}
                hasPrev={images.length > 1}
            />
        </LightboxContext.Provider>
    )
}

export function useLightbox() {
    const context = useContext(LightboxContext)
    if (context === undefined) {
        throw new Error("useLightbox must be used within a LightboxProvider")
    }
    return context
}
