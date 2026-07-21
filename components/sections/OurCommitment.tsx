"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, HeartHandshake, BarChart3 } from "lucide-react";

const commitments = [
  {
    icon: ShieldCheck,
    title: "Ethical affiliate marketing",
    description:
      "We disclose partnerships clearly and never rely on misleading claims to drive clicks.",
  },
  {
    icon: HeartHandshake,
    title: "Products we believe in",
    description:
      "We're selective about what we promote. If it isn't something we'd recommend to a friend, we pass.",
  },
  {
    icon: BarChart3,
    title: "Measurable value",
    description:
      "Every campaign is judged on real numbers (opens, clicks, and conversions), not assumptions.",
  },
];

export default function OurCommitment() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#D6216E] uppercase tracking-wider">
            Our Commitment
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mt-3 mb-6">
            How We Operate
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Affiliate marketing works best when it's built on trust. We hold
            ourselves to a simple standard: promote what's genuinely useful,
            communicate honestly about results, and build relationships meant
            to last beyond a single campaign.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {commitments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 bg-[#FFF5F7] rounded-2xl flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-[#D6216E]" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-[#222222] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
