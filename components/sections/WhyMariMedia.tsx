"use client";

import { Card } from "@/components/ui/Card";
import { Target, MessageSquare, Handshake, Gem, Rocket, UserCheck } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: Target,
    title: "Performance-focused strategy",
    description: "Campaigns are built around measurable outcomes, not vanity metrics.",
    color: "text-[#D6216E]",
    bgColor: "bg-pink-50",
  },
  {
    icon: MessageSquare,
    title: "Transparent communication",
    description: "You'll always know what's running, what's working, and why.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Handshake,
    title: "Long-term partnerships",
    description: "We aim to work with you across multiple campaigns, not just one.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Gem,
    title: "Quality over quantity",
    description: "We'd rather send fewer, well-targeted campaigns than flood inboxes.",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    icon: Rocket,
    title: "Modern marketing tools",
    description: "Built on GoHighLevel, so campaigns are trackable from day one.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: UserCheck,
    title: "Personalized campaigns",
    description: "Every partnership is shaped around your audience and offer.",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
  },
];

export default function WhyMariMedia() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#D6216E] uppercase tracking-wider">
            Why Mari Media
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mt-3 mb-5">
            Why Partner With Mari Media
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We operate like a partner you'll want to work with again, not a
            vendor you have to manage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className={`p-6 h-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${feature.bgColor} border-none`}>
                <feature.icon className={`w-9 h-9 ${feature.color} mb-4`} aria-hidden="true" />
                <h3 className="text-lg font-bold text-[#222222] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
