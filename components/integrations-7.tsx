"use client";

import React from "react";
import { LogoIcon } from "@/components/logo";
import { cn } from "@/lib/utils";
import { InfiniteSlider } from "@/components/infinite-slider";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function IntegrationsSection() {
  const logos = [
    "/images/hubspot.png",
    "/images/sendspark.png",
    "/images/pipedrive.png",
    "/images/sheet.png",
    "/images/salesforce.png",
  ];

  const row1 = [logos[0], logos[1], logos[2], logos[3], logos[4]];
  const row2 = [logos[3], logos[4], logos[1], logos[0], logos[2]];
  const row3 = [logos[4], logos[0], logos[3], logos[1], logos[2]];

  const benefits = [
    "Connect your existing CRM",
    "Keep prospect and campaign data organised",
    "Automate the handoff from prospect to meeting",
  ];

  const techStackMessage = encodeURIComponent(
    `Hi LeadXDeal! 👋

I'd like to discuss the technology stack and automation systems used for your B2B lead generation and appointment-setting services.

I'm interested in learning more about:
• Your prospect research and data tools
• LinkedIn and email outreach automation
• CRM and calendar integrations
• AI-powered sales workflows
• How your systems could fit my business needs

My business/industry:
Current tech stack (if any):
Main requirement:

Could we discuss the best approach for my business?

Thank you!`
  );

  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-[#050505] md:py-28 lg:py-32">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-grid-gray-200 opacity-30 dark:bg-grid-gray-800 dark:opacity-20" />

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8FF00]/10 blur-[150px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mx-auto w-full max-w-xl lg:mx-0"
          >
            {/* BADGE */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-zinc-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-[#E8FF00] shadow-[0_0_12px_rgba(232,255,0,0.8)]" />
              Built for Your Sales Stack
            </div>

            {/* HEADING */}
            <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-6xl dark:text-white">
              Everything works
              <br />
              <span className="relative inline-block">
                together.
                <span className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-[#E8FF00]" />
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-8">
              LeadXDeal fits into the tools your sales team already uses,
              connecting prospecting, outreach, CRM and meeting workflows into
              one predictable pipeline.
            </p>

            {/* BENEFITS */}
            <div className="mt-8 space-y-4">
              {benefits.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                  className="flex items-start gap-3 text-sm font-medium leading-6 text-zinc-700 dark:text-zinc-300 sm:text-base"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#9aaa00] dark:text-[#E8FF00]" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* WHATSAPP CTA */}
            <a
              href={`https://wa.me/917483266259?text=${techStackMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discuss your tech stack with LeadXDeal on WhatsApp"
              className="group mt-9 inline-flex min-h-12 items-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:bg-[#E8FF00] dark:text-black dark:hover:bg-[#d9ef00]"
            >
              Talk About Your Stack
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* INTEGRATION VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            {/* MAIN CARD */}
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 shadow-[0_25px_100px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[#090c0c] dark:shadow-[0_25px_100px_rgba(0,0,0,0.35)]">
              {/* GRID */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(128,128,128,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,0.12) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                  maskImage:
                    "radial-gradient(ellipse 75% 75% at 50% 50%, black 45%, transparent 100%)",
                }}
              />

              {/* AMBIENT GLOW */}
              <motion.div
                aria-hidden="true"
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  scale: [0.9, 1.15, 0.9],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8FF00]/15 blur-[70px]"
              />

              {/* MOVING LOGO ROWS */}
              <div className="absolute inset-0 flex flex-col justify-center gap-6">
                {/* ROW 1 */}
                <InfiniteSlider
                  gap={38}
                  speed={22}
                  speedOnHover={10}
                >
                  {row1.map((src, index) => (
                    <IntegrationCard key={`row1-${index}`}>
                      <Image
                        src={src}
                        alt="Sales integration"
                        fill
                        sizes="56px"
                        className="object-contain p-3"
                        unoptimized
                      />
                    </IntegrationCard>
                  ))}
                </InfiniteSlider>

                {/* ROW 2 */}
                <InfiniteSlider
                  gap={38}
                  speed={20}
                  speedOnHover={10}
                  reverse
                >
                  {row2.map((src, index) => (
                    <IntegrationCard key={`row2-${index}`}>
                      <Image
                        src={src}
                        alt="Sales integration"
                        fill
                        sizes="56px"
                        className="object-contain p-3"
                        unoptimized
                      />
                    </IntegrationCard>
                  ))}
                </InfiniteSlider>

                {/* ROW 3 */}
                <InfiniteSlider
                  gap={38}
                  speed={24}
                  speedOnHover={10}
                >
                  {row3.map((src, index) => (
                    <IntegrationCard key={`row3-${index}`}>
                      <Image
                        src={src}
                        alt="Sales integration"
                        fill
                        sizes="56px"
                        className="object-contain p-3"
                        unoptimized
                      />
                    </IntegrationCard>
                  ))}
                </InfiniteSlider>
              </div>

              {/* CENTER LOGO */}
              <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center">
                <div className="relative">
                  <motion.div
                    aria-hidden="true"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full bg-[#E8FF00]/30 blur-xl"
                  />

                  <IntegrationCard
                    isCenter
                    className="relative size-20 border-zinc-300 bg-white/90 shadow-2xl backdrop-blur-xl dark:border-[#E8FF00]/20 dark:bg-[#080b0b]"
                  >
                    <LogoIcon />
                  </IntegrationCard>
                </div>
              </div>

              {/* EDGE FADES */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-zinc-50 via-zinc-50/70 to-transparent dark:from-[#090c0c] dark:via-[#090c0c]/70" />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-zinc-50 via-zinc-50/70 to-transparent dark:from-[#090c0c] dark:via-[#090c0c]/70" />

              <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-zinc-50 to-transparent sm:w-16 dark:from-[#090c0c]" />

              <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-zinc-50 to-transparent sm:w-16 dark:from-[#090c0c]" />

              {/* LABEL: CRM + OUTREACH + DATA */}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-3 top-3 z-40 max-w-[calc(100%-1.5rem)] rounded-xl border border-[#E8FF00]/30 bg-[#101717] px-3 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] sm:right-4 sm:top-4 sm:px-4 sm:py-3"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#20BFC2] shadow-[0_0_10px_rgba(32,191,194,0.7)]" />

                  <span className="whitespace-nowrap text-[10px] font-bold text-white sm:text-xs">
                    CRM + Outreach + Data
                  </span>
                </div>
              </motion.div>

              {/* LABEL: SALES WORKFLOW CONNECTED */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-3 left-3 z-40 max-w-[calc(100%-1.5rem)] rounded-xl border border-[#20BFC2]/40 bg-[#101717] px-3 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] sm:bottom-4 sm:left-4 sm:px-4 sm:py-3"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8FF00] opacity-60" />
                    <span className="relative h-2 w-2 rounded-full bg-[#E8FF00] shadow-[0_0_10px_rgba(232,255,0,0.7)]" />
                  </span>

                  <span className="whitespace-nowrap text-[10px] font-bold text-white sm:text-xs">
                    Sales workflow connected
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* REUSABLE INTEGRATION CARD */
const IntegrationCard = ({
  children,
  className,
  isCenter = false,
}: {
  children: React.ReactNode;
  className?: string;
  isCenter?: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 flex size-14 shrink-0 overflow-hidden rounded-full border border-zinc-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.05]",
        isCenter && "size-20",
        className
      )}
    >
      <div
        className={cn(
          "relative m-auto flex size-full items-center justify-center",
          isCenter && "p-3"
        )}
      >
        {children}
      </div>
    </div>
  );
};