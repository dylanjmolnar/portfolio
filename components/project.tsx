"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
  role,
  date,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const hasLink = projectUrl && projectUrl !== "#";

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-2 sm:mb-4 last:mb-0 relative"
    >
      {hasLink ? (
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <ProjectContent title={title} description={description} tags={tags} imageUrl={imageUrl} hasLink={hasLink} role={role} date={date} />
        </a>
      ) : (
        <ProjectContent title={title} description={description} tags={tags} imageUrl={imageUrl} hasLink={hasLink} role={role} date={date} />
      )}
    </motion.div>
  );
}

function ProjectContent({ title, description, tags, imageUrl, hasLink, role, date }: { title: string, description: string, tags: readonly string[], imageUrl: string, hasLink: boolean | "" | undefined, role?: string, date?: string }) {
  return (
    <section className={`bg-gray-100 max-w-[42rem] border border-black/5 rounded-2xl overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition-all duration-300 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 shadow-lg hover:shadow-xl group-hover:border-black/10 dark:group-hover:border-white/20 ${hasLink ? 'cursor-pointer' : 'cursor-default'}`}>
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
        <h3 className="text-2xl font-bold tracking-tight text-gray-950 dark:text-white">
          {title}
        </h3>
        {role && (
          <p className="text-sm font-medium text-gray-800 dark:text-white/80 mt-1">
            {role}
          </p>
        )}
        {date && (
          <p className="text-xs text-gray-600 dark:text-white/60 mt-0.5 italic">
            {date}
          </p>
        )}
        <p className="mt-4 leading-relaxed text-gray-700 dark:text-white/70 text-sm sm:text-base">
          {description}
        </p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="bg-gray-900/[0.9] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:bg-white/10 dark:text-white/80"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={`${process.env.NODE_ENV === 'production' ? '' : '/'}${imageUrl}`}
        alt="Project"
        quality={95}
        width={500}
        height={300}
        priority={true}
        className="absolute hidden sm:block top-1/2 -translate-y-1/2 right-4 w-[20rem] rounded-xl shadow-2xl"
      />
    </section>
  );
}
