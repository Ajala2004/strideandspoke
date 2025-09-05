"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Check, MessageCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Product {
  id: string
  name: string
  description: string
  price: string
  oldPrice?: string | null
  images: string[]
  available: boolean
  sizes: string[]
  features: string[]
}

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState<string>("")
  const whatsappNumber = "+2347041013001" 

  const generateWhatsAppMessage = (type: "order" | "notify") => {
    const baseMessage =
      type === "order"
        ? `Hello! I'm interested in '${product.name}'${selectedSize ? `, size ${selectedSize}` : ""}. Price: ${product.price}. Is it available?`
        : `Hello! Please notify me when '${product.name}'${selectedSize ? ` (size ${selectedSize})` : ""} is back in stock.`

    return encodeURIComponent(baseMessage)
  }

  const handleWhatsAppClick = (type: "order" | "notify") => {
    const message = generateWhatsAppMessage(type)
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
  }

  return (
    <section className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
            <Link href="/shop" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Shop
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-card">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.oldPrice && (
                <div className="absolute top-4 left-4">
                  <Badge variant="destructive" className="bg-destructive text-destructive-foreground">
                    Sale
                  </Badge>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge
                  variant={product.available ? "default" : "secondary"}
                  className={
                    product.available
                      ? "bg-green-100 text-green-800 border-green-200"
                      : "bg-gray-100 text-gray-800 border-gray-200"
                  }
                >
                  {product.available ? "Available" : "Not Available"}
                </Badge>
              </div>

              <h1 className="font-heading font-black text-3xl sm:text-4xl text-foreground mb-4">{product.name}</h1>

              <div className="flex items-center gap-3 mb-6">
                <span className="font-heading font-bold text-3xl text-accent">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-xl text-muted-foreground line-through">{product.oldPrice}</span>
                )}
              </div>
            </div>

            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <label className="font-heading font-semibold text-foreground">Size</label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      Size {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {product.available ? (
                <Button
                  onClick={() => handleWhatsAppClick("order")}
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
                  disabled={!selectedSize}
                >
                  <MessageCircle className="h-5 w-5" />
                  Order on WhatsApp
                </Button>
              ) : (
                <Button
                  onClick={() => handleWhatsAppClick("notify")}
                  size="lg"
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Notify Me on WhatsApp
                </Button>
              )}

              {!selectedSize && product.available && (
                <p className="text-sm text-muted-foreground text-center">Please select a size to continue</p>
              )}
            </div>

            {/* Features */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-bold text-lg text-foreground mb-4">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-bold text-lg text-foreground mb-4">Delivery & Returns</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Free delivery within Lagos (3-5 business days)</p>
                  <p>• Nationwide delivery available (5-7 business days)</p>
                  <p>• 30-day return policy for unworn items</p>
                  <p>• Contact us via WhatsApp for any questions</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
