"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  HeartPulse,
  CalendarDays,
  Cloud,
  GraduationCap,
  Package,
  Briefcase,
} from "lucide-react";

const industries = [
  { icon: HeartPulse, label: "Health & Wellness" },
  { icon: CalendarDays, label: "Online Events & Summits" },
  { icon: Cloud, label: "SaaS" },
  { icon: GraduationCap, label: "Education" },
  { icon: Package, label: "Digital Products" },
  { icon: Briefcase, label: "Professional Services" },
];

export default function WhoWeWorkWith() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#D6216E] uppercase tracking-wider">
            Who We Work With
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mt-3 mb-5">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our network is built around a handful of industries where
            affiliate and email marketing perform best.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 bg-[#FFF5F7] rounded-xl flex items-center justify-center">
                <industry.icon className="w-6 h-6 text-[#D6216E]" aria-hidden="true" />
              </div>
              <p className="font-semibold text-[#222222] text-sm">
                {industry.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
