"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav
      aria-label="Primary"
      className="fixed top-4 left-0 right-0 z-50 px-4 transition-all duration-300"
    >
      <div
        className={cn(
          "container mx-auto max-w-7xl rounded-2xl transition-all duration-300",
          isScrolled
            ? "bg-white shadow-2xl"
            : "bg-white/95 backdrop-blur-sm shadow-lg"
        )}
      >
        <div className="flex items-center justify-between h-20 px-6">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-3">
              <Image
                src="/marimedia-logo.svg"
                alt="Mari Media"
                width={110}
                height={55}
                className="object-contain"
                priority
                loading="eager"
              />
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-[#222222]">
                  Mari Media
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Growth Partners
                </div>
              </div>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative px-4 py-2 font-medium transition-colors rounded-lg",
                    isActive
                      ? "text-[#C2185B]"
                      : "text-[#222222] hover:text-[#C2185B]"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full bg-[#E91E63]" />
                  )}
                </button>
              );
            })}
            <Button
              size="sm"
              className="ml-4"
              onClick={() => handleNavClick("#contact")}
            >
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden text-[#222222] p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 rounded-b-2xl py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "block w-full text-left px-6 py-3 transition-colors",
                    isActive
                      ? "text-[#C2185B] bg-pink-50 font-semibold"
                      : "text-[#222222] hover:text-[#C2185B] hover:bg-gray-50"
                  )}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="px-6 pt-2">
              <Button
                className="w-full"
                onClick={() => handleNavClick("#contact")}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
