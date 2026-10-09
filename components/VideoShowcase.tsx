
"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface VideoShowcaseProps {
  src?: string;
  poster?: string;
}

export default function VideoShowcase({
  src = "/videos/leadxdeal-showreel.mp4",
  poster,
}: VideoShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      console.error("Unable to play video:", error);
    }
  };

  return (
    <section
      ref={sectionRef}
      aria-label="LeadXDeal video showcase"
      className="
        relative isolate overflow-hidden
        bg-white px-4 py-16
        dark:bg-[#0a0a0a]
        sm:px-6 sm:py-20
        lg:px-8 lg:py-28
      "
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.12, 0.24, 0.12],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute left-1/2 top-1/2
            h-[420px] w-[420px] -translate-x-1/2
            -translate-y-1/2 rounded-full
            bg-[#007F83]/20 blur-[100px]
            dark:bg-[#007F83]/25
            sm:h-[600px] sm:w-[600px]
          "
        />

        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_center,transparent_10%,rgba(255,255,255,0.5)_100%)]
            dark:bg-[radial-gradient(circle_at_center,transparent_10%,rgba(10,10,10,0.8)_100%)]
          "
        />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 24, filter: "blur(8px)" }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-8 max-w-3xl text-center sm:mb-10"
        >
          <div
            className="
              mb-4 inline-flex items-center gap-2
              rounded-full border border-[#007F83]/20
              bg-[#007F83]/5 px-4 py-2
              dark:border-[#20BFC2]/20
              dark:bg-[#007F83]/10
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#20BFC2] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#007F83] dark:bg-[#20BFC2]" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#007F83] dark:text-[#20BFC2] sm:text-xs">
              Inside the Growth Engine
            </span>
          </div>

          <h2
            className="
              text-3xl font-black tracking-tight
              text-neutral-950 sm:text-4xl
              md:text-5xl dark:text-white
            "
          >
            See How We Turn{" "}
            <span className="text-[#007F83] dark:text-[#20BFC2]">
              Leads Into Deals.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-400 sm:text-base sm:leading-8">
            Discover how our AI-powered appointment setting engine helps
            B2B teams connect with qualified prospects and build a stronger
            sales pipeline.
          </p>
        </motion.div>

        {/* Cinematic video frame */}
        <motion.div
          initial={{ opacity: 0, y: 38, scale: 0.97 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 38, scale: 0.97 }
          }
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="group relative"
        >
          {/* Animated outer glow */}
          <motion.div
            aria-hidden="true"
            animate={{
              opacity: [0.45, 0.8, 0.45],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none absolute -inset-[2px]
              rounded-[22px] bg-gradient-to-r
              from-[#007F83] via-[#20BFC2] to-[#E8FF00]
              blur-[2px] sm:-inset-[3px]
              sm:rounded-[30px]
            "
          />

          <div
            className="
              relative overflow-hidden rounded-[20px]
              border border-neutral-200/70
              bg-neutral-100 shadow-2xl
              shadow-[#007F83]/10
              dark:border-white/10 dark:bg-[#111]
              dark:shadow-black/40
              sm:rounded-[28px]
            "
          >
            {/* Browser-style top bar */}
            <div
              className="
                flex h-10 items-center justify-between
                border-b border-neutral-200/80
                bg-white/90 px-3
                dark:border-white/[0.08]
                dark:bg-[#111]/95
                sm:h-12 sm:px-5
              "
            >
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
              </div>

              <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-500 sm:text-xs">
                LeadXDeal · Growth in Action
              </span>

              <span className="h-2 w-2 rounded-full bg-[#20BFC2] shadow-[0_0_10px_#20BFC2]" />
            </div>

            {/* Responsive 16:9 video */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#071111]">
              <video
                ref={videoRef}
                src={src}
                poster={poster}
                controls
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                aria-label="LeadXDeal growth engine video"
                className="
                  absolute inset-0 h-full w-full
                  object-contain
                "
              />

              {/* Custom play overlay, shown before playback */}
              {!isPlaying && (
                <button
                  type="button"
                  onClick={handlePlay}
                  aria-label="Play LeadXDeal video"
                  className="
                    absolute inset-0 z-10 flex items-center
                    justify-center bg-black/15
                    transition-colors duration-300
                    hover:bg-black/25
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-inset
                    focus-visible:ring-[#20BFC2]
                  "
                >
                  <motion.span
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ duration: 0.3 }}
                    className="
                      flex h-14 w-14 items-center
                      justify-center rounded-full
                      border border-white/50
                      bg-[#E8FF00] text-black
                      shadow-[0_0_45px_rgba(232,255,0,0.3)]
                      sm:h-20 sm:w-20
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-1 h-6 w-6 sm:h-8 sm:w-8"
                      aria-hidden="true"
                    >
                      <path d="M8 5.5v13l11-6.5z" />
                    </svg>
                  </motion.span>
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Supporting footer */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 12 }
          }
          transition={{ duration: 0.7, delay: 0.45 }}
          className="
            mt-6 flex flex-wrap items-center
            justify-center gap-x-5 gap-y-3
            text-center text-[10px] font-semibold
            uppercase tracking-[0.12em]
            text-neutral-500 dark:text-neutral-400
            sm:gap-x-8 sm:text-xs
          "
        >
          <span className="flex items-center gap-2">
            <span className="text-[#007F83] dark:text-[#20BFC2]">✓</span>
            Exclusive leads
          </span>

          <span className="flex items-center gap-2">
            <span className="text-[#007F83] dark:text-[#20BFC2]">✓</span>
            Qualified appointments
          </span>

          <span className="flex items-center gap-2">
            <span className="text-[#007F83] dark:text-[#20BFC2]">✓</span>
            Zero monthly retainer
          </span>
        </motion.div>
      </div>
    </section>
  );
}
