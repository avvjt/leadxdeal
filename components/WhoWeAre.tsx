"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Check,
  Target,
  Linkedin,
  Bot,
  UserCheck,
  CalendarCheck,
  Workflow,
  Search,
  Sparkles,
  ShieldCheck,
  Zap,
  Users,
  BarChart3,
} from "lucide-react";

const combineItems = [
  { title: "Targeted B2B prospecting", icon: Target },
  { title: "LinkedIn, cold calling and email outreach", icon: Linkedin },
  { title: "Multi-channel lead generation", icon: BarChart3 },
  { title: "AI-powered sales automation", icon: Bot },
  { title: "BANT lead qualification", icon: UserCheck },
  { title: "Appointment setting", icon: CalendarCheck },
  { title: "CRM and calendar automation", icon: Workflow },
  { title: "Human-led follow-up and campaign management", icon: Users },
];

const expertise = [
  "BANT lead generation",
  "Appointment setting",
  "AI-powered LinkedIn outreach",
  "Automated email marketing",
  "High-volume cold calling",
  "Sales prospecting",
  "LinkedIn Sales Navigator",
  "Apollo.io",
  "ZoomInfo",
  "Follow-up management",
  "Email and contact list building",
  "Market and web research",
  "Cold messaging",
  "Lead qualification",
  "Sales pipeline and CRM management",
];

const whyLeadXDeal = [
  {
    title: "Experience since 2022.",
    description:
      "Prospecting, outreach, lead qualification and appointment generation.",
    icon: Sparkles,
  },
  {
    title: "Qualified, not random.",
    description:
      "We measure success by relevant conversations, not contacts collected.",
    icon: ShieldCheck,
  },
  {
    title: "Multi-channel outreach.",
    description:
      "LinkedIn + email + AI automation + follow-up + CRM, not a single channel.",
    icon: Zap,
  },
  {
    title: "Your ICP, your rules.",
    description:
      "You set the industries, titles, geography and criteria.",
    icon: Target,
  },
  {
    title: "Performance-based model.",
    description:
      "Your risk is reduced. Our incentives are aligned with yours.",
    icon: BarChart3,
  },
  {
    title: "You sell. We build the pipeline.",
    description:
      "Your team does what it does best: closing deals.",
    icon: TrendingIcon,
  },
];

function TrendingIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 3v18h18" />
      <path d="m7 16 4-5 3 3 5-7" />
    </svg>
  );
}

export default function WhoWeAre() {
  const heroRef = useRef<HTMLDivElement>(null);
  const combineRef = useRef<HTMLDivElement>(null);
  const expertiseRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, {
    once: true,
    margin: "-100px",
  });

  const combineInView = useInView(combineRef, {
    once: true,
    margin: "-100px",
  });

  const expertiseInView = useInView(expertiseRef, {
    once: true,
    margin: "-100px",
  });

  const whyInView = useInView(whyRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-[#050505] sm:py-28">
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

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[-250px] h-[600px] w-[850px] -translate-x-1/2 rounded-full bg-[#E8FF00]/5 blur-[160px]"
        />

        <div className="absolute -left-48 top-1/3 h-96 w-96 rounded-full bg-[#20BFC2]/5 blur-[140px]" />
        <div className="absolute -right-48 bottom-0 h-96 w-96 rounded-full bg-[#E8FF00]/5 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Hero / Who We Are */}
        <div
          ref={heroRef}
          className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20"
        >
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8FF00] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E8FF00]" />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                Who We Are
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-zinc-950 dark:text-white sm:text-5xl lg:text-6xl"
            >
              Your Outsourced
              <span className="block bg-gradient-to-r from-zinc-500 via-zinc-800 to-zinc-500 bg-clip-text text-transparent dark:from-zinc-500 dark:via-zinc-200 dark:to-zinc-600">
                Sales Development Team
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-7 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-8"
            >
              LeadXDeal has been providing lead generation and appointment
              setting services since 2022, helping businesses identify
              prospects, reach decision-makers and create qualified sales
              opportunities. We convert BANT-qualified leads into booked
              meetings, and every lead we provide is exclusive and never shared.
            </motion.p>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative mt-9 overflow-hidden rounded-2xl border border-[#E8FF00]/20 bg-[#E8FF00]/5 p-6"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-[#E8FF00]" />

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8FF00]/10">
                  <Target className="h-5 w-5 text-[#99a800] dark:text-[#E8FF00]" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8d9b00] dark:text-[#E8FF00]">
                    Our Goal
                  </span>

                  <p className="mt-2 text-base leading-7 text-zinc-700 dark:text-zinc-300">
                    We don&apos;t just generate leads. We create conversations
                    with people who could actually buy from you, and book the
                    meeting.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — sales development system visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-10 rounded-full bg-[#E8FF00]/5 blur-[80px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.08)] dark:border-zinc-800 dark:bg-[#0b0b0b] dark:shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-8">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-5 dark:border-zinc-800">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                      LeadXDeal Engine
                    </span>

                    <p className="mt-1 text-base font-semibold text-zinc-900 dark:text-white">
                      Sales Development
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 rounded-full bg-[#E8FF00]/10 px-2.5 py-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E8FF00]" />

                    <span className="text-[10px] font-bold text-[#8d9c00] dark:text-[#E8FF00]">
                      ACTIVE
                    </span>
                  </div>
                </div>

                <div className="relative mt-8 space-y-3">
                  {[
                    {
                      icon: Search,
                      label: "Research",
                      sub: "Find decision-makers",
                    },
                    {
                      icon: Linkedin,
                      label: "Outreach",
                      sub: "Start conversations",
                    },
                    {
                      icon: UserCheck,
                      label: "Qualify",
                      sub: "Apply BANT criteria",
                    },
                    {
                      icon: CalendarCheck,
                      label: "Book",
                      sub: "Meeting hits your calendar",
                    },
                  ].map((step, index) => {
                    const StepIcon = step.icon;

                    return (
                      <motion.div
                        key={step.label}
                        initial={{ opacity: 0, x: 25 }}
                        animate={heroInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: 0.55 + index * 0.12,
                        }}
                        className="relative flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-3.5 dark:border-zinc-800 dark:bg-zinc-900/60"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
                          <StepIcon className="h-5 w-5 text-zinc-500 dark:text-[#E8FF00]" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                            {step.label}
                          </p>

                          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                            {step.sub}
                          </p>
                        </div>

                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8FF00]/10">
                          <Check className="h-3.5 w-3.5 text-[#94a300] dark:text-[#E8FF00]" />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-7 rounded-xl border border-[#20BFC2]/20 bg-[#20BFC2]/5 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                        The outcome
                      </p>

                      <p className="mt-1 text-base font-semibold text-zinc-900 dark:text-white">
                        Qualified sales meetings
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#20BFC2]/10">
                      <CalendarCheck className="h-5 w-5 text-[#007F83] dark:text-[#20BFC2]" />
                    </div>
                  </div>

                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={heroInView ? { width: "100%" } : {}}
                      transition={{ duration: 1.5, delay: 1 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#20BFC2] to-[#E8FF00]"
                    />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-5 -left-3 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-xl dark:border-zinc-800 dark:bg-zinc-900 sm:-left-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E8FF00]/15">
                    <Target className="h-4 w-4 text-[#8d9b00] dark:text-[#E8FF00]" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-zinc-900 dark:text-white">
                      BANT Qualified
                    </p>

                    <p className="mt-1 text-[10px] text-zinc-500 dark:text-zinc-400">
                      Focused on buyer intent
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* What We Combine */}
        <div
          ref={combineRef}
          className="mt-24 border-t border-zinc-200 pt-16 dark:border-zinc-800 sm:mt-32 sm:pt-24"
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={combineInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#99a900] dark:text-[#E8FF00]">
                What We Combine
              </span>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                A complete system for creating sales opportunities.
              </h3>

              <p className="mt-5 text-base leading-7 text-zinc-500 dark:text-zinc-400">
                Lead generation works best when research, outreach,
                qualification and follow-up work together. We bring these
                activities into one coordinated process.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8FF00]/10">
                  <Workflow className="h-5 w-5 text-[#99a900] dark:text-[#E8FF00]" />
                </div>

                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Research. Connect. Qualify. Book.
                </p>
              </div>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2">
              {combineItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    animate={combineInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                    whileHover={{ y: -4 }}
                    className="group flex min-h-[100px] items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4 transition-all duration-300 hover:border-[#E8FF00]/30 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-[#E8FF00]/20"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 transition-colors group-hover:bg-[#E8FF00]/10 dark:bg-zinc-800">
                      <Icon className="h-5 w-5 text-zinc-500 group-hover:text-[#9aaa00] dark:text-zinc-400 dark:group-hover:text-[#E8FF00]" />
                    </div>

                    <span className="text-sm font-medium leading-6 text-zinc-700 dark:text-zinc-300">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Skills & Expertise */}
        <div
          ref={expertiseRef}
          className="mt-24 border-t border-zinc-200 pt-16 dark:border-zinc-800 sm:mt-32 sm:pt-24"
        >
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#99a900] dark:text-[#E8FF00]">
                Skills &amp; Expertise
              </span>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                Expertise behind every campaign.
              </h3>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-500 dark:text-zinc-400">
                From prospect research to CRM management, our campaigns combine
                the skills required to turn cold prospects into qualified sales
                conversations.
              </p>
            </motion.div>

            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {expertise.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={expertiseInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.035 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="cursor-default rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-xs font-medium text-zinc-600 transition-colors hover:border-[#E8FF00]/40 hover:bg-[#E8FF00]/5 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:border-[#E8FF00]/20 dark:hover:text-zinc-200 sm:text-sm"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-20 sm:mt-24"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-[#0b0b0b] sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#E8FF00]/5 blur-[100px]" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#99a900] dark:text-[#E8FF00]">
                  Our Tech Stack
                </span>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">
                  Technology behind the pipeline.
                </h3>

                <p className="mt-4 text-base leading-7 text-zinc-500 dark:text-zinc-400">
                  LinkedIn, Clay, Brevo and more: the same stack behind every
                  campaign. It powers ICP and target-account research,
                  decision-maker identification and verified data, LinkedIn
                  outreach automation, email marketing and follow-up sequences,
                  cold calling support and CRM/calendar automation.
                </p>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[
                    "LinkedIn",
                    "Clay",
                    "Brevo",
                    "Apollo",
                    "ZoomInfo",
                    "CRM + Calendar",
                  ].map((tool, index) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.08,
                      }}
                      whileHover={{ y: -4 }}
                      className="flex min-h-[80px] items-center justify-center rounded-2xl border border-zinc-200 bg-white px-3 text-center text-sm font-semibold text-zinc-700 shadow-sm transition-colors hover:border-[#E8FF00]/30 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300"
                    >
                      {tool}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why LeadXDeal */}
        <div
          ref={whyRef}
          className="mt-24 border-t border-zinc-200 pt-16 dark:border-zinc-800 sm:mt-32 sm:pt-24"
        >
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={whyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#99a900] dark:text-[#E8FF00]">
                Why LeadXDeal
              </span>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                Built around one simple idea.
              </h3>

              <p className="mt-5 text-base leading-7 text-zinc-500 dark:text-zinc-400">
                You sell. We build the pipeline.
              </p>
            </motion.div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyLeadXDeal.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={whyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white p-6 transition-all duration-500 hover:border-[#E8FF00]/30 hover:shadow-xl dark:border-zinc-800 dark:bg-[#0b0b0b]"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#E8FF00]/0 blur-3xl transition-all duration-700 group-hover:bg-[#E8FF00]/10" />

                  <div className="relative">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900">
                        <Icon className="h-5 w-5 text-zinc-500 transition-colors group-hover:text-[#9aaa00] dark:text-zinc-400 dark:group-hover:text-[#E8FF00]" />
                      </div>

                      <span className="font-mono text-xs text-zinc-300 dark:text-zinc-700">
                        0{index + 1}
                      </span>
                    </div>

                    <h4 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-white">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-base leading-7 text-zinc-500 dark:text-zinc-400">
                      {item.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E8FF00]/10">
                        <Check className="h-3.5 w-3.5 text-[#95a400] dark:text-[#E8FF00]" />
                      </div>

                      <span className="text-xs font-medium text-zinc-400">
                        LeadXDeal advantage
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Final CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center sm:mt-24"
        >
          <a
            href={`https://wa.me/917483266259?text=${encodeURIComponent(
              "Hi LeadXDeal! 👋\n\nI'd like to build a predictable B2B sales pipeline for my business.\n\nI'm interested in learning how you can help with:\n• Exclusive B2B lead generation\n• Reaching the right decision-makers\n• BANT-qualified sales meetings\n• Multi-channel outreach and follow-ups\n• Creating a consistent flow of sales opportunities\n\nMy business details:\nBusiness name: \nWebsite: \nIndustry: \nTarget market: \nCurrent lead generation method: \nMonthly meeting target: \nMain sales challenge: \n\nCould you recommend a suitable strategy and share your pricing and onboarding process?\n\nThank you!"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discuss building your sales pipeline with LeadXDeal on WhatsApp"
            className="group inline-flex items-center gap-3 rounded-full bg-[#E8FF00] px-7 py-4 text-base font-bold text-black shadow-[0_0_40px_rgba(232,255,0,0.12)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(232,255,0,0.3)]"
          >
            Build My Sales Pipeline
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <p className="mt-4 text-xs text-zinc-400">
            You sell. We build the pipeline.
          </p>
        </motion.div>
      </div>
    </section>
  );
}