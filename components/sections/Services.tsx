"use client";

import { Card } from "@/components/ui/Card";
import { Target, Mail, Handshake, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: Target,
    title: "Affiliate Marketing",
    description:
      "We promote quality products through our established network, connecting them with audiences that are already looking for what you offer. Every placement is chosen deliberately, and performance is tracked from click to conversion.",
    gradient: "from-pink-50 to-pink-100",
    iconBg: "bg-gradient-to-br from-[#E91E63] to-[#C2185B]",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Using GoHighLevel, we build and run email campaigns that are segmented, sequenced, and written to convert, not just to inform. Every send is measured, so we know what's working and adjust quickly when it isn't.",
    gradient: "from-rose-50 to-rose-100",
    iconBg: "bg-gradient-to-br from-[#F06292] to-[#E91E63]",
  },
  {
    icon: Handshake,
    title: "Business Partnerships",
    description:
      "We work as an extension of your team, not a vendor you check in with once a quarter. Partnerships with summit organizers, creators, and SaaS companies are built to last multiple campaigns, not just one launch.",
    gradient: "from-red-50 to-red-100",
    iconBg: "bg-gradient-to-br from-[#EC407A] to-[#D81B60]",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleLearnMore = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#D6216E] uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mt-3 mb-5">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three focused services, executed well, rather than a long list of
            things we do half-heartedly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card
                className={`h-full flex flex-col text-left p-8 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br ${service.gradient} border-none`}
              >
                <div
                  className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-md`}
                >
                  <service.icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[#222222] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <button
                  onClick={handleLearnMore}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D6216E] hover:gap-2.5 transition-all duration-300 self-start"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
