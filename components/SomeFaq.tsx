"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question: "I’ve been burned by lead gen companies before. Why should I trust you?",
    answer:
      "That’s exactly why our model is built around your risk, not ours. There is no retainer, no management fee and no long-term contract. You pay £150 only when a meeting that meets your agreed six-point qualification criteria is on your calendar. We have been delivering lead generation and appointment setting since 2022, and we only earn when you win.",
  },
  {
    id: "faq-2",
    question: "What happens to my setup fee if you can’t deliver?",
    answer:
      "The £900 one-time setup funds the work of building your campaign: ICP research, messaging, outreach infrastructure, CRM/calendar integration and launch. After that, there is nothing to forfeit. If the campaign underperforms, you simply receive fewer billed meetings, not a sunk salary. We stay accountable by optimising continuously until the volume target is hit.",
  },
  {
    id: "faq-3",
    question: "£150 per meeting sounds expensive. What’s the actual ROI?",
    answer:
      "Compare it with the alternative. One in-house SDR costs £34k–£75k a year before overheads, with unpredictable output and a typical cost of £300–£600+ per meeting. At £150 per qualified meeting, a campaign delivering 24 meetings costs £4,500 in month one including setup. In our Flowmetric scenario that supported £96,000 in new annual contract value, over 21 times the spend. You need to close very few deals for the maths to work.",
  },
  {
    id: "faq-4",
    question: "What if I pay for meetings but can’t close them?",
    answer:
      "Every meeting is pre-qualified against your own ICP and BANT criteria, and you receive full context on each prospect, so your team walks in prepared. We also review outcomes with you and keep refining targeting and messaging. If a meeting does not meet the agreed criteria, it is not a qualified meeting, and you do not pay for it.",
  },
  {
    id: "faq-5",
    question: "How exactly does the outreach work? Is it spammy?",
    answer:
      "No. We build small, highly targeted lists of the right decision-makers, then reach them with personalised LinkedIn messages, relevant email sequences and calls from trained callers. Every campaign is built around a specific pain point for a specific role, and every reply is handled by a person.",
  },
  {
    id: "faq-6",
    question: "How will I receive meetings and how quickly?",
    answer:
      "Qualified prospects are booked directly into your calendar, with CRM and calendar automation handling the admin. Campaigns typically launch in 1–2 weeks, and our objective is 20–30+ qualified meetings a month depending on your market, ICP, offer and geography.",
  },
  {
    id: "faq-7",
    question: "Are there any hidden fees or surprise costs?",
    answer:
      "None. The price is £900 one-time setup plus £150 per qualified meeting. No retainers, no management fees, no ad campaign fees, and no payment for unqualified prospects.",
  },
  {
    id: "faq-8",
    question: "Why is there no long-term contract?",
    answer:
      "We believe results should keep you, not paperwork. There is no lock-in and no minimum commitment: you pay the one-time setup and then per qualified meeting. If you decide to stop, you stop.",
  },
];

export default function SomeFaq() {
  return (
    <section
      id="faqs"
      className="
        relative overflow-hidden
        border-t border-neutral-200
        bg-white
        py-20 md:py-28
        dark:border-white/[0.06]
        dark:bg-[#0a0a0a]
      "
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.025]
            dark:opacity-[0.035]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Lime glow */}
        <motion.div
          animate={{
            x: [0, 80, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[15%] top-[-250px]
            h-[550px] w-[550px]
            rounded-full
            bg-[#E8FF00]/[0.055]
            blur-[130px]
          "
        />

        {/* Blue glow */}
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 40, -30, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-180px] top-[40%]
            h-[450px] w-[450px]
            rounded-full
            bg-blue-500/[0.045]
            blur-[120px]
          "
        />

        {/* Vignette */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_center,transparent_20%,rgba(255,255,255,0.75)_100%)]
            dark:bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.7)_100%)]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex"
          >
            <div
              className="
                relative flex items-center gap-2
                overflow-hidden
                rounded-full
                border border-neutral-200
                bg-white/80
                px-4 py-2
                backdrop-blur-md
                dark:border-white/10
                dark:bg-white/[0.035]
              "
            >
              <motion.span
                animate={{ x: ["-120%", "250%"] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className="
                  absolute inset-y-0
                  w-1/3
                  bg-gradient-to-r
                  from-transparent
                  via-[#E8FF00]/25
                  to-transparent
                  blur-sm
                "
              />

              <span
                className="
                  relative h-2 w-2
                  rounded-full
                  bg-[#E8FF00]
                  shadow-[0_0_12px_rgba(232,255,0,0.9)]
                "
              />

              <span
                className="
                  relative text-xs
                  font-bold uppercase
                  tracking-[0.2em]
                  text-neutral-600
                  dark:text-neutral-300
                "
              >
                FAQs
              </span>
            </div>
          </motion.div>

          <h2
            className="
              text-4xl font-black
              tracking-[-0.04em]
              text-neutral-950
              sm:text-5xl
              md:text-6xl
              dark:text-white
            "
          >
            Questions?
            <br />
            <span className="text-neutral-400 dark:text-neutral-500">
              We’ve got answers.
            </span>
          </h2>

          <p
            className="
              mx-auto mt-5
              max-w-2xl
              text-base leading-7
              text-neutral-500
              sm:text-lg
              dark:text-neutral-400
            "
          >
            Get answers to the most common questions about LeadXDeal,
            our pricing, qualification process and how we generate
            meetings for your sales team.
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="mx-auto mt-14 max-w-4xl"
        >
          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="
                  group
                  relative
                  mb-3
                  overflow-hidden
                  rounded-2xl
                  border
                  border-neutral-200
                  bg-white/70
                  px-5
                  transition-all
                  duration-300
                  hover:border-neutral-300
                  hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                  dark:border-white/[0.08]
                  dark:bg-white/[0.025]
                  dark:hover:border-white/[0.14]
                  dark:hover:bg-white/[0.04]
                "
              >
                {/* Animated top line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.05,
                  }}
                  className="
                    absolute left-0 top-0
                    h-px w-full
                    origin-left
                    bg-gradient-to-r
                    from-transparent
                    via-[#E8FF00]/40
                    to-transparent
                  "
                />

                <AccordionTrigger
                  className="
                    group/trigger
                    flex
                    w-full
                    items-center
                    gap-4
                    py-6
                    text-left
                    text-base
                    font-bold
                    tracking-tight
                    text-neutral-900
                    hover:no-underline
                    [&>svg]:hidden
                    dark:text-white
                    sm:text-lg
                  "
                >
                  {/* Number */}
                  <span
                    className="
                      flex h-8 w-8
                      shrink-0
                      items-center justify-center
                      rounded-lg
                      border
                      border-neutral-200
                      bg-neutral-50
                      text-[11px]
                      font-black
                      text-neutral-400
                      transition-all
                      duration-300
                      group-hover/trigger:border-[#E8FF00]/40
                      group-hover/trigger:text-neutral-700
                      dark:border-white/10
                      dark:bg-white/[0.03]
                      dark:text-neutral-500
                      dark:group-hover/trigger:border-[#E8FF00]/30
                      dark:group-hover/trigger:text-[#E8FF00]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span className="flex-1">
                    {faq.question}
                  </span>

                  {/* Custom plus */}
                  <span
                    className="
                      relative
                      flex h-9 w-9
                      shrink-0
                      items-center justify-center
                      rounded-full
                      border
                      border-neutral-200
                      bg-neutral-50
                      transition-all
                      duration-300
                      group-hover/trigger:border-[#E8FF00]
                      group-hover/trigger:bg-[#E8FF00]/10
                      dark:border-white/10
                      dark:bg-white/[0.03]
                      dark:group-hover/trigger:border-[#E8FF00]/40
                      dark:group-hover/trigger:bg-[#E8FF00]/10
                    "
                  >
                    <span
                      className="
                        absolute
                        h-px w-3
                        bg-neutral-500
                        transition-all
                        duration-300
                        group-data-[state=open]/trigger:rotate-180
                        dark:bg-neutral-400
                      "
                    />

                    <span
                      className="
                        absolute
                        h-3 w-px
                        bg-neutral-500
                        transition-all
                        duration-300
                        group-data-[state=open]/trigger:rotate-90
                        dark:bg-neutral-400
                      "
                    />
                  </span>
                </AccordionTrigger>

                <AccordionContent
                  className="
                    pb-7
                    pl-12
                    pr-2
                    text-sm
                    leading-7
                    text-neutral-500
                    dark:text-neutral-400
                    sm:text-base
                  "
                >
                  <div
                    className="
                      border-l-2
                      border-[#E8FF00]/30
                      pl-5
                    "
                  >
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 text-center"
        >
          <p
            className="
              text-sm
              text-neutral-500
              dark:text-neutral-400
            "
          >
            Still have questions?
          </p>

          <Link
            href="/contact"
            className="
              group
              mt-3
              inline-flex
              items-center
              gap-2
              text-sm
              font-bold
              text-neutral-900
              transition-colors
              hover:text-[#8da000]
              dark:text-white
              dark:hover:text-[#E8FF00]
            "
          >
            Talk to our team

            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}