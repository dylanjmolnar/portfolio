"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { AnimatePresence, motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  const languages = [
    "learning new languages",
    "aprendiendo nuevas lenguas",
    "neue Sprachen lernen",
  ];
  const [activeLangIndex, setActiveLangIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveLangIndex((prev) => (prev + 1) % languages.length);
    }, 8000);
    return () => clearInterval(id);
  }, [languages.length]);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <div className="bg-white/60 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/10 p-8 rounded-3xl shadow-lg mt-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 pointer-events-none" />
        <p className="mb-6 text-lg leading-relaxed text-gray-800 dark:text-gray-300 relative z-10">
          What started as a small coding project to make my own life easier has transformed into a passion for developing systems and software for myself and others. 
        </p>
        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300 relative z-10">
          When I'm not coding, I am...{""}
          <span className="inline-flex h-8 items-center overflow-hidden align-middle min-w-[24ch] justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={languages[activeLangIndex]}
                initial={{ y: -12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 12, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="font-bold text-gray-950 dark:text-white border-b-2 border-blue-500"
              >
                {languages[activeLangIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
          , modifying cars/bikes, and traveling the world.
        </p>
      </div>
    </motion.section>
  );
}