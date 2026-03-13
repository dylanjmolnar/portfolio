"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  const categories = ["Personal Venture", "Client Work", "Industry Experience"];

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      
      <div className="flex flex-col gap-16 sm:gap-24">
        {categories.map((cat) => {
          const items = projectsData.filter((p: any) => p.category === cat);
          if (items.length === 0) return null;

          return (
            <div key={cat} className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-10 text-gray-900 dark:text-gray-100 flex items-center justify-center gap-2">
                <span className="h-[1px] w-8 bg-gray-200 dark:bg-white/10"></span>
                {cat}
                <span className="h-[1px] w-8 bg-gray-200 dark:bg-white/10"></span>
              </h3>
              <div className="flex flex-col gap-4 sm:gap-6">
                {items.map((project, index) => (
                  <React.Fragment key={index}>
                    <Project {...project} />
                  </React.Fragment>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}