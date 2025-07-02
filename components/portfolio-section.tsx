import { Card, CardContent } from "@/components/ui/card"
import { Heart, Building2, Users, Cake, Music } from "lucide-react"

export function PortfolioSection() {
  const services = [
    {
      icon: Heart,
      title: "Weddings",
      description:
        "From intimate ceremonies to grand celebrations, we create your perfect wedding day with attention to every detail.",
    },
    {
      icon: Building2,
      title: "Corporate Events",
      description:
        "Professional conferences, team building, and corporate celebrations that reflect your company's excellence.",
    },
    {
      icon: Users,
      title: "Private Parties",
      description: "Birthday parties, anniversaries, and special occasions tailored to your unique vision and style.",
    },
    {
      icon: Cake,
      title: "Social Events",
      description: "Graduations, baby showers, and milestone celebrations that bring people together in joy.",
    },
    {
      icon: Music,
      title: "Entertainment Events",
      description: "Concerts, festivals, and cultural events that create lasting memories for all attendees.",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We specialize in creating exceptional events that exceed expectations and create lasting memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-brand-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
