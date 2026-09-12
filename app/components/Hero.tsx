"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Lightbulb,
  CheckSquare,
  MapPin,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070d14] text-white">

      {/* ======================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[30%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.05] blur-[160px]" />

        <div className="absolute bottom-[-20%] right-[-5%] h-[650px] w-[650px] rounded-full bg-[#d4a62a]/[0.08] blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#070d14] to-transparent" />
      </div>

      {/* ======================================================
          TOP META
      ====================================================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute right-6 top-28 z-30 hidden items-center gap-4 lg:flex xl:right-16"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/35">
          Sri Lanka
        </span>

        <div className="h-3 w-px bg-white/15" />

        <span className="font-mono text-[9px] text-white/35">2026</span>

        <span className="relative ml-2 flex h-3 w-3 items-center justify-center">
          <span className="absolute h-full w-full animate-ping rounded-full bg-[#e7b83e]/30" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#e7b83e]" />
        </span>
      </motion.div>

      {/* ======================================================
          MAIN FRAME
      ====================================================== */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] items-center px-5 pb-20 pt-28 sm:px-8 lg:px-12 xl:px-16">

        <div className="relative w-full overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#081019]/40">

          {/* frame corners */}
          <div className="absolute left-0 top-0 h-6 w-px bg-[#d4a62a]/70" />
          <div className="absolute left-0 top-0 h-px w-6 bg-[#d4a62a]/70" />

          <div className="absolute right-0 top-0 h-6 w-px bg-white/15" />
          <div className="absolute right-0 top-0 h-px w-6 bg-white/15" />

          {/* ==================================================
              PORTRAIT / WORKSPACE
          ================================================== */}
          <div className="absolute inset-0 hidden lg:block">

            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute bottom-0 right-0 top-0 w-[64%]"
            >
              <Image
                src="/image/heroimg.jpg"
                alt="Keshan Panditharathna"
                fill
                priority
                sizes="64vw"
                className="object-cover object-center"
              />

              {/* image fades into left text */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#081019] via-[#081019]/35 to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#081019]/80 via-transparent to-[#081019]/15" />

              <div className="absolute inset-0 bg-[#06101b]/10" />
            </motion.div>
          </div>

          {/* ==================================================
              MOBILE IMAGE
          ================================================== */}
          <div className="relative block h-[420px] lg:hidden">
            <Image
              src="/image/heroimg.jpg"
              alt="Keshan Panditharathna"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#081019] via-[#081019]/10 to-transparent" />
          </div>

          {/* ==================================================
              CONTENT
          ================================================== */}
          <div className="relative z-20 grid min-h-[760px] lg:grid-cols-[48%_52%]">

            {/* ================================================
                LEFT
            ================================================ */}
            <div className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-10 xl:px-14">

              {/* philosophy */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8 flex items-center gap-4"
              >
                <span className="h-px w-8 bg-[#e7b83e]" />

                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/50">
                  Build
                </span>

                <span className="text-white/15">/</span>

                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/35">
                  Learn
                </span>

                <span className="text-white/15">/</span>

                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/35">
                  Improve
                </span>
              </motion.div>

              {/* heading */}
              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="max-w-[650px] text-[clamp(3.2rem,5.5vw,6rem)] font-black leading-[0.88] tracking-[-0.065em]"
              >
                <span className="text-[#f3f3f1]">
                  Hi, I&apos;m
                </span>

                <br />

                <span className="text-[#f3f3f1]">
                  Keshan
                </span>

                <br />

                <span className="bg-gradient-to-r from-[#f6c84d] via-[#e9b83e] to-[#b88622] bg-clip-text text-transparent">
                  Panditharathna
                </span>

                <span className="text-white">.</span>
              </motion.h1>

              {/* role */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="mt-6"
              >
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-white/65 sm:text-xs">
                  Software Engineer & Problem Solver
                </p>
              </motion.div>

              {/* description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
                className="mt-7 max-w-[540px] text-[15px] leading-7 text-[#8793a7] md:text-base"
              >
                I build practical digital solutions by combining clean code,
                thoughtful design, and curiosity to solve real-world problems.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 }}
                className="mt-9 flex flex-wrap gap-4"
              >
                <Link
                  href="#projects"
                  className="group flex items-center gap-5 rounded-full bg-[#f0bd43] px-7 py-4 text-[12px] font-bold text-[#07101a] transition-all duration-300 hover:bg-[#ffd363]"
                >
                  View My Work

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="#about"
                  className="flex items-center rounded-full border border-white/20 bg-black/10 px-7 py-4 text-[12px] font-semibold text-white/75 backdrop-blur-xl transition-all hover:border-white/40 hover:text-white"
                >
                  About Me
                </Link>
              </motion.div>

              {/* =================================================
                  STATS
              ================================================= */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-10 flex items-start"
              >
                <div className="pr-8">
                  <strong className="font-mono text-2xl font-medium">
                    03+
                  </strong>

                  <p className="mt-1 text-[10px] tracking-wide text-white/35">
                    Projects
                  </p>
                </div>

                <div className="border-l border-white/15 px-8">
                  <strong className="text-3xl font-light leading-none">
                    ∞
                  </strong>

                  <p className="mt-1 text-[10px] tracking-wide text-white/35">
                    Ideas
                  </p>
                </div>

                <div className="border-l border-white/15 pl-8">
                  <strong className="font-mono text-2xl font-medium">
                    1
                  </strong>

                  <p className="mt-1 text-[10px] tracking-wide text-white/35">
                    Goal
                  </p>

                  <p className="mt-1 hidden max-w-[140px] font-mono text-[9px] leading-4 text-white/30 sm:block">
                    Make a positive impact through technology.
                  </p>
                </div>
              </motion.div>

              {/* quote */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="mt-16 max-w-75 font-mono text-[11px] italic leading-6 text-white/35"
              >
                &quot;Better solutions
                <br />
                for a brighter tomorrow.&quot;
              </motion.p>
            </div>

            {/* ================================================
                RIGHT INTERACTION AREA
            ================================================ */}
            <div className="pointer-events-none relative hidden lg:block">

              {/* ==============================================
                  TOP HANDWRITTEN / CHECKLIST PANEL
              ============================================== */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="absolute right-[4%] top-[12%] w-65"
              >
                <div className="border-l border-white/8 pl-7">

                 


                </div>
              </motion.div>

              {/* ==============================================
                  CURRENTLY WORKING ON
              ============================================== */}
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
                  delay: 1,
                  duration: 0.7,
                }}
                className="absolute right-[3%] top-[47%] w-[300px] rounded-2xl border border-white/10 bg-[#07101a]/75 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e7b83e] shadow-[0_0_10px_rgba(231,184,62,.8)]" />

                  <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#e7b83e]">
                    Currently Working On
                  </p>
                </div>

                <div className="space-y-4">

                  {[
                    "Learning Flutter",
                    "Exploring iOS Interactions",
                    "Building Useful Projects",
                    "Open to Internship Opportunities",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-[2px] text-xs text-white/40">
                        →
                      </span>

                      <span className="font-mono text-[10px] leading-4 text-white/50">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ==============================================
                  SMALL PHILOSOPHY
              ============================================== */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.15 }}
                className="absolute bottom-[7%] left-[10%] font-mono text-[10px] leading-6 text-white/60"
              >
                <p>Build</p>
                <p>Experiment</p>
                <p>Learn</p>
                <p>Repeat</p>
              </motion.div>
            </div>
          </div>

          {/* ==================================================
              LEFT SCROLL INDICATOR
          ================================================== */}
          <div className="absolute bottom-10 left-3 hidden flex-col items-center gap-4 xl:flex">
            <span className="[writing-mode:vertical-rl] rotate-180 font-mono text-[8px] uppercase tracking-[0.25em] text-white/30">
              Scroll
            </span>

            <span className="h-10 w-px bg-[#e7b83e]" />
          </div>
        </div>
      </div>
    </section>
  );
}