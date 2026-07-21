"use client";

import { Mail, Share2, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { href: "#about", label: "About", isRoute: false },
  { href: "#services", label: "Services", isRoute: false },
  { href: "#approach", label: "Our Approach", isRoute: false },
  { href: "/blog", label: "Health Blog", isRoute: true },
  { href: "#contact", label: "Contact", isRoute: false },
];

const currentServices = [
  "Affiliate Marketing",
  "Email Marketing",
  "Business Partnerships",
];

const futureVision = [
  "Website Development",
  "Marketing Automation",
  "CRM Solutions",
  "AI Marketing",
  "Lead Generation",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/${href}`;
    }
  };

  return (
    <footer className="bg-[#222222] text-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/marimedia-logo.svg"
                alt="Mari Media"
                width={80}
                height={40}
                className="object-contain"
              />
              <h3 className="text-xl font-bold">Mari Media</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              An affiliate marketing media company helping businesses extend
              their reach through strategic partnerships and targeted email
              campaigns.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.isRoute ? (
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#F06292] transition-colors text-sm text-left"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-gray-400 hover:text-[#F06292] transition-colors text-sm text-left"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">
              Current Services
            </h4>
            <ul className="space-y-2.5">
              {currentServices.map((service) => (
                <li key={service} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">
              Future Vision
            </h4>
            <ul className="space-y-2.5">
              {futureVision.map((item) => (
                <li key={item} className="text-gray-500 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 border-t border-gray-800">
          <a
            href="mailto:hello@marimedia.co"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-[#F06292] transition-colors text-sm font-medium"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            hello@marimedia.co
          </a>

          <div className="flex gap-3">
            <a
              href="mailto:hello@marimedia.co"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E91E63] transition-colors"
              aria-label="Email Mari Media"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E91E63] transition-colors"
              aria-label="Mari Media on social media"
            >
              <Share2 className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E91E63] transition-colors"
              aria-label="Mari Media website"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Mari Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
