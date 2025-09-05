import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function ProductGrid() {
  const products = [
    
 
    {
      id: "EverydaySlide",
      name: "EverydaySlide",
      description: "Step out in style with these easy-to-wear slides. They feature a timeless checkered pattern and a strong buckle, giving you a look that's both simple and sharp.",
      price: "₦12,500",
      oldPrice: "₦18,000",
      image: "/everydayslide.JPG",
      available: true,
    },
    {
      id: "TheCheckeredSlide",
      name: "The Checkered Slide",
      description: "Comfort and style in one. These slides have a classic checkered design and a shiny buckle. Perfect for a quick trip or a day out",
      price: "₦12,500",
      oldPrice: "₦18,000",
      image: "/thecheckeredSlide.JPG",
      available: false,
    },
    {
      id: "TheMidnightCross",
      name: "The Midnight Cross",
      description: "Meet your new go-to. The Midnight Cross is a sleek, black slide with a simple yet striking design. The crisscross straps give it a modern look, while the solid color makes it easy to pair with anything.These slides are perfect for an easy, stylish day. They're comfortable enough for a walk around town and sharp enough for a casual night out.",
      price: "₦17,500",
      oldPrice: "₦20,000",
      image: "/themidnightcross.JPG",
      available: false,
    },
    {
      id: "TheSignatureSlide",
      name: "The'Signature'Slide",
      description: "Elevate your style with the Signature slide. This classic black slide features a clean design with a simple, silver-toned buckle. It's built for both comfort and a timeless look, making it a perfect choice for any occasion.",
      price: "₦17,500",
      oldPrice: "₦20,000",
      image: "/thesignatureslide.JPG",
      available: true,
    },
    {
      id: "The'Modern'Artisan",
      name: "The'Modern'Artisan",
      description: "Step into timeless style with The Modern Artisan. These shoes blend classic craftsmanship with a contemporary twist. The smooth leather and clean, woven straps create a sharp look that works for both casual and dressy occasions. They're a perfect choice for those who appreciate simple, high-quality design.",
      price: "₦45,000",
      oldPrice: "₦50,000",
      image: "/themodernartisan.JPG",
      available: false,
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
