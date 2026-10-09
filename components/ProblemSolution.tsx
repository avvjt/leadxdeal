"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  AlertTriangle,
  TrendingUp,
  Users,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

const problems = [
  {
    number: "01",
    label: "THE PROBLEM",
    title: "Inconsistent Pipeline Kills Growth",
    description:
      "Most B2B companies rely on referrals, inbound signups and the occasional burst of outreach. That means feast-or-famine quarters. You cannot scale what you cannot predict, and hoping the next demo request arrives is not a growth strategy.",
    solutionLabel: "THE SOLUTION",
    solutionTitle: "Predictable Pipeline System",
    solutionDescription:
      "Our multi-channel system (LinkedIn + email + expert cold calling, backed by AI-powered automation) produces a steady flow of BANT-qualified meetings every month. Your calendar fills on a schedule, not on luck.",
    icon: TrendingUp,
  },
  {
    number: "02",
    label: "THE PROBLEM",
    title: "Random Lead Lists Burn Your Budget",
    description:
      "Bought lists and shared lead marketplaces hand the same contact to you and several competitors. You pay for volume, race to the bottom on price, and spend your best hours sorting out who is actually worth a call.",
    solutionLabel: "THE SOLUTION",
    solutionTitle: "100% Exclusive, Qualified Leads",
    solutionDescription:
      "Every prospect we deliver is exclusively yours and never shared. Each one has been checked against your agreed qualification criteria before it reaches your calendar. You are the only voice they hear from.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    label: "THE PROBLEM",
    title: "Hiring SDRs Is Expensive & Risky",
    description:
      "The average UK BDR base salary is £34,200 (£41,100 in London) and typical SDR/BDR OTE runs £40k–£75k, before recruitment, onboarding, software, management, holidays and employer costs. You pay in full whether they book meetings or not.",
    solutionLabel: "THE SOLUTION",
    solutionTitle: "SDR Output Without The Payroll",
    solutionDescription:
      "Get the output of a dedicated sales development team for a fraction of the fixed cost. Our specialists and systems handle prospecting, outreach, qualification and appointment setting. You pay only when a qualified meeting lands.",
    icon: Users,
  },
];

function RevealLine() {
  return (
    <div className="relative hidden h-20 w-px overflow-hidden bg-zinc-200 dark:bg-zinc-800 md:block">
      <motion.div
        animate={{ y: ["-100%", "300%"] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-0 h-1/2 w-full bg-gradient-to-b from-transparent via-[#E8FF00] to-transparent"
      />
    </div>
  );
}

function ProblemCard({
  item,
  index,
}: {
  item: (typeof problems)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -inset-4 rounded-[3rem] bg-[#E8FF00]/0 blur-3xl transition-all duration-700 group-hover:bg-[#E8FF00]/5" />

      <div className="relative grid gap-0 overflow-hidden rounded-[2rem] border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-[#0d0d0d] md:grid-cols-[1fr_80px_1fr]">
        {/* PROBLEM */}
        <motion.div
          whileHover={{ backgroundColor: "rgba(239,68,68,0.025)" }}
          className="relative p-7 sm:p-9 lg:p-12"
        >
          {/* Number */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-8 items-center rounded-full border border-red-500/20 bg-red-500/5 px-3 text-[10px] font-bold tracking-[0.2em] text-red-500">
                {item.label}
              </span>
            </div>

            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
              {item.number}
            </span>
          </div>

          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/5">
            <AlertTriangle className="h-5 w-5 text-red-500" />
          </div>

          <h3 className="max-w-md text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">
            {item.title}
          </h3>

          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-[15px]">
            {item.description}
          </p>

          {/* Pain indicators */}
          <div className="mt-8 flex flex-wrap gap-2">
            {["Unpredictable", "Expensive", "Time-consuming"].map(
              (tag, tagIndex) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.45 + index * 0.12 + tagIndex * 0.08,
                  }}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-[11px] font-medium text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-500"
                >
                  {tag}
                </motion.span>
              ),
            )}
          </div>
        </motion.div>

        {/* CENTER TRANSITION */}
        <div className="relative flex items-center justify-center border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-[#0a0a0a] md:border-x md:border-y-0">
          <RevealLine />

          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{
              delay: 0.35 + index * 0.12,
              duration: 0.6,
              type: "spring",
              stiffness: 180,
            }}
            className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#E8FF00]/40 bg-[#E8FF00] shadow-[0_0_30px_rgba(232,255,0,0.18)]"
          >
            <ArrowRight className="h-4 w-4 text-black md:rotate-0 rotate-90" />
          </motion.div>
        </div>

        {/* SOLUTION */}
        <motion.div
          whileHover={{ backgroundColor: "rgba(232,255,0,0.025)" }}
          className="relative overflow-hidden p-7 sm:p-9 lg:p-12"
        >
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#E8FF00]/5 blur-3xl transition-all duration-700 group-hover:bg-[#E8FF00]/10" />

          <div className="mb-8 flex items-center justify-between">
            <span className="flex items-center gap-2 rounded-full border border-[#E8FF00]/20 bg-[#E8FF00]/5 px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-[#8fa000] dark:text-[#E8FF00]">
              <Sparkles className="h-3 w-3" />
              {item.solutionLabel}
            </span>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8FF00]/10">
              <Icon className="h-4 w-4 text-[#9aaa00] dark:text-[#E8FF00]" />
            </div>
          </div>

          <h3 className="relative max-w-md text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">
            {item.solutionTitle}
          </h3>

          <p className="relative mt-5 max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-[15px]">
            {item.solutionDescription}
          </p>

          <div className="relative mt-8 flex items-center gap-3">
            <div className="flex -space-x-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{
                    delay: 0.55 + index * 0.12 + i * 0.08,
                  }}
                  className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-zinc-900 dark:border-[#0d0d0d]"
                >
                  <Check className="h-3 w-3 text-[#E8FF00]" />
                </motion.div>
              ))}
            </div>

            <span className="text-xs font-medium text-zinc-500">
              Built around your growth
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ProblemSolution() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-[#050505] sm:py-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#E8FF00]/5 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(128,128,128,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(128,128,128,.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div
          ref={headingRef}
          className="mx-auto mb-16 max-w-4xl text-center sm:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8FF00] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E8FF00]" />
            </span>

            <span className="text-[10px] font-bold tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              THE PROBLEM
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Why Your Business Is Stuck
            <span className="block bg-gradient-to-r from-zinc-500 via-zinc-800 to-zinc-500 bg-clip-text text-transparent dark:from-zinc-500 dark:via-zinc-300 dark:to-zinc-600">
              (And How to Fix It Fast)
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-500 dark:text-zinc-400 sm:text-base"
          >
            Most growth problems are not caused by a lack of leads.
            They&apos;re caused by a lack of a predictable system for
            turning the right prospects into qualified conversations.
          </motion.p>
        </div>

        {/* PROBLEM → SOLUTION CARDS */}
        <div className="space-y-8">
          {problems.map((item, index) => (
            <ProblemCard key={item.number} item={item} index={index} />
          ))}
        </div>

        {/* FINAL STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-24 max-w-5xl text-center sm:mt-32"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-12 lg:p-16">
            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-[#E8FF00]/10 blur-[100px]" />

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E8FF00]/30 bg-[#E8FF00]/10"
              >
                <Zap className="h-6 w-6 text-[#a5b600] dark:text-[#E8FF00]" />
              </motion.div>

              <h3 className="mx-auto max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-zinc-950 dark:text-white sm:text-3xl lg:text-4xl">
                Stop asking{" "}
                <span className="text-zinc-400">
                  &ldquo;How much does an SDR cost?&rdquo;
                </span>
                <br className="hidden sm:block" />
                <span className="mt-2 block">
                  Start asking{" "}
                  <span className="text-[#a5b600] dark:text-[#E8FF00]">
                    &ldquo;How much does one qualified sales opportunity cost
                    me?&rdquo;
                  </span>
                </span>
              </h3>

              {/* CUSTOM GROWTH PLAN — WHATSAPP CTA */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="mt-9"
              >
                <a
                  href={`https://wa.me/917483266259?text=${encodeURIComponent(
                    "Hi LeadXDeal! 👋\n\nI visited your website and would like to get a custom growth plan for my business.\n\nI'd like to discuss:\n• Generating exclusive B2B leads\n• Reaching the right decision-makers\n• BANT-qualified sales meetings\n• A lead generation strategy tailored to my market\n• Pricing and the performance-based model\n\nHere are my details:\nBusiness name: \nWebsite: \nIndustry: \nTarget market/location: \nMain sales growth challenge: \n\nCould you help me understand the best approach for my business?\n\nThank you!"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get your custom growth plan on WhatsApp"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#E8FF00] px-6 py-3.5 text-sm font-bold text-black shadow-[0_0_35px_rgba(232,255,0,0.15)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(232,255,0,0.3)]"
                >
                  Get Your Custom Growth Plan

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>

              <p className="mt-5 text-xs text-zinc-500">
                No retainer. No long-term contract. Pay for qualified meetings.
              </p>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}