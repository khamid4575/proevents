import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify- overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero.png?height=1080&width=1920')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text- text-white px-4 sm:px-6 lg:px-8 container mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold mb-6 leading-tight max-w-4xl">
          Организация бизнес мероприятий
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl">
          Pro Events — это ивент-агентство полного цикла, которое разрабатывает,
          организовывает и координирует невероятные мероприятия
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify- items-center">
          <Button
            size="lg"
            className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 text-lg font-semibold group"
          >
            Наши услуги
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold group"
          >
            {/* <Play className="mr-2 h-5 w-5" /> */}
            Контакты
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
