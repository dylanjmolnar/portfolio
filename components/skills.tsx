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
      <SectionHeading>My skills</SectionHeading>
      <br />
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Automation</h1>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mb-8">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
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
      <div className="flex justify-center flex-wrap gap-4 w-full sm:flex-nowrap">
        <div className="p-6">
          <i className="devicon-microsoftsqlserver-plain-wordmark colored text-8xl"></i>
        </div>
        <div className="p-6">
          <i className="devicon-oracle-original colored text-8xl"></i>
        </div>
        <div className="p-6">
          <img 
            width="96"
            height="96"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg"
            alt="Visual Basic"
          />
        </div>
      </div>
      <br/>
      <br />
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Tech Stack</h1>
      <div className="flex justify-center flex-wrap gap-4">
        <div className="p-6">
          <i className="devicon-typescript-plain colored text-8xl"></i>
        </div>
        <div className="p-6">
          <i className="devicon-javascript-plain colored text-8xl"></i>
        </div>
        <div className="p-6">
          <i className="devicon-python-plain-wordmark colored text-8xl"></i>
        </div>
        <div className="p-6">
          <i className="devicon-html5-plain-wordmark colored text-8xl"></i>
        </div>
        <div className="p-6">
          <i className="devicon-css3-plain-wordmark colored text-8xl"></i>
        </div>
        <div className="p-6">
          <i className="devicon-react-original-wordmark colored text-8xl"></i>
        </div>
        <div className="p-6">
          <i className="devicon-git-plain-wordmark colored text-8xl"></i>
        </div>
        <div className="p-6">
          <i className="devicon-nodejs-plain-wordmark colored text-8xl"></i>
        </div>
        <div className="p-6">
          <i className="devicon-amazonwebservices-plain-wordmark colored text-8xl"></i>
        </div>
        <div className="p-6">
          <i className="devicon-firebase-plain-wordmark colored text-8xl"></i>
        </div>
        <div className="p-6">
          <i className="devicon-reactbootstrap-original colored text-8xl"></i>
        </div>
        <div className="p-6">
          <i className="devicon-tailwindcss-plain-wordmark colored text-8xl"></i>
        </div>
        <div className="p-6">
          <img 
          width="96"
          height="96"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"/>
        </div>
        <div className="p-6">
          <img 
          width="96"
          height="96"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
        </div>
      </div>
    </section>
    </>
  );
}
