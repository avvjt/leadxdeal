"use client";
import { useState } from "react";
import HeroPricing from "@/components/HeroPricing";

const CheckSVG = ({
  className = "w-4 h-4 mr-3 fill-black dark:fill-white shrink-0",
}) => (
  <svg className={className} viewBox="0 0 12 12">
    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
  </svg>
);

const plans = [
  {
    name: "Free",
    price: { yearly: 0, monthly: 0 },
    description: "Perfect for getting started with automation",
    features: [
      "Cloud based solution",
      "Unlimited imports (8+ ways)",
      "Reply detection",
      "Unlimited message templates",
      "Delete pending requests",
      "Basic campaign analytics",
      "Activity control center",
      "Chat support",
    ],
    popular: false,
    ctaText: "Get Started Free",
    badge: null,
  },
  {
    name: "Professional",
    price: { yearly: 170, monthly: 17 },
    description: "Best for growing sales teams",
    features: [
      "Everything in Free +",
      "Unlimited imports from Groups, Events, Searches",
      "Import/Export from CSV",
      "Unlimited campaigns",
      "800 invitations/month",
      "200 messages/day",
      "Premium Sales Nav & Recruiter Support",
      "Sendspark video integration",
      "Remove prospects from active campaigns",
      "Advanced campaign analytics",
      "Priority email support",
    ],
    popular: true,
    ctaText: "Start 7-Day Free Trial",
    badge: "Save 17%",
  },
  {
    name: "Enterprise",
    price: { yearly: "Custom", monthly: "Custom" },
    description: "For organizations with advanced needs",
    features: [
      "All Professional features +",
      "Dedicated account manager",
      "Custom invitation limits",
      "Unlimited messaging volume",
      // "SAML SSO integration",
      // "API access & webhooks",
      "Unlimited team members",
      // "99.9% uptime SLA",
      "Dedicated IP addresses",
      "Priority onboarding",
      // "SOC 2 compliance",
    ],
    popular: false,
    ctaText: "Contact Sales",
  },
];

export default function PricingComparator() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-white dark:bg-black text-neutral-800 dark:text-neutral-200 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16 lg:mb-20">
          <HeroPricing />

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-black dark:text-white">
            <div className="flex items-center gap-2">
              <CheckSVG />
              <span>7-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckSVG />
              <span>One Minute setup</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckSVG />
              <span>No Credit Card Required</span>
            </div>
            {/* <div className="flex items-center gap-2">
              <CheckSVG />
              <span>30-day money-back guarantee</span>
            </div> */}
          </div>
        </div>

        {/* Pricing toggle */}
        <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
          <div className="relative flex w-full p-1 bg-gray-100 dark:bg-gray-900 rounded-full">
            <span
              className="absolute inset-0 m-1 pointer-events-none"
              aria-hidden="true"
            >
              <span
                className={`absolute inset-0 w-1/2 bg-black dark:bg-white rounded-full shadow transform transition-transform duration-150 ease-in-out ${
                  isAnnual ? "translate-x-0" : "translate-x-full"
                }`}
              ></span>
            </span>
            <button
              className={`relative flex-1 text-sm font-medium h-8 rounded-full transition-colors duration-150 ease-in-out ${
                isAnnual
                  ? "text-white dark:text-black"
                  : "text-gray-700 dark:text-gray-400"
              }`}
              aria-pressed={isAnnual}
              onClick={() => setIsAnnual(true)}
            >
              Yearly{" "}
              <span
                className={
                  isAnnual ? "text-gray-400 dark:text-gray-600" : "hidden"
                }
              >
                -20%
              </span>
            </button>
            <button
              className={`relative flex-1 text-sm font-medium h-8 rounded-full transition-colors duration-150 ease-in-out ${
                !isAnnual
                  ? "text-white dark:text-black"
                  : "text-gray-700 dark:text-gray-400"
              }`}
              aria-pressed={!isAnnual}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
          {plans.map((plan) => (
            <div key={plan.name} className="h-full">
              <div
                className={`relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow ${
                  plan.popular ? "ring-2 ring-black dark:ring-white" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 mr-6 -mt-4">
                    <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-black dark:bg-white text-white dark:text-black rounded-full shadow">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="mb-5">
                  <div className="text-black dark:text-white font-semibold mb-1">
                    {plan.name}
                  </div>
                  <div className="inline-flex items-baseline mb-2">
                    {typeof plan.price.yearly === "number" ? (
                      <>
                        <span className="text-black dark:text-white font-bold text-3xl">
                          $
                        </span>
                        <span className="text-black dark:text-white font-bold text-4xl">
                          {isAnnual ? plan.price.yearly : plan.price.monthly}
                        </span>
                        <span className="text-gray-500 font-medium">
                          /{isAnnual ? "year" : "mo"}
                        </span>
                      </>
                    ) : (
                      <span className="text-black dark:text-white font-bold text-3xl">
                        Custom Pricing
                      </span>
                    )}
                    {plan.badge && (
                      <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-500 mb-5">
                    {plan.description}
                  </div>
                  <a
                    className={`w-full inline-flex justify-center whitespace-nowrap rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors duration-150 ${
                      plan.name === "Enterprise"
                        ? "bg-gray-800 dark:bg-gray-200 text-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-300"
                        : "bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
                    }`}
                    href={
                      plan.name === "Enterprise"
                        ? "mailto:support@leadseeder.co"
                        : "#"
                    }
                  >
                    {plan.ctaText}
                  </a>
                </div>
                <div className="text-black dark:text-white font-medium mb-3">
                  Includes:
                </div>
                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-3 grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckSVG />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}