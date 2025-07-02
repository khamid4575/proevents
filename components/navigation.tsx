"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Language from "./Language";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#services", label: "Услуги" },
    // { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "О нас" },
    { href: "#partners", label: "Партнеры" },
    { href: "#contact", label: "Контакты" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 lg:w-1/4">
            {isScrolled ? (<Image src="/logo.png" alt="ProEvents.uz" width={250} height={100}/>): (
              <Image src="/logo-white.png" alt="ProEvents.uz" width={250} height={100}/>
            )}
            {/* <h1 className="text-2xl font-bold text-brand-primary">ProEvents.uz</h1> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block w-1/2">
            <div className="flex items-baseline justify-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`${
                    isScrolled
                      ? "text-gray-700 hover:text-brand-primary"
                      : "text-gray-200 hover:text-white"
                  }  px-3 py-2 text-sm font-medium transition-colors duration-200`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex w-1/4 justify-end">
            <Language textColor={isScrolled ? "text-gray-700" : "text-gray-200"} />
            {/* <Button className="bg-brand-primary hover:bg-brand-secondary text-white">
              Get a Quote
            </Button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <div
              // variant="ghost"
              // size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? "text-gray-700" : "text-gray-200"}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-700" : "text-gray-200"}`} />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-brand-primary block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <Language textColor="text-gray-700" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
