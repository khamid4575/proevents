import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Heart } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  const stats = [
    { icon: Award, number: "50+", label: "Завершены события" },
    { icon: Users, number: "1000+", label: "Счастливые клиенты" },
    { icon: Clock, number: "10+", label: "Лет опыта" },
    { icon: Heart, number: "100%", label: "Уровень удовлетворенности" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              О нас
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-bold">
              Создаем события, которые впечатляют, убеждают, вдохновляют
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Event-маркетинг не назойлив в своем представлении, потребитель сам
              с охотой идет на контакт с брендом, а также он легко адаптируется
              под запросы и потребности потребителей. Основная цель создать для
              потребителя праздник и приятное настроение, которое в дальнейшем
              перерастет в приятное воспоминание, которое всегда будет
              ассоциироваться с вашим брендом. При возникновении потребности у
              потребителя выбор будет сделан в пользу вашего продукта, так как
              он будет ассоциирован с хорошими воспоминаниями и впечатлениями.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-bold">
              Проведение деловых мероприятий, организация акций и презентаций,
              Оформление ивентов, нестандартная шоу программа.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Не исключено, что потребитель посетивший ваше мероприятие и
              проникшийся созданным вами праздником будет преданно советовать
              ваш продукт своим друзьям и родным.
            </p>

            {/* <Button className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-3">
              Learn More About Us
            </Button> */}
          </div>

          {/* Image and Stats */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/about.jpg?height=400&width=500"
                width={500}
                height={400}
                alt="ProEvents.uz about us"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats Overlay */}
            <div className="md:absolute mt-10 -bottom-8 -left-8 bg-white rounded-lg shadow-xl p-6 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="h-5 w-5 text-brand-primary" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
