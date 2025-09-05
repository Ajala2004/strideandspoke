import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <h3 className="font-heading font-black text-2xl mb-4">Stride & Spoke</h3>
            <p className="text-background/80 mb-4 max-w-md">
              Walk Your Story. From the streets of Gombe, Nigeria to the world, we craft footwear
              that blends street-smart style with premium comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-background/80 hover:text-background transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-background/80 hover:text-background transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-background/80 hover:text-background transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-background/80 hover:text-background transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-background/80 hover:text-background transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center space-y-2">
          <p className="text-background/60">© {new Date().getFullYear()} Stride & Spoke. Walk Your Story.</p>
          <p className="text-background/50 text-sm">
            Powered by{" "}
            <a
              href="https://froshx.onrender.com/"
              className="underline hover:text-background"
              target="_blank"
              rel="noopener noreferrer"
            >
              FroshX
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
