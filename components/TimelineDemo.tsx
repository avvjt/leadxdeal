"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { Timeline } from "@/components/ui/timeline";
import { Cover } from "./ui/cover";

export function TimelineDemo() {
  const data = [
    {
      title: "01 · Research Engine",
      content: (
        <div>
          <div className="mb-8">
            <div className="mb-3 inline-flex items-center rounded-full border border-[#E8FF00]/20 bg-[#E8FF00]/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#7f9200] dark:text-[#E8FF00]">
              Define → Target
            </div>

            <h3 className="mb-4 text-2xl font-black tracking-tight text-neutral-950 dark:text-white md:text-4xl">
              We Find Every Decision-Maker in Your Market
            </h3>

            <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400 md:text-lg md:leading-8">
              We start with your Ideal Customer Profile and build a precise
              picture of who buys, why, and how to reach them. Using LinkedIn
              Sales Navigator, Apollo.io, ZoomInfo, Clay and deep manual
              research, we identify the right companies and the right people
              inside them. Every contact is verified before we reach out.
            </p>
          </div>

          <div className="mb-8 space-y-4">
            {[
              {
                step: "Define",
                text: "Your ICP, offer, market and qualification criteria.",
              },
              {
                step: "Target",
                text: "Targeted prospect lists of decision-makers and buying stakeholders.",
              },
              {
                step: "Verify",
                text: "Every email and profile so outreach reaches real, relevant people.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="
                  group flex items-start gap-4
                  rounded-xl
                  border border-neutral-200
                  bg-neutral-50/70
                  p-4
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-[#E8FF00]/50
                  hover:bg-[#E8FF00]/5
                  dark:border-white/[0.08]
                  dark:bg-white/[0.025]
                  dark:hover:border-[#E8FF00]/30
                  dark:hover:bg-[#E8FF00]/[0.03]
                "
              >
                <span
                  className="
                    flex h-8 w-8 shrink-0
                    items-center justify-center
                    rounded-lg
                    bg-[#E8FF00]
                    text-xs font-black
                    text-black
                    shadow-[0_0_15px_rgba(232,255,0,0.15)]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="font-bold text-neutral-900 dark:text-white">
                    {item.step}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=85"
              alt="Sales team researching and analysing prospects"
              className="
                h-72 w-full
                object-cover
                transition-transform duration-700
                group-hover:scale-[1.03]
                md:h-[420px]
              "
            />

            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-black/70 via-black/10 to-transparent
              "
            />

            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8FF00]">
                Research Engine
              </p>
              <p className="mt-1 text-lg font-bold text-white">
                Right company. Right person. Right timing.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "02 · Outreach Engine",
      content: (
        <div>
          <div className="mb-8">
            <div className="mb-3 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">
              Engage
            </div>

            <h3 className="mb-4 text-2xl font-black tracking-tight text-neutral-950 dark:text-white md:text-4xl">
              We Launch Multi-Channel Campaigns
            </h3>

            <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400 md:text-lg md:leading-8">
              We set up the full outreach infrastructure and launch
              personalised campaigns across LinkedIn, email and phone. Using
              several channels together means prospects meet your message
              more than once, in more than one place, which is what lifts
              response rates above single-channel outreach.
            </p>
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "LinkedIn",
                text: "AI-powered LinkedIn outreach built around your ICP.",
              },
              {
                number: "02",
                title: "Email",
                text: "Personalised sequences designed around relevant pain points.",
              },
              {
                number: "03",
                title: "Phone",
                text: "Expert cold callers making warm, relevant introductions.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
                className="
                  rounded-2xl
                  border border-neutral-200
                  bg-white
                  p-5
                  transition-shadow duration-300
                  hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)]
                  dark:border-white/[0.08]
                  dark:bg-white/[0.025]
                  dark:hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                "
              >
                <div className="mb-5 flex items-center justify-between">
                  <span
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-lg
                      bg-blue-500/10
                      text-xs font-black
                      text-blue-600
                      dark:text-blue-400
                    "
                  >
                    {item.number}
                  </span>

                  <span className="h-px flex-1 bg-neutral-200 mx-3 dark:bg-white/10" />

                  <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                </div>

                <h4 className="text-lg font-bold text-neutral-950 dark:text-white">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85"
              alt="Team collaborating on a multi-channel sales campaign"
              className="
                h-72 w-full
                object-cover
                transition-transform duration-700
                group-hover:scale-[1.03]
                md:h-[420px]
              "
            />

            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-black/75 via-black/15 to-transparent
              "
            />

            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                Outreach Engine
              </p>
              <p className="mt-1 text-lg font-bold text-white">
                One prospect. Multiple relevant touchpoints.
              </p>
            </div>
          </div>

          <div
            className="
              mt-6 rounded-2xl
              border border-blue-500/20
              bg-blue-500/[0.04]
              p-5
              dark:bg-blue-500/[0.035]
            "
          >
            <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-300">
              <span className="font-bold text-neutral-950 dark:text-white">
                The goal:
              </span>{" "}
              personalised messaging built around the prospect's actual pain
              points — not generic mass outreach.
            </p>
          </div>
        </div>
      ),
    },

    {
      title: "03 · Delivery Engine",
      content: (
        <div>
          <div className="mb-8">
            <div className="mb-3 inline-flex items-center rounded-full border border-[#E8FF00]/20 bg-[#E8FF00]/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#7f9200] dark:text-[#E8FF00]">
              Qualify → Book → Optimise
            </div>

            <h3 className="mb-4 text-2xl font-black tracking-tight text-neutral-950 dark:text-white md:text-4xl">
              We Qualify & Book Meetings
            </h3>

            <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400 md:text-lg md:leading-8">
              Every reply is handled by a person, not left to a bot. We manage
              objections and follow-ups, qualify each prospect against the
              six-point framework, and book them directly into your calendar
              with the full context your team needs. We then keep optimising
              targeting, messaging and conversion.
            </p>
          </div>

          <div className="mb-8 space-y-4">
            {[
              {
                step: "Qualify",
                text: "Human-led reply management so no interested prospect slips through.",
              },
              {
                step: "Book",
                text: "Meetings booked directly into your calendar with CRM and calendar automation.",
              },
              {
                step: "Optimise",
                text: "Continuous monitoring and improvement of every campaign.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="
                  group flex items-start gap-4
                  rounded-xl
                  border border-neutral-200
                  bg-neutral-50/70
                  p-4
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-[#E8FF00]/50
                  hover:bg-[#E8FF00]/5
                  dark:border-white/[0.08]
                  dark:bg-white/[0.025]
                  dark:hover:border-[#E8FF00]/30
                  dark:hover:bg-[#E8FF00]/[0.03]
                "
              >
                <span
                  className="
                    flex h-8 w-8 shrink-0
                    items-center justify-center
                    rounded-lg
                    bg-[#E8FF00]
                    text-xs font-black
                    text-black
                    shadow-[0_0_15px_rgba(232,255,0,0.15)]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="font-bold text-neutral-900 dark:text-white">
                    {item.step}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=85"
              alt="Sales professionals discussing qualified business meetings"
              className="
                h-72 w-full
                object-cover
                transition-transform duration-700
                group-hover:scale-[1.03]
                md:h-[420px]
              "
            />

            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-black/80 via-black/20 to-transparent
              "
            />

            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8FF00]">
                Delivery Engine
              </p>

              <p className="mt-1 text-lg font-bold text-white">
                Qualified conversations become booked meetings.
              </p>
            </div>
          </div>

          {/* Final statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              relative mt-8 overflow-hidden
              rounded-2xl
              border border-[#E8FF00]/20
              bg-[#E8FF00]/[0.045]
              p-6 text-center
              dark:bg-[#E8FF00]/[0.035]
              md:p-8
            "
          >
            <div
              className="
                pointer-events-none absolute
                left-1/2 top-0
                h-32 w-64
                -translate-x-1/2
                rounded-full
                bg-[#E8FF00]/10
                blur-[60px]
              "
            />

            <p className="relative text-2xl font-black tracking-tight text-neutral-950 dark:text-white md:text-3xl">
              You show up.
              <span className="text-[#7f9200] dark:text-[#E8FF00]">
                {" "}
                Close the deal.
              </span>
              <br />
              <span className="text-neutral-500 dark:text-neutral-400">
                Get paid.
              </span>
            </p>

            <Link
              href="/contact"
              className="
                relative mt-6
                inline-flex items-center gap-2
                rounded-full
                bg-[#E8FF00]
                px-6 py-3
                text-sm font-black
                text-black
                shadow-[0_0_30px_rgba(232,255,0,0.2)]
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[#dfff00]
                hover:shadow-[0_0_45px_rgba(232,255,0,0.4)]
              "
            >
              Start Getting Meetings

              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="process"
      className="
        relative w-full overflow-hidden
        bg-white py-20
        dark:bg-[#0a0a0a]
        md:py-28
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        <motion.div
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute left-1/2 top-[-250px]
            h-[550px] w-[550px]
            -translate-x-1/2
            rounded-full
            bg-[#E8FF00]/[0.045]
            blur-[130px]
          "
        />

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
            absolute right-[-180px] top-[45%]
            h-[450px] w-[450px]
            rounded-full
            bg-blue-500/[0.04]
            blur-[120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <div
            className="
              mb-5 inline-flex items-center gap-2
              rounded-full
              border border-neutral-200
              bg-white/80
              px-4 py-2
              text-xs font-bold uppercase
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
                h-2 w-2 rounded-full
                bg-[#E8FF00]
                shadow-[0_0_12px_rgba(232,255,0,0.9)]
              "
            />
            Our Process
          </div>

          <h2
            className="
              text-4xl font-black
              tracking-[-0.045em]
              text-neutral-950
              sm:text-5xl
              md:text-6xl
              dark:text-white
            "
          >
            How It{" "}
            <Cover>
              <span className="text-[#E8FF00]">Works</span>
            </Cover>
          </h2>

          <p
            className="
              mx-auto mt-5
              max-w-3xl
              text-base leading-7
              text-neutral-500
              sm:text-lg sm:leading-8
              dark:text-neutral-400
            "
          >
            From target market to booked meeting in{" "}
            <span className="font-bold text-neutral-900 dark:text-white">
              3 simple engines
            </span>
            , running through our{" "}
            <span className="font-bold text-[#7f9200] dark:text-[#E8FF00]">
              6-step process
            </span>
            :
            <span className="font-semibold text-neutral-700 dark:text-neutral-300">
              {" "}
              Define → Target → Engage → Qualify → Book → Optimise
            </span>
            .
          </p>
        </motion.div>

        {/* Timeline */}
        <Timeline data={data} />
      </div>
    </section>
  );
}