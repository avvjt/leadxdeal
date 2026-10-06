"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function LampDemo() {
  const words = [
    { text: "Generate" },
    { text: "quality" },
    { text: "LinkedIn" },
    { text: "leads" },
    { text: "with", className: "text-blue-500 dark:text-blue-500" },
    { text: "zero", className: "text-blue-500 dark:text-blue-500" },
    { text: "effort.", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
          Unlock steady leads and save hours of outreach
        </p>
        <TypewriterEffectSmooth words={words} />
      </motion.h1>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-4">
        <button className="w-40 h-10 rounded-xl bg-black text-white border border-blue-700 text-sm transition-all">
          Start Free Trial
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm hover:bg-gray-100 transition-all">
          Book a Demo
        </button>
      </div>
    </LampContainer>
  );
}
