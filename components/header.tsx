"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const menuItems = [
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
  { name: "Case Studies", href: "/case" },
  { name: "Book a Call", href: "/book-a-call" },
];

const INTERCOM_HELP_URL =
  "https://intercom.help/leadxdeal-d062fd4f1bbf/en/articles/11736915-connecting-your-linkedin-account-using-the-leadxdeal-extension";

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  const navRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        menuState
      ) {
        setMenuState(false);
      }
    };

    if (menuState) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuState]);

  const handleMenuItemClick = () => {
    setMenuState(false);
  };

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header>
      <nav
        ref={navRef}
        data-state={menuState ? "active" : "inactive"}
        className="fixed z-20 w-full px-2"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "max-w-4xl rounded-2xl border border-black/10 bg-background/70 backdrop-blur-xl lg:px-5 dark:border-white/10"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            {/* Logo + Mobile menu */}
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="LeadXDeal home"
                className="flex items-center space-x-2"
                onClick={handleMenuItemClick}
              >
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                aria-expanded={menuState}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu
                  className={cn(
                    "m-auto size-6 transition-all duration-200",
                    menuState
                      ? "scale-0 rotate-180 opacity-0"
                      : "scale-100 rotate-0 opacity-100"
                  )}
                />

                <X
                  className={cn(
                    "absolute inset-0 m-auto size-6 transition-all duration-200",
                    menuState
                      ? "scale-100 rotate-0 opacity-100"
                      : "scale-0 -rotate-180 opacity-0"
                  )}
                />
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={handleMenuItemClick}
                      className={cn(
                        "group relative block text-muted-foreground duration-150 hover:text-accent-foreground",
                        isActive(item.href) &&
                          "font-medium text-accent-foreground"
                      )}
                    >
                      <span className="relative inline-block">
                        {item.name}

                        {!isActive(item.href) && (
                          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div
              className={cn(
                "mb-6 hidden w-full flex-wrap items-center justify-end rounded-3xl border bg-background p-6 shadow-2xl shadow-zinc-300/20",
                "lg:m-0 lg:flex lg:w-fit lg:gap-5 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none",
                menuState && "flex",
                "dark:shadow-none"
              )}
            >
              {/* Mobile navigation */}
              <div className="w-full lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={handleMenuItemClick}
                        className={cn(
                          "group relative block text-muted-foreground duration-150 hover:text-accent-foreground",
                          isActive(item.href) &&
                            "font-medium text-accent-foreground"
                        )}
                      >
                        <span className="relative inline-block">
                          {item.name}

                          {!isActive(item.href) && (
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
                          )}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="flex w-full flex-col gap-3 pt-6 sm:flex-row lg:w-auto lg:pt-0">
                <HoverBorderGradient
                  containerClassName="rounded-full w-full sm:w-auto"
                  as="div"
                  className="flex items-center justify-center gap-2 bg-black px-5 py-2.5 text-sm font-semibold text-white dark:bg-[#E8FF00] dark:text-black"
                >
                  <Link
                    href="/book-a-call"
                    onClick={handleMenuItemClick}
                  >
                    Book a Free Strategy Call
                  </Link>
                </HoverBorderGradient>

                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};