"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import ColourfulText from "@/components/ui/colourful-text";
import { FlipWords } from "./ui/flip-words";
import { Tooltip } from "./tooltip";

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

const CheckSVG = ({
  className = "h-4 w-4 shrink-0",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 12 12"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
  </svg>
);

const stats = [
  { value: "£150", label: "per qualified meeting" },
  { value: "20–30+", label: "guaranteed appointments / month" },
  { value: "2022", label: "delivering since" },
  { value: "£0", label: "monthly retainer" },
];

const industries = [
  "SaaS",
  "Fintech",
  "HR Tech",
  "Martech",
  "Professional Services",
];

const benefits = [
  "Exclusive leads (never shared)",
  "Qualified meetings booked straight into your calendar",
  "Done-for-you outreach: LinkedIn, email & expert cold calling",
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

export default function HeroSection() {
  const words = ["Automation", "Prospecting", "Outreach"];

  return (
    <main
      className="
        relative mx-3 overflow-hidden rounded-3xl
        border border-neutral-200/80
        bg-white text-black shadow-sm
        dark:border-white/[0.08]
        dark:bg-[#0a0a0a] dark:text-white
      "
    >
      {/* ANIMATED BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Light mode grid */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:hidden"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.7) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Dark mode grid */}
        <div
          className="absolute inset-0 hidden opacity-[0.045] dark:block"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Animated lime glow */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute left-1/2 top-[-280px]
            h-[650px] w-[650px] -translate-x-1/2
            rounded-full bg-[#E8FF00]/10
            blur-[130px]
            dark:bg-[#E8FF00]/[0.075]
          "
        />

        {/* Animated turquoise glow */}
        <motion.div
          animate={{
            x: [0, -80, 50, 0],
            y: [0, 50, -30, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute right-[-250px] top-[30%]
            h-[500px] w-[500px] rounded-full
            bg-[#007F83]/[0.06] blur-[120px]
            dark:bg-[#007F83]/[0.16]
          "
        />

        {/* Small floating glow */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute bottom-[15%] left-[10%]
            h-32 w-32 rounded-full
            bg-[#007F83]/10 blur-[70px]
            dark:bg-[#E8FF00]/10
          "
        />

        {/* Radial fade */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_center,transparent_20%,rgba(255,255,255,0.45)_100%)]
            dark:bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.7)_100%)]
          "
        />
      </div>

      {/* HERO CONTENT */}
      <section className="relative z-10 w-full">
        <div
          className="
            mx-auto flex min-h-[calc(100vh-1.5rem)]
            w-full max-w-7xl flex-col items-center justify-center
            px-5 pb-16 pt-28
            sm:px-8 sm:pb-20 sm:pt-32
            lg:px-10 lg:pt-36
          "
        >
          {/* BRAND BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="mb-7"
          >
            <div
              className="
                group relative inline-flex items-center gap-2.5
                overflow-hidden rounded-full border
                border-neutral-200 bg-white/80
                px-4 py-2 backdrop-blur-md
                shadow-[0_0_30px_rgba(0,127,131,0.08)]
                dark:border-white/10 dark:bg-white/[0.035]
              "
            >
              <motion.span
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className="
                  absolute inset-y-0 w-1/3 blur-sm
                  bg-gradient-to-r from-transparent
                  via-[#007F83]/20 to-transparent
                  dark:via-[#E8FF00]/20
                "
              />

              <span className="relative h-2 w-2 rounded-full bg-[#E8FF00] shadow-[0_0_12px_rgba(232,255,0,0.9)]" />

              <span className="relative text-xs font-bold uppercase tracking-[0.2em] text-neutral-700 dark:text-neutral-300">
                LeadXDeal
              </span>

              <span className="relative text-xs text-neutral-400 dark:text-neutral-500">
                B2B Growth Engine
              </span>
            </div>
          </motion.div>

          {/* POSITIONING */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-5"
          >
            <p
              className="
                text-center text-xs font-bold uppercase
                tracking-[0.3em] text-[#007F83]
                dark:text-[#20BFC2] sm:text-sm
              "
            >
              Where Leads Become{" "}
              <span className="text-[#8AA000] dark:text-[#E8FF00]">
                Deals
              </span>
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
              relative z-20 mx-auto max-w-6xl
              text-center text-4xl font-black
              leading-[0.98] tracking-[-0.045em]
              text-neutral-950 sm:text-5xl
              md:text-6xl lg:text-7xl xl:text-[5.3rem]
              dark:text-white
            "
          >
            <span className="block">Exclusive Leads.</span>

            <span className="relative block">
              <ColourfulText text="Booked Meetings." />
            </span>

            <span className="block">Zero Retainers.</span>
          </motion.h1>

          {/* ANIMATED KEYWORDS */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="
              mt-6 flex flex-wrap items-center justify-center
              text-center text-lg font-semibold
              text-neutral-500 dark:text-neutral-400 sm:text-xl
            "
          >
            <span>Powered by</span>

            <span className="mx-2 text-neutral-950 dark:text-white">
              LinkedIn
            </span>

            <span className="font-bold text-[#007F83] dark:text-[#20BFC2]">
              <FlipWords words={words} />
            </span>

            <span className="ml-1">.</span>
          </motion.div>

          {/* 20–30+ APPOINTMENT GUARANTEE */}
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
            className="
              relative z-20 mx-auto mt-7 max-w-4xl
              rounded-2xl border border-[#007F83]/25
              bg-[#007F83]/[0.06] px-5 py-4 text-center
              shadow-[0_0_35px_rgba(0,127,131,0.08)]
              dark:border-[#20BFC2]/25
              dark:bg-[#007F83]/[0.12]
              sm:px-8 sm:py-5
            "
          >
            <p className="text-base font-bold leading-7 text-neutral-900 dark:text-white sm:text-lg">
              We deliver{" "}
              <span className="text-[#007F83] dark:text-[#20BFC2]">
                20–30+ qualified scheduled appointments every month
              </span>
              .
            </p>

            <p className="mt-1 text-sm leading-6 text-neutral-600 dark:text-neutral-300 sm:text-base">
              If we don’t hit that number, we keep working for free until we
              do.
            </p>
          </motion.div>

          {/* MAIN DESCRIPTION WITH ANIMATED HIGHLIGHT */}
          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
            className="
              relative z-20 mx-auto mt-6 max-w-3xl
              text-center text-base leading-7
              text-neutral-600 sm:text-lg sm:leading-8
              dark:text-neutral-400
            "
          >
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: "easeOut" }}
              className="
                relative inline-block font-bold
                text-[#007F83] dark:text-[#20BFC2]
              "
            >
              <motion.span
                aria-hidden="true"
                animate={{ opacity: [0.15, 0.35, 0.15] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none absolute inset-0 -z-10
                  rounded-md bg-[#007F83]/20 blur-lg
                  dark:bg-[#20BFC2]/25
                "
              />
              Get BANT-qualified booked sales meetings
            </motion.span>{" "}
            delivered straight to your calendar every month, while your
            competitors waste time on cold lists, burn budget on shared leads,
            and wait months for a new SDR to ramp up.
          </motion.p>

          {/* GROWTH PARTNER STATEMENT */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="
              mt-5 max-w-3xl text-center text-base font-semibold
              leading-7 text-neutral-900 sm:text-lg
              dark:text-white
            "
          >
            We’re your complete growth partner, helping you{" "}
            <span className="text-[#007F83] dark:text-[#20BFC2]">
              scale sales and maximise ROI.
            </span>{" "}
            Not just random shared leads — we help you reach ready-to-buy
            prospects through our AI-powered{" "}
            <span className="font-black text-neutral-950 dark:text-white">
              Appointment Setting Engine
            </span>{" "}
            designed to help you 10x your sales.
          </motion.p>

          {/* BENEFITS */}
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.85,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="
              relative z-20 mx-auto mt-8 flex max-w-5xl
              flex-wrap items-center justify-center gap-2.5
            "
          >
            {benefits.map((item) => (
              <div
                key={item}
                className="
                  group flex items-center gap-2 rounded-full border
                  border-neutral-200 bg-neutral-50/80 px-4 py-2
                  transition-all duration-300 hover:-translate-y-0.5
                  hover:border-[#007F83]
                  hover:shadow-[0_0_20px_rgba(0,127,131,0.12)]
                  dark:border-white/10 dark:bg-white/[0.035]
                  dark:hover:border-[#20BFC2]/50
                "
              >
                <CheckSVG
                  className="
                    h-3.5 w-3.5 text-[#007F83]
                    transition-transform group-hover:scale-125
                    dark:text-[#20BFC2]
                  "
                />

                <span className="text-xs font-medium text-neutral-600 dark:text-neutral-300 sm:text-sm">
                  {item}
                </span>
              </div>
            ))}
          </AnimatedGroup>

          {/* CTA BUTTONS */}

          {/* CTA BUTTONS */}
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 1.05,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="
    relative z-20 mt-9 flex w-full flex-col
    items-center justify-center gap-3
    sm:w-auto sm:flex-row
  "
          >
            {/* PRIMARY CTA — BOOK A CALL */}
            <HoverBorderGradient
              as={Link}
              href="/book-a-call"
              containerClassName="rounded-full"
              className="
      group relative flex h-13 items-center
      justify-center overflow-hidden rounded-full
      bg-[#E8FF00] px-7 text-sm font-black text-black
      shadow-[0_0_25px_rgba(232,255,0,0.25)]
      transition-all duration-300
      hover:-translate-y-1 hover:bg-[#DFFF00]
      hover:shadow-[0_0_45px_rgba(232,255,0,0.45)]
      sm:px-8
    "
              duration={1}
              clockwise={true}
            >
              <span className="relative z-10 whitespace-nowrap">
                Schedule My Free Strategy Call
              </span>

              <motion.span
                animate={{ x: ["-120%", "150%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="
        absolute inset-y-0 w-1/3 -skew-x-12
        bg-white/30 blur-sm
      "
              />
            </HoverBorderGradient>

            {/* SECONDARY CTA — WHATSAPP MARKET AVAILABILITY */}
            <a
              href={`https://wa.me/917483266259?text=${encodeURIComponent(
                "Hi LeadXDeal! 👋\n\nI visited your website and would like to check whether my target market is available for exclusive B2B leads and qualified sales meetings.\n\nCould you please help me with:\n• Market and industry availability\n• Target audience and decision-maker coverage\n• Lead generation and appointment-setting options\n\nMy target market:\nIndustry: \nTarget location: \nIdeal customer profile: \n\nLooking forward to hearing from you. Thank you!"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Check market availability on WhatsApp"
              className="
      group flex h-13 items-center justify-center
      rounded-full border border-neutral-300
      bg-white/70 px-7 text-sm font-bold
      text-neutral-900 backdrop-blur-md
      transition-all duration-300 hover:-translate-y-1
      hover:border-[#007F83] hover:bg-[#007F83]/5
      dark:border-white/15 dark:bg-white/[0.035]
      dark:text-white dark:hover:border-[#20BFC2]/60
      dark:hover:bg-[#007F83]/10 sm:px-8
    "
            >
              <span>See If My Market Is Available</span>

              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                className="ml-2 text-[#007F83] dark:text-[#20BFC2]"
              >
                →
              </motion.span>
            </a>
          </AnimatedGroup>


          {/* NO-RETAINER REASSURANCE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-4 text-center text-xs text-neutral-500 dark:text-neutral-500 sm:text-sm"
          >
            No monthly retainer. No long-term contract. Pay per qualified
            meeting.
          </motion.p>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.3 }}
            className="mt-14 w-full max-w-5xl sm:mt-16"
          >
            <div
              className="
                relative overflow-hidden rounded-2xl border
                border-neutral-200 bg-white/70
                shadow-[0_20px_70px_rgba(0,0,0,0.06)]
                backdrop-blur-xl dark:border-white/10
                dark:bg-[#111]/80
                dark:shadow-[0_20px_70px_rgba(0,0,0,0.3)]
              "
            >
              {/* Animated top line */}
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute left-0 top-0 h-px w-1/2
                  bg-gradient-to-r from-transparent
                  via-[#20BFC2] to-[#E8FF00]
                "
              />

              <div className="grid grid-cols-2 md:grid-cols-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -3 }}
                    className={`
                      group relative px-5 py-6 text-center
                      transition-all duration-300
                      hover:bg-neutral-50 dark:hover:bg-white/[0.035]
                      ${index < 2
                        ? "border-b border-neutral-200 md:border-b-0"
                        : ""
                      }
                      ${index % 2 === 0 ? "md:border-r" : ""}
                      ${index !== 3 ? "dark:border-white/10" : ""}
                    `}
                  >
                    <div
                      className="
                        text-2xl font-black tracking-tight
                        text-neutral-950 transition-colors
                        group-hover:text-[#007F83]
                        sm:text-3xl dark:text-white
                        dark:group-hover:text-[#E8FF00]
                      "
                    >
                      {stat.value}
                    </div>

                    <div className="mt-1 text-xs text-neutral-500 sm:text-sm dark:text-neutral-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* INDUSTRIES */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-10 text-center sm:mt-12"
          >
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-500 sm:text-xs">
              Built for B2B growth teams
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {industries.map((industry, index) => (
                <React.Fragment key={industry}>
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="
                      cursor-default text-xs font-semibold
                      text-neutral-500 transition-colors
                      hover:text-[#007F83] dark:text-neutral-400
                      dark:hover:text-[#20BFC2] sm:text-sm
                    "
                  >
                    {industry}
                  </motion.span>

                  {index < industries.length - 1 && (
                    <span className="text-neutral-300 dark:text-neutral-700">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* EXISTING TOOLTIP */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="relative z-20 mt-8"
          >
            <Tooltip />
          </motion.div> */}

          {/* FLOATING DECORATIVE ELEMENT — LEFT */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="
              pointer-events-none absolute left-[4%] top-[34%]
              hidden lg:block
            "
          >
            <div
              className="
                flex h-12 w-12 items-center justify-center
                rounded-xl border border-neutral-200
                bg-white/70 text-sm font-bold text-[#007F83]
                shadow-lg backdrop-blur
                dark:border-white/10 dark:bg-white/[0.04]
                dark:text-[#20BFC2]
              "
            >
              +
            </div>
          </motion.div>

          {/* FLOATING DECORATIVE ELEMENT — RIGHT */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1 }}
            className="
              pointer-events-none absolute right-[5%] top-[28%]
              hidden lg:block
            "
          >
            <div
              className="
                flex h-14 w-14 items-center justify-center
                rounded-2xl border border-[#007F83]/20
                bg-[#007F83]/5 text-[#007F83]
                shadow-[0_0_30px_rgba(0,127,131,0.12)]
                dark:border-[#E8FF00]/20
                dark:bg-[#E8FF00]/5 dark:text-[#E8FF00]
              "
            >
              ✓
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
