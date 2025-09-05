import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram, Facebook, Mail, MapPin, Clock } from "lucide-react"

export function ContactContent() {
  const whatsappNumber = "+2347041013001"
  const whatsappMessage = "Hello, I'd like to ask about Stride & Spoke."

  return (
    <>
      {/* Hero Section */}
      <section
        className="py-20 bg-gradient-to-br from-background via-card to-muted"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            id="contact-heading"
            className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Let’s <span className="text-accent">Connect</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Questions, orders, or collaborations — our team in Gombe, Nigeria is always ready to help you walk your story.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-background" aria-labelledby="contact-options">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Primary Contact */}
            <div className="space-y-8">
              <div>
                <h2 id="contact-options" className="font-heading font-bold text-3xl text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you’re shopping for the latest drop, need help with sizing, or want a custom design — Stride & Spoke is here to guide you.
                </p>
              </div>

              {/* WhatsApp CTA */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground">WhatsApp</h3>
                      <p className="text-muted-foreground">Quickest support channel</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Chat directly with our team for product inquiries, orders, or delivery updates.
                  </p>
                  <Button asChild size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Email */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground">Email</h3>
                      <p className="text-muted-foreground">For official inquiries</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Reach us for partnerships, press, or bulk orders.
                  </p>
                  <a
                    href="mailto:ajalaemmanueloluwashola@gmail.com"
                    className="text-accent hover:text-accent/80 font-medium"
                  >
                    ajalaemmanueloluwashola@gmail.com
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Business Info & Social */}
            <div className="space-y-8">
              {/* Hours */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-6">Business Hours</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium text-foreground">Monday - Friday</p>
                        <p className="text-muted-foreground">9:00 AM - 6:00 PM (WAT)</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium text-foreground">Saturday</p>
                        <p className="text-muted-foreground">10:00 AM - 4:00 PM (WAT)</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">Sunday</p>
                        <p className="text-muted-foreground">Closed</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Location */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-6">Location</h3>
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Gombe, Nigeria</p>
                      <p className="text-muted-foreground">Nationwide delivery available</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Based in Gombe State, serving customers across Nigeria with fast, reliable delivery.
                  </p>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-6">Follow Our Journey</h3>
                  <p className="text-muted-foreground mb-6">
                    Join our community for the latest drops, style inspiration, and behind-the-scenes stories.
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="lg" asChild>
                      <a
                        href="https://instagram.com/strideandspoke"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow Stride & Spoke on Instagram"
                        className="flex items-center gap-2"
                      >
                        <Instagram className="h-5 w-5" />
                        Instagram
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a
                        href="https://facebook.com/strideandspoke"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow Stride & Spoke on Facebook"
                        className="flex items-center gap-2"
                      >
                        <Facebook className="h-5 w-5" />
                        Facebook
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="faq-heading"
              className="font-heading font-bold text-3xl sm:text-4xl text-card-foreground mb-4"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers about ordering, delivery, and policies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "How do I place an order?",
                a: "Browse our collection, select your size, and click 'Order on WhatsApp' to complete your purchase through our secure WhatsApp ordering system.",
              },
              {
                q: "What are your delivery times?",
                a: "Gombe delivery: 2–3 business days. Nationwide delivery: 5–7 business days. Free delivery within Gombe city for orders over ₦15,000.",
              },
              {
                q: "Can I return or exchange?",
                a: "Yes! We offer 30-day returns for unworn items in original condition. Contact us via WhatsApp to initiate a return or exchange.",
              },
              {
                q: "Do you offer custom orders?",
                a: "We love creating unique designs. Message us on WhatsApp with your ideas and we’ll discuss custom options and pricing.",
              },
            ].map((item, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                    {item.q}
                  </h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
