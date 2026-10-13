"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const industries = [
  "IT Managed Services",
  "B2B SaaS",
  "Cybersecurity",
  "Recruitment / Staffing",
  "Digital Marketing Agencies",
  "Commercial Cleaning",
  "Accounting / CFO Services",
  "Manufacturing Suppliers",
  "Commercial Real Estate",
];

const industryRows = [
  industries.slice(0, 5),
  industries.slice(4, 9).reverse(),
  [industries[2], industries[5], industries[0], industries[7], industries[3]],
];

function IndustryPill({ name }: { name: string }) {
  return (
    <div className="group flex min-h-[54px] shrink-0 items-center gap-3 rounded-full border border-[#E8FF00]/20 bg-[#E8FF00]/[0.035] px-5 py-3 transition-all duration-300 hover:border-[#E8FF00]/60 hover:bg-[#E8FF00]/[0.09] hover:shadow-[0_0_30px_rgba(232,255,0,0.08)] sm:min-h-[62px] sm:px-7">
      <span className="h-2 w-2 shrink-0 rounded-full bg-[#E8FF00] shadow-[0_0_12px_rgba(232,255,0,0.65)] transition-transform duration-300 group-hover:scale-125" />

      <span className="whitespace-nowrap text-sm font-bold tracking-wide text-[#E8FF00] sm:text-base">
        {name}
      </span>

      <ArrowUpRight className="h-4 w-4 shrink-0 text-[#20BFC2]/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#20BFC2]" />
    </div>
  );
}

export default function LogoCloud() {
  return (
    <section className="relative isolate overflow-hidden border-y border-white/[0.08] bg-[#070909] py-16 text-white sm:py-20 lg:py-24">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Ambient lime glow */}
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.3, 0.55, 0.3],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#E8FF00]/[0.08] blur-[130px]"
      />

      {/* Turquoise glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-[#20BFC2]/[0.09] blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl px-5 text-center sm:mb-14 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#E8FF00]/20 bg-[#E8FF00]/[0.045] px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8FF00] opacity-50" />
              <span className="relative h-2 w-2 rounded-full bg-[#E8FF00]" />
            </span>

            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E8FF00] sm:text-xs">
              Industries We Serve
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl font-black leading-tight tracking-[-0.045em] text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Built for your industry.
            <span className="mt-1 block text-[#E8FF00]">
              Designed for growth.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8"
          >
            From specialist service providers to growing B2B companies, explore
            the industries where targeted prospecting and qualified sales
            conversations can make a difference.
          </motion.p>
        </div>

        {/* Animated industry ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative space-y-4 overflow-hidden py-3 sm:space-y-5"
        >
          {/* Row 1 — moves left */}
          <InfiniteSlider
            gap={14}
            speed={35}
            speedOnHover={18}
          >
            {industryRows[0].map((industry, index) => (
              <IndustryPill key={`row1-${index}`} name={industry} />
            ))}
          </InfiniteSlider>

          {/* Row 2 — moves right */}
          <InfiniteSlider
            gap={14}
            speed={30}
            speedOnHover={16}
            reverse
          >
            {industryRows[1].map((industry, index) => (
              <IndustryPill key={`row2-${index}`} name={industry} />
            ))}
          </InfiniteSlider>

          {/* Row 3 — moves left */}
          <InfiniteSlider
            gap={14}
            speed={38}
            speedOnHover={20}
          >
            {industryRows[2].map((industry, index) => (
              <IndustryPill key={`row3-${index}`} name={industry} />
            ))}
          </InfiniteSlider>

          {/* Soft edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#070909] to-transparent sm:w-20 lg:w-28" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#070909] to-transparent sm:w-20 lg:w-28" />

          {/* Progressive blur */}
          <ProgressiveBlur
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 sm:w-16 lg:w-24"
            direction="left"
            blurIntensity={1}
          />

          <ProgressiveBlur
            className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 sm:w-16 lg:w-24"
            direction="right"
            blurIntensity={1}
          />
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-10 h-px w-2/3 max-w-2xl origin-center bg-gradient-to-r from-transparent via-[#20BFC2]/50 to-transparent sm:mt-12"
        />

        <p className="mt-5 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
          Targeted outreach · Qualified conversations · B2B growth
        </p>
      </div>
    </section>
  );
}