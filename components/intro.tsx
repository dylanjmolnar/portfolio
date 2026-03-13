"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { IoCopy, IoCheckmark } from "react-icons/io5";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const [emailCopied, setEmailCopied] = useState(false);
  const email = "dylanmolnar1@gmail.com";

  // Calculate years of experience since November 1st, 2017
  const startDate = new Date('2017-11-01');
  const currentDate = new Date();
  const yearsOfExperience = Math.floor((currentDate.getTime() - startDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000));

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
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            {process.env.NODE_ENV === 'development' ? (
              <a
                href="https://dylanjmolnar.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Image
                  src="/portrait.jpg"
                  alt="Dylan Portrait"
                  width="192"
                  height="192"
                  quality="95"
                  priority={true}
                  className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl hover:opacity-80 transition-opacity"
                />
              </a>
            ) : (
              <Image
                src={`${process.env.NODE_ENV === 'production' ? '' : '/'}portrait.jpg`}
                alt="Dylan Portrait"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              />
            )}
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hey! I'm <span className="font-bold text-gradient">Dylan</span>, a Software Engineer with over{" "}
        <span className="font-bold">{yearsOfExperience} years</span> of experience.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleCopyEmail}
            className={`group px-7 py-3 flex items-center justify-center gap-3 rounded-full outline-none hover:scale-105 active:scale-95 transition-all cursor-pointer borderBlack whitespace-nowrap min-w-[19rem] shadow-sm ${emailCopied
                ? "bg-emerald-500 text-white border-emerald-600"
                : "bg-gray-900 text-white hover:bg-gray-950 dark:bg-white/10 dark:hover:bg-white/20"
              }`}
          >
            {emailCopied ? (
              <>
                Copied Email! <IoCheckmark className="text-xl" />
              </>
            ) : (
              <>
                {email} <IoCopy className="opacity-70 group-hover:translate-x-1 transition" />
              </>
            )}
          </button>

          <a
            className="group bg-white px-7 py-3 flex items-center gap-3 rounded-full outline-none hover:scale-105 active:scale-95 transition-all cursor-pointer borderBlack text-gray-900 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 shadow-sm"
            href="./Resume.pdf"
            download
          >
            Download Resume{" "}
            <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
          </a>
        </div>

        <div className="flex items-center justify-center gap-3">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full hover:scale-110 active:scale-95 transition-all cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white shadow-sm"
            href="https://linkedin.com/in/dylanjmolnar"
            target="_blank"
          >
            <BsLinkedin size={20} />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full hover:scale-110 hover:text-gray-950 active:scale-95 transition-all cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white shadow-sm"
            href="https://github.com/dylanjmolnar"
            target="_blank"
          >
            <FaGithubSquare size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
