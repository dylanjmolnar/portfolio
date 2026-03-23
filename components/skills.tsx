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
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.04 * index,
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

          <div className="flex flex-wrap justify-center gap-y-12 gap-x-8 mt-12 max-w-[40rem] mx-auto">
            {[
              <i key="sql" className="devicon-microsoftsqlserver-plain-wordmark colored text-8xl"></i>,
              <i key="oracle" className="devicon-oracle-original colored text-8xl"></i>,
              <img
                key="vb"
                width="96"
                height="96"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg"
                alt="Visual Basic"
              />
            ].map((element, index) => (
              <motion.div
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={skillsData.length + index}
                className="transition-all duration-300 transform hover:scale-110"
              >
                {element}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-xl font-bold mb-8 text-gray-900 dark:text-gray-100 flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 bg-gray-200 dark:bg-white/10"></span>
            Software Engineering
            <span className="h-[1px] w-8 bg-gray-200 dark:bg-white/10"></span>
          </h3>
          <div className="flex flex-wrap justify-center gap-y-12 gap-x-8 px-4 max-w-[40rem] mx-auto">
            {[
              { type: 'icon', name: "typescript-plain" },
              { type: 'icon', name: "javascript-plain" },
              { type: 'img', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg", alt: "Python" },
              { type: 'icon', name: "html5-plain-wordmark" },
              { type: 'icon', name: "css3-plain-wordmark" },
              { type: 'icon', name: "react-original-wordmark" },
              { type: 'img', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original-wordmark.svg", alt: "SQLite" },
              { type: 'icon', name: "git-plain-wordmark" },
              { type: 'icon', name: "nodejs-plain-wordmark" },
              { type: 'icon', name: "amazonwebservices-plain-wordmark" },
              { type: 'icon', name: "firebase-plain-wordmark" },
              { type: 'icon', name: "reactbootstrap-original" },
              { type: 'icon', name: "tailwindcss-plain-wordmark" },
              { type: 'img', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg", alt: "Vite" },
              { type: 'img', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", alt: "Next.js" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={skillsData.length + 3 + idx} // skills + 3 from automation
                className="transition-all duration-300 transform hover:scale-110"
              >
                {item.type === 'icon' ? (
                  <i className={`devicon-${item.name} colored text-8xl`}></i>
                ) : (
                  <img width="96" height="96" src={item.src} alt={item.alt}/>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
