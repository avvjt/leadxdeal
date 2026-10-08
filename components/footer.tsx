"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  IconBrandFacebook,
  IconBrandX,
  IconBrandYoutube,
  IconBrandInstagram,
  IconArrowUpRight,
  IconArrowRight,
  IconCheck,
  IconSparkles,
} from "@tabler/icons-react";

import { FloatingDock } from "@/components/ui/floating-dock";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const footerLinks = [
  { title: "Pricing", href: "/pricing" },
  { title: "FAQ", href: "/faq" },
  { title: "Case Studies", href: "/case" },
  { title: "Book a Call", href: "/book-a-call" },
  {
    title: "Help Center",
    href: "https://intercom.help/leadxdeal/en/",
    external: true,
  },
  { title: "Terms & Conditions", href: "/terms" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Legal Notice", href: "/legal" },
  { title: "Use of Data", href: "/data" },
];

const dockLinks = [
  {
    title: "X (Twitter)",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 transition-colors duration-300 group-hover:text-black dark:text-neutral-400 dark:group-hover:text-white" />
    ),
    href: "https://x.com/leadxdeal",
  },
  {
    title: "Facebook",
    icon: (
      <IconBrandFacebook className="h-full w-full text-neutral-500 transition-colors duration-300 group-hover:text-black dark:text-neutral-400 dark:group-hover:text-white" />
    ),
    href: "https://www.facebook.com/leadxdeal",
  },
  {
    title: "YouTube",
    icon: (
      <IconBrandYoutube className="h-full w-full text-neutral-500 transition-colors duration-300 group-hover:text-black dark:text-neutral-400 dark:group-hover:text-white" />
    ),
    href: "https://www.youtube.com/@leadxdeal/videos",
  },
  {
    title: "Instagram",
    icon: (
      <IconBrandInstagram className="h-full w-full text-neutral-500 transition-colors duration-300 group-hover:text-black dark:text-neutral-400 dark:group-hover:text-white" />
    ),
    href: "https://www.instagram.com/leadxdeal",
  },
];

const trustPoints = [
  "Free strategy call",
  "Custom growth plan",
  "No obligation",
];

const commercialPoints = [
  "£900 one-time setup",
  "£150 per qualified meeting",
  "No retainers",
  "No long-term contract",
];

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden border-t border-neutral-200 bg-white text-neutral-950 dark:border-white/[0.07] dark:bg-[#070707] dark:text-white">
      {/* ========================================================= */}
      {/* BACKGROUND */}
      {/* ========================================================= */}

      <BackgroundBeamsWithCollision className="pointer-events-none absolute inset-0 z-0 opacity-30 dark:opacity-20" />

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Lime glow */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[5%] top-[-250px] h-[600px] w-[600px] rounded-full bg-[#E8FF00]/[0.045] blur-[150px]"
        />

        {/* Blue glow */}
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 40, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-220px] bottom-[-250px] h-[550px] w-[550px] rounded-full bg-blue-500/[0.035] blur-[150px]"
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "52px 52px",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_10%,rgba(255,255,255,0.8)_80%)] dark:bg-[radial-gradient(circle_at_50%_0%,transparent_15%,rgba(0,0,0,0.8)_90%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">

        {/* ========================================================= */}
        {/* FINAL CTA */}
        {/* ========================================================= */}

        <section className="relative py-20 sm:py-24 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-50 px-6 py-12 shadow-[0_25px_100px_rgba(0,0,0,0.06)] sm:px-10 sm:py-16 md:px-16 md:py-20 dark:border-white/[0.08] dark:bg-white/[0.025] dark:shadow-[0_25px_100px_rgba(0,0,0,0.35)]"
          >
            {/* CTA glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#E8FF00]/[0.08] blur-[100px]" />

            {/* Decorative rings */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full border border-[#E8FF00]/10" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full border border-[#E8FF00]/10" />

            <div className="relative z-10 mx-auto max-w-4xl text-center">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-neutral-500 shadow-sm dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-neutral-400"
              >
                <IconSparkles className="h-3.5 w-3.5 text-[#9cab00] dark:text-[#E8FF00]" />
                Ready to grow your pipeline?
              </motion.div>

              {/* Heading */}
              <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.05em] text-neutral-950 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
                Ready to build your{" "}
                <span className="text-[#7f9200] dark:text-[#E8FF00]">
                  predictable pipeline?
                </span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base sm:leading-8 dark:text-neutral-400">
                Book your free strategy call and discover exactly how we can
                help fill your calendar with qualified, exclusive meetings.
              </p>

              {/* CTA */}
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/book-a-call"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#E8FF00] px-7 py-4 text-sm font-black text-black shadow-[0_0_40px_rgba(232,255,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#dfff00] hover:shadow-[0_0_60px_rgba(232,255,0,0.28)]"
                >
                  Book Your Free Strategy Call

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10 transition-transform duration-300 group-hover:translate-x-1">
                    <IconArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>

              {/* Trust points */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-500"
                  >
                    <IconCheck className="h-3.5 w-3.5 text-[#8d9d00] dark:text-[#E8FF00]" />
                    {point}
                  </div>
                ))}
              </div>

              {/* Commercial model */}
              <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-3 border-t border-neutral-200 pt-7 dark:border-white/[0.07]">
                {commercialPoints.map((point, index) => (
                  <React.Fragment key={point}>
                    <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                      {point}
                    </span>

                    {index !== commercialPoints.length - 1 && (
                      <span className="hidden text-neutral-300 sm:inline dark:text-neutral-700">
                        •
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ========================================================= */}
        {/* MAIN FOOTER */}
        {/* ========================================================= */}

        <section className="border-t border-neutral-200 py-16 dark:border-white/[0.07]">
          <div className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">

            {/* BRAND */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Link
                href="/"
                className="group inline-flex items-center gap-1 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-11 w-11 sm:h-12 sm:w-12">
                  <Image
                    src="/images/lead.png"
                    alt="LeadXDeal"
                    fill
                    className="object-contain"
                  />

                  <div className="pointer-events-none absolute inset-0 rounded-full bg-[#E8FF00]/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                <div className="relative h-12 w-[135px] sm:h-14 sm:w-[155px]">
                  <Image
                    src="/images/leadtext.png"
                    alt="LeadXDeal"
                    fill
                    className="object-contain dark:brightness-0 dark:invert"
                  />
                </div>
              </Link>

              <p className="mt-6 max-w-xl text-lg font-semibold leading-7 tracking-tight text-neutral-800 dark:text-neutral-200">
                Building predictable B2B sales pipelines.
              </p>

              <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-500 dark:text-neutral-500">
                Exclusive leads. Qualified conversations. Booked meetings.
                LeadXDeal helps ambitious B2B teams build a sales pipeline
                without the cost and complexity of building an outbound team
                from scratch.
              </p>

              {/* Mini value row */}
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Exclusive Leads",
                  "BANT Qualified",
                  "Booked Meetings",
                  "No Retainer",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-[11px] font-semibold text-neutral-500 dark:border-white/[0.07] dark:bg-white/[0.025] dark:text-neutral-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* NAVIGATION */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-2">
                {/* Explore */}
                <div>
                  <p className="mb-5 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">
                    Explore
                  </p>

                  <div className="space-y-1">
                    {footerLinks.slice(0, 5).map((link) => (
                      <Link
                        key={link.title}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={
                          link.external ? "noopener noreferrer" : undefined
                        }
                        className="group/link flex items-center justify-between rounded-lg py-2 text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                      >
                        <span>{link.title}</span>

                        {link.external && (
                          <IconArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:opacity-100" />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Legal */}
                <div>
                  <p className="mb-5 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">
                    Legal
                  </p>

                  <div className="space-y-1">
                    {footerLinks.slice(5).map((link) => (
                      <Link
                        key={link.title}
                        href={link.href}
                        className="group/link flex items-center justify-between rounded-lg py-2 text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                      >
                        <span>{link.title}</span>

                        <IconArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* BOTTOM */}
        {/* ========================================================= */}

        <div className="border-t border-neutral-200 py-7 dark:border-white/[0.07]">
          <div className="flex flex-col items-center justify-between gap-7 md:flex-row">

            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500">
                © {new Date().getFullYear()} LeadXDeal. All rights reserved.
              </p>

              <p className="mt-1 text-[11px] text-neutral-400/70 dark:text-neutral-600">
                Where Leads Become Deals.
              </p>
            </div>

            {/* Social */}
            <div>
              <FloatingDock
                mobileClassName="translate-y-0"
                items={dockLinks}
              />
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* ACCENT */}
        {/* ========================================================= */}

        <div className="relative h-[2px] w-full overflow-hidden">
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-transparent via-[#E8FF00] to-transparent"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E8FF00]/20 to-transparent" />
        </div>
      </div>
    </footer>
  );
}