"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const logos = [
  {
    src: "/images/image1.png",
    alt: "Company logo",
  },
  {
    src: "/images/image2.png",
    alt: "Company logo",
  },
  {
    src: "/images/image3.png",
    alt: "Company logo",
  },
  {
    src: "/images/image4.png",
    alt: "Company logo",
  },
  {
    src: "/images/image6.png",
    alt: "Company logo",
  },
  {
    src: "/images/image8.png",
    alt: "Company logo",
  },
  {
    src: "/images/image9.png",
    alt: "Company logo",
  },
];

export default function LogoCloud() {
  return (
    <section className="relative overflow-hidden border-y border-zinc-200 bg-white py-12 dark:border-white/10 dark:bg-[#050505] md:py-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-gray-200 opacity-20 dark:bg-grid-gray-800" />

      <div className="group relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          {/* Label */}
          <div className="shrink-0 md:w-52 md:border-r md:border-zinc-200 md:pr-8 dark:md:border-white/10">
            <div className="flex items-center gap-2 md:justify-end">
              <span className="h-2 w-2 rounded-full bg-[#E8FF00] shadow-[0_0_10px_rgba(232,255,0,0.7)]" />

              <span className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
                Across B2B
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-zinc-600 md:text-right dark:text-zinc-400">
              Supporting ambitious teams across high-ticket B2B markets.
            </p>
          </div>

          {/* Logo slider */}
          <div className="relative min-w-0 flex-1 py-3">
            <InfiniteSlider
              speedOnHover={20}
              speed={40}
              gap={80}
            >
              {logos.map((logo, index) => (
                <div
                  key={`${logo.src}-${index}`}
                  className="flex h-24 w-32 shrink-0 items-center justify-center px-4"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-16 max-w-28 object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 dark:brightness-0 dark:invert dark:opacity-50 dark:hover:opacity-90"
                  />
                </div>
              ))}
            </InfiniteSlider>

            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent dark:from-[#050505]" />

            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent dark:from-[#050505]" />

            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16"
              direction="left"
              blurIntensity={1}
            />

            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}