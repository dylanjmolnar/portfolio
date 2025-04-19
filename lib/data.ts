import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import autoModSerImg  from "@/public/rmtdev.png";
import RIQImg  from "@/public/wordanalytics.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

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
      "Developed and maintained a discord bot account, which provided automated moderation services to communities containing over 40,000 members.",
    tags: ["Javascript", "Node.js", "React", "SQLite"],
    imageUrl: autoModSerImg,
  },
  {
    title: "Retail Smart",
    description:
      "Helped develop and maintain the website for Retail Smart to help automate client-supplier relation.",
    tags: ["TypeScript", "Chakra UI", "React", "Firebase"],
    imageUrl: RIQImg,
  },
] as const;

export const skillsData = [
  "SCADA",
  "GE iFIX",
  "PLC",
  "SQL",
  "Rockwell",
  "Logix Designer",
  "Python",
  "ControlLogix",
  "PLC-5",
  "FactoryTalk",
  "Oracle",
  "OPC",
  "OSI PI",
  "Dream Report",
  "FAT/SAT Testing"
] as const;

export const skillsData1 = [
  "TypeScript",
  "JavaScript",
  "Python",
  "HTML5",
  "CSS",
  "Node.js",
  "React",
  "Next.js",
  "Vite",
  "JSON",
  "SQL",
  "Git",
  "Firebase",
  "Rest API",
  "Web Scraping",
  "PHP",
  "Tailwind",
  "Bootstrap",
  "Chakra-UI"
] as const;
