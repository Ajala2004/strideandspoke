import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-card to-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
            More than shoes, it's a <span className="text-accent">lifestyle</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Stride & Spoke was born from the energy of Naija streets — bold, raw, and full of life. We blend local
            creativity with world-class craftsmanship to design shoes that speak to your identity.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-6">Our Story</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Every pair we make is about confidence, comfort, and culture. Whether you're striding to class, to
                  work, or to the spotlight, Stride & Spoke is here to walk that journey with you.
                </p>
                <p>
                  From the bustling markets of Lagos to the creative hubs of Abuja, we draw inspiration from the
                  authentic spirit of Nigerian street culture. Our designs celebrate the boldness and creativity that
                  defines our people.
                </p>
                <p>
                  We believe that great shoes should tell your story — where you've been, where you're going, and who
                  you are right now. That's why every Stride & Spoke creation is crafted with premium materials and
                  attention to detail that honors both tradition and innovation.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/beige-casual-shoe-urban-style.jpg"
                alt="Stride & Spoke brand story"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-card-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background border-border">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-heading font-black text-accent">A</span>
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">Authenticity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We stay true to our Nigerian roots while embracing global influences, creating designs that are
                  genuinely unique.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-heading font-black text-accent">Q</span>
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">Quality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Premium materials and meticulous craftsmanship ensure every pair meets our high standards for
                  durability and comfort.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-heading font-black text-accent">C</span>
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">Community</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're building more than a brand — we're creating a community of individuals who walk their own path
                  with confidence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6">Ready to Walk Your Story?</h2>
          <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto">
            Join the Stride & Spoke community and discover shoes that speak to your identity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-semibold"
            >
              <Link href="/shop">Shop Collection</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-background text-background hover:bg-background hover:text-foreground px-8 py-3 text-lg font-semibold bg-transparent"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
