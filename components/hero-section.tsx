"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import ColourfulText from "@/components/ui/colourful-text";
import {
  ArrowRight,
  Check,
  CalendarCheck,
  Target,
  Zap,
  TrendingUp,
  Users,
} from "lucide-react";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 18,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.2,
      },
    },
  },
};

const stats = [
  { value: "£150", label: "Per qualified meeting" },
  { value: "20–30+", label: "Target appointments / month" },
  { value: "2022", label: "Delivering since" },
  { value: "£0", label: "Monthly retainer" },
];

const industries = [
  "SaaS",
  "Fintech",
  "HR Tech",
  "Martech",
  "Professional Services",
];

const benefits = [
  "Exclusive leads — never shared",
  "Qualified meetings booked into your calendar",
  "Done-for-you LinkedIn, email & cold calling",
];

const floatingVariants = {
  animate: {
    y: [0, -12, 0],
    rotate: [0, 2, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-[#E8FF00]/10 text-[#E8FF00] ${className}`}
    >
      <Check className="h-3 w-3" strokeWidth={3} />
    </span>
  );
}

export default function HeroSection() {
  const marketMessage = encodeURIComponent(
    `Hi LeadXDeal! 👋

I visited your website and would like to check whether my target market is available for exclusive B2B leads and qualified sales meetings.

Could you please help me with:
• Market and industry availability
• Target audience and decision-maker coverage
• Lead generation and appointment-setting options

My target market:
Industry:
Target location:
Ideal customer profile:

Looking forward to hearing from you. Thank you!`
  );

  return (
    <main className="relative mx-3 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#070909] text-white shadow-[0_25px_100px_rgba(0,0,0,0.35)]">
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
            `,
            backgroundSize: "54px 54px",
          }}
        />

        {/* Top lime glow */}
        <motion.div
          animate={{
            x: [0, 70, -30, 0],
            y: [0, 25, -15, 0],
            scale: [1, 1.12, 0.95, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[320px] left-[15%] h-[650px] w-[650px] rounded-full bg-[#E8FF00]/[0.07] blur-[140px]"
        />

        {/* Turquoise side glow */}
        <motion.div
          animate={{
            x: [0, -60, 30, 0],
            y: [0, 40, -20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-260px] top-[20%] h-[550px] w-[550px] rounded-full bg-[#20BFC2]/[0.11] blur-[130px]"
        />

        {/* Lower ambient glow */}
        <motion.div
          animate={{
            opacity: [0.25, 0.55, 0.25],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-220px] left-[20%] h-[450px] w-[650px] rounded-full bg-[#007F83]/20 blur-[120px]"
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(0,0,0,0.42)_100%)]" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#070909] to-transparent" />
      </div>

      {/* HERO CONTENT */}
      <section className="relative z-10 w-full">
        <div className="mx-auto flex min-h-[calc(100vh-1.5rem)] w-full max-w-[1440px] flex-col items-center justify-center px-5 pb-16 pt-28 text-center sm:px-8 sm:pb-20 sm:pt-32 lg:items-start lg:px-14 lg:pb-24 lg:pt-36 xl:px-20">
          {/* BRAND BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="mb-7"
          >
            <div className="relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/[0.045] px-4 py-2.5 shadow-[0_0_35px_rgba(32,191,194,0.07)] backdrop-blur-xl sm:px-5">
              <motion.span
                aria-hidden="true"
                animate={{ x: ["-100%", "250%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#E8FF00]/15 to-transparent blur-sm"
              />

              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8FF00] opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E8FF00] shadow-[0_0_14px_rgba(232,255,0,0.9)]" />
              </span>

              <span className="relative text-xs font-black uppercase tracking-[0.19em] text-white sm:text-sm">
                LeadXDeal
              </span>

              <span className="relative h-4 w-px bg-white/15" />

              <span className="relative text-[10px] font-medium tracking-wide text-neutral-400 sm:text-xs">
                B2B Growth Engine
              </span>
            </div>
          </motion.div>

          {/* EYEBROW */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-5"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#20BFC2] sm:text-sm sm:tracking-[0.3em]">
              Where Leads Become{" "}
              <span className="text-[#E8FF00]">Deals</span>
            </p>
          </motion.div>

          {/* MAIN HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
    relative z-20 mx-auto w-full max-w-6xl
    text-center font-black
    leading-[1.08] tracking-[-0.055em]
    text-white
    text-[clamp(1.8rem,7.5vw,3.5rem)]
    sm:text-6xl md:text-7xl
    lg:mx-0 lg:text-left lg:text-8xl
    xl:text-[6.5rem]
  "
          >
            <span className="block whitespace-nowrap">
              Exclusive Leads.
            </span>

            <span className="mt-2 block whitespace-nowrap">
              <ColourfulText text="Booked Meetings." />
            </span>

            <span className="mt-2 block whitespace-nowrap">
              Zero Retainers.
            </span>
          </motion.h1>

          {/* HEADLINE SUPPORT */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-3xl text-center text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8 lg:mx-0 lg:text-left lg:text-xl"
          >
            BANT-qualified sales meetings delivered straight to your calendar
            every month — without shared leads, endless cold lists, or the cost
            of building an in-house SDR team.
          </motion.p>

          {/* APPOINTMENT GUARANTEE */}
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.75,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="relative z-20 mx-auto mt-8 w-full max-w-5xl overflow-hidden rounded-2xl border border-[#20BFC2]/30 bg-gradient-to-br from-[#20BFC2]/[0.11] via-[#101616]/90 to-[#E8FF00]/[0.045] p-5 text-center shadow-[0_0_55px_rgba(32,191,194,0.07)] backdrop-blur-xl sm:p-7 lg:mx-0 lg:p-8 lg:text-left"
          >
            {/* Animated accent line */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-0 top-0 h-[2px] w-1/2 bg-gradient-to-r from-transparent via-[#E8FF00] to-[#20BFC2]"
            />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
              <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#E8FF00]/20 bg-[#E8FF00]/10 text-[#E8FF00] shadow-[0_0_25px_rgba(232,255,0,0.08)] sm:mx-0 sm:h-14 sm:w-14">
                <CalendarCheck className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#20BFC2] sm:text-xs">
                  Our appointment guarantee
                </p>

                <p className="mt-2 text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  We deliver{" "}
                  <span className="text-[#E8FF00]">
                    20–30+ qualified appointments
                  </span>{" "}
                  every month.
                </p>

                <p className="mt-3 text-base font-medium leading-relaxed text-neutral-300 sm:text-lg lg:text-xl">
                  If we don’t hit that number, we keep working for free until
                  we do.
                </p>
              </div>
            </div>
          </motion.div>

          {/* GROWTH PARTNER STATEMENT */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 max-w-4xl text-center text-base font-medium leading-7 text-neutral-300 sm:text-lg sm:leading-8 lg:mx-0 lg:text-left lg:text-xl lg:leading-9"
          >
            We’re your complete growth partner, helping you{" "}
            <span className="font-bold text-[#20BFC2]">
              scale sales and maximise ROI.
            </span>{" "}
            Our AI-powered{" "}
            <span className="font-bold text-white">
              Appointment Setting Engine
            </span>{" "}
            is designed to help you connect with the right prospects and grow
            your sales pipeline.
          </motion.p>

          {/* BENEFITS */}
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.65,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="relative z-20 mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-3 lg:mx-0 lg:justify-start"
          >
            {benefits.map((item) => (
              <div
                key={item}
                className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.035] px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#20BFC2]/40 hover:bg-[#20BFC2]/[0.06] hover:shadow-[0_0_25px_rgba(32,191,194,0.07)]"
              >
                <CheckIcon className="h-5 w-5" />

                <span className="text-left text-xs font-medium leading-5 text-neutral-300 sm:text-sm">
                  {item}
                </span>
              </div>
            ))}
          </AnimatedGroup>

          {/* CTA BUTTONS */}
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.8,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="relative z-20 mt-9 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row lg:items-start lg:justify-start"
          >
            {/* PRIMARY CTA */}
            <HoverBorderGradient
              as={Link}
              href="/book-a-call"
              containerClassName="rounded-full"
              className="group relative flex min-h-[56px] items-center justify-center gap-2 overflow-hidden rounded-full bg-[#E8FF00] px-7 py-4 text-sm font-black text-black shadow-[0_0_30px_rgba(232,255,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#efff45] hover:shadow-[0_0_45px_rgba(232,255,0,0.28)] sm:px-8 sm:text-base"
              duration={1}
              clockwise={true}
            >
              <span className="relative z-10 whitespace-nowrap">
                Schedule My Free Strategy Call
              </span>

              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

              <motion.span
                aria-hidden="true"
                animate={{ x: ["-120%", "250%"] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="absolute inset-y-0 w-1/3 -skew-x-12 bg-white/35 blur-sm"
              />
            </HoverBorderGradient>

            {/* SECONDARY CTA */}
            <a
              href={`https://wa.me/917483266259?text=${marketMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Check market availability on WhatsApp"
              className="group flex min-h-[56px] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#20BFC2]/60 hover:bg-[#20BFC2]/[0.07] sm:px-8 sm:text-base"
            >
              <span>Check Market Availability</span>

              <ArrowRight className="h-4 w-4 text-[#20BFC2] transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </AnimatedGroup>

          {/* REASSURANCE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.7 }}
            className="mt-5 text-center text-xs leading-6 text-neutral-500 sm:text-sm lg:text-left"
          >
            No monthly retainer. No long-term contract. Pay per qualified
            meeting.
          </motion.p>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.15 }}
            className="mt-14 w-full max-w-5xl sm:mt-16 lg:mx-0"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101313]/85 shadow-[0_20px_80px_rgba(0,0,0,0.3)] backdrop-blur-2xl">
              {/* Animated top line */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-0 top-0 h-[2px] w-1/2 bg-gradient-to-r from-transparent via-[#20BFC2] to-[#E8FF00]"
              />

              <div className="grid grid-cols-2 md:grid-cols-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -3 }}
                    className={`group relative px-4 py-6 text-center transition-colors duration-300 hover:bg-white/[0.035] sm:px-6 sm:py-7 ${index < 2
                        ? "border-b border-white/10 md:border-b-0"
                        : ""
                      } ${index % 2 === 0 ? "md:border-r md:border-white/10" : ""
                      } ${index === 0 || index === 1
                        ? "md:border-b-0"
                        : ""
                      }`}
                  >
                    <div className="text-3xl font-black tracking-tight text-white transition-colors duration-300 group-hover:text-[#E8FF00] sm:text-4xl">
                      {stat.value}
                    </div>

                    <div className="mx-auto mt-2 max-w-[180px] text-xs leading-5 text-neutral-400 sm:text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* INDUSTRIES */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-10 w-full text-center sm:mt-12 lg:text-left"
          >
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500 sm:text-xs">
              Built for B2B growth teams
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 lg:justify-start">
              {industries.map((industry, index) => (
                <React.Fragment key={industry}>
                  <motion.span
                    whileHover={{ y: -2, color: "#E8FF00" }}
                    transition={{ duration: 0.2 }}
                    className="cursor-default text-xs font-semibold text-neutral-400 transition-colors sm:text-sm"
                  >
                    {industry}
                  </motion.span>

                  {index < industries.length - 1 && (
                    <span className="text-[#20BFC2]/50">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* FLOATING DECORATIVE ELEMENTS */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="pointer-events-none absolute right-[4%] top-[24%] hidden lg:block"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#20BFC2]/20 bg-[#20BFC2]/[0.06] text-[#20BFC2] shadow-[0_0_35px_rgba(32,191,194,0.08)] backdrop-blur-xl">
              <Target className="h-6 w-6" />
            </div>
          </motion.div>

          <motion.div
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1 }}
            className="pointer-events-none absolute right-[10%] top-[48%] hidden lg:block"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#E8FF00]/20 bg-[#E8FF00]/[0.05] text-[#E8FF00] shadow-[0_0_30px_rgba(232,255,0,0.07)] backdrop-blur-xl">
              <Zap className="h-5 w-5" />
            </div>
          </motion.div>

          <motion.div
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 0.5 }}
            className="pointer-events-none absolute bottom-[28%] left-[3%] hidden lg:block"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-neutral-300 backdrop-blur-xl">
              <TrendingUp className="h-5 w-5" />
            </div>
          </motion.div>

          <motion.div
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1.5 }}
            className="pointer-events-none absolute bottom-[16%] right-[5%] hidden xl:block"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-[#20BFC2] backdrop-blur-xl">
              <Users className="h-5 w-5" />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}