"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Check,
  SearchX,
  UserX,
  Rocket,
  Clock3,
  TrendingUp,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "Eliminate Cold Prospecting.",
    description:
      "Stop spending your best hours searching for prospects and building lists. We do the prospecting so your team can focus on closing.",
    icon: SearchX,
    accent: "Prospecting handled",
  },
  {
    number: "02",
    title: "Stop Chasing Bunk Leads.",
    description:
      "No random lists, no shared leads, no tyre-kickers. Get exclusive, BANT-qualified prospects who have agreed to talk.",
    icon: UserX,
    accent: "Qualified conversations",
  },
  {
    number: "03",
    title: "Launch in Days, Not Months.",
    description:
      "Our systems are ready to deploy. Campaigns launch within 1–2 weeks, versus 3–6 months to recruit and ramp a new SDR.",
    icon: Rocket,
    accent: "1–2 week launch",
  },
  {
    number: "04",
    title: "Reclaim Your Time.",
    description:
      "We handle research, outreach, follow-ups and scheduling. You just show up to the meetings.",
    icon: Clock3,
    accent: "Your team closes",
  },
  {
    number: "05",
    title: "Scale Without Hiring.",
    description:
      "Get SDR output without the payroll. Grow your pipeline without growing your headcount. Scale up only when it works.",
    icon: TrendingUp,
    accent: "Output without payroll",
  },
  {
    number: "06",
    title: "Your ICP, Your Rules.",
    description:
      "You define industries, company size, geography, job titles and qualification criteria. We build the campaign around your ideal customer.",
    icon: SlidersHorizontal,
    accent: "Built around your ICP",
  },
];

function BenefitCard({
  benefit,
  index,
}: {
  benefit: (typeof benefits)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const Icon = benefit.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        className="relative h-full overflow-hidden rounded-[1.6rem] border border-zinc-200 bg-white p-6 transition-all duration-500 group-hover:border-[#E8FF00]/40 group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.07)] dark:border-zinc-800 dark:bg-[#0c0c0c] dark:group-hover:border-[#E8FF00]/20 dark:group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)] sm:p-7"
      >
        {/* Hover glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#E8FF00]/0 blur-3xl transition-all duration-700 group-hover:bg-[#E8FF00]/10" />

        {/* Top row */}
        <div className="relative mb-8 flex items-center justify-between">
          <span className="font-mono text-[11px] font-bold tracking-widest text-zinc-400 transition-colors group-hover:text-[#9baa00] dark:group-hover:text-[#E8FF00]">
            {benefit.number}
          </span>

          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 transition-all duration-500 group-hover:border-[#E8FF00]/30 group-hover:bg-[#E8FF00]/10 dark:border-zinc-800 dark:bg-zinc-900">
            <Icon className="h-[18px] w-[18px] text-zinc-500 transition-colors duration-500 group-hover:text-[#9baa00] dark:text-zinc-400 dark:group-hover:text-[#E8FF00]" />
          </div>
        </div>

        {/* Title */}
        <h3 className="relative max-w-xs text-xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-[22px]">
          {benefit.title}
        </h3>

        {/* Description */}
        <p className="relative mt-4 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
          {benefit.description}
        </p>

        {/* Bottom */}
        <div className="relative mt-7 flex items-center gap-2 border-t border-zinc-100 pt-5 dark:border-zinc-800">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E8FF00]/15">
            <Check className="h-3 w-3 text-[#94a300] dark:text-[#E8FF00]" />
          </div>

          <span className="text-[11px] font-medium text-zinc-500">
            {benefit.accent}
          </span>
        </div>

        {/* Animated bottom line */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : {}}
          transition={{
            duration: 0.8,
            delay: 0.3 + index * 0.08,
          }}
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#E8FF00] to-transparent"
        />
      </motion.div>
    </motion.div>
  );
}

export default function BenefitsSection() {
  const headerRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-[#050505] sm:py-32">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(128,128,128,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(128,128,128,.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Main glow */}
        <div className="absolute left-1/2 top-[-250px] h-[550px] w-[800px] -translate-x-1/2 rounded-full bg-[#E8FF00]/5 blur-[150px]" />

        {/* Side glows */}
        <div className="absolute -left-40 top-1/2 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#E8FF00]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div
          ref={headerRef}
          className="mx-auto mb-16 max-w-4xl text-center sm:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#9aaa00] dark:text-[#E8FF00]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              Your Benefits
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="text-4xl font-semibold tracking-[-0.045em] text-zinc-950 dark:text-white sm:text-5xl lg:text-6xl"
          >
            How You Can Benefit
            <span className="block bg-gradient-to-r from-zinc-500 via-zinc-800 to-zinc-500 bg-clip-text text-transparent dark:from-zinc-500 dark:via-zinc-200 dark:to-zinc-600">
              from LeadXDeal
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-500 dark:text-zinc-400 sm:text-base"
          >
            Stop building your pipeline the hard way. LeadXDeal takes the
            repetitive work off your team&apos;s plate and turns it into a
            predictable meeting engine.
          </motion.p>
        </div>

        {/* BENEFIT GRID */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.number}
              benefit={benefit}
              index={index}
            />
          ))}
        </div>

        {/* CENTER STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mt-20 max-w-5xl sm:mt-24"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-[#0b0b0b]">
            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-[500px] -translate-x-1/2 rounded-full bg-[#E8FF00]/8 blur-[100px]" />

            {/* Animated top border */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute left-0 right-0 top-0 h-px origin-center bg-gradient-to-r from-transparent via-[#E8FF00] to-transparent"
            />

            <div className="relative px-7 py-10 text-center sm:px-12 sm:py-14 lg:px-20">
              <div className="mb-6 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-zinc-300 dark:bg-zinc-700" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#98a700] dark:text-[#E8FF00]">
                  The LeadXDeal Advantage
                </span>

                <span className="h-px w-10 bg-zinc-300 dark:bg-zinc-700" />
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-3xl lg:text-4xl">
                Your team should be{" "}
                <span className="text-[#9baa00] dark:text-[#E8FF00]">
                  closing.
                </span>
                <br />
                Not prospecting.
              </h3>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500 dark:text-zinc-400">
                We handle the research, outreach, follow-ups, qualification
                and scheduling. Your sales team gets to spend more time doing
                what actually drives revenue.
              </p>

              {/* Mini process */}
              <div className="mx-auto mt-9 flex max-w-2xl flex-wrap items-center justify-center gap-2">
                {[
                  "Research",
                  "Outreach",
                  "Qualify",
                  "Book",
                  "You Close",
                ].map((step, index) => (
                  <React.Fragment key={step}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2 + index * 0.1,
                        duration: 0.4,
                      }}
                      className={`rounded-full px-3.5 py-2 text-[10px] font-semibold ${index === 4
                          ? "bg-[#E8FF00] text-black"
                          : "border border-zinc-200 bg-white text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
                        }`}
                    >
                      {step}
                    </motion.div>

                    {index < 4 && (
                      <ArrowRight className="h-3 w-3 text-zinc-300 dark:text-zinc-700" />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="mt-9"
              >
                <a
                  href={`https://wa.me/917483266259?text=${encodeURIComponent(
                    "Hi LeadXDeal! 👋\n\nI'd like to start generating qualified B2B sales meetings for my business.\n\nI'm interested in learning how your team can help with:\n• Exclusive, qualified B2B leads\n• Reaching the right decision-makers\n• BANT-qualified sales meetings\n• Building a predictable sales pipeline\n\nMy business details:\nBusiness name: \nWebsite: \nIndustry: \nTarget market: \nMonthly meeting target: \n\nCould you share your process, pricing, and the next steps to get started?\n\nThank you!"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Start generating qualified sales meetings with LeadXDeal on WhatsApp"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#E8FF00] px-6 py-3.5 text-sm font-bold text-black shadow-[0_0_35px_rgba(232,255,0,0.12)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(232,255,0,0.3)]"
                >
                  Start Generating Meetings
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}