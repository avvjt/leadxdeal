"use client";

import CalWidget from "@/components/CalWidget";
import FooterSection from "@/components/footer";
import HeroCall from "@/components/HeroCall";
import Testimonials from "@/components/testimonials";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";

const BookCallHero = () => (
  <section className="relative overflow-hidden bg-white dark:bg-[#050505] py-10 lg:py-16">
    {/* Background */}
    <div className="absolute inset-0 bg-grid-gray-200 dark:bg-grid-gray-800 [mask-image:linear-gradient(180deg,white,transparent)] dark:[mask-image:linear-gradient(180deg,rgba(255,255,255,0.12),transparent)]" />

    <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#E8FF00]/10 blur-[140px]" />

    <div className="absolute left-[10%] top-20 h-32 w-32 rounded-full bg-blue-500/10 blur-[80px]" />

    <div className="relative mx-auto max-w-6xl px-4 md:px-6">
      <div className="mx-auto max-w-3xl text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-sm font-medium text-black dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#E8FF00]" />
          No Retainers · No Long-Term Contract
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-black tracking-tight text-black sm:text-5xl lg:text-6xl dark:text-white"
        >
          Let&apos;s Talk About{" "}
          <span className="relative inline-block">
            Your Market
            <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#E8FF00]" />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400"
        >
          Book a free strategy call and let&apos;s assess your ICP, market,
          offer and the best angle for generating qualified sales meetings.
        </motion.p>

        {/* Trust points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {[
            {
              icon: CalendarCheck,
              text: "Free strategy call",
            },
            {
              icon: ShieldCheck,
              text: "No commitment",
            },
            {
              icon: Mail,
              text: "Market availability check",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.text}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300"
              >
                <Icon className="h-4 w-4 text-[#9aaa00] dark:text-[#E8FF00]" />
                {item.text}
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* What we'll cover */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mx-auto mt-14 max-w-5xl"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Your ICP",
              description:
                "Understand exactly who your highest-value prospects are.",
            },
            {
              number: "02",
              title: "Your Market",
              description:
                "Identify the opportunity, competition and potential angles.",
            },
            {
              number: "03",
              title: "Your Growth",
              description:
                "Map out how qualified meetings can fit into your sales process.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#E8FF00]/60 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.05]"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.2em] text-zinc-400">
                  {item.number}
                </span>

                <ArrowRight className="h-4 w-4 text-zinc-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black dark:group-hover:text-white" />
              </div>

              <h3 className="text-xl font-bold text-black dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#E8FF00] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const PreFooterCTA = () => {
  const email = "manjumadhavi1111@gmail.com";
  const subject = "Request for a Meeting";
  const body =
    "Hello, I couldn't find a suitable time on your calendar. Can we schedule a meeting at a time convenient for you?";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <section className="relative overflow-hidden bg-white py-16 dark:bg-[#050505] lg:py-24">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[350px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8FF00]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 px-6 py-12 dark:border-white/10 dark:bg-white/[0.035] sm:px-10 lg:px-16 lg:py-16"
        >
          {/* Decorative glow */}
          <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#E8FF00]/10 blur-[80px]" />
          <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-blue-500/10 blur-[80px]" />

          <div className="relative">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white dark:border-white/10 dark:bg-black">
              <Mail className="h-5 w-5 text-black dark:text-[#E8FF00]" />
            </div>

            <h2 className="text-3xl font-black tracking-tight text-black sm:text-4xl dark:text-white">
              Can&apos;t find a suitable time?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
              No worries. Send us a message and we&apos;ll get back to you
              within 24 hours. We&apos;ll find a time that works for you.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={mailtoLink}
                className="group inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-xl dark:bg-[#E8FF00] dark:text-black dark:hover:bg-[#d9ef00]"
              >
                <Mail className="h-5 w-5" />
                Send us an email
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-6 py-3.5 font-semibold text-black transition-all duration-300 hover:bg-zinc-100 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
              >
                Back to homepage
              </Link>
            </div>

            <p className="mt-6 text-xs text-zinc-500">
              Usually responds within 24 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function BookAcall() {
  return (
    <>

      <BookCallHero />

      {/* Calendar */}
      <section className="relative overflow-hidden bg-zinc-50 py-10 dark:bg-black lg:py-16">
        <div className="absolute inset-0 bg-grid-gray-200 opacity-40 dark:bg-grid-gray-800" />

        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
              Choose a time that works for you
            </p>

            <h2 className="mt-2 text-2xl font-bold text-black dark:text-white sm:text-3xl">
              Book Your Strategy Call
            </h2>
          </motion.div>

          <CalWidget />
        </div>
      </section>

      <PreFooterCTA />

      <Testimonials />

      <FooterSection />
    </>
  );
}