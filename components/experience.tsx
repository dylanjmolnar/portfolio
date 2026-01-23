"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <div className="w-full max-w-[53rem] mx-auto">
        {experiencesData.map((item, index) => (
          <motion.div
            key={index}
            className="mb-8 last:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="bg-gray-100 border border-black/5 rounded-lg p-6 sm:p-8 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  {(item as any).iconType === "image" && (item as any).iconUrl ? (
                    <div className="flex-shrink-0">
                      <Image
                        src={`${process.env.NODE_ENV === 'production' ? '' : '/'}${(item as any).iconUrl}`}
                        alt={item.title}
                        width={100}
                        height={100}
                        className="w-40 h-16 object-contain"
                      />
                    </div>
                  ) : (
                    <div className="bg-white p-3 rounded-full shadow-md dark:bg-white/15 flex-shrink-0">
                      <div className="text-2xl text-gray-700 dark:text-white/80">
                        {item.icon} 
                      </div>
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold capitalize text-gray-950 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-white/70 mt-1">
                      {item.location}
                    </p>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-white/60 sm:text-right">
                  {item.date}
                </div>
              </div>
              <p className="text-gray-700 dark:text-white/75 whitespace-pre-line leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
