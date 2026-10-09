"use client";

import { LogoIcon } from "@/components/logo";
import { cn } from "@/lib/utils";
import { InfiniteSlider } from "@/components/infinite-slider";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

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

  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-[#050505] md:py-28 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-gray-200 opacity-30 dark:bg-grid-gray-800 dark:opacity-20" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8FF00]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-zinc-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-[#E8FF00] shadow-[0_0_12px_rgba(232,255,0,0.8)]" />
              Built for Your Sales Stack
            </div>

            <h2 className="text-4xl font-black tracking-tight text-black sm:text-5xl lg:text-6xl dark:text-white">
              Everything works
              <br />
              <span className="relative inline-block">
                together.
                <span className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-[#E8FF00]" />
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
              LeadXDeal fits into the tools your sales team already uses,
              connecting prospecting, outreach, CRM and meeting workflows into
              one predictable pipeline.
            </p>

            {/* Benefits */}
            <div className="mt-8 space-y-4">
              {[
                "Connect your existing CRM",
                "Keep prospect and campaign data organised",
                "Automate the handoff from prospect to meeting",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#9aaa00] dark:text-[#E8FF00]" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTA — DISCUSS YOUR TECH STACK */}
            <a
              href={`https://wa.me/917483266259?text=${encodeURIComponent(
                "Hi LeadXDeal! 👋\n\nI'd like to discuss the technology stack and automation systems used for your B2B lead generation and appointment-setting services.\n\nI'm interested in learning more about:\n• Your prospect research and data tools\n• LinkedIn and email outreach automation\n• CRM and calendar integrations\n• AI-powered sales workflows\n• How your systems could fit my business needs\n\nMy business/industry: \nCurrent tech stack (if any): \nMain requirement: \n\nCould we discuss the best approach for my business?\n\nThank you!"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discuss your tech stack with LeadXDeal on WhatsApp"
              className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:bg-[#E8FF00] dark:text-black dark:hover:bg-[#d9ef00]"
            >
              Talk About Your Stack

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

          </motion.div>

          {/* Integration visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 dark:border-white/10 dark:bg-white/[0.025]">
              {/* Grid */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(128,128,128,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,0.12) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                  maskImage:
                    "radial-gradient(ellipse 70% 70% at 50% 50%, black 50%, transparent 100%)",
                }}
              />

              {/* Lime glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8FF00]/15 blur-[70px]" />

              {/* Logo rows */}
              <div className="absolute inset-0 flex flex-col justify-center gap-6">
                {/* Row 1 */}
                <InfiniteSlider
                  gap={38}
                  speed={22}
                  speedOnHover={10}
                >
                  {row1.map((src, index) => (
                    <IntegrationCard key={`row1-${index}`}>
                      <Image
                        src={src}
                        alt="Sales platform"
                        fill
                        sizes="56px"
                        className="object-contain p-3"
                        unoptimized
                      />
                    </IntegrationCard>
                  ))}
                </InfiniteSlider>

                {/* Row 2 */}
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
                        alt="Sales platform"
                        fill
                        sizes="56px"
                        className="object-contain p-3"
                        unoptimized
                      />
                    </IntegrationCard>
                  ))}
                </InfiniteSlider>

                {/* Row 3 */}
                <InfiniteSlider
                  gap={38}
                  speed={24}
                  speedOnHover={10}
                >
                  {row3.map((src, index) => (
                    <IntegrationCard key={`row3-${index}`}>
                      <Image
                        src={src}
                        alt="Sales platform"
                        fill
                        sizes="56px"
                        className="object-contain p-3"
                        unoptimized
                      />
                    </IntegrationCard>
                  ))}
                </InfiniteSlider>
              </div>

              {/* Center LeadXDeal logo */}
              <div className="absolute inset-0 z-30 flex items-center justify-center">
                <div className="relative">
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-[#E8FF00]/30 blur-xl" />

                  <IntegrationCard
                    isCenter
                    className="relative size-20 border-zinc-300 bg-white/80 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-black/70"
                  >
                    <LogoIcon />
                  </IntegrationCard>
                </div>
              </div>

              {/* Edge fades */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-24 bg-gradient-to-b from-zinc-50 to-transparent dark:from-[#090909]" />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-zinc-50 to-transparent dark:from-[#090909]" />

              <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-zinc-50 to-transparent dark:from-[#090909]" />

              <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-zinc-50 to-transparent dark:from-[#090909]" />
            </div>

            {/* Floating label */}
            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -left-4 hidden rounded-xl border border-zinc-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-black/80 sm:block"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#E8FF00]" />
                <span className="text-xs font-bold text-black dark:text-white">
                  Sales workflow connected
                </span>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 7, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 -top-4 hidden rounded-xl border border-zinc-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-black/80 sm:block"
            >
              <span className="text-xs font-bold text-zinc-600 dark:text-zinc-300">
                CRM + Outreach + Data
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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