import React from "react";
import { TextEffect } from "@/components/ui/text-effect";

export default function HeroFAQ() {
  return (
    <main className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
      <section>
        <div className="relative mx-auto max-w-6xl px-6 pb-4 pt-8 lg:pt-8">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full  dark:bg-emerald-900/20 text-black dark:text-white text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4h12v2H4V4zm0 4h12v2H4V8zm0 4h8v2H4v-2z" />
            </svg>
            Insights & Stories
          </div> */}
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="text-balance text-5xl font-bold md:text-6xl"
            >
              The Blog
            </TextEffect>
            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="p"
              className="mx-auto mt-6 max-w-2xl text-pretty text-lg"
            >
              Explore the latest news, product updates, and expert insights from our team. Stay inspired and informed!
            </TextEffect>
          </div>
        </div>
      </section>
    </main>
  );
}
