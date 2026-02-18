import { BlogAsymmetricLayout } from "@/components/blog-asymmetric-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | System.Init",
  description: "Exploring software architecture, design patterns, and the philosophy of building long-lasting systems.",
}



export default function BlogPage() {
  return <BlogAsymmetricLayout />
}
