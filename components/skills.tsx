"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import "devicon/devicon.min.css"; // Don't forget to import devicon styles

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <>
      <section
        id="skills"
        ref={ref}
        className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      >
        <SectionHeading>Technical Expertise</SectionHeading>

        <div className="mt-12">
          <h3 className="text-xl font-bold mb-8 text-gray-900 dark:text-gray-100 flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 bg-gray-200 dark:bg-white/10"></span>
            Industrial Automation
            <span className="h-[1px] w-8 bg-gray-200 dark:bg-white/10"></span>
          </h3>
          <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800">
            {skillsData.map((skill, index) => (
              <motion.li
                className="bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/10 rounded-xl px-5 py-2.5 dark:text-white/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:hover:bg-white/10"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>

          <div className="flex justify-center flex-wrap gap-8 mt-12">
            <div className="transition-all duration-300 transform hover:scale-110">
              <i className="devicon-microsoftsqlserver-plain-wordmark colored text-8xl"></i>
            </div>
            <div className="transition-all duration-300 transform hover:scale-110">
              <i className="devicon-oracle-original colored text-8xl"></i>
            </div>
            <div className="transition-all duration-300 transform hover:scale-110">
              <img
                width="80"
                height="80"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg"
                alt="Visual Basic"
              />
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-xl font-bold mb-8 text-gray-900 dark:text-gray-100 flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 bg-gray-200 dark:bg-white/10"></span>
            Software Engineering
            <span className="h-[1px] w-8 bg-gray-200 dark:bg-white/10"></span>
          </h3>
          <div className="flex justify-center flex-wrap gap-8 px-4">
            {[
              "typescript-plain", "javascript-plain", "python-plain-wordmark",
              "html5-plain-wordmark", "css3-plain-wordmark", "react-original-wordmark",
              "git-plain-wordmark", "nodejs-plain-wordmark", "amazonwebservices-plain-wordmark",
              "firebase-plain-wordmark", "reactbootstrap-original", "tailwindcss-plain-wordmark"
            ].map((icon, idx) => (
              <div key={idx} className="transition-all duration-300 transform hover:scale-110">
                <i className={`devicon-${icon} colored text-7xl`}></i>
              </div>
            ))}
            <div className="transition-all duration-300 transform hover:scale-110">
              <img width="80" height="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="Vite" />
            </div>
            <div className="transition-all duration-300 transform hover:scale-110">
              <img width="80" height="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="dark:invert" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
