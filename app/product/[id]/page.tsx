import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"
import { notFound } from "next/navigation"

// Product data - in a real app this would come from a database
const products = {
  EverydaySlide: {
    id: "EverydaySlide",
    name: "Everyday Slide",
    description:
      "Step out in style with these easy-to-wear slides. They feature a timeless checkered pattern and a strong buckle, giving you a look that's both simple and sharp.",
    price: "₦12,500",
    oldPrice: "₦18,000",
    images: ["/EverydaySlide.jpg"],
    available: false,
    sizes: ["6", "7", "8", "9", "10", "11"],
    features: [
      "Timeless checkered pattern",
      "Durable buckle design",
      "Easy slip-on wear",
      "Comfortable cushioned sole",
    ],
  },
  TheCheckeredSlide: {
    id: "TheCheckeredSlide",
    name: "The Checkered Slide",
    description:
      "Comfort and style in one. These slides have a classic checkered design and a shiny buckle. Perfect for a quick trip or a day out.",
    price: "₦12,500",
    oldPrice: "₦18,000",
    images: ["/TheCheckeredSlide.jpg"],
    available: false,
    sizes: ["6", "7", "8", "9", "10", "11"],
    features: [
      "Classic checkered design",
      "Shiny buckle accent",
      "Slip-on comfort",
      "Durable sole",
    ],
  },
  TheMidnightCross: {
    id: "TheMidnightCross",
    name: "The Midnight Cross",
    description:
      "Meet your new go-to. The Midnight Cross is a sleek, black slide with a simple yet striking design. The crisscross straps give it a modern look, while the solid color makes it easy to pair with anything.",
    price: "₦17,500",
    oldPrice: "₦20,000",
    images: ["/TheMidnightCross.jpg"],
    available: false,
    sizes: ["6", "7", "8", "9", "10", "11"],
    features: [
      "Crisscross strap design",
      "Sleek all-black style",
      "Versatile pairing with outfits",
      "Cushioned for comfort",
    ],
  },
  TheSignatureSlide: {
    id: "TheSignatureSlide",
    name: "The Signature Slide",
    description:
      "Elevate your style with the Signature slide. This classic black slide features a clean design with a simple, silver-toned buckle. It's built for both comfort and a timeless look, making it a perfect choice for any occasion.",
    price: "₦17,500",
    oldPrice: "₦20,000",
    images: ["/The'Signature'Slide.jpg"],
    available: false,
    sizes: ["6", "7", "8", "9", "10", "11"],
    features: [
      "Classic black leather",
      "Silver-toned buckle",
      "Minimalist design",
      "All-day comfort",
    ],
  },
  TheModernArtisan: {
    id: "TheModernArtisan",
    name: "The Modern Artisan",
    description:
      "Step into timeless style with The Modern Artisan. These shoes blend classic craftsmanship with a contemporary twist. The smooth leather and clean, woven straps create a sharp look that works for both casual and dressy occasions.",
    price: "₦45,000",
    oldPrice: "₦50,000",
    images: ["/The'Modern'Artisan.jpg"],
    available: false,
    sizes: ["6", "7", "8", "9", "10", "11"],
    features: [
      "Smooth leather craftsmanship",
      "Contemporary woven straps",
      "Versatile casual & dressy use",
      "High-quality handmade finish",
    ],
  },
};

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products[params.id as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ProductDetail product={product} />
      </div>
      <Footer />
    </main>
  )
}

export function generateStaticParams() {
  return Object.keys(products).map((id) => ({
    id,
  }))
}
