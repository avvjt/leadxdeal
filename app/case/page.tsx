"use client";

import FooterSection from "@/components/footer";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    number: "01",
    industry: "SaaS",
    company: "Flowmetric",
    description: "Workflow Automation Platform",
    before:
      "Relied strictly on inbound signups, self-sourcing just 2–3 demos a month with no cold outbound framework and no dedicated team.",
    after:
      "Deployed LinkedIn and email outreach targeting Ops Directors and CTOs, supported by warm phone outreach from expert callers.",
    meetings: "24",
    investment: "£4,500",
    acv: "£96,000",
    roi: "21.3x",
    quote:
      "We went from 2–3 self-sourced demos a month to a full calendar of qualified conversations — without adding a single SDR headcount.",
    gradient: "from-[#E8FF00]/20 via-transparent to-blue-500/10",
  },
  {
    number: "02",
    industry: "FINTECH",
    company: "Ledgerway",
    description: "B2B Payments Platform",
    before:
      "One in-house SDR doing single-channel cold calling only, struggling to reach compliance-cautious finance leaders.",
    after:
      "Multi-touch LinkedIn outreach to CFOs and Finance Directors, automated email nurture, and dedicated appointment setters running high-volume daily calls.",
    meetings: "28",
    investment: "£5,100",
    acv: "£180,000",
    roi: "35.3x",
    quote:
      "LinkedIn reached compliance-cautious finance buyers who never picked up a cold call. Our pipeline replaced what one overworked SDR used to attempt alone.",
    gradient: "from-blue-500/20 via-transparent to-[#E8FF00]/10",
  },
  {
    number: "03",
    industry: "HR TECH",
    company: "PeopleForge",
    description: "HR & People Analytics SaaS",
    before:
      "Relied on free trials, with long, unqualified sales cycles and no proactive view of buyer intent.",
    after:
      "Targeted CHROs and HR Directors with retention pain-point messaging, automated email nurture and qualification screening of every warm response.",
    meetings: "22",
    investment: "£4,200",
    acv: "£64,000",
    roi: "15.2x",
    quote:
      "The qualification notes alone saved our AEs hours of discovery on every call — our qualified conversations roughly doubled.",
    gradient: "from-purple-500/15 via-transparent to-[#E8FF00]/10",
  },
  {
    number: "04",
    industry: "MARTECH",
    company: "Signalytics",
    description: "Marketing Analytics Platform",
    before:
      "Inconsistent MQL flow, zero dedicated outbound channel and unpredictable quarterly pipelines.",
    after:
      "LinkedIn outreach and email sequences built on marketing ROI proof points, targeting CMOs and Marketing Directors, with dedicated setters booking demos.",
    meetings: "26",
    investment: "£4,800",
    acv: "£110,000",
    roi: "22.9x",
    quote:
      "We finally have an outbound channel that didn’t require hiring and managing an SDR to run it.",
    gradient: "from-orange-500/15 via-transparent to-[#E8FF00]/10",
  },
];

const CaseStudyCard = ({
  study,
  index,
}: {
  study: (typeof caseStudies)[number];
  index: number;
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white dark:border-white/10 dark:bg-[#0b0b0b]"
    >
      {/* Glow */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative">
        {/* Top */}
        <div className="border-b border-zinc-200 p-6 dark:border-white/10 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-xs font-bold text-white dark:bg-[#E8FF00] dark:text-black">
                  {study.number}
                </span>

                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                  {study.industry}
                </span>
              </div>

              <h2 className="text-2xl font-black tracking-tight text-black dark:text-white sm:text-3xl">
                {study.company}
              </h2>

              <p className="mt-1 text-sm font-medium text-zinc-500">
                {study.description}
              </p>
            </div>

            {/* ROI */}
            <div className="rounded-2xl border border-[#E8FF00]/30 bg-[#E8FF00]/10 px-5 py-4 text-center">
              <div className="text-3xl font-black tracking-tight text-black dark:text-[#E8FF00]">
                {study.roi}
              </div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-600 dark:text-zinc-400">
                Contract Value
                <br />
                Per £1
              </div>
            </div>
          </div>
        </div>

        {/* Before / After */}
        <div className="grid md:grid-cols-2">
          <div className="border-b border-zinc-200 p-6 dark:border-white/10 md:border-b-0 md:border-r sm:p-8">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-zinc-400" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                Before LeadXDeal
              </span>
            </div>

            <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              {study.before}
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#E8FF00]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                After LeadXDeal
              </span>
            </div>

            <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-300">
              {study.after}
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 border-t border-zinc-200 dark:border-white/10">
          <div className="p-5 text-center sm:p-6">
            <Users className="mx-auto mb-2 h-4 w-4 text-zinc-400" />
            <div className="text-2xl font-black text-black dark:text-white">
              {study.meetings}
            </div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
              Qualified Meetings
            </div>
          </div>

          <div className="border-x border-zinc-200 p-5 text-center dark:border-white/10 sm:p-6">
            <BarChart3 className="mx-auto mb-2 h-4 w-4 text-zinc-400" />
            <div className="text-2xl font-black text-black dark:text-white">
              {study.investment}
            </div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
              First Month
            </div>
          </div>

          <div className="p-5 text-center sm:p-6">
            <TrendingUp className="mx-auto mb-2 h-4 w-4 text-[#9aaa00] dark:text-[#E8FF00]" />
            <div className="text-2xl font-black text-black dark:text-white">
              {study.acv}
            </div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
              Annual Contract Value
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="border-t border-zinc-200 bg-zinc-50 p-6 dark:border-white/10 dark:bg-white/[0.025] sm:p-8">
          <div className="flex gap-4">
            <div className="mt-1 h-8 w-1 shrink-0 rounded-full bg-[#E8FF00]" />

            <div>
              <p className="text-sm italic leading-7 text-zinc-700 dark:text-zinc-300">
                “{study.quote}”
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const CaseStudyCTA = () => (
  <section className="relative overflow-hidden bg-white py-20 dark:bg-[#050505] lg:py-28">
    <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8FF00]/10 blur-[150px]" />

    <div className="relative mx-auto max-w-5xl px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 px-6 py-14 text-center dark:border-white/10 dark:bg-white/[0.035] sm:px-12 lg:px-20"
      >
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 bg-white dark:border-white/10 dark:bg-black">
          <CheckCircle2 className="h-6 w-6 text-black dark:text-[#E8FF00]" />
        </div>

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
          Your market could be next
        </p>

        <h2 className="text-3xl font-black tracking-tight text-black dark:text-white sm:text-5xl">
          Turn Your Target Market
          <br />
          Into Qualified Meetings.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Let&apos;s assess your ICP, market and offer — then build a
          predictable outbound engine around the buyers you actually want to
          reach.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/book-a-call"
            className="group inline-flex items-center gap-2 rounded-xl bg-black px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-[#E8FF00] dark:text-black dark:hover:bg-[#d9ef00]"
          >
            Book My Free Strategy Call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/market-check"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-7 py-4 font-semibold text-black transition-all duration-300 hover:bg-zinc-100 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
          >
            Check My Market
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default function CaseStudies() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-20 dark:bg-[#050505] lg:py-28">
        {/* Grid */}
        <div className="absolute inset-0 bg-grid-gray-200 opacity-60 [mask-image:linear-gradient(180deg,white,transparent)] dark:bg-grid-gray-800 dark:opacity-40" />

        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#E8FF00]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-5xl px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-zinc-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#E8FF00]" />
              Proven Results
            </div>

            <h1 className="text-4xl font-black tracking-tight text-black sm:text-6xl lg:text-7xl dark:text-white">
              Client Success
              <br />
              <span className="relative">
                Stories
                <span className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-[#E8FF00]" />
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              See how our process turns a target market into a calendar full
              of qualified conversations, and a first-month investment into
              new contract value.
            </p>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-12 grid max-w-3xl grid-cols-2 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-white/[0.03] md:grid-cols-4"
          >
            {[
              ["4", "Case Studies"],
              ["28", "Top Meetings / Month"],
              ["£180k", "Highest ACV"],
              ["35.3x", "Highest ROI"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={`p-5 sm:p-6 ${
                  index !== 0
                    ? "border-t border-zinc-200 dark:border-white/10 md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <div className="text-2xl font-black text-black dark:text-white sm:text-3xl">
                  {value}
                </div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    

      {/* Case Studies */}
      <main className="bg-zinc-50 py-16 dark:bg-black lg:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
              The Numbers
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-black dark:text-white sm:text-4xl">
              From cold outreach
              <br />
              to commercial results.
            </h2>

            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Four representative scenarios across SaaS, Fintech, HR Tech and
              Martech showing what a properly structured outbound engine can
              look like.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={study.company}
                study={study}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>

      <CaseStudyCTA />

      <FooterSection />
    </>
  );
}