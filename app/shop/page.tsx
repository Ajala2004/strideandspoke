import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"

export default function ShopPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
                Shop the Collection
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Every shoe is a step towards your story. Browse our collection below.
              </p>
            </div>
            <ProductGrid />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
