"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Launch your first LinkedIn Automation Campaign
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
        Convert prospects into sales leads and grow your pipeline.
        </div>
        <Button
          asChild
          size="lg"
          className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-6 py-3">
          <Link href="/https://intercom.help/leadseeder-d062fd4f1bbf/en/articles/11736915-connecting-your-linkedin-account-using-the-leadseeder-extension">
            <span className="text-nowrap">Start for free</span>
          </Link>
        </Button>
       
      </motion.div>
    </AuroraBackground>
  );
}