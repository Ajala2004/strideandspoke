import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"
import { notFound } from "next/navigation"

// Product data - in a real app this would come from a database
const products = {
  "blade-classic-black": {
    id: "blade-classic-black",
    name: "Blade — Classic Black",
    description:
      "Minimalist leather slip-on inspired by Naija street style. Hand-stitched upper with cushioned sole for comfort all day. Perfect for both casual outings and semi-formal occasions.",
    price: "₦12,000",
    oldPrice: null,
    images: ["/black-leather-slip-on-shoe-minimal-design.jpg"],
    available: true,
    sizes: ["6", "7", "8", "9", "10", "11"],
    features: [
      "Hand-stitched leather upper",
      "Cushioned sole technology",
      "Breathable inner lining",
      "Slip-resistant outsole",
    ],
  },
  "spoke-runner-olive": {
    id: "spoke-runner-olive",
    name: "Spoke Runner — Olive",
    description:
      "Lightweight runners with a retro twist. Bold design meets effortless motion for the modern urbanite. Features advanced cushioning technology for maximum comfort during extended wear.",
    price: "₦15,000",
    oldPrice: "₦18,000",
    images: ["/olive-green-running-shoe-retro-design.jpg"],
    available: true,
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    features: [
      "Lightweight mesh construction",
      "Retro-inspired design",
      "Advanced cushioning",
      "Durable rubber outsole",
    ],
  },
  "urban-walker-beige": {
    id: "urban-walker-beige",
    name: "Urban Walker — Beige",
    description:
      "Versatile everyday shoe with premium comfort. Perfect for city adventures and casual strolls. Crafted with sustainable materials and modern comfort technology.",
    price: "₦13,500",
    oldPrice: null,
    images: ["/beige-casual-shoe-urban-style.jpg"],
    available: false,
    sizes: ["6", "7", "8", "9", "10", "11"],
    features: ["Sustainable materials", "All-day comfort padding", "Versatile styling", "Weather-resistant finish"],
  },
  "street-high-black-gold": {
    id: "street-high-black-gold",
    name: "Street High — Black & Gold",
    description:
      "High-top sneakers with gold accents. Bold statement piece for those who dare to stand out. Premium materials meet street-smart design in this iconic silhouette.",
    price: "₦16,500",
    oldPrice: null,
    images: ["/black-gold-high-top-sneaker.jpg"],
    available: true,
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    features: [
      "Premium leather construction",
      "Gold accent detailing",
      "High-top ankle support",
      "Signature sole design",
    ],
  },
  "comfort-slide-olive": {
    id: "comfort-slide-olive",
    name: "Comfort Slide — Olive",
    description:
      "Premium slides with arch support. Perfect for relaxed days without compromising on style. Engineered for maximum comfort with contemporary aesthetics.",
    price: "₦8,500",
    oldPrice: "₦10,000",
    images: ["/olive-comfort-slides.jpg"],
    available: true,
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    features: ["Arch support technology", "Premium foam padding", "Quick-dry materials", "Non-slip sole"],
  },
  "heritage-boot-brown": {
    id: "heritage-boot-brown",
    name: "Heritage Boot — Brown",
    description:
      "Classic work boot reimagined. Durable leather construction meets contemporary street aesthetics. Built to last with timeless style that transcends trends.",
    price: "₦19,000",
    oldPrice: null,
    images: ["/brown-heritage-work-boot.jpg"],
    available: false,
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    features: ["Full-grain leather", "Steel shank support", "Oil-resistant sole", "Classic lace-up design"],
  },
  "flex-runner-white": {
    id: "flex-runner-white",
    name: "Flex Runner — White",
    description:
      "Ultra-lightweight running shoe with responsive cushioning. Clean design for maximum versatility. Perfect for both athletic performance and casual wear.",
    price: "₦14,000",
    oldPrice: null,
    images: ["/white-flex-running-shoe.jpg"],
    available: true,
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    features: [
      "Ultra-lightweight design",
      "Responsive cushioning",
      "Breathable mesh upper",
      "Flexible sole technology",
    ],
  },
  "casual-loafer-navy": {
    id: "casual-loafer-navy",
    name: "Casual Loafer — Navy",
    description:
      "Sophisticated loafer with modern twist. Perfect balance of formal elegance and street credibility. Crafted for the modern professional who values both style and comfort.",
    price: "₦17,500",
    oldPrice: "₦20,000",
    images: ["/navy-casual-loafer.jpg"],
    available: true,
    sizes: ["6", "7", "8", "9", "10", "11"],
    features: ["Premium suede construction", "Memory foam insole", "Flexible rubber sole", "Modern silhouette"],
  },
}

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
