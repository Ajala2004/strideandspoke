import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function FeaturedProducts() {
  const products = [
    {
      id: "blade-classic-black",
      name: "Blade — Classic Black",
      description: "Minimal leather slip-on with cushioned sole. Street vibes, all-day comfort.",
      price: "₦12,000",
      image: "/black-leather-slip-on-shoe-minimal-design.jpg",
      available: true,
    },
    {
      id: "spoke-runner-olive",
      name: "Spoke Runner — Olive",
      description: "Lightweight runners with a retro twist. Bold design, effortless motion.",
      price: "₦15,000",
      image: "/olive-green-running-shoe-retro-design.jpg",
      available: true,
    },
    {
      id: "urban-walker-beige",
      name: "Urban Walker — Beige",
      description: "Versatile everyday shoe with premium comfort. Perfect for city adventures.",
      price: "₦13,500",
      image: "/beige-casual-shoe-urban-style.jpg",
      available: false,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">Best Sellers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our most loved pairs, ready for your stride.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      product.available ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {product.available ? "Available" : "Not Available"}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-2xl text-accent">{product.price}</span>
                  <Button asChild variant={product.available ? "default" : "outline"}>
                    <Link href={`/product/${product.id}`}>{product.available ? "View Details" : "Notify Me"}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            <Link href="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
