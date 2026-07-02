"use client";

import { Button } from "@/components/ui/Button";
import { TrendingUp, Mail, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const handlePartnerClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLearnMoreClick = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <motion.div
          className="absolute top-10 right-[8%] w-80 h-80 bg-[#E91E63]/10 rounded-full blur-3xl"
          animate={{ y: [0, 24, 0], x: [0, -12, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-[6%] w-[26rem] h-[26rem] bg-[#F06292]/10 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, 16, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-56 h-56 bg-[#EC407A]/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white border border-[#E91E63]/20 shadow-sm rounded-full px-4 py-1.5 mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#D6216E]" aria-hidden="true" />
              <span className="text-sm font-semibold text-[#D6216E]">
                Affiliate Marketing • Email Marketing
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-[3.75rem] xl:text-7xl font-bold text-[#222222] leading-[1.08] mb-7 text-balance">
              Helping Businesses Grow Through Strategic Marketing Partnerships
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              We help businesses extend their reach through strategic affiliate
              partnerships and targeted email marketing campaigns — connecting
              quality products with the right audiences through
              performance-driven, GoHighLevel-powered campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="primary" onClick={handlePartnerClick}>
                Partner With Us
              </Button>
              <Button size="lg" variant="secondary" onClick={handleLearnMoreClick}>
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63]/15 to-[#F06292]/15 rounded-3xl blur-xl" />
              <div className="relative grid grid-cols-3 gap-4 p-8">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <TrendingUp className="w-12 h-12 text-[#D6216E] mb-2" aria-hidden="true" />
                  <p className="text-sm font-semibold text-gray-700">Growth</p>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
                  className="bg-white p-6 rounded-2xl shadow-lg mt-12"
                >
                  <Mail className="w-12 h-12 text-[#F06292] mb-2" aria-hidden="true" />
                  <p className="text-sm font-semibold text-gray-700">
                    Email Marketing
                  </p>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <Users className="w-12 h-12 text-[#D6216E] mb-2" aria-hidden="true" />
                  <p className="text-sm font-semibold text-gray-700">
                    Partnerships
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
