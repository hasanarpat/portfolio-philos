"use client"

import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { SelectedWork } from "@/components/selected-work"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Philosophy />
      <SelectedWork />
      <GallerySection />
      <Footer />
    </main>
  )
}
