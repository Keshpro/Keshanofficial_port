"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Search,
  Globe2,
  PanelsTopLeft,
  Smartphone,
  Code2,
  FlaskConical,
  Layers3,
  X,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { allProjects } from "@/app/data/projectsData";

/* =========================================================
   PORTFOLIO CATEGORIES
========================================================= */

const categories = [
  {
    name: "All",
    icon: Layers3,
  },
  {
    name: "Web Design",
    icon: Globe2,
  },
  {
    name: "UI/UX Design",
    icon: PanelsTopLeft,
  },
  {
    name: "Applications",
    icon: Smartphone,
  },
  {
    name: "Software Projects",
    icon: Code2,
  },
  {
    name: "Research & Experiments",
    icon: FlaskConical,
  },
];

/* =========================================================
   CATEGORY NORMALIZER
========================================================= */

function normalizeCategory(category?: string) {
  if (!category) {
    return "Software Projects";
  }

  const value = category.toLowerCase().trim();

  if (
    value.includes("web") ||
    value.includes("website") ||
    value.includes("frontend") ||
    value.includes("landing") ||
    value.includes("e-commerce") ||
    value.includes("ecommerce")
  ) {
    return "Web Design";
  }

  if (
    value.includes("ui") ||
    value.includes("ux") ||
    value.includes("design")
  ) {
    return "UI/UX Design";
  }

  if (
    value.includes("mobile") ||
    value.includes("application") ||
    value.includes("app")
  ) {
    return "Applications";
  }

  if (
    value.includes("research") ||
    value.includes("concept") ||
    value.includes("experiment") ||
    value.includes("case study")
  ) {
    return "Research & Experiments";
  }

  return "Software Projects";
}

/* =========================================================
   PROJECTS PAGE
========================================================= */

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  /* =========================================================
     REMOVE INVALID / EMPTY ARRAY ITEMS
  ========================================================= */

  const validProjects = useMemo(() => {
    return allProjects.filter(
      (project) =>
        project &&
        typeof project.id === "string" &&
        project.id.trim() !== ""
    );
  }, []);

  /* =========================================================
     FILTER + SEARCH
  ========================================================= */

  const filteredProjects = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return validProjects.filter((project) => {
      const category = normalizeCategory(project.category);

      const matchesCategory =
        filter === "All" || category === filter;

      const matchesSearch =
        !query ||
        project.title?.toLowerCase().includes(query) ||
        project.description?.toLowerCase().includes(query) ||
        project.category?.toLowerCase().includes(query) ||
        project.tech?.some((tech) =>
          tech.toLowerCase().includes(query)
        );

      return matchesCategory && matchesSearch;
    });
  }, [filter, searchQuery, validProjects]);

  const featuredProject = filteredProjects[0];

  const remainingProjects = filteredProjects.slice(1);

  /* =========================================================
     CATEGORY COUNT
  ========================================================= */

  const getCategoryCount = (categoryName: string) => {
    if (categoryName === "All") {
      return validProjects.length;
    }

    return validProjects.filter(
      (project) =>
        normalizeCategory(project.category) === categoryName
    ).length;
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent text-white">

      {/* ======================================================
          TRANSPARENT OVERLAY

          Global heroback.png stays fixed behind this page
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-[#07101b]/30" />

      {/* ======================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-10%] top-[10%] h-[600px] w-[600px] rounded-full bg-blue-500/[0.05] blur-[180px]" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[700px] w-[700px] rounded-full bg-amber-500/[0.04] blur-[200px]" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

      </div>

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-5 pb-28 pt-28 sm:px-8 lg:px-12 xl:px-16">

        {/* ======================================================
            BACK
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/35 transition-colors hover:text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-amber-400/40 group-hover:bg-amber-400 group-hover:text-black">
              <ArrowLeft size={14} />
            </span>

            Back to home
          </Link>
        </motion.div>

        {/* ======================================================
            HERO / HEADER
        ====================================================== */}

        <section className="grid gap-12 pb-16 pt-16 lg:grid-cols-[1.35fr_.65fr] lg:items-end">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="mb-7 flex items-center gap-4">

              <span className="h-px w-10 bg-amber-400" />

              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-amber-400">
                Project Archive / 2026
              </span>

            </div>

            <h1 className="max-w-5xl text-[clamp(3.8rem,8vw,8rem)] font-black leading-[0.82] tracking-[-0.07em]">
              Selected
              <br />

              <span className="text-white/25">
                work &
              </span>

              <br />

              <span className="bg-gradient-to-r from-[#f3c556] via-[#d7a935] to-[#a97817] bg-clip-text text-transparent">
                experiments.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
          >
            <div className="border-t border-white/10 pt-6">

              <p className="max-w-md text-sm leading-7 text-white/45">
                A growing archive of websites, interfaces,
                applications, engineering projects and exploratory
                research focused on solving real-world problems.
              </p>

              <div className="mt-7 grid grid-cols-3 border-t border-white/[0.08] pt-5">

                <div>
                  <p className="font-mono text-xl font-semibold">
                    {String(validProjects.length).padStart(2, "0")}
                  </p>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/30">
                    Projects
                  </p>
                </div>

                <div>
                  <p className="font-mono text-xl font-semibold">
                    06
                  </p>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/30">
                    Fields
                  </p>
                </div>

                <div>
                  <p className="font-mono text-xl font-semibold">
                    2026
                  </p>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/30">
                    Archive
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

        </section>

        {/* ======================================================
            FILTER SYSTEM
        ====================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.25,
          }}
          className="border-y border-white/[0.08]"
        >

          {/* SEARCH */}

          <div className="grid border-b border-white/[0.08] lg:grid-cols-[1fr_400px]">

            <div className="flex items-center py-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/25">
                Browse by discipline
              </p>
            </div>

            <div className="relative border-white/[0.08] py-3 lg:border-l lg:pl-6">

              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25 lg:left-10"
              />

              <input
                type="text"
                placeholder="Search project, tool or technology..."
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                className="h-11 w-full rounded-full border border-white/10 bg-black/20 pl-11 pr-11 text-xs text-white outline-none backdrop-blur-md transition placeholder:text-white/25 focus:border-amber-400/40 focus:bg-black/30"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() =>
                    setSearchQuery("")
                  }
                  className="absolute right-4 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-white/30 transition hover:bg-white/10 hover:text-white"
                >
                  <X size={13} />
                </button>
              )}

            </div>
          </div>

          {/* ===================================================
              CATEGORIES
          =================================================== */}

          <div className="flex gap-2 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

            {categories.map((category) => {
              const Icon = category.icon;

              const active =
                filter === category.name;

              return (
                <button
                  type="button"
                  key={category.name}
                  onClick={() =>
                    setFilter(category.name)
                  }
                  className={`
                    group flex shrink-0 items-center gap-3
                    rounded-full border px-4 py-2.5
                    backdrop-blur-md
                    transition-all duration-300
                    ${
                      active
                        ? "border-amber-400 bg-amber-400 text-[#07101b]"
                        : "border-white/10 bg-black/20 text-white/40 hover:border-white/20 hover:bg-black/30 hover:text-white"
                    }
                  `}
                >
                  <Icon size={13} />

                  <span className="text-[10px] font-bold uppercase tracking-[0.13em]">
                    {category.name}
                  </span>

                  <span
                    className={`
                      rounded-full px-1.5 py-0.5
                      font-mono text-[8px]
                      ${
                        active
                          ? "bg-black/10 text-black/60"
                          : "bg-white/5 text-white/25"
                      }
                    `}
                  >
                    {String(
                      getCategoryCount(category.name)
                    ).padStart(2, "0")}
                  </span>
                </button>
              );
            })}

          </div>
        </motion.section>

        {/* ======================================================
            RESULT META
        ====================================================== */}

        <div className="flex items-center justify-between py-8">

          <div>
            <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
              Showing
            </p>

            <p className="mt-1 text-xs text-white/60">
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1
                ? "project"
                : "projects"}
            </p>
          </div>

          <p className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-white/20 sm:block">
            Ideas → Systems → Experiences
          </p>

        </div>

        {/* ======================================================
            PROJECT CONTENT
        ====================================================== */}

        <AnimatePresence mode="wait">

          {filteredProjects.length > 0 ? (

            <motion.div
              key={`${filter}-${searchQuery}`}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
              }}
            >

              {/* =================================================
                  FEATURED PROJECT
              ================================================= */}

              {featuredProject && (

                <Link
                  href={`/projects/${encodeURIComponent(
                    featuredProject.id
                  )}`}
                  className="group block"
                >
                  <article className="relative grid overflow-hidden rounded-[30px] border border-white/[0.10] bg-[#0a1421]/55 backdrop-blur-md lg:grid-cols-[1.25fr_.75fr]">

                    {/* IMAGE */}

                    <div className="relative min-h-[360px] overflow-hidden sm:min-h-[460px] lg:min-h-[590px]">

                      {featuredProject.images?.[0] ? (
                        <img
                          src={featuredProject.images[0]}
                          alt={featuredProject.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-xs text-white/30">
                          No preview image
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-[#06101c]/80 via-transparent to-black/10" />

                      <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/15 bg-black/25 px-4 py-2 backdrop-blur-xl">

                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />

                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/75">
                          Featured Project
                        </span>

                      </div>

                      <div className="absolute bottom-6 left-6 font-mono text-[10px] tracking-[0.2em] text-white/50">
                        01 /{" "}
                        {String(
                          filteredProjects.length
                        ).padStart(2, "0")}
                      </div>

                    </div>

                    {/* CONTENT */}

                    <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-12">

                      <div>

                        <div className="mb-7 flex items-center justify-between">

                          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-amber-400">
                            {normalizeCategory(
                              featuredProject.category
                            )}
                          </span>

                          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:rotate-45 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-black">
                            <ArrowUpRight size={17} />
                          </div>

                        </div>

                        <h2 className="text-3xl font-bold leading-[1] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                          {featuredProject.title}
                        </h2>

                        <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
                          {featuredProject.description}
                        </p>

                        {/* TECH */}

                        <div className="mt-8 flex flex-wrap gap-2">

                          {featuredProject.tech
                            ?.slice(0, 6)
                            .map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-2 font-mono text-[9px] text-white/40 backdrop-blur-sm"
                              >
                                {tech}
                              </span>
                            ))}

                        </div>
                      </div>

                      <div className="mt-12 border-t border-white/[0.08] pt-7">

                        <div className="flex items-center justify-between">

                          <div>

                            <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                              Project Type
                            </p>

                            <p className="mt-2 text-xs text-white/55">
                              {normalizeCategory(
                                featuredProject.category
                              )}
                            </p>

                          </div>

                          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40 transition-colors group-hover:text-amber-400">
                            View case study
                          </span>

                        </div>
                      </div>

                    </div>

                  </article>
                </Link>
              )}

              {/* =================================================
                  PROJECT GRID
              ================================================= */}

              {remainingProjects.length > 0 && (

                <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">

                  {remainingProjects.map(
                    (project, index) => {

                      const category =
                        normalizeCategory(
                          project.category
                        );

                      return (
                        <Link
                          href={`/projects/${encodeURIComponent(
                            project.id
                          )}`}
                          key={project.id}
                          className="group bg-[#08111d]/55 backdrop-blur-md"
                        >
                          <article className="relative h-full p-5 sm:p-7">

                            {/* INDEX */}

                            <div className="mb-5 flex items-center justify-between">

                              <span className="font-mono text-[9px] text-white/20">
                                {String(index + 2).padStart(
                                  2,
                                  "0"
                                )}
                              </span>

                              <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/30">
                                {category}
                              </span>

                            </div>

                            {/* IMAGE */}

                            <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-white/5">

                              {project.images?.[0] ? (
                                <img
                                  src={project.images[0]}
                                  alt={project.title}
                                  className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
                                />
                              ) : (
                                <div className="flex h-full w-full items-center justify-center bg-black/20 text-xs text-white/30">
                                  No preview image
                                </div>
                              )}

                              <div className="absolute inset-0 bg-gradient-to-t from-[#07101b]/50 to-transparent" />

                              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white backdrop-blur-xl transition-all duration-300 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-black">
                                <ArrowUpRight size={15} />
                              </div>

                            </div>

                            {/* CONTENT */}

                            <div className="pt-6">

                              <h3 className="text-xl font-bold tracking-[-0.03em] text-white transition-colors group-hover:text-amber-300 sm:text-2xl">
                                {project.title}
                              </h3>

                              <p className="mt-3 line-clamp-2 max-w-xl text-xs leading-6 text-white/35">
                                {project.description}
                              </p>

                              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">

                                {project.tech
                                  ?.slice(0, 4)
                                  .map((tech) => (
                                    <span
                                      key={tech}
                                      className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/25"
                                    >
                                      {tech}
                                    </span>
                                  ))}

                              </div>
                            </div>

                            <div className="mt-7 h-px w-full bg-white/[0.07]" />

                            <div className="flex items-center justify-between pt-5">

                              <span className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                                Explore project
                              </span>

                              <span className="h-1.5 w-1.5 rounded-full bg-white/20 transition-all group-hover:bg-amber-400 group-hover:shadow-[0_0_10px_rgba(251,191,36,.8)]" />

                            </div>

                          </article>
                        </Link>
                      );
                    }
                  )}

                </div>
              )}

            </motion.div>

          ) : (

            /* ===================================================
                EMPTY STATE
            =================================================== */

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="flex min-h-[420px] flex-col items-center justify-center rounded-[30px] border border-dashed border-white/10 bg-black/10 text-center backdrop-blur-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                <Search
                  size={20}
                  className="text-white/25"
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Nothing found.
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-white/35">
                No projects match the current search
                or selected discipline.
              </p>

              <button
                type="button"
                onClick={() => {
                  setFilter("All");
                  setSearchQuery("");
                }}
                className="mt-6 rounded-full border border-white/10 px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50 transition hover:border-amber-400 hover:text-amber-400"
              >
                Reset archive
              </button>

            </motion.div>

          )}

        </AnimatePresence>

        {/* ======================================================
            END NOTE
        ====================================================== */}

        <div className="mt-20 flex flex-col justify-between gap-5 border-t border-white/[0.08] pt-7 sm:flex-row">

          <div className="flex items-center gap-3">

            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-amber-400 opacity-40" />
              <span className="relative h-2 w-2 rounded-full bg-amber-400" />
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
              Archive continuously evolving
            </span>

          </div>

          <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/20">
            Keshan Panditharathna / Selected Work
          </span>

        </div>

      </div>
    </main>
  );
}