
"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  Sparkles,
  TrendingUp,
  Clock3,
  ShieldCheck,
  Database,
  Users,
  Gauge,
  CircleDollarSign,
  CalendarCheck,
  Zap,
} from "lucide-react";

const comparisons = [
  {
    label: "Cost Model",
    icon: CircleDollarSign,
    inHouse: "£34,200–£41,100 base salary, £40k–£75k OTE, fixed whatever the output",
    leadxdeal: "£900 one-time setup + £150 per qualified meeting",
  },
  {
    label: "Meetings / Month",
    icon: CalendarCheck,
    inHouse: "Unpredictable, dependent on one person’s performance",
    leadxdeal: "20–30+ qualified meetings targeted every month",
  },
  {
    label: "Time to Launch",
    icon: Clock3,
    inHouse: "3–6 months to recruit, hire and ramp up",
    leadxdeal: "Campaign live in 1–2 weeks",
  },
  {
    label: "Your Involvement",
    icon: Users,
    inHouse: "Full-time job recruiting, training and managing",
    leadxdeal: "We run research, outreach, qualification and follow-ups",
  },
  {
    label: "Tools, CRM & Data",
    icon: Database,
    inHouse: "£5,000+ a year (Sales Navigator, Apollo and more)",
    leadxdeal: "Stack included: LinkedIn, Clay, Brevo, Apollo, ZoomInfo",
  },
  {
    label: "Lead Exclusivity",
    icon: ShieldCheck,
    inHouse: "Often built on shared or bought lists",
    leadxdeal: "100% yours, never shared",
  },
  {
    label: "Commercial Risk",
    icon: Gauge,
    inHouse: "100% on you; paid even if underperforming",
    leadxdeal: "Zero retainer; pay only for qualified meetings",
  },
  {
    label: "Unit Cost per Meeting",
    icon: CircleDollarSign,
    inHouse: "Unpredictable (£300–£600+)",
    leadxdeal: "Fixed at £150",
  },
  {
    label: "Scalability",
    icon: TrendingUp,
    inHouse: "Hire more = more headaches",
    leadxdeal: "Turn volume up when it works",
  },
  {
    label: "Predictability",
    icon: Zap,
    inHouse: "Hope-based forecasting",
    leadxdeal: "A calendar that fills like clockwork",
  },
];

function ComparisonRow({
  item,
  index,
}: {
  item: (typeof comparisons)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-70px",
  });

  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative grid grid-cols-1 overflow-hidden border-b border-zinc-200 last:border-b-0 dark:border-zinc-800/80 md:grid-cols-[0.7fr_1fr_1fr]"
    >
      {/* Label */}
      <div className="flex items-center gap-3 bg-zinc-50/80 p-5 dark:bg-zinc-950/50 sm:p-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 sm:h-11 sm:w-11">
          <Icon className="h-5 w-5 text-zinc-500" />
        </div>

        <span className="text-base font-semibold leading-6 text-zinc-800 dark:text-zinc-200 sm:text-lg">
          {item.label}
        </span>
      </div>

      {/* In-house */}
      <div className="relative border-t border-zinc-200 p-5 dark:border-zinc-800/80 md:border-l md:border-t-0 sm:p-6">
        <div className="mb-3 flex items-center gap-2 md:hidden">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10">
            <X className="h-3.5 w-3.5 text-red-500" />
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            In-House SDR
          </span>
        </div>

        <div className="flex gap-3">
          <div className="mt-0.5 hidden h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/10 md:flex">
            <X className="h-3.5 w-3.5 text-red-500" />
          </div>

          <p className="text-base leading-7 text-zinc-500 dark:text-zinc-400">
            {item.inHouse}
          </p>
        </div>
      </div>

      {/* LeadXDeal */}
      <div className="relative border-t border-[#E8FF00]/10 bg-[#E8FF00]/[0.025] p-5 dark:bg-[#E8FF00]/[0.02] md:border-l md:border-t-0 sm:p-6">
        {/* Highlight line */}
        <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-transparent via-[#E8FF00]/50 to-transparent" />

        <div className="mb-3 flex items-center gap-2 md:hidden">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E8FF00]/15">
            <Check className="h-3.5 w-3.5 text-[#94a300] dark:text-[#E8FF00]" />
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-[#8c9b00] dark:text-[#E8FF00]">
            LeadXDeal
          </span>
        </div>

        <div className="flex gap-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{
              delay: 0.15 + index * 0.04,
              type: "spring",
              stiffness: 250,
            }}
            className="mt-0.5 hidden h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8FF00]/15 md:flex"
          >
            <Check className="h-3.5 w-3.5 text-[#94a300] dark:text-[#E8FF00]" />
          </motion.div>

          <p className="text-base font-medium leading-7 text-zinc-800 dark:text-zinc-200">
            {item.leadxdeal}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function CompareOptions() {
  const headerRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="relative overflow-hidden bg-zinc-50 py-20 dark:bg-[#050505] sm:py-28 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(128,128,128,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(128,128,128,.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="absolute left-1/2 top-[-250px] h-[550px] w-[800px] -translate-x-1/2 rounded-full bg-[#E8FF00]/5 blur-[150px]" />

        <div className="absolute -right-40 top-1/2 h-80 w-80 rounded-full bg-[#007F83]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div
          ref={headerRef}
          className="mx-auto mb-12 max-w-4xl text-center sm:mb-16 lg:mb-18"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70"
          >
            <Sparkles className="h-4 w-4 text-[#99a900] dark:text-[#E8FF00]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400 sm:text-sm">
              Compare Options
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-zinc-950 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Why Businesses Choose{" "}
            <span className="text-[#9aaa00] dark:text-[#E8FF00]">
              LeadXDeal
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="mt-6 text-base font-medium leading-7 text-zinc-500 dark:text-zinc-400 sm:text-lg sm:leading-8"
          >
            Real process. Real economics. Real growth.
          </motion.p>
        </div>

        {/* COMPARISON */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.05)] dark:border-zinc-800 dark:bg-[#0a0a0a] dark:shadow-[0_25px_80px_rgba(0,0,0,0.3)] sm:rounded-[2rem]"
        >
          {/* Desktop header */}
          <div className="hidden grid-cols-[0.7fr_1fr_1fr] border-b border-zinc-200 md:grid dark:border-zinc-800">
            <div className="p-6 lg:p-7">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                What Matters
              </span>
            </div>

            <div className="border-l border-zinc-200 bg-zinc-50/80 p-6 dark:border-zinc-800 dark:bg-zinc-950/60 lg:p-7">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                In-House SDR Reality
              </span>
            </div>

            <div className="relative border-l border-[#E8FF00]/20 bg-[#E8FF00]/[0.05] p-6 dark:bg-[#E8FF00]/[0.035] lg:p-7">
              {/* Header glow */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[#E8FF00]/5 blur-2xl" />

              <div className="relative flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E8FF00]">
                  <Sparkles className="h-4 w-4 text-black" />
                </div>

                <div>
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-[#8e9d00] dark:text-[#E8FF00]">
                    LeadXDeal
                  </span>

                  <span className="mt-1 block text-sm font-medium text-zinc-500">
                    Results
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison rows */}
          <div>
            {comparisons.map((item, index) => (
              <ComparisonRow
                key={item.label}
                item={item}
                index={index}
              />
            ))}
          </div>

          {/* Bottom brand strip */}
          <div className="relative overflow-hidden border-t border-zinc-200 bg-zinc-50 px-6 py-5 dark:border-zinc-800 dark:bg-zinc-950/70 sm:px-8">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.8,
                delay: 0.4,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-[#E8FF00] to-transparent"
            />

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center">
              <span className="text-sm text-zinc-500 sm:text-base">
                Less fixed overhead
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-[#E8FF00] sm:block" />

              <span className="text-sm text-zinc-500 sm:text-base">
                More qualified conversations
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-[#E8FF00] sm:block" />

              <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-300 sm:text-base">
                Pay for results
              </span>
            </div>
          </div>
        </motion.div>

        {/* ILLUSTRATIVE COMPARISON */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-10 max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#0c0c0c] sm:rounded-[1.75rem] sm:p-9 lg:p-10">
            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#E8FF00]/5 blur-[90px]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E8FF00]/10">
                    <TrendingUp className="h-5 w-5 text-[#96a500] dark:text-[#E8FF00]" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400 sm:text-sm">
                    Illustrative SDR Comparison
                  </span>
                </div>

                <p className="max-w-3xl text-base leading-7 text-zinc-500 dark:text-zinc-400 sm:text-lg sm:leading-8">
                  A typical UK SDR costs around{" "}
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    £57.5k OTE midpoint
                  </strong>{" "}
                  plus roughly 25% for employer costs, tools and management,
                  which is over{" "}
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                    £70,000 a year
                  </strong>{" "}
                  before ramp-up, and it is paid whether or not meetings are
                  booked.
                </p>
              </div>

              {/* Cost visual */}
              <div className="min-w-0 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/60 sm:min-w-[260px] sm:p-6">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Year One
                  </span>

                  <span className="text-xs font-medium text-zinc-400">
                    20 meetings / month
                  </span>
                </div>

                <div className="flex flex-wrap items-end gap-2">
                  <span className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
                    £36,900
                  </span>

                  <span className="pb-1 text-sm text-zinc-500">
                    LeadXDeal
                  </span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "52%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.3,
                    }}
                    className="h-full rounded-full bg-[#E8FF00]"
                  />
                </div>

                <p className="mt-3 text-xs leading-5 text-zinc-500">
                  £900 + (£150 × 20 × 12)
                </p>
              </div>
            </div>

            <div className="relative mt-7 border-t border-zinc-100 pt-6 dark:border-zinc-800">
              <p className="text-sm leading-7 text-zinc-500 dark:text-zinc-400">
                At 20 meetings a month, LeadXDeal costs £900 + (£150 × 20 ×
                12) = £36,900 in year one, and the cost only rises when
                meetings are actually delivered.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-12 text-center"
        >
          <Link
            href="/market-check"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#E8FF00] px-6 py-4 text-base font-bold text-black shadow-[0_0_35px_rgba(232,255,0,0.12)] transition-all duration-300 hover:shadow-[0_0_55px_rgba(232,255,0,0.3)] sm:px-8 sm:text-lg"
          >
            See How We Compare for Your Business

            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
