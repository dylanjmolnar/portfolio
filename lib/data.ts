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
    title: "UMass Amherst",
    location: "Amherst, MA",
    description:
      "BS in Chemical Engineering\nMinor in Chemistry",
    icon: React.createElement(LuGraduationCap),
    date: `2018 - 2022`,
  },
  {
    title: "Software Developer",
    location: "United States",
    description:
      "I provide many services and softwares to a variety of clients.",
    icon: React.createElement(FaReact),
    date: "2018 - present",
  },
  {
    title: "Pfizer | Automation Engineer",
    location: "Andover, MA",
    description:
      "At Pfizer, I develop automated controls software.",
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2022 - present",
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
      "",
    tags: ["TypeScript", "React Native", "Chakra UI", "Firebase"],
    imageUrl: "wordanalytics.PNG",
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
