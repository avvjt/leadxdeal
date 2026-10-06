"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  IconBrandFacebook,
  IconBrandX,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";


const footerLinks = [
  { title: "Pricing", href: "/pricing" },
  { title: "Faq", href: "/faq" },
  { title: "Blogs", href: "/blogs" },
  { title: "Book a call", href: "/book-a-call" },
  {
    title: "Help Center",
    href: "https://intercom.help/leadseeder/en/",
    external: true,
  },
  { title: "Terms & Conditions ", href: "/terms" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Legal Notice", href: "/legal" },
  { title: "Use of Data", href: "/data" },
  
  // {
  //   title: "Feature Request",
  //   href: "https://leadseeder.canny.io/feature-requests",
  //   external: true,
  // },
];

const dockLinks = [
  {
    title: "X (Twitter)",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://x.com/Leadseeder",
    external: true,
  },
  {
    title: "Facebook",
    icon: (
      <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.facebook.com/Leadseeder",
    external: true,
  },

  {
    title: "YouTube",
    icon: (
      <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.youtube.com/@Leadseeder/videos",
    external: true,
  },
  {
    title: "Instagram",
    icon: (
      <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.instagram.com/Leadseeder",
    external: true,
  },
];

export default function FooterSection() {
  return (
    <footer className="relative bg-white dark:bg-[oklch(0.147_0.004_49.25)] text-neutral-800 dark:text-neutral-200 pt-10 overflow-hidden">
      <BackgroundBeamsWithCollision className="absolute inset-0 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center justify-center gap-[1px] mb-16 sm:mb-20">
          {/* Seed icon */}
          <div className="relative h-10 w-10 sm:h-10 sm:w-10">
            <Image
              src="/images/seedd.png"
              alt="Leadseeder seed icon"
              layout="fill"
              objectFit="contain"
              aria-hidden="true"
            />
          </div>
          
          {/* Text logo */}
          <div className="relative w-[120px] h-12 sm:w-[140px] sm:h-14">
            <Image
              src="/images/leadsvg.svg"
              alt="Leadseeder"
              layout="fill"
              objectFit="contain"
              className="dark:brightness-0 dark:invert"
            />
          </div>
        </div>
        <div className="w-full space-y-2 sm:space-y-3 ">
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-8 gap-y-1 sm:gap-y-2 text-xs sm:text-sm">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-150 px-2"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="w-full flex justify-center">
            <FloatingDock mobileClassName="translate-y-20" items={dockLinks} />
          </div>

          <div className="text-xs text-muted-foreground pb-4">
            © {new Date().getFullYear()} Leadseeder. Not an official product of
            LinkedIn™.
          </div>
        </div>
      </div>
    </footer>
  );
}
