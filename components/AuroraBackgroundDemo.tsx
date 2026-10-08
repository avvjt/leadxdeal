"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground className="min-h-[520px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex max-w-4xl flex-col items-center justify-center px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-zinc-700 backdrop-blur-md dark:border-white/10 dark:bg-black/30 dark:text-zinc-300"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#E8FF00] shadow-[0_0_10px_rgba(232,255,0,0.8)]" />
          Ready to grow your pipeline?
        </motion.div>

        {/* Heading */}
        <h2 className="text-4xl font-black tracking-tight text-black md:text-6xl lg:text-7xl dark:text-white">
          Turn Prospects Into
          <br />
          <span className="relative inline-block">
            Qualified Meetings.
            <span className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-[#E8FF00]" />
          </span>
        </h2>

        {/* Description */}
        <p className="max-w-2xl py-6 text-base leading-7 text-zinc-700 md:text-xl md:leading-8 dark:text-zinc-300">
          Build a predictable outbound pipeline with exclusive leads,
          BANT-qualified prospects and meetings booked directly into your
          calendar.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/book-a-call"
            className="group inline-flex items-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-800 hover:shadow-2xl dark:bg-[#E8FF00] dark:text-black dark:hover:bg-[#d9ef00]"
          >
            <CalendarCheck className="h-4 w-4" />
            Book My Free Strategy Call
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/market-check"
            className="group inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/50 px-7 py-4 text-sm font-bold text-black backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:border-white/15 dark:bg-black/20 dark:text-white dark:hover:bg-black/40"
          >
            Check My Market
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-medium text-zinc-500 dark:text-zinc-400"
        >
          <span>£0 monthly retainer</span>
          <span className="hidden sm:block">•</span>
          <span>£150 per qualified meeting</span>
          <span className="hidden sm:block">•</span>
          <span>No long-term contract</span>
        </motion.div>
      </motion.div>
    </AuroraBackground>
  );
}