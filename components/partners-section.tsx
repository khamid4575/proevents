export function PartnersSection() {
  const partners = [
    {
      name: "",
      logo: "/cola.png?height=80&width=160&text=Hilton",
    },
    {
      name: "Marriott International",
      logo: "/uzbekistan.png?height=80&width=160&text=Marriott",
    },
    {
      name: "Hyatt Hotels",
      logo: "/goldenhouse.webp?height=80&width=160&text=Hyatt",
    },
    {
      name: "InterContinental",
      logo: "/artel.png?height=80&width=160&text=InterContinental",
    },

  ]

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Партнеры</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы сотрудничаем с лучшими площадками, поставщиками и сервисами, чтобы обеспечить исключительные мероприятия.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                className="max-h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Interested in partnering with us?</p>
          <a
            href="#contact"
            className="inline-flex items-center text-brand-primary hover:text-brand-secondary font-semibold transition-colors duration-200"
          >
            Get in touch
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  )
}
