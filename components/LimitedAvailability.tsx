"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Check,
  Gift,
  Search,
  Linkedin,
  Zap,
  Users,
  Sparkles,
  ShieldCheck,
  CircleDollarSign,
} from "lucide-react";

const bonuses = [
  {
    number: "01",
    title: "First 3 Qualified Meetings FREE.",
    description:
      "Your first three qualified meetings cost you nothing — a £450 saving.",
    icon: Gift,
    value: "£450",
    valueLabel: "saving",
  },
  {
    number: "02",
    title: "Free ICP & Target Account Research.",
    description:
      "We identify and build a targeted list of 100 high-fit prospects: target companies, decision-maker names and roles, industry and company criteria, key prospect information and priority segmentation.",
    icon: Search,
    value: "100",
    valueLabel: "high-fit prospects",
  },
  {
    number: "03",
    title: "B2B LinkedIn Outreach Swipe File.",
    description:
      "100 LinkedIn invite templates, personalised outreach messages, 50 copy-and-paste follow-ups, ICP and targeting recommendations and 106 high-converting CTAs. 256+ ready-to-use templates to help generate one B2B lead a day.",
    icon: Linkedin,
    value: "256+",
    valueLabel: "templates",
  },
];

function AvailabilityStat({
  value,
  label,
  index,
}: {
  value: string;
  label: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm transition-all duration-500 hover:border-[#E8FF00]/30 hover:bg-white/[0.055]"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#E8FF00]/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-5 flex items-center justify-between">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E8FF00]/10">
            {index === 0 ? (
              <Zap className="h-4 w-4 text-[#E8FF00]" />
            ) : index === 1 ? (
              <Gift className="h-4 w-4 text-[#E8FF00]" />
            ) : (
              <Users className="h-4 w-4 text-[#E8FF00]" />
            )}
          </span>

          <span className="font-mono text-[9px] tracking-[0.2em] text-white/30">
            0{index + 1}
          </span>
        </div>

        <div className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {value}
        </div>

        <div className="mt-2 text-xs leading-5 text-white/45">{label}</div>

        {/* Progress line */}
        <div className="mt-6 h-px overflow-hidden bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: index === 0 ? "92%" : index === 1 ? "76%" : "84%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.4 + index * 0.12,
              ease: "easeOut",
            }}
            className="h-full bg-[#E8FF00]"
          />
        </div>
      </div>
    </motion.div>
  );
}

function BonusCard({
  bonus,
  index,
}: {
  bonus: (typeof bonuses)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const Icon = bonus.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        className="relative h-full overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white p-7 shadow-sm transition-all duration-500 group-hover:border-[#E8FF00]/40 group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/[0.035] dark:group-hover:border-[#E8FF00]/25 dark:group-hover:bg-white/[0.05]"
      >
        {/* Top glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#E8FF00]/0 blur-3xl transition-all duration-700 group-hover:bg-[#E8FF00]/10" />

        {/* Bonus header */}
        <div className="relative mb-8 flex items-center justify-between">
          <span className="rounded-full border border-[#E8FF00]/20 bg-[#E8FF00]/5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#8e9d00] dark:text-[#E8FF00]">
            Bonus {index + 1}
          </span>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
            <Icon className="h-5 w-5 text-zinc-500 transition-colors duration-300 group-hover:text-[#9aaa00] dark:text-zinc-400 dark:group-hover:text-[#E8FF00]" />
          </div>
        </div>

        {/* Value */}
        <div className="relative mb-6">
          <span className="text-4xl font-bold tracking-[-0.04em] text-zinc-950 dark:text-white">
            {bonus.value}
          </span>

          <span className="ml-2 text-xs font-medium text-zinc-400">
            {bonus.valueLabel}
          </span>
        </div>

        {/* Title */}
        <h3 className="relative text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">
          {bonus.title}
        </h3>

        {/* Description */}
        <p className="relative mt-4 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
          {bonus.description}
        </p>

        {/* Included */}
        <div className="relative mt-7 flex items-center gap-2 border-t border-zinc-100 pt-5 dark:border-zinc-800">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E8FF00]/15">
            <Check className="h-3 w-3 text-[#92a200] dark:text-[#E8FF00]" />
          </span>

          <span className="text-[11px] font-medium text-zinc-500">
            Included with launch
          </span>
        </div>

        {/* Bottom animated line */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : {}}
          transition={{
            duration: 0.9,
            delay: 0.35 + index * 0.12,
          }}
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#E8FF00] to-transparent"
        />
      </motion.div>
    </motion.div>
  );
}

export default function LimitedAvailability() {
  const headerRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 text-white sm:py-32">
      {/* CINEMATIC BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Main lime glow */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[-300px] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#E8FF00]/8 blur-[160px]"
        />

        {/* Side glows */}
        <div className="absolute -left-60 top-1/2 h-96 w-96 rounded-full bg-blue-500/5 blur-[150px]" />
        <div className="absolute -right-60 bottom-0 h-96 w-96 rounded-full bg-[#E8FF00]/5 blur-[150px]" />

        {/* Floating particles */}
        {[...Array(10)].map((_, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -20, 0],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: 3 + (index % 3),
              repeat: Infinity,
              delay: index * 0.4,
              ease: "easeInOut",
            }}
            className="absolute h-1 w-1 rounded-full bg-[#E8FF00]"
            style={{
              left: `${8 + ((index * 17) % 84)}%`,
              top: `${15 + ((index * 23) % 70)}%`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div
          ref={headerRef}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8FF00]/20 bg-[#E8FF00]/5 px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8FF00] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E8FF00]" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#E8FF00]">
              Limited Availability
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl"
          >
            Your Market Won&apos;t
            <span className="block bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
              Stay Open Forever
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base"
          >
            While you&apos;re thinking it over, your competitors could be
            filling their calendars with the conversations you should be
            having.
          </motion.p>
        </div>

        {/* AVAILABILITY STATS */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-3 sm:grid-cols-3 sm:gap-4">
          <AvailabilityStat
            index={0}
            value="Every Day"
            label={
              <>
                your competitors&apos;{" "}
                <span className="text-white/70">pipelines grow</span>
              </>
            }
          />

          <AvailabilityStat
            index={1}
            value="3 Free"
            label={
              <>
                qualified meetings,{" "}
                <span className="text-white/70">launch offer</span>
              </>
            }
          />

          <AvailabilityStat
            index={2}
            value="Limited"
            label={
              <>
                onboarding{" "}
                <span className="text-white/70">slots each month</span>
              </>
            }
          />
        </div>

        {/* DIVIDER */}
        <div className="mx-auto my-20 flex max-w-5xl items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8FF00]/20 bg-[#E8FF00]/5">
            <Gift className="h-4 w-4 text-[#E8FF00]" />
          </div>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* BONUS HEADER */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#E8FF00]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
              Launch Offer
            </span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Launch Now & Get{" "}
            <span className="text-[#E8FF00]">3 Exclusive Bonuses</span>
          </motion.h3>
        </div>

        {/* BONUS CARDS */}
        <div className="grid gap-4 lg:grid-cols-3">
          {bonuses.map((bonus, index) => (
            <BonusCard
              key={bonus.number}
              bonus={bonus}
              index={index}
            />
          ))}
        </div>


        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-16 max-w-3xl text-center sm:mt-20"
        >
          <p className="text-base font-medium text-white/70 sm:text-lg">
            Secure your launch bonuses before your competitor does.
          </p>

          <div className="mt-8">
            <a
              href={`https://wa.me/917483266259?text=${encodeURIComponent(
                "Hi LeadXDeal! 👋\n\nI'd like to check whether my target market is available and learn more about your launch bonuses.\n\nI'm interested in:\n• Exclusive B2B leads\n• BANT-qualified sales meetings\n• Market exclusivity and availability\n• Launch bonuses and current offers\n• Pricing and how to get started\n\nMy business details:\nBusiness name: \nWebsite: \nIndustry: \nTarget market/location: \nTarget audience: \n\nCould you confirm availability for my market and explain the next steps?\n\nThank you!"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Check your market availability with LeadXDeal on WhatsApp"
              className="group inline-flex items-center gap-3 rounded-full bg-[#E8FF00] px-7 py-4 text-sm font-bold text-black shadow-[0_0_40px_rgba(232,255,0,0.15)] transition-all duration-300 hover:shadow-[0_0_65px_rgba(232,255,0,0.35)]"
            >
              See If Your Market Is Available
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] text-white/30">
            <span className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-[#E8FF00]" />
              Exclusive leads
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

            <span className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-[#E8FF00]" />
              BANT-qualified
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

            <span className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-[#E8FF00]" />
              No monthly retainer
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}