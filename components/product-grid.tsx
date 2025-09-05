import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function ProductGrid() {
  const products = [
    {
      id: "blade-classic-black",
      name: "Blade — Classic Black",
      description:
        "Minimalist leather slip-on inspired by Naija street style. Hand-stitched upper with cushioned sole for comfort all day.",
      price: "₦12,000",
      oldPrice: null,
      image: "/black-leather-slip-on-shoe-minimal-design.jpg",
      available: true,
    },
    {
      id: "spoke-runner-olive",
      name: "Spoke Runner — Olive",
      description:
        "Lightweight runners with a retro twist. Bold design meets effortless motion for the modern urbanite.",
      price: "₦15,000",
      oldPrice: "₦18,000",
      image: "/olive-green-running-shoe-retro-design.jpg",
      available: true,
    },
    {
      id: "urban-walker-beige",
      name: "Urban Walker — Beige",
      description: "Versatile everyday shoe with premium comfort. Perfect for city adventures and casual strolls.",
      price: "₦13,500",
      oldPrice: null,
      image: "/beige-casual-shoe-urban-style.jpg",
      available: false,
    },
    {
      id: "street-high-black-gold",
      name: "Street High — Black & Gold",
      description: "High-top sneakers with gold accents. Bold statement piece for those who dare to stand out.",
      price: "₦16,500",
      oldPrice: null,
      image: "/black-gold-high-top-sneaker.jpg",
      available: true,
    },
    {
      id: "comfort-slide-olive",
      name: "Comfort Slide — Olive",
      description: "Premium slides with arch support. Perfect for relaxed days without compromising on style.",
      price: "₦8,500",
      oldPrice: "₦10,000",
      image: "/olive-comfort-slides.jpg",
      available: true,
    },
    {
      id: "heritage-boot-brown",
      name: "Heritage Boot — Brown",
      description: "Classic work boot reimagined. Durable leather construction meets contemporary street aesthetics.",
      price: "₦19,000",
      oldPrice: null,
      image: "/brown-heritage-work-boot.jpg",
      available: false,
    },
    {
      id: "flex-runner-white",
      name: "Flex Runner — White",
      description: "Ultra-lightweight running shoe with responsive cushioning. Clean design for maximum versatility.",
      price: "₦14,000",
      oldPrice: null,
      image: "/white-flex-running-shoe.jpg",
      available: true,
    },
    {
      id: "casual-loafer-navy",
      name: "Casual Loafer — Navy",
      description: "Sophisticated loafer with modern twist. Perfect balance of formal elegance and street credibility.",
      price: "₦17,500",
      oldPrice: "₦20,000",
      image: "/navy-casual-loafer.jpg",
      available: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                  product.available
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-gray-100 text-gray-800 border border-gray-200"
                }`}
              >
                {product.available ? "Ready to Order" : "Notify Me"}
              </span>
            </div>
            {product.oldPrice && (
              <div className="absolute top-4 left-4">
                <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded text-sm font-medium">
                  Sale
                </span>
              </div>
            )}
          </div>

          <CardContent className="p-6">
            <h3 className="font-heading font-bold text-lg text-foreground mb-2 line-clamp-1">{product.name}</h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p>

            <div className="flex items-center gap-2 mb-4">
              <span className="font-heading font-bold text-xl text-accent">{product.price}</span>
              {product.oldPrice && (
                <span className="text-muted-foreground line-through text-sm">{product.oldPrice}</span>
              )}
            </div>

            <Button asChild className="w-full" variant={product.available ? "default" : "outline"}>
              <Link href={`/product/${product.id}`}>{product.available ? "View Details" : "Notify Me"}</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
