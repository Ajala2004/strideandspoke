import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function FeaturedProducts() {
  const products = [
    {
      id: "TheSignatureSlide",
      name: "The Signature Slide",
      description:
        "Elevate your style with the Signature slide. This classic black slide features a clean design with a simple, silver-toned buckle. Built for both comfort and timeless looks.",
      price: "₦17,500",
      oldPrice: "₦20,000",
      image: "/thesignatureslide.JPG",
      available: true,
    },
    {
      id: "EverydaySlide",
      name: "Everyday Slide",
      description:
        "Step out in style with these easy-to-wear slides. Featuring a timeless checkered pattern and a strong buckle for a sharp, casual look.",
      price: "₦12,500",
      oldPrice: "₦18,000",
      image: "/everydayslide.JPG",
      available: true,
    },
    {
      id: "TheModernArtisan",
      name: "The Modern Artisan",
      description:
        "Step into timeless style with The Modern Artisan. Crafted with smooth leather and woven straps, they balance modern design with traditional craftsmanship.",
      price: "₦45,000",
      oldPrice: "₦50,000",
      image: "/themodernartisan.JPG",
      available: true,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Best Sellers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most-loved pairs, crafted to blend comfort and timeless style.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-accent/40"
            >
              {/* Image */}
              <div className="relative aspect-square">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium shadow-sm ${
                      product.available
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {product.available ? "Available" : "Out of Stock"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6 space-y-4">
                <h3 className="font-heading font-semibold text-xl text-foreground">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                {/* Price + Button */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-bold text-2xl text-accent">
                      {product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {product.oldPrice}
                    </span>
                  </div>

                  <Button
                    asChild
                    size="sm"
                    variant={product.available ? "default" : "outline"}
                  >
                    <Link href={`/product/${product.id}`}>
                      {product.available ? "View Details" : "Notify Me"}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            <Link href="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
