"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  IconBrandFacebook,
  IconBrandX,
  IconBrandYoutube,
  IconBrandInstagram,
  IconArrowUpRight,
} from "@tabler/icons-react";

import { FloatingDock } from "@/components/ui/floating-dock";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const footerLinks = [
  { title: "Pricing", href: "/pricing" },
  { title: "FAQ", href: "/faq" },
  { title: "Case Studies", href: "/case" },
  { title: "Book a Call", href: "/book-a-call" },
  {
    title: "Help Center",
    href: "https://intercom.help/leadxdeal/en/",
    external: true,
  },
  { title: "Terms & Conditions", href: "/terms" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Legal Notice", href: "/legal" },
  { title: "Use of Data", href: "/data" },
];

const dockLinks = [
  {
    title: "X (Twitter)",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 transition-colors duration-300 group-hover:text-black dark:text-neutral-300 dark:group-hover:text-white" />
    ),
    href: "https://x.com/leadxdeal",
  },
  {
    title: "Facebook",
    icon: (
      <IconBrandFacebook className="h-full w-full text-neutral-500 transition-colors duration-300 group-hover:text-black dark:text-neutral-300 dark:group-hover:text-white" />
    ),
    href: "https://www.facebook.com/leadxdeal",
  },
  {
    title: "YouTube",
    icon: (
      <IconBrandYoutube className="h-full w-full text-neutral-500 transition-colors duration-300 group-hover:text-black dark:text-neutral-300 dark:group-hover:text-white" />
    ),
    href: "https://www.youtube.com/@leadxdeal/videos",
  },
  {
    title: "Instagram",
    icon: (
      <IconBrandInstagram className="h-full w-full text-neutral-500 transition-colors duration-300 group-hover:text-black dark:text-neutral-300 dark:group-hover:text-white" />
    ),
    href: "https://www.instagram.com/leadxdeal",
  },
];

export default function FooterSection() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-neutral-200
        bg-white
        text-neutral-900
        dark:border-white/[0.07]
        dark:bg-[#0a0a0a]
        dark:text-white
      "
    >
      {/* Animated background */}
      <BackgroundBeamsWithCollision className="pointer-events-none absolute inset-0 z-0 opacity-40 dark:opacity-30" />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, -50, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[15%]
            top-[-250px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#E8FF00]/[0.045]
            blur-[130px]
          "
        />

        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 40, -30, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-180px]
            bottom-[-200px]
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-500/[0.045]
            blur-[120px]
          "
        />

        {/* Grid */}
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

        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_center,transparent_15%,rgba(255,255,255,0.7)_100%)]
            dark:bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.75)_100%)]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Main footer */}
        <div className="py-20 md:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Brand / CTA */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Logo */}
              <Link
                href="/"
                className="
                  group
                  inline-flex
                  items-center
                  gap-1
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                "
              >
                {/* Icon */}
                <div className="relative h-11 w-11 sm:h-12 sm:w-12">
                  <Image
                    src="/images/lead.png"
                    alt="LeadXDeal"
                    fill
                    className="object-contain"
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute inset-0
                      rounded-full
                      bg-[#E8FF00]/20
                      opacity-0
                      blur-xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />
                </div>

                {/* Text logo */}
                <div className="relative h-12 w-[135px] sm:h-14 sm:w-[155px]">
                  <Image
                    src="/images/leadtext.png"
                    alt="leadxdeal"
                    fill
                    className="object-contain dark:brightness-0 dark:invert"
                  />
                </div>
              </Link>

              {/* Heading */}
              <h2
                className="
                  mt-8
                  max-w-xl
                  text-3xl
                  font-black
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-neutral-950
                  sm:text-4xl
                  md:text-5xl
                  dark:text-white
                "
              >
                Where leads become{" "}
                <span className="text-[#7f9200] dark:text-[#E8FF00]">
                  deals.
                </span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-lg
                  text-sm
                  leading-7
                  text-neutral-500
                  sm:text-base
                  dark:text-neutral-400
                "
              >
                Exclusive leads, qualified conversations and booked meetings
                delivered directly to your calendar. You close deals. We
                handle everything else.
              </p>

              {/* CTA */}
              <Link
                href="/book-a-call"
                className="
                  group
                  mt-7
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#E8FF00]
                  px-6
                  py-3.5
                  text-sm
                  font-black
                  text-black
                  shadow-[0_0_30px_rgba(232,255,0,0.12)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#dfff00]
                  hover:shadow-[0_0_45px_rgba(232,255,0,0.3)]
                "
              >
                Book a Free Strategy Call

                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="lg:pt-2"
            >
              <p
                className="
                  mb-5
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-neutral-400
                  dark:text-neutral-500
                "
              >
                Explore
              </p>

              <div
                className="
                  grid
                  grid-cols-2
                  gap-x-6
                  gap-y-1
                  sm:grid-cols-3
                  lg:grid-cols-2
                  xl:grid-cols-3
                "
              >
                {footerLinks.map((link, index) => (
                  <motion.div
                    key={link.title}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: 0.05 + index * 0.04,
                    }}
                  >
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={
                        link.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="
                        group/link
                        flex
                        items-center
                        justify-between
                        rounded-lg
                        px-3
                        py-2.5
                        text-sm
                        text-neutral-500
                        transition-all
                        duration-200
                        hover:bg-neutral-100
                        hover:text-neutral-950
                        dark:text-neutral-400
                        dark:hover:bg-white/[0.04]
                        dark:hover:text-white
                      "
                    >
                      <span>{link.title}</span>

                      {link.external && (
                        <IconArrowUpRight
                          className="
                            h-3.5 w-3.5
                            opacity-0
                            transition-all
                            duration-200
                            group-hover/link:translate-x-0.5
                            group-hover/link:-translate-y-0.5
                            group-hover/link:opacity-100
                          "
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div
            className="
              relative
              mt-16
              h-px
              w-full
              overflow-hidden
              bg-neutral-200
              dark:bg-white/[0.08]
            "
          >
            <motion.div
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-0
                top-0
                h-px
                w-1/4
                bg-gradient-to-r
                from-transparent
                via-[#E8FF00]
                to-transparent
              "
            />
          </div>

          {/* Social + bottom */}
          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-8
              pt-8
              md:flex-row
            "
          >
            {/* Copyright */}
            <p
              className="
                order-2
                text-center
                text-xs
                text-neutral-400
                dark:text-neutral-500
                md:order-1
                md:text-left
              "
            >
              © {new Date().getFullYear()} LeadXDeal. All rights reserved.
              <span className="mx-2 text-neutral-300 dark:text-neutral-700">
                ·
              </span>
            </p>

            {/* Social dock */}
            <div className="order-1 md:order-2">
              <FloatingDock
                mobileClassName="translate-y-0"
                items={dockLinks}
              />
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div
          className="
            h-1
            w-full
            rounded-t-full
            bg-gradient-to-r
            from-transparent
            via-[#E8FF00]/60
            to-transparent
          "
        />
      </div>
    </footer>
  );
}