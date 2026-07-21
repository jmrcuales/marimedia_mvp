"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Target, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "We begin by understanding your business, audience, and growth objectives to ensure every campaign is aligned with your goals.",
  },
  {
    number: "02",
    icon: Target,
    title: "Strategize",
    description:
      "We identify the most effective affiliate partnerships and email marketing opportunities to maximize reach and engagement.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execute",
    description:
      "We launch carefully planned promotional campaigns using proven marketing strategies and modern automation tools.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Optimize & Grow",
    description:
      "We continuously monitor performance, refine our approach, and uncover new opportunities to support sustainable business growth.",
  },
];

export default function OurApproach() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      id="approach"
      className="relative py-24 md:py-32 px-4 bg-white overflow-hidden"
    >
      {/* Decorative background elements inspired by the Mari Media mark */}
      <div className="absolute inset-0 -z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-16 left-[8%] w-20 h-20 rounded-2xl bg-[#7A9BD8] opacity-[0.06] rotate-12" />
        <div className="absolute bottom-24 left-[20%] w-14 h-14 rounded-xl bg-[#F5A7C4] opacity-[0.07] -rotate-6" />
        <div className="absolute top-1/3 right-[10%] w-24 h-24 rounded-2xl bg-[#F5A7C4] opacity-[0.06] rotate-6" />
        <div className="absolute bottom-16 right-[22%] w-12 h-12 rounded-xl bg-[#7A9BD8] opacity-[0.07] rotate-12" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-[#D6216E] uppercase tracking-wider">
            Our Approach
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mt-3 mb-5">
            A Connected Process, Not a Checklist
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every partnership follows the same four stages, each one building
            directly on the last.
          </p>
        </motion.div>

        {/* Desktop / tablet: horizontal timeline */}
        <div className="hidden lg:block relative">
          <div
            className="absolute h-0.5 bg-gray-200 rounded-full"
            style={{ top: "32px", left: "12.5%", right: "12.5%" }}
          >
            <motion.div
              className="h-full origin-left rounded-full bg-gradient-to-r from-[#7A9BD8] via-[#E91E63] to-[#F06292]"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
            />
          </div>

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.55, delay: 0.35 + index * 0.22 }}
                className="flex flex-col items-center text-center px-2"
              >
                <div className="relative z-10 mb-5">
                  <motion.div
                    initial={{ scale: 0.75 }}
                    animate={isInView ? { scale: 1 } : { scale: 0.75 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.45 + index * 0.22,
                      ease: "backOut",
                    }}
                    className="w-16 h-16 rounded-full bg-white shadow-lg border-2 border-[#E91E63]/15 flex items-center justify-center"
                  >
                    <step.icon className="w-7 h-7 text-[#D6216E]" aria-hidden="true" />
                  </motion.div>
                  <span className="absolute -top-2 -right-2 z-20 w-7 h-7 rounded-full bg-gradient-to-br from-[#E91E63] to-[#C2185B] text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {step.number}
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#D6216E] uppercase tracking-wider mb-1.5">
                  Step {index + 1}
                </span>
                <h3 className="text-lg font-bold text-[#222222] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / small tablet: vertical timeline */}
        <div className="lg:hidden">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-5">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0.75, opacity: 0 }}
                    animate={
                      isInView ? { scale: 1, opacity: 1 } : { scale: 0.75, opacity: 0 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: index * 0.18,
                      ease: "backOut",
                    }}
                    className="w-14 h-14 rounded-full bg-white shadow-lg border-2 border-[#E91E63]/15 flex items-center justify-center"
                  >
                    <step.icon className="w-6 h-6 text-[#D6216E]" aria-hidden="true" />
                  </motion.div>
                  <span className="absolute -top-1.5 -right-1.5 z-20 w-6 h-6 rounded-full bg-gradient-to-br from-[#E91E63] to-[#C2185B] text-white text-[10px] font-bold flex items-center justify-center shadow-md">
                    {step.number}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <motion.div
                    className="w-0.5 flex-1 my-1.5 origin-top rounded-full bg-gradient-to-b from-[#E91E63]/50 to-[#F06292]/20"
                    style={{ minHeight: "40px" }}
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + index * 0.18,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.18 }}
                className={index < steps.length - 1 ? "pb-9 pt-1.5" : "pt-1.5"}
              >
                <span className="text-xs font-semibold text-[#D6216E] uppercase tracking-wider">
                  Step {index + 1}
                </span>
                <h3 className="text-lg font-bold text-[#222222] mt-1 mb-1.5">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
