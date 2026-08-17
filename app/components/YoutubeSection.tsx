"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MonitorPlay,
  Play,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const videoContent = [
  {
    title: "Cinematic Car Model Transformation",
    category: "Scale Model Modifications",
    description:
      "A cinematic transformation journey combining precision modification, visual storytelling and detailed finishing.",
    thumbnail:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop",
    videoUrl: "#",
  },
  {
    title: "Epoxy Resin & Woodworking Craft",
    category: "Craft Transformation",
    description:
      "Turning raw materials into a visually satisfying handcrafted piece through cinematic process storytelling.",
    thumbnail:
      "https://images.unsplash.com/photo-1622322896504-20678dcb2f43?q=80&w=1600&auto=format&fit=crop",
    videoUrl: "#",
  },
  {
    title: "High-Resolution AI Cinematic Motion",
    category: "AI Visual Generation",
    description:
      "Exploring cinematic motion, atmosphere and storytelling through next-generation AI visual generation.",
    thumbnail:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
    videoUrl: "#",
  },
];

export default function YoutubeSection() {
  return (
    <section
      id="content"
      className="relative overflow-hidden bg-[#10182c] px-6 py-28"
    >
      {/* =========================================
          BACKGROUND EFFECTS
      ========================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue Glow */}
        <div className="absolute left-[-10%] top-[10%] h-137.5 w-137.5 rounded-full bg-blue-400/10 blur-[150px]" />

        {/* Amber Glow */}
        <div className="absolute right-[-10%] bottom-[5%] h-[550px] w-[550px] rounded-full bg-amber-500/10 blur-[150px]" />

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[150px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Top Gradient */}
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-[#101D40] to-transparent" />

        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#101D40] to-transparent" />
      </div>

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}
      <div className="relative mx-auto max-w-7xl">

        {/* =========================================
            HEADER
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            {/* Small Label */}
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-400/20 bg-red-500/10 shadow-lg shadow-red-500/10">
                <MonitorPlay
                  size={19}
                  className="text-red-400"
                />
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200/60">
                Selected Work / 2026
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-7xl">
              Digital
              <br />

              <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Experiences.
              </span>
            </h2>

            {/* Accent Line */}
            <div className="mt-6 flex items-center gap-2">
              <div className="h-[3px] w-20 rounded-full bg-amber-500" />
              <div className="h-[3px] w-8 rounded-full bg-amber-500/30" />
              <div className="h-[3px] w-2 rounded-full bg-amber-500/10" />
            </div>

            {/* Description */}
            <p className="mt-6 max-w-xl text-sm leading-7 text-blue-100/50 md:text-base">
              A curated collection of cinematic experiments, craft
              transformations, AI-generated visuals and digital storytelling.
            </p>
          </div>

          {/* Header Badge */}
          <div className="hidden md:block">
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 shadow-xl shadow-black/10 backdrop-blur-xl">
              <Sparkles
                size={15}
                className="text-amber-400"
              />

              <span className="text-xs uppercase tracking-[0.2em] text-blue-100/60">
                Creative Media
              </span>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            VIDEO GRID
        ========================================= */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {videoContent.map((video, index) => {
            const isFeatured = index === 0;

            return (
              <motion.div
                key={video.title}
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
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0B1735] shadow-2xl shadow-black/20 transition-all duration-500 hover:border-amber-400/30 hover:shadow-amber-500/10 ${
                  isFeatured
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                {/* =====================================
                    IMAGE AREA
                ===================================== */}
                <div
                  className={`relative overflow-hidden ${
                    isFeatured
                      ? "aspect-[16/8] md:aspect-[16/7]"
                      : "aspect-[16/10]"
                  }`}
                >
                  {/* Image */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-full w-full object-cover transition duration-[1.2s] ease-out group-hover:scale-110"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B1B] via-[#071126]/30 to-transparent" />

                  {/* Blue Cinematic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent" />

                  {/* Hover Color */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-transparent to-blue-500/0 opacity-0 transition duration-700 group-hover:from-amber-500/10 group-hover:to-blue-500/10 group-hover:opacity-100" />

                  {/* =================================
                      PROJECT NUMBER
                  ================================= */}
                  <div className="absolute left-6 top-6 flex items-center gap-3">
                    <span className="text-xs font-bold tracking-[0.2em] text-white/60">
                      0{index + 1}
                    </span>

                    <div className="h-px w-10 bg-white/20" />

                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                      Project
                    </span>
                  </div>

                  {/* =================================
                      PLAY BUTTON
                  ================================= */}
                  <Link
                    href={video.videoUrl}
                    target="_blank"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="relative flex h-[78px] w-[78px] items-center justify-center rounded-full border border-white/30 bg-white/10 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 hover:scale-110 hover:border-white/60">
                      {/* Glow */}
                      <div className="absolute inset-0 rounded-full bg-red-500/20 blur-2xl" />

                      {/* Inner Circle */}
                      <div className="absolute inset-[7px] rounded-full bg-red-600 shadow-[0_0_30px_rgba(220,38,38,0.4)]" />

                      <Play
                        size={25}
                        fill="white"
                        className="relative ml-1 text-white"
                      />
                    </div>
                  </Link>

                  {/* =================================
                      BOTTOM CONTENT
                  ================================= */}
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

                      {/* Text */}
                      <div className="max-w-2xl">

                        {/* Category */}
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400">
                          {video.category}
                        </p>

                        {/* Title */}
                        <h3
                          className={`font-bold leading-tight text-white transition-colors duration-300 group-hover:text-amber-100 ${
                            isFeatured
                              ? "text-3xl md:text-5xl"
                              : "text-2xl"
                          }`}
                        >
                          {video.title}
                        </h3>

                        {/* Description */}
                        {isFeatured && (
                          <p className="mt-4 max-w-xl text-sm leading-6 text-blue-100/50">
                            {video.description}
                          </p>
                        )}
                      </div>

                      {/* Watch Button */}
                      <Link
                        href={video.videoUrl}
                        target="_blank"
                        className="group/button flex w-fit shrink-0 items-center gap-3 rounded-full border border-white/15 bg-white/[0.08] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-xl transition-all duration-300 hover:border-amber-400/50 hover:bg-amber-500 hover:text-black"
                      >
                        <span>Watch</span>

                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================
            BOTTOM STATEMENT
        ========================================= */}
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
            delay: 0.3,
            duration: 0.8,
          }}
          className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.8)]" />

            <span className="text-xs uppercase tracking-[0.2em] text-blue-100/40">
              More projects coming soon
            </span>
          </div>

          <span className="text-xs tracking-[0.25em] text-blue-100/20">
            KESHAN / DIGITAL MEDIA
          </span>
        </motion.div>
      </div>
    </section>
  );
}