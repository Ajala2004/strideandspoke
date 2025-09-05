import { Palette, Heart, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function BrandPillars() {
  const pillars = [
    {
      icon: Palette,
      title: "Style",
      description: "Unique designs inspired by the streets and elevated with global-class style.",
    },
    {
      icon: Heart,
      title: "Comfort",
      description: "Engineered with cushioned soles and breathable materials for all-day wear.",
    },
    {
      icon: MapPin,
      title: "Heritage",
      description: "Rooted in local creativity, built to stand out everywhere you go.",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-card-foreground mb-4">
            Why Stride & Spoke
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three pillars that define every pair we create
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                    <pillar.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
