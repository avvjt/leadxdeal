"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  UserRound,
  CircleAlert,
  Target,
  MessageSquare,
  CalendarCheck,
  Check,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const criteria = [
  {
    number: "01",
    title: "Right Company",
    description: "Matches your agreed Ideal Customer Profile.",
    icon: Building2,
  },
  {
    number: "02",
    title: "Right Person",
    description: "A relevant decision-maker or buying stakeholder.",
    icon: UserRound,
  },
  {
    number: "03",
    title: "Right Need",
    description: "Has a relevant business problem, requirement or use case.",
    icon: CircleAlert,
  },
  {
    number: "04",
    title: "Right Fit",
    description: "Meets the agreed qualification (BANT) criteria.",
    icon: Target,
  },
  {
    number: "05",
    title: "Right Intent",
    description: "Has agreed to discuss your solution.",
    icon: MessageSquare,
  },
  {
    number: "06",
    title: "Booked",
    description: "Meeting is scheduled directly into your calendar.",
    icon: CalendarCheck,
  },
];

function QualificationCard({
  item,
  index,
}: {
  item: (typeof criteria)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 45 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      {/* Connection line */}
      {index < criteria.length - 1 && (
        <div className="absolute left-[27px] top-[76px] z-0 hidden h-[calc(100%+32px)] w-px bg-gradient-to-b from-zinc-300 to-transparent dark:from-zinc-800 lg:block">
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{
              duration: 0.7,
              delay: 0.25 + index * 0.08,
            }}
            className="w-full bg-gradient-to-b from-[#E8FF00] to-transparent"
          />
        </div>
      )}

      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        className="relative z-10 flex gap-5 rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-500 group-hover:border-[#E8FF00]/40 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:border-zinc-800 dark:bg-[#0d0d0d] dark:group-hover:border-[#E8FF00]/20 dark:group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-6"
      >
        {/* Number / icon */}
        <div className="relative shrink-0">
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <Icon className="h-5 w-5 text-zinc-600 transition-colors duration-300 group-hover:text-[#a2b400] dark:text-zinc-400 dark:group-hover:text-[#E8FF00]" />

            {/* Green verification dot */}
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#E8FF00] dark:border-[#0d0d0d]">
              <Check className="h-2.5 w-2.5 text-black" />
            </span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold tracking-wider text-[#9aa900] dark:text-[#E8FF00]">
              {item.number}
            </span>

            <span className="h-px w-5 bg-zinc-200 dark:bg-zinc-800" />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-400">
              Verified
            </span>
          </div>

          <h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-xl">
            {item.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
            {item.description}
          </p>
        </div>

        {/* Verification indicator */}
        <div className="hidden shrink-0 items-center sm:flex">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isInView
                ? {
                  scale: 1,
                  opacity: 1,
                }
                : {}
            }
            transition={{
              delay: 0.4 + index * 0.08,
              type: "spring",
              stiffness: 250,
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8FF00]/10"
          >
            <Check className="h-4 w-4 text-[#99a800] dark:text-[#E8FF00]" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function QualifiedMeeting() {
  const headerRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="relative overflow-hidden bg-zinc-50 py-24 dark:bg-[#080808] sm:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(128,128,128,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(128,128,128,.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Lime glow */}
        <div className="absolute left-1/2 top-[-200px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#E8FF00]/5 blur-[150px]" />

        {/* Side glow */}
        <div className="absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div
          ref={headerRef}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-[#9aa900] dark:text-[#E8FF00]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              Qualification Framework
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
            What Counts As A{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Qualified Meeting?</span>

              <motion.span
                initial={{ width: 0 }}
                animate={headerInView ? { width: "100%" } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                }}
                className="absolute bottom-1 left-0 -z-0 h-2 rounded-full bg-[#E8FF00]/50 sm:h-3"
              />
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
            Not every calendar booking is a sales opportunity. A meeting only
            counts when it meets{" "}
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">
              all six criteria
            </span>{" "}
            below, so you never pay for an unqualified prospect.
          </motion.p>
        </div>

        {/* MAIN QUALIFICATION AREA */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          {/* LEFT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative lg:sticky lg:top-32 lg:self-start"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-[#0d0d0d] sm:p-9">
              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#E8FF00]/10 blur-[90px]" />

              {/* Header */}
              <div className="relative flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                  Meeting Verification
                </span>

                <div className="flex items-center gap-1.5 rounded-full bg-[#E8FF00]/10 px-2.5 py-1">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E8FF00]" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#879500] dark:text-[#E8FF00]">
                    Active
                  </span>
                </div>
              </div>

              {/* Big number */}
              <div className="relative mt-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="text-[7rem] font-bold leading-none tracking-[-0.08em] text-zinc-950 dark:text-white sm:text-[8rem]"
                >
                  6
                </motion.div>

                <div className="mt-2 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#E8FF00]" />

                  <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    qualification criteria
                  </span>
                </div>
              </div>

              {/* Progress */}
              <div className="relative mt-12">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-zinc-500">
                    Qualification threshold
                  </span>

                  <span className="font-mono text-xs font-bold text-zinc-900 dark:text-white">
                    6 / 6
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.4,
                      delay: 0.3,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full bg-[#E8FF00] shadow-[0_0_15px_rgba(232,255,0,0.35)]"
                  />
                </div>
              </div>

              {/* Bottom statement */}
              <div className="relative mt-10 border-t border-zinc-100 pt-6 dark:border-zinc-800">
                <div className="flex gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8FF00]/10">
                    <Check className="h-3.5 w-3.5 text-[#9aaa00] dark:text-[#E8FF00]" />
                  </div>

                  <p className="text-xs leading-6 text-zinc-500 dark:text-zinc-400">
                    Every meeting must pass every checkpoint before it becomes
                    a billable qualified meeting.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -right-3 hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl dark:border-zinc-800 dark:bg-zinc-900 sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E8FF00]">
                  <Check className="h-4 w-4 text-black" />
                </div>

                <div>
                  <div className="text-[10px] font-bold text-zinc-900 dark:text-white">
                    QUALIFIED
                  </div>
                  <div className="text-[9px] text-zinc-500">
                    Ready for your calendar
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT CRITERIA */}
          <div className="space-y-4">
            {criteria.map((item, index) => (
              <QualificationCard
                key={item.number}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>


        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center sm:mt-20"
        >
          <div className="inline-flex flex-col items-center">
            <div className="mb-5 flex items-center gap-2 text-xs text-zinc-500">
              <Sparkles className="h-3.5 w-3.5 text-[#9aaa00] dark:text-[#E8FF00]" />
              <span>Only qualified opportunities make it through.</span>
            </div>

            <a
              href={`https://wa.me/917483266259?text=${encodeURIComponent(
                "Hi LeadXDeal! 👋\n\nI'd like to understand how your BANT qualification process works.\n\nCould you explain how you assess a prospect's:\n• Budget\n• Authority\n• Need\n• Timeline\n\nI'd also like to know how you ensure the meetings are relevant to my business and target audience.\n\nMy industry: \nTarget market: \n\nLooking forward to learning more. Thank you!"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ask LeadXDeal about its BANT qualification process on WhatsApp"
              className="group inline-flex items-center gap-3 rounded-full bg-[#E8FF00] px-6 py-3.5 text-sm font-bold text-black shadow-[0_0_35px_rgba(232,255,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(232,255,0,0.25)]"
            >
              See How We Qualify

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}