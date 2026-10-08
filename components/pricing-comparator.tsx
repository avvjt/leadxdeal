"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CheckSVG = ({
  className = "h-4 w-4 shrink-0",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 12 12"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7a1 1 0 00-1.414-1.415z" />
  </svg>
);

const plans = [
  {
    name: "Campaign Setup",
    price: "£900",
    suffix: "one-time",
    description: "Charged once, in the first month only",
    features: [
      "ICP & market research",
      "Target-account definition",
      "Messaging strategy",
      "Multi-channel outreach infrastructure",
      "Campaign setup & launch",
      "CRM / calendar integration",
      "Qualification framework",
    ],
    popular: false,
    ctaText: "Start My Campaign",
    href: "/contact",
  },
  {
    name: "Pay-Per-Meeting",
    price: "£150",
    suffix: "/ qualified meeting",
    description:
      "Pay only when a BANT-qualified meeting hits your calendar",
    features: [
      "LinkedIn, email & expert cold calling",
      "AI-powered sales automation",
      "BANT lead qualification",
      "Meetings booked into your calendar",
      "Follow-up & campaign management",
      "Continuous optimisation",
      "No retainer, no long-term contract",
    ],
    popular: true,
    ctaText: "Get Started",
    href: "/contact",
  },
  {
    name: "Enterprise",
    price: "Custom",
    suffix: "",
    description: "Scalable multi-ICP and multi-territory campaigns",
    features: [
      "Multiple ICPs and markets",
      "Expanded outreach infrastructure",
      "Dedicated account management",
      "Custom go-to-market support",
      "Volume pricing — talk to our team",
    ],
    popular: false,
    ctaText: "Talk to Our Team",
    href: "/contact",
  },
];

const investmentRows = [
  {
    meetings: "20",
    meetingCost: "£3,000",
    setup: "£900",
    total: "£3,900",
  },
  {
    meetings: "30",
    meetingCost: "£4,500",
    setup: "£900",
    total: "£5,400",
  },
];

export default function PricingComparator() {
  return (
    <section
      id="pricing"
      className="
        relative overflow-hidden
        bg-white
        py-20
        text-neutral-900
        dark:bg-[#0a0a0a]
        dark:text-white
        md:py-28
      "
    >
      {/* Background */}
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
            x: [0, 70, -40, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[25%]
            top-[-280px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#E8FF00]/[0.055]
            blur-[140px]
          "
        />

        {/* Blue glow */}
        <motion.div
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 40, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-200px]
            top-[35%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-500/[0.045]
            blur-[130px]
          "
        />

        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_center,transparent_20%,rgba(255,255,255,0.75)_100%)]
            dark:bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.65)_100%)]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
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
            transition={{ duration: 0.5 }}
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-neutral-200
              bg-white/80
              px-4 py-2
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
                h-2 w-2
                rounded-full
                bg-[#E8FF00]
                shadow-[0_0_12px_rgba(232,255,0,0.9)]
              "
            />

            Simple Pricing
          </motion.div>

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
            Choose Your{" "}
            <span className="text-[#8b9e00] dark:text-[#E8FF00]">
              Plan
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
            Only pay for results. No monthly retainers, no management fees,
            no ad spend, no long-term contract.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="relative h-full"
            >
              {/* Popular glow */}
              {plan.popular && (
                <div
                  className="
                    pointer-events-none
                    absolute
                    -inset-px
                    rounded-[25px]
                    bg-gradient-to-b
                    from-[#E8FF00]/70
                    via-[#E8FF00]/10
                    to-transparent
                    opacity-70
                    blur-[1px]
                  "
                />
              )}

              <div
                className={`
                  relative
                  flex h-full
                  flex-col
                  overflow-hidden
                  rounded-[24px]
                  border
                  p-7
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  ${
                    plan.popular
                      ? `
                        border-[#E8FF00]/50
                        bg-[#E8FF00]/[0.035]
                        shadow-[0_20px_70px_rgba(232,255,0,0.08)]
                      `
                      : `
                        border-neutral-200
                        bg-white/75
                        hover:border-neutral-300
                        hover:shadow-[0_20px_70px_rgba(0,0,0,0.06)]
                        dark:border-white/[0.08]
                        dark:bg-white/[0.025]
                        dark:hover:border-white/[0.14]
                        dark:hover:shadow-[0_20px_70px_rgba(0,0,0,0.25)]
                      `
                  }
                `}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute right-6 top-0">
                    <div
                      className="
                        rounded-b-xl
                        bg-[#E8FF00]
                        px-4 py-2
                        text-[10px]
                        font-black
                        uppercase
                        tracking-[0.15em]
                        text-black
                        shadow-[0_8px_25px_rgba(232,255,0,0.2)]
                      "
                    >
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan heading */}
                <div className="mb-7">
                  <div
                    className={`
                      mb-2
                      text-sm
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      ${
                        plan.popular
                          ? "text-[#819300] dark:text-[#E8FF00]"
                          : "text-neutral-500 dark:text-neutral-400"
                      }
                    `}
                  >
                    {plan.name}
                  </div>

                  <div className="flex flex-wrap items-baseline gap-2">
                    <span
                      className="
                        text-4xl
                        font-black
                        tracking-tight
                        text-neutral-950
                        dark:text-white
                      "
                    >
                      {plan.price}
                    </span>

                    {plan.suffix && (
                      <span
                        className="
                          text-sm
                          font-medium
                          text-neutral-500
                          dark:text-neutral-400
                        "
                      >
                        {plan.suffix}
                      </span>
                    )}
                  </div>

                  <p
                    className="
                      mt-3
                      min-h-[48px]
                      text-sm
                      leading-6
                      text-neutral-500
                      dark:text-neutral-400
                    "
                  >
                    {plan.description}
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href={plan.href}
                  className={`
                    group
                    mb-8
                    flex
                    h-12
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    text-sm
                    font-black
                    transition-all
                    duration-300
                    ${
                      plan.popular
                        ? `
                          bg-[#E8FF00]
                          text-black
                          shadow-[0_0_25px_rgba(232,255,0,0.18)]
                          hover:-translate-y-0.5
                          hover:bg-[#dfff00]
                          hover:shadow-[0_0_40px_rgba(232,255,0,0.35)]
                        `
                        : `
                          border
                          border-neutral-200
                          bg-neutral-950
                          text-white
                          hover:-translate-y-0.5
                          hover:bg-neutral-800
                          dark:border-white/10
                          dark:bg-white
                          dark:text-black
                          dark:hover:bg-neutral-200
                        `
                    }
                  `}
                >
                  {plan.ctaText}

                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </Link>

                {/* Features */}
                <div
                  className="
                    mb-4
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-neutral-400
                    dark:text-neutral-500
                  "
                >
                  What&apos;s included
                </div>

                <ul className="grow space-y-3.5">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{
                        opacity: 0,
                        x: -8,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.3,
                        delay:
                          index * 0.08 +
                          featureIndex * 0.035,
                      }}
                      className="
                        flex
                        items-start
                        gap-3
                        text-sm
                        leading-5
                        text-neutral-600
                        dark:text-neutral-300
                      "
                    >
                      <span
                        className={`
                          mt-0.5
                          flex
                          h-5
                          w-5
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          ${
                            plan.popular
                              ? "bg-[#E8FF00] text-black"
                              : "bg-neutral-100 text-neutral-700 dark:bg-white/[0.07] dark:text-[#E8FF00]"
                          }
                        `}
                      >
                        <CheckSVG className="h-2.5 w-2.5" />
                      </span>

                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Investment calculator */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mt-20 max-w-5xl"
        >
          <div className="mb-8 text-center">
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-blue-600
                dark:text-blue-400
              "
            >
              The numbers
            </p>

            <h3
              className="
                mt-3
                text-3xl
                font-black
                tracking-tight
                text-neutral-950
                sm:text-4xl
                dark:text-white
              "
            >
              Your Campaign Investment,
              <br />
              <span className="text-neutral-400 dark:text-neutral-500">
                In Real Numbers
              </span>
            </h3>
          </div>

          <div
            className="
              overflow-hidden
              rounded-3xl
              border
              border-neutral-200
              bg-white/80
              shadow-[0_20px_70px_rgba(0,0,0,0.05)]
              backdrop-blur-xl
              dark:border-white/[0.08]
              dark:bg-white/[0.025]
              dark:shadow-[0_20px_70px_rgba(0,0,0,0.2)]
            "
          >
            {/* Desktop table */}
            <div className="hidden md:block">
              <div
                className="
                  grid
                  grid-cols-4
                  border-b
                  border-neutral-200
                  bg-neutral-50/80
                  px-6
                  py-4
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-neutral-500
                  dark:border-white/[0.08]
                  dark:bg-white/[0.025]
                  dark:text-neutral-400
                "
              >
                <div>Monthly meetings</div>
                <div>Meetings × £150</div>
                <div>Setup</div>
                <div>Month-1 investment</div>
              </div>

              {investmentRows.map((row, index) => (
                <motion.div
                  key={row.meetings}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="
                    grid
                    grid-cols-4
                    items-center
                    border-b
                    border-neutral-200
                    px-6
                    py-7
                    last:border-b-0
                    dark:border-white/[0.08]
                  "
                >
                  <div className="text-2xl font-black text-neutral-950 dark:text-white">
                    {row.meetings}
                    <span className="ml-1 text-sm font-medium text-neutral-500">
                      qualified meetings
                    </span>
                  </div>

                  <div className="text-lg font-bold text-neutral-700 dark:text-neutral-300">
                    {row.meetingCost}
                  </div>

                  <div className="text-lg font-bold text-neutral-500 dark:text-neutral-400">
                    {row.setup}
                  </div>

                  <div
                    className="
                      text-2xl
                      font-black
                      text-[#7f9200]
                      dark:text-[#E8FF00]
                    "
                  >
                    {row.total}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile cards */}
            <div className="space-y-3 p-4 md:hidden">
              {investmentRows.map((row, index) => (
                <motion.div
                  key={row.meetings}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className="
                    rounded-2xl
                    border
                    border-neutral-200
                    bg-neutral-50/70
                    p-5
                    dark:border-white/[0.08]
                    dark:bg-white/[0.025]
                  "
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-neutral-950 dark:text-white">
                      {row.meetings}
                    </span>

                    <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                      qualified meetings
                    </span>
                  </div>

                  <div className="my-4 h-px bg-neutral-200 dark:bg-white/10" />

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">
                        Meetings × £150
                      </span>
                      <span className="font-bold text-neutral-900 dark:text-white">
                        {row.meetingCost}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-neutral-500">
                        Setup
                      </span>
                      <span className="font-bold text-neutral-900 dark:text-white">
                        {row.setup}
                      </span>
                    </div>

                    <div className="flex justify-between border-t border-neutral-200 pt-3 dark:border-white/10">
                      <span className="font-bold text-neutral-900 dark:text-white">
                        Month-1 investment
                      </span>

                      <span className="text-xl font-black text-[#7f9200] dark:text-[#E8FF00]">
                        {row.total}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div
              className="
                border-t
                border-neutral-200
                px-6
                py-5
                text-center
                text-xs
                leading-6
                text-neutral-500
                dark:border-white/[0.08]
                dark:text-neutral-400
              "
            >
              From month two, you pay only for the meetings delivered.
              Illustrative figures at the agreed rate of £150 per qualified
              meeting.
            </div>
          </div>
        </motion.div>

        {/* Launch offer */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            mx-auto
            mt-10
            max-w-5xl
            overflow-hidden
            rounded-3xl
            border
            border-[#E8FF00]/30
            bg-[#E8FF00]/[0.055]
            p-7
            text-center
            dark:bg-[#E8FF00]/[0.035]
            md:p-9
          "
        >
          {/* Animated glow */}
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              w-1/3
              bg-gradient-to-r
              from-transparent
              via-[#E8FF00]/10
              to-transparent
              blur-xl
            "
          />

          <div
            className="
              relative
              mx-auto
              mb-4
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              bg-[#E8FF00]
              px-4
              py-1.5
              text-[10px]
              font-black
              uppercase
              tracking-[0.15em]
              text-black
            "
          >
            Launch Offer
          </div>

          <h4
            className="
              relative
              text-xl
              font-black
              tracking-tight
              text-neutral-950
              dark:text-white
              md:text-2xl
            "
          >
            Your first{" "}
            <span className="text-[#7f9200] dark:text-[#E8FF00]">
              3 qualified meetings are free
            </span>
          </h4>

          <p
            className="
              relative
              mx-auto
              mt-3
              max-w-2xl
              text-sm
              leading-6
              text-neutral-600
              dark:text-neutral-400
            "
          >
            A £450 saving, plus a free ICP & target-account list and a free
            LinkedIn outreach swipe file.
          </p>

          <Link
            href="/contact"
            className="
              relative
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-neutral-950
              px-7
              py-3.5
              text-sm
              font-black
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-neutral-800
              hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)]
              dark:bg-white
              dark:text-black
              dark:hover:bg-neutral-200
            "
          >
            Get Started

            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>

        {/* Bottom reassurance */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            mt-8
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-6
            gap-y-3
            text-xs
            font-medium
            text-neutral-500
            dark:text-neutral-400
          "
        >
          {[
            "No monthly retainer",
            "No management fees",
            "No ad spend",
            "No long-term contract",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span
                className="
                  flex h-4 w-4
                  items-center justify-center
                  rounded-full
                  bg-[#E8FF00]
                  text-black
                "
              >
                <CheckSVG className="h-2 w-2" />
              </span>

              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}