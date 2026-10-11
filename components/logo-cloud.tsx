"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const logos = [
  { src: "/images/image1.png", alt: "Company logo 1" },
  { src: "/images/image2.png", alt: "Company logo 2" },
  { src: "/images/image3.png", alt: "Company logo 3" },
  { src: "/images/image4.png", alt: "Company logo 4" },
  { src: "/images/image6.png", alt: "Company logo 5" },
  { src: "/images/image8.png", alt: "Company logo 6" },
  { src: "/images/image9.png", alt: "Company logo 7" },
];

export default function LogoCloud() {
  return (
    <section className="relative isolate overflow-hidden border-y border-white/10 bg-[#080909] py-14 text-white sm:py-16 lg:py-20">
      {/* Subtle branded background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#007F83]/20 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#E8FF00]/[0.07] blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section intro */}
        <div className="mb-9 flex flex-col gap-3 sm:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#20BFC2]/25 bg-[#007F83]/10 px-3.5 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[#E8FF00] shadow-[0_0_12px_rgba(232,255,0,0.7)]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#20BFC2] sm:text-sm">
                Across B2B
              </span>
            </div>

            <h2 className="max-w-2xl text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              Built for ambitious{" "}
              <span className="text-[#E8FF00]">B2B growth teams.</span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-zinc-300 sm:text-lg md:max-w-sm md:text-right">
            Supporting teams across high-ticket B2B markets with a smarter path
            to qualified conversations.
          </p>
        </div>

        {/* Logo slider panel */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] px-2 py-5 shadow-[0_20px_80px_rgba(0,0,0,0.25)] sm:px-4 sm:py-7">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#20BFC2]/70 to-transparent" />

          <div className="relative min-w-0">
            <InfiniteSlider speedOnHover={20} speed={35} gap={64}>
              {logos.map((logo, index) => (
                <div
                  key={`${logo.src}-${index}`}
                  className="group flex h-24 w-40 shrink-0 items-center justify-center rounded-xl px-5 transition-colors duration-300 hover:bg-white/[0.045] sm:h-28 sm:w-48"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className="max-h-16 max-w-36 object-contain opacity-70 grayscale transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-[4.5rem] sm:max-w-40"
                  />
                </div>
              ))}
            </InfiniteSlider>

            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#0b0d0d] to-transparent sm:w-16" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#0b0d0d] to-transparent sm:w-16" />

            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 z-20 h-full w-12 sm:w-16"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 z-20 h-full w-12 sm:w-16"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
