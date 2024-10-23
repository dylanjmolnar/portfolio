import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import autoModSerImg  from "@/public/rmtdev.png";
import wordanalytics  from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated UMass Amherst",
    location: "Amherst, MA",
    description:
      "I graduated with a BS in Chemical Engineering and a minor in Chemistry.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Boston, MA",
    description:
      "I do full-stack development freelance. Providing services to a variety of clients.",
    icon: React.createElement(FaReact),
    date: "2018 - present",
  },
  {
    title: "Automation Engineer",
    location: "Andover, MA",
    description:
      "I'm now working full-time as an automation engineer for Pfizer. Developing full-stack GMP controls software.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Automated Moderation Services | Discord",
    description:
      "I developed and maintained an automated discord bot account for 3 years providing automated moderation services to communities hosting over 40,000 members.",
    tags: ["Javascript", "Node.js", "React", "SQLite"],
    imageUrl: autoModSerImg,
  },
  {
    title: "Retail Smart",
    description:
      "I helped develop and maintain the website for Retail Smart to help automate client-supplier relation.",
    tags: ["TypeScript", "Chakra UI", "React", "Firebase"],
    imageUrl: wordanalytics,
  },
] as const;

export const skillsData = [
  "SCADA",
  "GE iFIX",
  "PLC",
  "Rockwell",
  "Logix Designer",
  "ControlLogix",
  "PLC-5",
  "SQL",
  "SQL Server Manager",
  "Oracle",
  "Toad for Oracle",
  "Python",
  "Dream Report",
  "FAT Testing",
  "SAT Testing"
] as const;

export const skillsData1 = [
  "TypeScript",
  "JavaScript",
  "Python",
  "HTML",
  "CSS",
  "PHP",
  "Node.js",
  "React",
  "Next.js",
  "Vite",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Chakra-UI",
  "SQL",
  "Firebase",
  "Oracle",
  "Rest API",
  "Web Scraping"
] as const;
