import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16 flex items-center justify-center min-h-[80vh]">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-black text-6xl sm:text-8xl text-accent mb-4">404</h1>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-4">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Looks like this page took a different path. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">Go Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/shop">Browse Shop</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
