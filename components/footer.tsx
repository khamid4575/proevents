import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            {/* <h3 className="text-2xl font-bold text-brand-accent mb-4">
              PRO EVENTS AND FORUMS
            </h3> */}
            <Image
              src="/logo-white.png"
              alt="Pro Events and Forums"
              width={250}
              height={50}
              className="mb-4"
            />
            <p className="text-gray-300 mb-4 leading-relaxed">
              Создавайте незабываемые моменты с помощью первоклассных услуг по организации мероприятий в Ташкенте
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Партнеры
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Свадьбы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Корпоративные мероприятия
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Конференции и форумы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Социальные мероприятия
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контактная информация</h4>
            <div className="space-y-3">
              <div className="flex items-center group cursor-pointer">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0 text-brand-accent transition-colors group-hover:text-white" />
                <span className="text-gray-300 transition-colors group-hover:text-white text-sm">
                  Ташкент, Узбекистан
                </span>
              </div>
              <div className="flex items-center group cursor-pointer">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-brand-accent transition-colors group-hover:text-white" />
                <span className="text-gray-300 transition-colors group-hover:text-white text-sm">
                  +998 90 123 45 67
                </span>
              </div>
              <div className="flex items-center group cursor-pointer">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0 text-brand-accent transition-colors group-hover:text-white" />
                <span className="text-gray-300 transition-colors group-hover:text-white text-sm">
                  info@proevents.uz
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} PRO EVENTS AND FORUMS. Все права защищены |
            <a href="#" className="hover:text-white transition-colors ml-1">
              Политика конфиденциальности
            </a>{" "}
            |
            <a href="#" className="hover:text-white transition-colors ml-1">
              Условия обслуживания
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
