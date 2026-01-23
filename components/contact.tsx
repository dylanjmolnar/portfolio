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
      <SectionHeading>Contact Me</SectionHeading>
      <br/>
      <br/>
      <br/>
      <button
        onClick={handleCopyEmail}
        className={`group bg-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 whitespace-nowrap min-w-[19rem] mx-auto ${
          emailCopied
            ? "bg-green-500 text-black"
            : "text-black dark:text-white hover:bg-white/90"
        }`}
      >
        {emailCopied ? (
          <>
            Copied Email! <IoCheckmark className="opacity-70" />
          </>
        ) : (
          <>
            {email} <IoCopy className="opacity-70 group-hover:scale-110 transition" />
          </>
        )}
      </button>
    </motion.section>
  );
}
