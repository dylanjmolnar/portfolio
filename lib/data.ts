import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
    title: "University of Massachusetts Amherst",
    location: "Amherst, MA",
    description:
      "BS in Chemical Engineering\nMinor in Chemistry",
    icon: React.createElement(LuGraduationCap),
    iconType: "image",
    iconUrl: "umass-logo2.png",
    date: `2018 - 2022`,
  },
  {
    title: "Software Developer",
    location: "Worldwide",
    description:
      "Develop and deliver custom software solutions and services. Specialize in full-stack development, system architecture, and scalable application design.",
    icon: React.createElement(FaReact),
    date: "2017 - present",
  },
  {
    title: "Pfizer | Automation Engineer",
    location: "Andover, MA",
    description:
      "Design, develop, and maintain automated control systems and software solutions for pharmaceutical manufacturing processes.",
    icon: React.createElement(CgWorkAlt),
    iconType: "image",
    iconUrl: "Pfizer_Logo.png",
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Automated Moderation Services | Discord",
    description:
      "Over 40,000 Members Reached!",
    tags: ["Javascript", "Node.js", "React", "SQLite"],
    imageUrl: "rmtdev.png",
  },
  {
    title: "Retail Smart",
    description:
      "Connecting clients and wholesalers around New England!",
    tags: ["TypeScript", "React Native", "Chakra UI", "Firebase"],
    imageUrl: "wordanalytics.PNG",
  },
] as const;

export const skillsData = [
  "SCADA",
  "GE iFIX",
  "PLC",
  "Rockwell",
  "Logix Designer",
  "Python",
  "ControlLogix",
  "PLC-5",
  "FactoryTalk",
  "OPC",
  "OSI PI",
  "Dream Report",
] as const;
