import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { FloatingChat } from "@/components/floating-chat";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { Navigation } from "@/components/navigation";
import { PartnersSection } from "@/components/partners-section";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <ServicesSection />
      {/* <PortfolioSection /> */}
      {/* <TestimonialsSection /> */}
      <AboutSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
      <FloatingChat />
    </main>
  );
}
