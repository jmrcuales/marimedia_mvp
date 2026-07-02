"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Target, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "What we do",
    description:
      "We run strategic affiliate and email marketing campaigns that connect quality products with audiences that are genuinely interested in them.",
  },
  {
    icon: ShieldCheck,
    title: "Why trust us",
    description:
      "We only promote what we'd stand behind ourselves, and we communicate clearly at every stage of a partnership — no black boxes, no vague reporting.",
  },
  {
    icon: TrendingUp,
    title: "Why partner with us",
    description:
      "We optimize for long-term results, not one-off sends. Our incentives are aligned with yours: we grow when your campaigns perform.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#D6216E] uppercase tracking-wider">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mt-3 mb-8">
            A focused media partner, not a generalist agency
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Mari Media is an affiliate marketing media company. We work behind
            the scenes with health summits, SaaS platforms, course creators,
            and membership programs — running targeted email campaigns that
            put real products in front of the right audiences, powered by
            GoHighLevel.
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mt-4">
            Our approach is built around transparency and long-term
            partnerships rather than one-off promotions. As we grow, we're
            expanding into broader digital marketing services — but our focus
            today is deliberately narrow: strategic affiliate marketing and
            email marketing, done well.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              className="bg-[#FFF5F7] rounded-2xl p-6 border border-[#E91E63]/10"
            >
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <pillar.icon className="w-5 h-5 text-[#D6216E]" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-[#222222] mb-2">
                {pillar.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
