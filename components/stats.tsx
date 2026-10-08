"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, PoundSterling, TrendingUp } from "lucide-react";
import Link from "next/link";

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

function useCountUp(
  to: number,
  start: boolean,
  duration = 1500
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startVal = 0;
    const increment = to / (duration / 16);
    let raf: number;

    function animate() {
      startVal += increment;

      if (startVal < to) {
        setCount(Math.floor(startVal));
        raf = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    }

    animate();

    return () => cancelAnimationFrame(raf);
  }, [to, start, duration]);

  return count;
}

export default function StatsSection() {
  const [ref, inView] = useInView(0.3);

  const meetings = useCountUp(30, inView);
  const acv = useCountUp(180, inView);
  const roi = useCountUp(35, inView);
  const lowAcv = useCountUp(96, inView);

  const stats = [
    {
      icon: CalendarCheck,
      value: `${meetings}+`,
      suffix: "",
      label: "Qualified meetings / month",
      description: "Target monthly meeting volume",
    },
    {
      icon: PoundSterling,
      value: `£${acv.toLocaleString()}`,
      suffix: "k",
      label: "New ACV",
      description: "Highest ACV across the scenarios",
    },
    {
      icon: TrendingUp,
      value: `${roi}`,
      suffix: ".3x",
      label: "Best contract value per £1",
      description: "Highest sales ROI shown",
    },
    {
      icon: PoundSterling,
      value: `£${lowAcv}`,
      suffix: "k–£180k",
      label: "ACV across four scenarios",
      description: "Representative scenario range",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white py-20 dark:bg-[#050505] md:py-28"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-gray-200 opacity-40 [mask-image:linear-gradient(180deg,white,transparent)] dark:bg-grid-gray-800 dark:opacity-30" />

      {/* Main glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[750px] -translate-x-1/2 rounded-full bg-[#E8FF00]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-zinc-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-[#E8FF00] shadow-[0_0_12px_rgba(232,255,0,0.8)]" />
            Proven Results for B2B Sales Teams
          </div>

          <h2 className="text-4xl font-black tracking-tight text-black sm:text-5xl lg:text-6xl dark:text-white">
            Proven Results for
            <br />
            <span className="relative inline-block">
              High-Ticket B2B Businesses
              <span className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-[#E8FF00]" />
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
            Don&apos;t just take our word for it. Here is what the model
            delivers for businesses like yours.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E8FF00]/60 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.035] dark:hover:bg-white/[0.055] sm:p-7"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#E8FF00]/10 opacity-0 blur-[50px] transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top */}
                <div className="relative flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 dark:border-white/10 dark:bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-black dark:text-[#E8FF00]" />
                  </div>

                  <span className="text-xs font-bold text-zinc-400">
                    0{index + 1}
                  </span>
                </div>

                {/* Number */}
                <div className="relative mt-8">
                  <div className="whitespace-nowrap text-4xl font-black tracking-tight text-black dark:text-white sm:text-5xl">
                    {stat.value}
                    <span className="text-[#9aaa00] dark:text-[#E8FF00]">
                      {stat.suffix}
                    </span>
                  </div>

                  <h3 className="mt-3 text-sm font-bold text-black dark:text-white">
                    {stat.label}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                    {stat.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#E8FF00] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-14 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-white/10 dark:bg-white/[0.025]"
        >
          <div className="flex flex-col items-center justify-between gap-6 px-6 py-8 text-center md:flex-row md:px-10 md:text-left">
            <div>
              <p className="text-lg font-bold text-black dark:text-white sm:text-xl">
                Want to accelerate sales?
              </p>

              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Want to generate deals? Want a pipeline on autopilot? Want to
                win customers faster?
              </p>
            </div>

            <Link
              href="/book-a-call"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:bg-[#E8FF00] dark:text-black dark:hover:bg-[#d9ef00]"
            >
              Let&apos;s Talk
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-5 text-zinc-500">
          Figures shown are based on representative case-study scenarios and
          illustrate the model, pricing and potential outcomes.
        </p>
      </div>
    </section>
  );
}