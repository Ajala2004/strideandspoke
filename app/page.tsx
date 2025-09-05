import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BrandPillars } from "@/components/brand-pillars"
import { FeaturedProducts } from "@/components/featured-products"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <BrandPillars />
      <FeaturedProducts />
      <Footer />
    </main>
  )
}
