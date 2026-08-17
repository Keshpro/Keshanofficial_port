"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  GitBranch,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const projectsData = [
  {
    number: "01",
    title: "Inventory & POS System",
    category: "Business Software",
    description:
      "An inventory management and point-of-sale system for a parts business, connecting a React interface with Google Sheets data streams for practical business operations and automated calculations.",
    tech: ["React.js", "Google Sheets API", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    number: "02",
    title: "Urban Hair Studio",
    category: "Web Experience",
    description:
      "A luxury-style responsive portfolio and automated booking experience designed for a modern hair studio, focusing on visual presentation, services and customer conversion.",
    tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    number: "03",
    title: "VANGUARED Marketplace",
    category: "Digital Marketplace",
    description:
      "A multi-vendor apparel and footwear marketplace featuring seller item uploads, Google authentication and database-powered order recording.",
    tech: ["React.js", "Node.js", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    number: "04",
    title: "Binlex Clothing E-Commerce",
    category: "E-Commerce",
    description:
      "A modern React-based e-commerce platform created for a women's clothing brand, combining a clean storefront experience with responsive product presentation and live hosting.",
    tech: ["React.js", "Node.js", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#10182c] px-6 py-28"
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue glow */}
        <div className="absolute left-[-15%] top-[10%] h-125 w-125 rounded-full bg-blue-500/10 blur-[150px]" />

        {/* Amber glow */}
        <div className="absolute right-[-15%] bottom-[5%] h-125 w-125 rounded-full bg-amber-500/10 blur-[150px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">

        {/* =========================================
            HEADER
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-16"
        >
          {/* Small label */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10">
              <Sparkles
                size={18}
                className="text-amber-400"
              />
            </div>

            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-blue-100/40">
              Selected Projects / 2026
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl font-black tracking-tight text-white md:text-7xl">
            Featured
            <br />

            <span className="bg-linear-to-r from-amber-300 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              Work.
            </span>
          </h2>

          {/* Accent */}
          <div className="mt-7 flex items-center gap-2">
            <div className="h-0.75 w-20 rounded-full bg-amber-400" />
            <div className="h-0.75 w-8 rounded-full bg-amber-400/30" />
            <div className="h-0.75 w-2 rounded-full bg-amber-400/10" />
          </div>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-blue-100/50 md:text-base">
            A selection of digital products, business systems and web
            experiences built through development, design and problem solving.
          </p>
        </motion.div>


        {/* =========================================
            PROJECT GRID
        ========================================= */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {projectsData.map((project, index) => {
            const featured = index === 0;

            return (
              <motion.div
                key={project.number}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
                className={featured ? "md:col-span-2" : ""}
              >

                {/* =====================================
                    WHOLE CARD CLICKABLE
                ===================================== */}

                <Link
                  href="/projects"
                  className="group block h-full"
                >

                  <article
                    className={`relative h-full overflow-hidden rounded-[28px] border border-white/8 bg-[#0B1735]/90 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/30 hover:shadow-2xl hover:shadow-black/30 ${
                      featured
                        ? "min-h-105"
                        : "min-h-97.5"
                    }`}
                  >

                    {/* =================================
                        BACKGROUND GLOW
                    ================================= */}

                    <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/0 blur-[100px] transition-all duration-700 group-hover:bg-blue-500/10" />

                    <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-amber-500/0 blur-[100px] transition-all duration-700 group-hover:bg-amber-500/10" />


                    {/* =================================
                        TOP BAR
                    ================================= */}

                    <div className="relative flex items-center justify-between p-6 md:p-8">

                      {/* Number */}
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-bold tracking-[0.3em] text-white/25">
                          {project.number}
                        </span>

                        <div className="h-px w-8 bg-white/10" />

                        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-blue-100/30">
                          Project
                        </span>
                      </div>

                      {/* Arrow */}
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/3 transition-all duration-500 group-hover:border-amber-400/40 group-hover:bg-amber-400 group-hover:text-black">
                        <ArrowUpRight
                          size={17}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </div>


                    {/* =================================
                        CONTENT
                    ================================= */}

                    <div className="relative flex h-[calc(100%-80px)] flex-col justify-between p-6 pt-4 md:p-8 md:pt-4">

                      <div>

                        {/* Category */}
                        <div className="mb-4">
                          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400/70">
                            {project.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className={`max-w-3xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-amber-100 ${
                            featured
                              ? "text-3xl md:text-5xl"
                              : "text-2xl md:text-3xl"
                          }`}
                        >
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p
                          className={`mt-5 max-w-2xl text-sm leading-7 text-blue-100/40 ${
                            featured
                              ? "md:text-base"
                              : ""
                          }`}
                        >
                          {project.description}
                        </p>
                      </div>


                      {/* =================================
                          BOTTOM
                      ================================= */}

                      <div className="mt-10">

                        {/* Divider */}
                        <div className="mb-6 h-px w-full bg-linear-to-r from-white/10 via-white/5 to-transparent" />

                        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

                          {/* Tech */}
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-white/8 bg-[#10182c] px-3 py-1.5 text-[9px] font-medium tracking-wide text-blue-100/50 transition-all duration-300 group-hover:border-blue-300/20 group-hover:text-blue-100/70"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>


                          {/* Actions */}
                          <div
                            className="flex items-center gap-2"
                            onClick={(e) => e.preventDefault()}
                          >

                            {/* GitHub */}
                            <span
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();

                                if (project.githubUrl !== "#") {
                                  window.open(
                                    project.githubUrl,
                                    "_blank"
                                  );
                                }
                              }}
                              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-blue-100/40 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                              title="GitHub"
                            >
                              <GitBranch size={16} />
                            </span>

                            {/* Live */}
                            <span
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();

                                if (project.liveUrl !== "#") {
                                  window.open(
                                    project.liveUrl,
                                    "_blank"
                                  );
                                }
                              }}
                              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-blue-100/40 transition-all duration-300 hover:border-amber-400/30 hover:bg-amber-400 hover:text-black"
                              title="Live Project"
                            >
                              <ExternalLink size={16} />
                            </span>

                          </div>
                        </div>
                      </div>
                    </div>


                    {/* =================================
                        HOVER LINE
                    ================================= */}

                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-amber-400 via-orange-500 to-transparent transition-all duration-700 group-hover:w-full" />

                  </article>

                </Link>
              </motion.div>
            );
          })}

        </div>


        {/* =========================================
            VIEW ALL PROJECTS
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/projects"
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100/60 backdrop-blur-xl transition-all duration-300 hover:border-amber-400/30 hover:bg-amber-400 hover:text-black"
          >
            View All Projects

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>


        {/* =========================================
            BOTTOM
        ========================================= */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 sm:flex-row">

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,.8)]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-100/30">
              Building digital solutions
            </span>
          </div>

          <span className="text-[10px] tracking-[0.3em] text-blue-100/15">
            KESHAN / PROJECTS
          </span>

        </div>

      </div>
    </section>
  );
}