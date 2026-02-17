"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"
import { Lightbox } from "@/components/ui/lightbox"

interface LightboxContextType {
    openLightbox: (src: string, alt: string, caption?: string) => void
    closeLightbox: () => void
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined)

export function LightboxProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState({ src: "", alt: "", caption: "" })

    const openLightbox = (src: string, alt: string, caption: string = "") => {
        setCurrentImage({ src, alt, caption })
        setIsOpen(true)
    }

    const closeLightbox = () => {
        setIsOpen(false)
    }

    return (
        <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
            {children}
            <Lightbox
                isOpen={isOpen}
                src={currentImage.src}
                alt={currentImage.alt}
                caption={currentImage.caption}
                onClose={closeLightbox}
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
