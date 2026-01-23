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
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        What started as small coding project to make my own life easier, has transformed into a career of developing systems and software for myself and others. 
        When I'm not coding, I am...{" "}
        <span className="inline-flex h-7 items-center overflow-hidden align-middle min-w-[25.5ch] justify-end">
          <AnimatePresence mode="wait">
            <motion.span
              key={languages[activeLangIndex]}
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="font-semibold text-white"
            >
              {languages[activeLangIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
        , modifying cars/bikes, and traveling the world.
      </p>
    </motion.section>
  );
}