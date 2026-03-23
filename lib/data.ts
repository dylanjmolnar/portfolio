import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
/*
  {
    title: "Billy Pickles",
    description:
      "A software, tech, and in-house designed parts and tools company I started. Specializing in custom internal tooling and specialized software solutions.",
    tags: ["Vite", "Typescript", "CAD/CAM"],
    imageUrl: "Retail_Smart.PNG", 
    category: "Personal Venture",
    projectUrl: "https://billypickles.com",
    role: "Owner",
    date: "Oct 2025 - Present",
  },
  {
    title: "Holow Street",
    description:
      "A premium streetware, art, and accessories brand. Designed and developed a high-impact e-commerce platform for a unique digital presence.",
    tags: ["Vite", "Typescript", "Stripe", "better-sqlite3"],
    imageUrl: "Retail_Smart.PNG", 
    category: "Client Work",
    projectUrl: "https://holowstreet.com",
    role: "Software Engineer",
    date: "Oct 2025 - Present",
  },
*/
  {
    title: "Retail Smart",
    description:
      "Regional platform connecting clients and wholesalers across New England with real-time analytics and inventory management.",
    tags: ["TypeScript", "React Native", "Firebase", "Chakra UI"],
    imageUrl: "Retail_Smart.png",
    category: "Client Work",
    projectUrl: "https://r-iq.net",
    role: "Software Engineer",
    date: "Mar 2023 - Dec 2024",
  },
  {
    title: "Automated Moderation Services",
    description:
      "Chatting platform moderation tools reaching over 50k users. Built for scale and reliability.",
    tags: ["Javascript", "Node.js", "SQLite"],
    imageUrl: "Auto_Mod_Service.png",
    category: "Client Work",
    projectUrl: "#",
    role: "Software Engineer",
    date: "Nov 2017 - Apr 2021",
  },
  {
    title: "Pfizer",
    description:
      "Modernized legacy control systems and integrate new automated equipment to enhance process reliability.",
    tags: ["PLC", "SCADA", "SQL", "Rockwell", "Visual Basic"],
    imageUrl: "Pfizer_Logo.png",
    category: "Industry Experience",
    projectUrl: "#",
    role: "Automation Engineer",
    date: "Sep 2022 - Present",
  },
] as const;

export const skillsData = [
  "PLC",
  "SCADA",
  "Rockwell",
  "GE iFIX",
  "PLC-5",
  "FactoryTalk",
  "OSI PI",
  "Dream Report",
  "Validation",
  "GMP"
] as const;
