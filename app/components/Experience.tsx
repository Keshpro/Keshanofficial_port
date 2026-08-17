"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Layers3,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

// =====================================================
// TECH & DIGITAL EXPERIENCE
// =====================================================

const techExperiences = [
  {
    id: "01",
    role: "Founder & Lead Developer",
    company: "KreativeLabs",
    duration: "Feb 2026 — Present",
    type: "Creative Technology Studio",
    description:
      "Operating a creative technology studio focused on custom full-stack web solutions, digital branding, content creation and modern media experiences. Leading projects from concept and UI/UX direction to development and deployment.",
    tech: ["Next.js", "React", "Node.js", "Tailwind CSS"],
  },

  {
    id: "02",
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    duration: "Oct 2025 — Present",
    type: "Independent Development",
    description:
      "Building practical digital solutions for businesses including inventory and POS systems, service-based booking platforms and e-commerce experiences. Handling development, UI implementation, deployment and client requirements.",
    tech: ["React.js", "Laravel", "Spring Boot"],
  },

  {
    id: "03",
    role: "Computing Professional",
    company: "NSBM Green University",
    duration: "Active",
    type: "Software Engineering",
    description:
      "Developing professional knowledge and practical experience across software engineering, system analysis, architecture, UI/UX and modern full-stack development while working on academic and personal software projects.",
    tech: ["Software Engineering", "System Design", "Professional Development"],
  },

  {
    id: "04",
    role: "Graphic Designer & Content Creator",
    company: "Freelance & Corporate",
    duration: "Jul 2025 — Jan 2026",
    type: "Creative & Digital Media",
    description:
      "Worked across graphic design, digital content production and AI-assisted media creation. Produced cinematic visual content, promotional graphics and high-resolution AI-generated video concepts while supporting digital marketing activities.",
    tech: ["UI/UX", "AI Video Tools", "Graphic Design"],
  },
];

// =====================================================
// CORPORATE & OPERATIONAL EXPERIENCE
// =====================================================

const corporateExperiences = [
  {
    id: "05",
    role: "Credit Officer",
    company: "LB Finance",
    duration: "Previous Role",
    type: "Finance & Operations",
    description:
      "Gained practical corporate experience in financial operations, client communication, credit evaluation and handling financial information within a professional business environment.",
    tech: ["Finance", "Data Analysis", "Client Management"],
  },

  {
    id: "06",
    role: "Manager / Moto Mechanic",
    company: "Nishantha Auto Electricals",
    duration: "Ongoing",
    type: "Management & Automotive",
    description:
      "Managing the Kumbiyangoda, Matale branch while handling daily operations, customer relationships, logistics and hands-on automotive electrical and mechanical work.",
    tech: ["Management", "Operations", "Automotive"],
  },
];

// =====================================================
// COLLABORATION PROJECTS
// =====================================================

const collaborations = [
  {
    number: "01",
    company: "Urban Hair Studio",
    category: "Web Development",
    work: "Luxury Portfolio + Booking Platform",
    description:
      "Designed and developed a premium digital presence for a hair studio, focusing on visual branding, service presentation, portfolio showcase and an integrated customer booking experience.",
    services: ["UI/UX Design", "Web Development", "Booking System"],
  },

  {
    number: "02",
    company: "NWD Clothing",
    category: "E-Commerce",
    work: "Online Clothing Store",
    description:
      "Developed an e-commerce platform concept for a clothing business with a focus on modern product presentation, responsive shopping experience and a clean brand-focused interface.",
    services: ["E-Commerce", "Frontend Development", "Brand UI"],
  },

  {
    number: "03",
    company: "Auto Parts Business",
    category: "Business Software",
    work: "Inventory + POS System",
    description:
      "Built a practical business management solution designed to simplify product inventory, sales operations and day-to-day management for an automotive parts business.",
    services: ["POS System", "Inventory Management", "Business Software"],
  },
];


// =====================================================
// EXPERIENCE CARD
// =====================================================

type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  duration: string;
  type: string;
  description: string;
  tech: string[];
};

function ExperienceCard({ exp, index }: { exp: ExperienceItem; index: number }) {
  return (
    <motion.article
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
        duration: 0.6,
        delay: index * 0.08,
      }}
      className="group relative"
    >
      {/* Number */}
      <div className="absolute -left-1 top-8 hidden text-[11px] font-bold tracking-[0.3em] text-blue-200/20 lg:block">
        {exp.id}
      </div>

      {/* Card */}
      <div className="relative overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#0B1735]/80 p-6 backdrop-blur-xl transition-all duration-500 md:p-8 lg:ml-12">
        
        {/* Hover glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-amber-500/0 blur-[80px] transition-all duration-700 group-hover:bg-amber-500/10" />

        {/* Top Row */}
        <div className="relative mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          
          <div>
            {/* Type */}
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,.7)]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400/80">
                {exp.type}
              </span>
            </div>

            {/* Role */}
            <h3 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-amber-100 md:text-3xl">
              {exp.role}
            </h3>

            {/* Company */}
            <p className="mt-2 text-sm font-medium text-blue-200/60">
              {exp.company}
            </p>
          </div>

          {/* Date */}
          <div className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/50">
              {exp.duration}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-7 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

        {/* Description */}
        <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-3xl text-sm leading-7 text-blue-100/50">
            {exp.description}
          </p>

          {/* Arrow */}
          <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-500 group-hover:border-amber-400/40 group-hover:bg-amber-400 group-hover:text-black md:flex">
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-7 flex flex-wrap gap-2">
          {exp.tech.map((item: string, index: number) => (
            <span
              key={`${item}-${index}`}
              className="rounded-full border border-white/8 bg-[#101D40] px-3 py-1.5 text-[10px] font-medium tracking-wide text-blue-100/50 transition-all duration-300 group-hover:border-blue-300/20 group-hover:text-blue-100/70"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}


// =====================================================
// MAIN COMPONENT
// =====================================================

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#101D40] px-6 py-28"
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue glow */}
        <div className="absolute left-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]" />

        {/* Amber glow */}
        <div className="absolute right-[-15%] top-[45%] h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[150px]" />

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

      {/* =================================================
          CONTAINER
      ================================================= */}

      <div className="relative mx-auto max-w-6xl">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.header
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
          className="mb-20"
        >
          {/* Label */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10">
              <BriefcaseBusiness
                size={18}
                className="text-amber-400"
              />
            </div>

            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-blue-100/40">
              Professional Journey / 2025 — 2026
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl font-black tracking-tight text-white md:text-7xl">
            Experience
            <span className="text-amber-400">.</span>
          </h2>

          {/* Accent */}
          <div className="mt-7 flex items-center gap-2">
            <div className="h-[3px] w-20 rounded-full bg-amber-400" />
            <div className="h-[3px] w-8 rounded-full bg-amber-400/30" />
            <div className="h-[3px] w-2 rounded-full bg-amber-400/10" />
          </div>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-blue-100/50 md:text-base">
            A multidisciplinary journey across software engineering,
            creative technology, digital media, corporate operations and
            real-world business solutions.
          </p>
        </motion.header>


        {/* =================================================
            TECH & DIGITAL
        ================================================= */}

        <div className="mb-24">

          {/* Section Header */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="mb-10 flex items-center gap-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-300/10 bg-blue-400/10">
              <Code2
                size={18}
                className="text-blue-300"
              />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-300/50">
                01 / Primary Track
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                Tech & Digital Development
              </h3>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="space-y-4">
            {techExperiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                index={index}
              />
            ))}
          </div>
        </div>


        {/* =================================================
            CORPORATE
        ================================================= */}

        <div className="mb-28">

          {/* Section Header */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="mb-10 flex items-center gap-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-300/10 bg-amber-400/10">
              <Wrench
                size={18}
                className="text-amber-300"
              />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-300/50">
                02 / Professional Foundation
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                Corporate & Operational Experience
              </h3>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="space-y-4">
            {corporateExperiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                index={index}
              />
            ))}
          </div>
        </div>


        {/* =================================================
            COLLABORATIONS
        ================================================= */}

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
        >

          {/* Collaboration Header */}
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Layers3
                  size={18}
                  className="text-amber-400"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400/60">
                  Selected Collaborations
                </span>
              </div>

              <h3 className="text-3xl font-bold text-white md:text-4xl">
                Built with businesses.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100/40">
                Selected projects where I contributed through development,
                design, systems and digital transformation.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-blue-100/30">
              <Sparkles size={14} />
              <span>Selected Projects</span>
            </div>
          </div>


          {/* Collaboration Cards */}
          <div className="grid gap-5 md:grid-cols-3">
            {collaborations.map((item, index) => (
              <motion.article
                key={item.company}
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
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0B1735]/80 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/30"
              >

                {/* Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-amber-500/0 blur-[70px] transition-all duration-700 group-hover:bg-amber-500/10" />

                {/* Number */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-[0.3em] text-white/20">
                    {item.number}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-amber-400"
                  />
                </div>

                {/* Category */}
                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.25em] text-amber-400/70">
                  {item.category}
                </p>

                {/* Company */}
                <h4 className="text-2xl font-bold text-white">
                  {item.company}
                </h4>

                {/* Work */}
                <p className="mt-2 text-sm font-medium text-blue-200/60">
                  {item.work}
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-gradient-to-r from-white/10 to-transparent" />

                {/* Description */}
                <p className="text-sm leading-6 text-blue-100/40">
                  {item.description}
                </p>

                {/* Services */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-white/[0.08] bg-[#101D40] px-3 py-1.5 text-[9px] font-medium text-blue-100/50"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>


        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 sm:flex-row"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,.8)]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-100/30">
              Always building. Always learning.
            </span>
          </div>

          <span className="text-[10px] tracking-[0.3em] text-blue-100/15">
            KESHAN / EXPERIENCE
          </span>
        </motion.div>

      </div>
    </section>
  );
}