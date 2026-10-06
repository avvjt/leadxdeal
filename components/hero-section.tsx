"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import ColourfulText from "@/components/ui/colourful-text";
import { motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";
import { Tooltip } from "./tooltip";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const CheckSVG = ({
  className = "w-4 h-4 mr-3 fill-black dark:fill-white shrink-0",
}) => (
  <svg className={className} viewBox="0 0 12 12">
    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
  </svg>
);

export default function HeroSection() {
  const words = ["Automation", "Prospecting", "Outreach"];

  return (
    <main className=" bg-white dark:bg-[oklch(0.147_0.004_49.25)] text-black dark:text-neutral-200 rounded-md mx-3 flex pt-20 pb-4 items-center justify-center overflow-hidden">
      <section className=" w-full">
        <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl">
          <div className="relative z-20 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-4xl text-balance text-6xl font-bold text-black dark:text-neutral-200 md:text-7xl lg:text-6xl xl:text-[5.25rem]">
              Best LinkedIn 
              <FlipWords words={words} />Tool
              <br/>
               for Lead Generation 
            </motion.h1>

            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="p"
              className="relative z-20 mx-auto max-w-2xl py-8 text-center text-lg text-black dark:text-neutral-200 md:text-base"
            >
              Automate LinkedIn connection requests, Send automated follow-up
              messages, and Visit the profiles of your Prospects on LinkedIn. 10x your
              LinkedIn outreach and book meetings
            </TextEffect>
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <HoverBorderGradient
                key={2}
                as={Link}
                href="/https://intercom.help/leadseeder-d062fd4f1bbf/en/articles/11736915-connecting-your-linkedin-account-using-the-leadseeder-extension"
                containerClassName="rounded-xl"
                className="h-10.5 px-6 py-2.5 text-black bg-white border-white backdrop-blur-sm transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-black"
                duration={1}
                clockwise={true}
              >
                <span className="text-nowrap">Free Trial</span>
              </HoverBorderGradient>
            </AnimatedGroup>
          </div>
          <div className="text-center mb-16 lg:mb-20">
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-black dark:text-white mt-14">
              <div className="flex items-center gap-2">
                <CheckSVG />
                <span>7-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckSVG />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckSVG />
                <span>Cancel anytime</span>
              </div>
              {/* <div className="flex items-center gap-2">
                <CheckSVG />
                <span>30-day money-back guarantee</span>
              </div> */}
            </div>
          </div>
          <Tooltip/>
        </div>
      </section>
    </main>
  );
}
