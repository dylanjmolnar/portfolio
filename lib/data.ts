import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import autoModSer from "../public/autoModSer.png";

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
      "I work freelance as a full-stack developer. Providing services to a variety of clients.",
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
  {
    title: "Full-Stack Developer",
    location: "Boston, MA",
    description:
      "I work part-time as a software developer for Retail Smart. Developing and maintaining their website and app.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Automated Moderation Services | Discord",
    description:
      "I worked as a full-stack developer on this project for 3 years providing auotmated moderation services to communities hosting over 40,000 members.",
    tags: ["Javascript", "Node.js", "React", "SQLite", ],
    imageUrl: autoModSer,
  },
] as const;

export const skillsData = [
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
