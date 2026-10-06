"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Chirag Gupta",
    designation: "CEO & CTO @BoloSign",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Al Mehdi",
    designation: "Agency Owner DigiVibes",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    name: "Eve Chan",
    designation: "Founder, Growth Machine",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "GTM Engineer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Elina Adams",
    designation: "Sales head",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export function Tooltip() {
  return (
    <div className="flex flex-col items-center justify-center mb-10 w-full">
      <div className="flex flex-row items-center justify-center">
        <AnimatedTooltip items={people} />
        <div className="mt-2 ml-8 flex flex-col items-center">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.svg
                key={star}
                className="h-6 w-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: star * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  },
                }}
                whileHover={{ scale: 1.2 }}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </motion.svg>
            ))}
          </div>
          
          <motion.div
            className="text-black dark:text-neutral-200 md:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                delay: 0.6,
                duration: 0.4
              }
            }}
          >
            Loved by 1500+ professionals
          </motion.div>
        </div>
      </div>
    </div>
  );
}
