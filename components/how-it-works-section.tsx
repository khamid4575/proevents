import { MessageCircle, Calendar, PartyPopper } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Проконсультируйтесь",
      description:
        "Мы начинаем с подробной консультации, чтобы понять ваше видение, предпочтения и бюджетные требования.",
    },
    {
      icon: Calendar,
      title: "План",
      description:
        "Наша команда экспертов создает комплексный план, включающий все вопросы логистики, поставщиков и координацию сроков.",
    },
    {
      icon: PartyPopper,
      title: "Празднуйте",
      description: "Расслабьтесь и наслаждайтесь идеальным мероприятием, пока мы заботимся о каждой детали, чтобы обеспечить его безупречное проведение.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Как это работает</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Наш простой трехэтапный процесс гарантирует идеальное планирование и проведение вашего мероприятия.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-brand-accent/30 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-brand-accent/30 rounded-full"></div>
                </div>
              )}

              <div className="relative z-10">
                <div className="w-24 h-24 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <step.icon className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary font-bold text-sm">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
