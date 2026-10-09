"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    id: "faq-01",
    question:
      "I’ve been burned by lead gen companies before. Why should I trust you?",
    answer:
      "That’s exactly why our model is built around your risk, not ours. There is no retainer, no management fee and no long-term contract. You pay £150 only when a meeting that meets your agreed six-point qualification criteria is on your calendar. We have been delivering lead generation and appointment setting since 2022, and we only earn when you win.",
  },
  {
    id: "faq-02",
    question:
      "What happens to my setup fee if you can’t deliver?",
    answer:
      "The £900 one-time setup funds the work of building your campaign: ICP research, messaging, outreach infrastructure, CRM/calendar integration and launch. After that, there is nothing to forfeit: if the campaign underperforms, you simply receive fewer billed meetings, not a sunk salary. We stay accountable by optimising continuously until the volume target is hit.",
  },
  {
    id: "faq-03",
    question:
      "£150 per meeting sounds expensive. What’s the actual ROI?",
    answer:
      "Compare it with the alternative. One in-house SDR costs £34k–£75k a year before overheads, with unpredictable output and a typical cost of £300–£600+ per meeting. At £150 per qualified meeting, a campaign delivering 24 meetings costs £4,500 in month one including setup. In our Flowmetric scenario that supported £96,000 in new annual contract value, over 21 times the spend. You need to close very few deals for the maths to work.",
  },
  {
    id: "faq-04",
    question:
      "What if I pay for meetings but can’t close them?",
    answer:
      "Every meeting is pre-qualified against your own ICP and BANT criteria, and you receive full context on each prospect, so your team walks in prepared. We also review outcomes with you and keep refining targeting and messaging. If a meeting does not meet the agreed criteria, it is not a qualified meeting, and you do not pay for it.",
  },
  {
    id: "faq-05",
    question:
      "How exactly does the outreach work? Is it spammy?",
    answer:
      "No. We build small, highly targeted lists of the right decision-makers, then reach them with personalised LinkedIn messages, relevant email sequences and calls from trained callers. Every campaign is built around a specific pain point for a specific role, and every reply is handled by a person.",
  },
  {
    id: "faq-06",
    question:
      "How will I receive meetings and how quickly?",
    answer:
      "Qualified prospects are booked directly into your calendar, with CRM and calendar automation handling the admin. Campaigns typically launch in 1–2 weeks, and our objective is 20–30+ qualified meetings a month depending on your market, ICP, offer and geography.",
  },
  {
    id: "faq-07",
    question:
      "What if I get more meetings than I can handle?",
    answer:
      "A good problem to have. We can pace the volume to your team’s capacity, and scale back up as soon as you are ready. Because there is no retainer or long-term contract, you stay in control.",
  },
  {
    id: "faq-08",
    question:
      "Why is there no long-term contract? What if I want out early?",
    answer:
      "We believe results should keep you, not paperwork. There is no lock-in and no minimum commitment: you pay the one-time setup and then per qualified meeting. If you decide to stop, you stop.",
  },
  {
    id: "faq-09",
    question:
      "Are there any hidden fees or surprise costs?",
    answer:
      "None. The price is £900 one-time setup plus £150 per qualified meeting. No retainers, no management fees, no ad campaign fees, no payment for unqualified prospects.",
  },
  {
    id: "faq-10",
    question:
      "What’s actually included in the setup fee?",
    answer:
      "ICP and market research, target-account definition, messaging strategy, multi-channel outreach infrastructure, campaign setup, CRM/calendar integration, your qualification framework and campaign launch. The tools and data stack behind it (LinkedIn, Clay, Brevo, Apollo.io, ZoomInfo) is part of how we run every campaign.",
  },
  {
    id: "faq-11",
    question:
      "What makes you different from lead lists and lead marketplaces?",
    answer:
      "Lists and marketplaces sell contacts, often to several buyers at once. We create conversations. Every lead is exclusive, human-qualified against the six-point framework, and delivered as a booked meeting rather than a spreadsheet row.",
  },
  {
    id: "faq-12",
    question:
      "What if my market is already crowded?",
    answer:
      "Crowded markets are where a personalised, multi-channel approach stands out most. Book a free strategy call and we will assess your market, your ICP and the best angle before you commit to anything.",
  },
  {
    id: "faq-13",
    question:
      "How do I know these case studies are real?",
    answer:
      "The case studies in this document are representative scenarios that show how our process and pricing work in practice, and they are labelled that way. We would rather be transparent than overstate. On a strategy call we will walk you through our methodology, the campaign build and the economics for your own market, so you can judge the fit before you spend anything.",
  },
];

export default function FAQsTwo() {
  const [search, setSearch] = useState("");

  const filteredFaqs = useMemo(() => {
    const term = search.trim().toLowerCase();

    if (!term) {
      return faqItems;
    }

    return faqItems.filter(
      (faq) =>
        faq.question.toLowerCase().includes(term) ||
        faq.answer.toLowerCase().includes(term)
    );
  }, [search]);

  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        border-t
        border-neutral-200
        bg-white
        py-20
        text-neutral-900
        dark:border-white/[0.06]
        dark:bg-[#0a0a0a]
        dark:text-white
        md:py-28
      "
    >
      {/* ================================
          BACKGROUND
      ================================= */}

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
            backgroundSize: "48px 48px",
          }}
        />

        {/* Lime glow */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -40, 35, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[10%]
            top-[-250px]
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#E8FF00]/[0.045]
            blur-[130px]
          "
        />

        {/* Blue glow */}
        <motion.div
          animate={{
            x: [0, -70, 40, 0],
            y: [0, 50, -30, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-220px]
            top-[45%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-500/[0.04]
            blur-[130px]
          "
        />

        {/* Vignette */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_center,transparent_15%,rgba(255,255,255,0.7)_100%)]
            dark:bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.72)_100%)]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        {/* ================================
            HEADER
        ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-neutral-200
              bg-white/80
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-neutral-600
              backdrop-blur-md
              dark:border-white/10
              dark:bg-white/[0.035]
              dark:text-neutral-300
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#E8FF00]
                shadow-[0_0_12px_rgba(232,255,0,0.9)]
              "
            />

            Common Questions
          </motion.div>

          {/* Heading */}
          <h2
            className="
              text-4xl
              font-black
              tracking-[-0.045em]
              text-neutral-950
              sm:text-5xl
              md:text-6xl
              dark:text-white
            "
          >
            FAQs about{" "}
            <span
              className="
                text-[#7f9200]
                dark:text-[#E8FF00]
              "
            >
              LeadXDeal
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-neutral-500
              sm:text-lg
              dark:text-neutral-400
            "
          >
            Get answers to the most common questions.
          </p>
        </motion.div>

        {/* ================================
            SEARCH
        ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="mx-auto mt-10 max-w-2xl"
        >
          <div className="relative">
            <Search
              className="
                pointer-events-none
                absolute
                left-4
                top-1/2
                h-5
                w-5
                -translate-y-1/2
                text-neutral-400
                dark:text-neutral-500
              "
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions..."
              className="
                h-14
                w-full
                rounded-2xl
                border
                border-neutral-200
                bg-white/80
                pl-12
                pr-12
                text-sm
                text-neutral-900
                outline-none
                backdrop-blur-xl
                transition-all
                duration-300
                placeholder:text-neutral-400
                focus:border-[#E8FF00]/60
                focus:shadow-[0_0_30px_rgba(232,255,0,0.08)]
                dark:border-white/[0.1]
                dark:bg-white/[0.035]
                dark:text-white
                dark:placeholder:text-neutral-500
                dark:focus:border-[#E8FF00]/40
              "
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="
                  absolute
                  right-4
                  top-1/2
                  flex
                  h-7
                  w-7
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-neutral-100
                  text-neutral-500
                  transition-colors
                  hover:bg-neutral-200
                  hover:text-neutral-900
                  dark:bg-white/[0.08]
                  dark:hover:bg-white/[0.14]
                  dark:hover:text-white
                "
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Search result count */}
          <div className="mt-3 flex justify-between px-1 text-xs text-neutral-400 dark:text-neutral-500">
            <span>
              {search
                ? `${filteredFaqs.length} ${filteredFaqs.length === 1
                  ? "question"
                  : "questions"
                } found`
                : `${faqItems.length} common questions`}
            </span>

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="font-semibold text-neutral-600 hover:text-[#7f9200] dark:text-neutral-400 dark:hover:text-[#E8FF00]"
              >
                Clear search
              </button>
            )}
          </div>
        </motion.div>

        {/* ================================
            FAQ ACCORDION
        ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.05,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="mx-auto mt-12 max-w-4xl"
        >
          {filteredFaqs.length === 0 ? (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="
                rounded-3xl
                border
                border-neutral-200
                bg-neutral-50/70
                px-6
                py-14
                text-center
                dark:border-white/[0.08]
                dark:bg-white/[0.025]
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#E8FF00]/10
                  text-[#7f9200]
                  dark:text-[#E8FF00]
                "
              >
                <Search className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-xl font-black text-neutral-950 dark:text-white">
                No matching questions
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                We couldn't find an FAQ matching your search. Try a different
                keyword such as pricing, meetings, setup, outreach or contract.
              </p>

              <button
                type="button"
                onClick={() => setSearch("")}
                className="
                  mt-6
                  rounded-full
                  bg-[#E8FF00]
                  px-5
                  py-2.5
                  text-sm
                  font-black
                  text-black
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-[#dfff00]
                "
              >
                Show All Questions
              </button>
            </motion.div>
          ) : (
            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              {filteredFaqs.map((faq, index) => (
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
                    hover:shadow-[0_15px_45px_rgba(0,0,0,0.05)]
                    dark:border-white/[0.08]
                    dark:bg-white/[0.025]
                    dark:hover:border-white/[0.14]
                    dark:hover:bg-white/[0.04]
                  "
                >
                  {/* Animated accent */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-[2px]
                      origin-top
                      scale-y-0
                      bg-gradient-to-b
                      from-[#E8FF00]
                      to-blue-500
                      transition-transform
                      duration-500
                      group-data-[state=open]:scale-y-100
                    "
                  />

                  <motion.div
                    initial={{
                      scaleX: 0,
                    }}
                    whileInView={{
                      scaleX: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: Math.min(index * 0.025, 0.25),
                    }}
                    className="
                      absolute
                      left-0
                      top-0
                      h-px
                      w-full
                      origin-left
                      bg-gradient-to-r
                      from-transparent
                      via-[#E8FF00]/30
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
                      hover:no-underline
                      [&>svg]:hidden
                    "
                  >
                    {/* Number */}
                    <span
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-neutral-200
                        bg-neutral-50
                        text-[10px]
                        font-black
                        tracking-wide
                        text-neutral-400
                        transition-all
                        duration-300
                        group-hover/trigger:border-[#E8FF00]/40
                        group-hover/trigger:text-neutral-700
                        dark:border-white/10
                        dark:bg-white/[0.03]
                        dark:text-neutral-500
                        dark:group-hover/trigger:text-[#E8FF00]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <span
                      className="
                        flex-1
                        pr-2
                        text-base
                        font-bold
                        leading-6
                        tracking-tight
                        text-neutral-900
                        transition-colors
                        duration-300
                        group-hover/trigger:text-neutral-950
                        dark:text-white
                        dark:group-hover/trigger:text-white
                        sm:text-lg
                        sm:leading-7
                      "
                    >
                      {faq.question}
                    </span>

                    {/* Plus / minus */}
                    <span
                      className="
                        relative
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-neutral-200
                        bg-neutral-50
                        transition-all
                        duration-300
                        group-hover/trigger:border-[#E8FF00]/50
                        group-hover/trigger:bg-[#E8FF00]/10
                        dark:border-white/10
                        dark:bg-white/[0.03]
                        dark:group-hover/trigger:border-[#E8FF00]/40
                      "
                    >
                      <span
                        className="
                          absolute
                          h-px
                          w-3.5
                          bg-neutral-500
                          transition-transform
                          duration-300
                          dark:bg-neutral-400
                        "
                      />

                      <span
                        className="
                          absolute
                          h-3.5
                          w-px
                          bg-neutral-500
                          transition-transform
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
                      pl-[52px]
                      pr-2
                    "
                  >
                    <div
                      className="
                        border-l-2
                        border-[#E8FF00]/30
                        pl-5
                        text-sm
                        leading-7
                        text-neutral-500
                        dark:text-neutral-400
                        sm:text-base
                        sm:leading-7
                      "
                    >
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </motion.div>

        {/* ================================
            BOTTOM CTA
        ================================= */}

        <a
          href={`https://wa.me/917483266259?text=${encodeURIComponent(
            "Hi LeadXDeal! I'd like to book a free strategy call to discuss my ICP, target market, and the best approach for generating qualified sales meetings. Please let me know your availability."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book a free strategy call with LeadXDeal on WhatsApp"
          className="
    mt-6
    inline-flex
    items-center
    gap-2
    rounded-full
    bg-[#E8FF00]
    px-7
    py-3.5
    text-sm
    font-black
    text-black
    shadow-[0_0_30px_rgba(232,255,0,0.15)]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:bg-[#dfff00]
    hover:shadow-[0_0_45px_rgba(232,255,0,0.35)]
  "
        >
          Book My Free Strategy Call

          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            →
          </motion.span>
        </a>
      </div>
    </section>
  );
}