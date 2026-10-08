"use client";

import { motion } from "framer-motion";
import { Quote, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    company: "Flowmetric",
    industry: "SaaS",
    quote:
      "We went from 2–3 self-sourced demos a month to a full calendar of qualified conversations — without adding a single SDR headcount.",
    featured: true,
  },
  {
    company: "Ledgerway",
    industry: "Fintech",
    quote:
      "LinkedIn reached compliance-cautious finance buyers who never picked up a cold call.",
    featured: false,
  },
  {
    company: "PeopleForge",
    industry: "HR Tech",
    quote:
      "The qualification notes alone saved our AEs hours of discovery on every call.",
    featured: false,
  },
  {
    company: "Signalytics",
    industry: "Martech",
    quote:
      "We finally have an outbound channel that didn’t require hiring and managing an SDR to run it.",
    featured: false,
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-[#050505] md:py-28 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-gray-200 opacity-40 [mask-image:linear-gradient(180deg,white,transparent)] dark:bg-grid-gray-800 dark:opacity-30" />

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#E8FF00]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl space-y-12 px-4 md:px-6 lg:space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-zinc-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-[#E8FF00] shadow-[0_0_12px_rgba(232,255,0,0.7)]" />
            What Our Clients Say
          </div>

          <h2 className="text-4xl font-black tracking-tight text-black sm:text-5xl lg:text-6xl dark:text-white">
            Real conversations.
            <br />
            <span className="relative inline-block">
              Real outcomes.
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#E8FF00]" />
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            See what the teams behind our representative case studies say
            about building a more predictable outbound pipeline.
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.company}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#E8FF00]/50 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.035] dark:hover:bg-white/[0.05] sm:p-9 ${
                testimonial.featured ? "md:p-10" : ""
              }`}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#E8FF00]/10 opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100" />

              {/* Top accent */}
              <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#E8FF00] transition-all duration-500 group-hover:w-full" />

              <div className="relative flex h-full flex-col">
                {/* Quote icon */}
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 dark:border-white/10 dark:bg-white/[0.04]">
                    <Quote className="h-5 w-5 text-black dark:text-[#E8FF00]" />
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-zinc-400">
                    <span>{testimonial.industry}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>

                {/* Quote */}
                <blockquote
                  className={`flex-1 font-medium leading-relaxed text-zinc-800 dark:text-zinc-200 ${
                    testimonial.featured
                      ? "text-xl sm:text-2xl"
                      : "text-lg sm:text-xl"
                  }`}
                >
                  “{testimonial.quote}”
                </blockquote>

                {/* Company */}
                <div className="mt-8 flex items-center gap-3 border-t border-zinc-200 pt-5 dark:border-white/10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-black text-[#E8FF00] dark:bg-[#E8FF00] dark:text-black">
                    {testimonial.company.charAt(0)}
                  </div>

                  <div>
                    <div className="font-bold text-black dark:text-white">
                      {testimonial.company}
                    </div>

                    <div className="text-xs text-zinc-500">
                      LeadXDeal case study
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs leading-6 text-zinc-500 dark:text-zinc-500">
            These quotes are from the representative case-study scenarios
            presented by LeadXDeal and are not presented as verified client
            testimonials.
          </p>
        </motion.div>
      </div>
    </section>
  );
}