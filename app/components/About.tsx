"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Code2,
  Palette,
  Smartphone,
  FlaskConical,
  Layers3,
  Sparkles,
} from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    index: "01",
    title: "Engineering",
    subtitle: "Build",
    desc: "Full-stack applications, reusable systems, APIs and practical software solutions.",
    tags: ["React", "Next.js", "Node.js", "Spring Boot"],
  },
  {
    icon: Palette,
    index: "02",
    title: "Interface Design",
    subtitle: "Design",
    desc: "Thoughtful interfaces focused on clarity, usability and modern visual systems.",
    tags: ["UI/UX", "Figma", "Design Systems", "Branding"],
  },
  {
    icon: Smartphone,
    index: "03",
    title: "Applications",
    subtitle: "Prototype",
    desc: "Exploring mobile products and interaction concepts that solve real-world problems.",
    tags: ["Flutter", "Mobile UX", "Prototyping", "AR Concepts"],
  },
  {
    icon: FlaskConical,
    index: "04",
    title: "Research",
    subtitle: "Explore",
    desc: "Investigating product problems, platform constraints and better digital experiences.",
    tags: ["Product Research", "UX Research", "Experiments", "AI"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-transparent px-5 py-28 text-white sm:px-8 lg:px-12 xl:px-16"
    >
      {/* =====================================================
          GLOBAL BACKGROUND VISIBILITY OVERLAY

          heroback.png is fixed from layout.tsx.
          This keeps the image visible while protecting
          text readability.
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 bg-[#07101b]/35" />

      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[15%] top-[10%] h-[550px] w-[550px] rounded-full bg-blue-500/[0.06] blur-[170px]" />

        <div className="absolute bottom-[-15%] right-[-10%] h-[650px] w-[650px] rounded-full bg-amber-500/[0.055] blur-[190px]" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1450px]">
        {/* =====================================================
            SECTION INTRO
        ===================================================== */}
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
          className="mb-16 grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#d4af37]" />

              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.32em] text-[#d4af37]">
                About / Profile
              </span>
            </div>

            <h2 className="max-w-5xl text-[clamp(3.5rem,7vw,7rem)] font-black leading-[0.84] tracking-[-0.065em]">
              More than
              <br />

              <span className="text-white/25">
                writing code.
              </span>
            </h2>
          </div>

          <div className="border-t border-white/[0.08] pt-6">
            <p className="max-w-md text-sm leading-7 text-white/45">
              I&apos;m interested in the full journey from identifying a
              problem to designing, building, testing and improving the
              solution.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Sparkles
                size={14}
                className="text-[#d4af37]"
              />

              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/30">
                Engineering × Design × Curiosity
              </span>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            PROFILE DOSSIER
        ===================================================== */}
        <div className="grid overflow-hidden rounded-[30px] border border-white/[0.10] bg-[#08111f]/55 backdrop-blur-md lg:grid-cols-[0.85fr_1.15fr]">
          {/* ===================================================
              LEFT / IMAGE
          =================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 1.03,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative min-h-[500px] overflow-hidden lg:min-h-[720px]"
          >
            <Image
              src="/image/heroimg.jpg"
              alt="Keshan Panditharathna"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />

            {/* image overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06101d]/95 via-transparent to-black/10" />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#08111f]/35" />

            {/* ID */}
            <div className="absolute left-6 top-6">
              <div className="rounded-full border border-white/15 bg-black/20 px-4 py-2 backdrop-blur-xl">
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/60">
                  Profile / KP-26
                </span>
              </div>
            </div>

            {/* bottom identity */}
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <div className="mb-3 flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  Open to internship opportunities
                </span>
              </div>

              <h3 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                Keshan
                <br />
                Panditharathna
              </h3>

              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#d4af37]">
                Software Engineering Undergraduate
              </p>
            </div>
          </motion.div>

          {/* ===================================================
              RIGHT / DOSSIER CONTENT
          =================================================== */}
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12 xl:p-14">
            <div>
              {/* META */}
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-4">
                {[
                  ["Base", "Sri Lanka"],
                  ["Focus", "Software"],
                  ["Approach", "Problem-first"],
                  ["Status", "Building"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="bg-[#091321]/55 px-4 py-4 backdrop-blur-sm"
                  >
                    <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                      {label}
                    </p>

                    <p className="mt-2 text-[11px] font-medium text-white/65">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* INTRO */}
              <div className="mt-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d4af37]">
                  Who I am
                </p>

                <h3 className="mt-4 max-w-3xl text-2xl font-semibold leading-[1.25] tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
                  A developer who cares about
                  <span className="text-white/30">
                    {" "}
                    how a product works
                  </span>{" "}
                  and
                  <span className="text-white/30">
                    {" "}
                    how it feels to use.
                  </span>
                </h3>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/42 md:text-[15px]">
                  I build full-stack web applications and digital products
                  with a focus on clean implementation, responsive interfaces
                  and practical problem-solving. My interest extends beyond
                  development into UI/UX, mobile concepts, product research and
                  emerging technologies.
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/42 md:text-[15px]">
                  I enjoy taking an idea from an early concept, understanding
                  the actual user problem and turning it into something useful,
                  clear and technically achievable.
                </p>
              </div>

              {/* CURRENTLY EXPLORING */}
              <div className="mt-10 border-y border-white/[0.08] py-7">
                <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.25em] text-white/25">
                  Currently exploring
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Flutter",
                    "Product Design",
                    "AI Workflows",
                    "Mobile UX",
                    "Interactive Systems",
                    "Full-Stack Architecture",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3.5 py-2 text-[9px] font-medium tracking-wide text-white/45"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="#projects"
                className="group flex items-center gap-5 rounded-full bg-[#d4af37] py-2 pl-6 pr-2 text-[#08111f] transition-all duration-300 hover:bg-[#e5c04b]"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.15em]">
                  Explore my work
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#08111f] text-white">
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>

              <Link
                href="/image/keshan_panditharathna.pdf"
                target="_blank"
                className="group flex h-14 items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-6 text-white/55 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                <Download size={14} />

                <span className="text-[9px] font-bold uppercase tracking-[0.18em]">
                  Resume
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            CAPABILITY MATRIX
        ===================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-8 grid gap-px overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 xl:grid-cols-4"
        >
          {capabilities.map(
            ({
              icon: Icon,
              index,
              title,
              subtitle,
              desc,
              tags,
            }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                className="group relative min-h-[320px] bg-[#091321]/55 p-7 backdrop-blur-md transition-colors duration-500 hover:bg-[#0c1727]/75"
              >
                {/* number */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-white/20">
                    {index}
                  </span>

                  <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-white/20">
                    {subtitle}
                  </span>
                </div>

                {/* icon */}
                <div className="mt-10 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-[#7ea3d4] transition-all duration-300 group-hover:border-[#d4af37]/30 group-hover:text-[#d4af37]">
                  <Icon size={19} />
                </div>

                <h4 className="mt-6 text-xl font-semibold tracking-[-0.03em]">
                  {title}
                </h4>

                <p className="mt-3 text-xs leading-6 text-white/35">
                  {desc}
                </p>

                <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/20 transition-colors group-hover:text-white/35"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* hover accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d4af37] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            )
          )}
        </motion.div>

        {/* =====================================================
            PHILOSOPHY
        ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
          className="mt-16 grid gap-8 border-t border-white/[0.08] pt-9 lg:grid-cols-[.7fr_1.3fr] lg:items-start"
        >
          <div className="flex items-center gap-3">
            <Layers3
              size={14}
              className="text-[#d4af37]"
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
              Working philosophy
            </span>
          </div>

          <div>
            <blockquote className="max-w-4xl text-2xl font-medium leading-[1.35] tracking-[-0.025em] text-white/80 md:text-3xl">
              “Build useful things. Learn from the process. Improve the next
              version.”
            </blockquote>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/30">
              I value consistent improvement over chasing perfection — each
              project is an opportunity to understand a problem better and
              build something more useful than before.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}