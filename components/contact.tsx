"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { IoCopy, IoCheckmark } from "react-icons/io5";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [emailCopied, setEmailCopied] = useState(false);
  const email = "dylanmolnar1@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => {
        setEmailCopied(false);
      }, 10000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Get In Touch</SectionHeading>
      <p className="text-gray-700 dark:text-white/70 mt-6 mb-12">
        Let's collaborate on your next project!
      </p>

      <button
        onClick={handleCopyEmail}
        className={`group relative overflow-hidden px-8 py-4 flex items-center justify-center gap-3 rounded-full outline-none hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-black/10 dark:border-white/10 whitespace-nowrap min-w-[20rem] mx-auto shadow-lg backdrop-blur-sm ${emailCopied
            ? "bg-emerald-500/90 text-white"
            : "bg-gray-900/90 dark:bg-white/5 text-white dark:text-white/90 dark:hover:bg-white/10"
          }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
        {emailCopied ? (
          <>
            <span className="relative z-10 font-medium">Copied Email!</span> <IoCheckmark className="text-xl relative z-10" />
          </>
        ) : (
          <>
            <span className="relative z-10 font-medium">{email}</span> <IoCopy className="opacity-70 group-hover:translate-x-1 transition relative z-10" />
          </>
        )}
      </button>
    </motion.section>
  );
}
