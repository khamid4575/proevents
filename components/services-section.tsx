"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All Events" },
    { id: "weddings", label: "Weddings" },
    { id: "corporate", label: "Corporate" },
    { id: "private", label: "Private Parties" },
  ]

  const portfolioItems = [
    { id: 1, category: "weddings", image: "/Businessevents.png?height=400&width=600", title: "Деловые мероприятия" },
    { id: 2, category: "corporate", image: "/Teambuildings.png?height=400&width=600", title: "Тимбилдинги" },
    { id: 3, category: "private", image: "/Productpresentations.png?height=400&width=600", title: "Презентации продуктов" },
    { id: 4, category: "weddings", image: "/Corporateevents.png?height=400&width=600", title: "Корпоративные мероприятия" },
    { id: 5, category: "corporate", image: "/BTL-promotionsandexhibitions.png?height=400&width=600", title: "BTL- акции и выставки" },
    { id: 6, category: "private", image: "/Conferences.png?height=400&width=600", title: "Конференции" },
  ]

  const filteredItems =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {/* Explore our recent work and see how we bring dreams to life through exceptional event planning. */}
            Мы специализируемся на создании исключительных мероприятий, которые превосходят ожидания и создают незабываемые воспоминания.
          </p>

          {/* Filter Buttons */}
          {/* <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={
                  activeFilter === filter.id
                    ? "bg-brand-primary hover:bg-brand-secondary text-white"
                    : "bg-white text-gray-700 hover:bg-brand-primary/5 hover:text-brand-primary border-gray-300"
                }
              >
                {filter.label}
              </Button>
            ))}
          </div> */}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
