"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

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
        After graduating with a degree in{" "}
        <span className="font-medium">Chemical Engineering</span>, I decided to pursue my
        passion for programming.
        <span className="italic"> My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        challenges that arise from problem solving. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and Vite
        </span>
        . I am also familiar with TypeScript and Python. I am always looking to
        learn new languages and expand my portfolio.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy 
        coding my own projects & working on cars and bikes. I'm always looking to{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
