"use client";

import React, { useRef } from "react";
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
  TrendingUp,
} from "lucide-react";

const LIME = "#E8FF00";
const TURQUOISE = "#20BFC2";

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
    title: "Experience since 2022",
    description:
      "Prospecting, outreach, lead qualification and appointment generation.",
    icon: Sparkles,
  },
  {
    title: "Qualified, not random",
    description:
      "We measure success by relevant conversations, not contacts collected.",
    icon: ShieldCheck,
  },
  {
    title: "Multi-channel outreach",
    description:
      "LinkedIn, email, AI automation, follow-up and CRM work together.",
    icon: Zap,
  },
  {
    title: "Your ICP, your rules",
    description:
      "You define your industries, job titles, geography and ideal customers.",
    icon: Target,
  },
  {
    title: "Performance-based model",
    description:
      "Our incentives are aligned with generating relevant sales opportunities.",
    icon: BarChart3,
  },
  {
    title: "You sell. We build the pipeline.",
    description:
      "Your team focuses on conversations, relationships and closing deals.",
    icon: TrendingUp,
  },
];

const processSteps = [
  {
    icon: Search,
    label: "Research",
    sub: "Find the right decision-makers",
  },
  {
    icon: Linkedin,
    label: "Outreach",
    sub: "Start relevant conversations",
  },
  {
    icon: UserCheck,
    label: "Qualify",
    sub: "Apply BANT criteria",
  },
  {
    icon: CalendarCheck,
    label: "Book",
    sub: "Meetings reach your calendar",
  },
];

const tools = [
  "LinkedIn",
  "Clay",
  "Brevo",
  "Apollo",
  "ZoomInfo",
  "CRM + Calendar",
];

const sectionHeading =
  "text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl";

const sectionDescription =
  "text-lg leading-8 text-zinc-300 sm:text-xl sm:leading-9";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#20BFC2]/25 bg-[#20BFC2]/[0.08] px-4 py-2.5">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#20BFC2] opacity-60" />
        <span className="relative h-2.5 w-2.5 rounded-full bg-[#20BFC2]" />
      </span>

      <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#20BFC2]">
        {children}
      </span>
    </div>
  );
}

function AccentHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
      {children}
    </h3>
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
    <section className="relative isolate overflow-hidden bg-[#050707] py-24 sm:py-32 lg:py-36">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[-240px] h-[650px] w-[850px] -translate-x-1/2 rounded-full bg-[#E8FF00]/[0.07] blur-[150px]"
        />

        <div className="absolute -left-48 top-[30%] h-[450px] w-[450px] rounded-full bg-[#20BFC2]/[0.09] blur-[150px]" />

        <div className="absolute -right-48 bottom-[10%] h-[450px] w-[450px] rounded-full bg-[#E8FF00]/[0.045] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* HERO / WHO WE ARE */}
        <div
          ref={heroRef}
          className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>Who We Are</SectionLabel>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`${sectionHeading} max-w-3xl`}
            >
              Your Outsourced
              <span className="mt-2 block bg-gradient-to-r from-[#20BFC2] via-white to-[#E8FF00] bg-clip-text text-transparent">
                Sales Development Team
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className={`mt-8 max-w-2xl ${sectionDescription}`}
            >
              LeadXDeal has been providing lead generation and appointment
              setting services since 2022, helping businesses identify
              prospects, reach decision-makers and create qualified sales
              opportunities. We convert BANT-qualified leads into booked
              meetings, and every lead we provide is exclusive and never shared.
            </motion.p>

            {/* Mission card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative mt-10 overflow-hidden rounded-2xl border border-[#E8FF00]/20 bg-gradient-to-br from-[#E8FF00]/[0.09] to-[#20BFC2]/[0.045] p-6 shadow-[0_0_50px_rgba(232,255,0,0.035)] sm:p-8"
            >
              <div className="absolute bottom-0 left-0 top-0 w-1 bg-gradient-to-b from-[#E8FF00] to-[#20BFC2]" />

              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#E8FF00]/20 bg-[#E8FF00]/10">
                  <Target className="h-6 w-6 text-[#E8FF00]" />
                </div>

                <div>
                  <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#E8FF00]">
                    Our Goal
                  </span>

                  <p className="mt-3 text-lg leading-8 text-zinc-200 sm:text-xl sm:leading-9">
                    We don&apos;t just generate leads. We create conversations
                    with people who could actually buy from you, and book the
                    meeting.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* SALES DEVELOPMENT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-[#E8FF00]/[0.08] to-[#20BFC2]/[0.08] blur-[70px]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B1010]/95 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.5)] sm:p-8 lg:p-9">
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#20BFC2] to-[#E8FF00]" />

              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#20BFC2]">
                    LeadXDeal Engine
                  </span>

                  <p className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    Sales Development
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[#E8FF00]/20 bg-[#E8FF00]/[0.08] px-3 py-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#E8FF00]" />
                  <span className="text-xs font-extrabold tracking-wider text-[#E8FF00]">
                    ACTIVE
                  </span>
                </div>
              </div>

              <div className="relative mt-8 space-y-4">
                {processSteps.map((step, index) => {
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
                      className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-colors duration-300 hover:border-[#20BFC2]/30 hover:bg-[#20BFC2]/[0.04] sm:p-5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#E8FF00]/10 bg-[#E8FF00]/[0.07] transition-colors group-hover:bg-[#E8FF00]/[0.12]">
                        <StepIcon className="h-6 w-6 text-[#E8FF00]" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-lg font-bold text-white sm:text-xl">
                          {step.label}
                        </p>

                        <p className="mt-1 text-base leading-6 text-zinc-400">
                          {step.sub}
                        </p>
                      </div>

                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#20BFC2]/10">
                        <Check className="h-4 w-4 text-[#20BFC2]" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Outcome */}
              <div className="mt-7 rounded-2xl border border-[#20BFC2]/20 bg-gradient-to-r from-[#20BFC2]/[0.08] to-[#E8FF00]/[0.04] p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-zinc-400">
                      The outcome
                    </p>

                    <p className="mt-2 text-lg font-bold text-white sm:text-xl">
                      Qualified sales meetings
                    </p>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#20BFC2]/10">
                    <CalendarCheck className="h-6 w-6 text-[#20BFC2]" />
                  </div>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={heroInView ? { width: "100%" } : {}}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#20BFC2] to-[#E8FF00]"
                  />
                </div>
              </div>
            </div>

            {/* Floating qualification badge */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-6 left-4 rounded-2xl border border-white/10 bg-[#111818] px-5 py-4 shadow-2xl sm:-left-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8FF00]/10">
                  <Target className="h-5 w-5 text-[#E8FF00]" />
                </div>

                <div>
                  <p className="text-base font-bold text-white">
                    BANT Qualified
                  </p>

                  <p className="mt-1 text-sm text-zinc-400">
                    Focused on buyer intent
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* WHAT WE COMBINE */}
        <div
          ref={combineRef}
          className="mt-32 border-t border-white/10 pt-20 sm:mt-40 sm:pt-28"
        >
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={combineInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>What We Combine</SectionLabel>

              <AccentHeading>
                A complete system for creating sales opportunities.
              </AccentHeading>

              <p className={`mt-6 ${sectionDescription}`}>
                Lead generation works best when research, outreach,
                qualification and follow-up work together. We bring these
                activities into one coordinated process.
              </p>

              <div className="mt-9 flex items-center gap-4 rounded-xl border border-[#20BFC2]/20 bg-[#20BFC2]/[0.06] p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#20BFC2]/10">
                  <Workflow className="h-6 w-6 text-[#20BFC2]" />
                </div>

                <p className="text-base font-bold text-white sm:text-lg">
                  Research. Connect. Qualify. Book.
                </p>
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
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
                    whileHover={{ y: -5 }}
                    className="group flex min-h-[120px] items-center gap-4 rounded-2xl border border-white/[0.09] bg-[#0B1010] p-5 transition-all duration-300 hover:border-[#20BFC2]/35 hover:bg-[#0E1717] hover:shadow-[0_12px_40px_rgba(32,191,194,0.06)] sm:p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#E8FF00]/10 bg-[#E8FF00]/[0.06] transition-colors group-hover:bg-[#E8FF00]/[0.12]">
                      <Icon className="h-6 w-6 text-[#E8FF00]" />
                    </div>

                    <span className="text-base font-semibold leading-7 text-zinc-200 sm:text-lg">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SKILLS & EXPERTISE */}
        <div
          ref={expertiseRef}
          className="mt-32 border-t border-white/10 pt-20 sm:mt-40 sm:pt-28"
        >
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>Skills &amp; Expertise</SectionLabel>

              <AccentHeading>
                Expertise behind every campaign.
              </AccentHeading>

              <p className={`mx-auto mt-6 max-w-3xl ${sectionDescription}`}>
                From prospect research to CRM management, our campaigns combine
                the skills required to turn cold prospects into qualified sales
                conversations.
              </p>
            </motion.div>

            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {expertise.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={expertiseInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.035,
                  }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="cursor-default rounded-full border border-white/10 bg-[#0B1010] px-5 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-[#20BFC2]/40 hover:bg-[#20BFC2]/[0.08] hover:text-white sm:text-base"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* OUR TECH STACK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-28 sm:mt-36"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B1010] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.2)] sm:p-10 lg:p-14">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#20BFC2]/[0.08] blur-[100px]" />
            <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#E8FF00]/[0.045] blur-[100px]" />

            <div className="relative grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <SectionLabel>Our Tech Stack</SectionLabel>

                <AccentHeading>
                  Technology behind the pipeline.
                </AccentHeading>

                <p className={`mt-6 ${sectionDescription}`}>
                  LinkedIn, Clay, Brevo and more: the same stack behind every
                  campaign. It powers ICP and target-account research,
                  decision-maker identification, verified data, LinkedIn
                  outreach automation, email marketing, follow-up sequences,
                  cold calling support and CRM/calendar automation.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    whileHover={{ y: -5 }}
                    className="group relative flex min-h-[100px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] px-3 text-center text-base font-bold text-zinc-200 transition-all hover:border-[#20BFC2]/40 hover:bg-[#20BFC2]/[0.06] sm:min-h-[115px] sm:text-lg"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#20BFC2]/0 to-transparent transition-all group-hover:via-[#20BFC2]" />
                    {tool}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* WHY LEADXDEAL */}
        <div
          ref={whyRef}
          className="mt-32 border-t border-white/10 pt-20 sm:mt-40 sm:pt-28"
        >
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={whyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>Why LeadXDeal</SectionLabel>

              <AccentHeading>
                Built around one simple idea.
              </AccentHeading>

              <p className={`mx-auto mt-6 max-w-2xl ${sectionDescription}`}>
                You sell. We build the pipeline.
              </p>
            </motion.div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyLeadXDeal.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={whyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0B1010] p-7 transition-all duration-500 hover:border-[#20BFC2]/30 hover:shadow-[0_20px_60px_rgba(32,191,194,0.06)] sm:p-8"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#E8FF00]/0 blur-3xl transition-all duration-700 group-hover:bg-[#E8FF00]/[0.08]" />

                  <div className="relative">
                    <div className="mb-7 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E8FF00]/15 bg-[#E8FF00]/[0.07]">
                        <Icon className="h-7 w-7 text-[#E8FF00] transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      <span className="font-mono text-sm font-bold text-[#20BFC2]/50">
                        0{index + 1}
                      </span>
                    </div>

                    <h4 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                      {item.title}
                    </h4>

                    <p className="mt-4 text-base leading-8 text-zinc-400 sm:text-lg">
                      {item.description}
                    </p>

                    <div className="mt-7 flex items-center gap-3 border-t border-white/[0.08] pt-5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#20BFC2]/10">
                        <Check className="h-4 w-4 text-[#20BFC2]" />
                      </div>

                      <span className="text-sm font-semibold text-zinc-400">
                        LeadXDeal advantage
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* FINAL WHATSAPP CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-28 sm:mt-36"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-[#E8FF00]/20 bg-gradient-to-br from-[#101515] via-[#0B1010] to-[#102020] px-6 py-14 text-center shadow-[0_0_80px_rgba(32,191,194,0.05)] sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -left-20 -top-32 h-72 w-72 rounded-full bg-[#20BFC2]/[0.12] blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-36 -right-16 h-80 w-80 rounded-full bg-[#E8FF00]/[0.08] blur-[100px]" />

            <div className="relative mx-auto max-w-3xl">
              <SectionLabel>Ready to grow?</SectionLabel>

              <h3 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let&apos;s build your
                <span className="block bg-gradient-to-r from-[#20BFC2] via-white to-[#E8FF00] bg-clip-text text-transparent">
                  sales pipeline.
                </span>
              </h3>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl sm:leading-9">
                Tell us about your business, your target market and your sales
                goals. Let&apos;s explore the right approach for your team.
              </p>

              <a
                href={`https://wa.me/917483266259?text=${encodeURIComponent(
                  "Hi LeadXDeal! 👋\n\nI'd like to build a predictable B2B sales pipeline for my business.\n\nI'm interested in exclusive B2B lead generation, reaching the right decision-makers, BANT-qualified sales meetings and multi-channel outreach.\n\nMy business details:\nBusiness name: \nWebsite: \nIndustry: \nTarget market: \nCurrent lead generation method: \nMonthly meeting target: \nMain sales challenge: \n\nCould you recommend a suitable strategy and share your pricing and onboarding process?\n\nThank you!"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discuss building your sales pipeline with LeadXDeal on WhatsApp"
                className="group mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#E8FF00] px-8 py-4 text-base font-extrabold text-black shadow-[0_0_35px_rgba(232,255,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f0ff45] hover:shadow-[0_0_55px_rgba(232,255,0,0.25)] sm:text-lg"
              >
                Build My Sales Pipeline
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <p className="mt-5 text-sm font-medium text-zinc-500 sm:text-base">
                You sell. We build the pipeline.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}