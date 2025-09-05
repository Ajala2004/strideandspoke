import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactContent } from "@/components/contact-content"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ContactContent />
      </div>
      <Footer />
    </main>
  )
}
