"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Film,
  Play,
  Radio,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const videoContent = [
  {
    id: "mn2Ab0n8Tqw",
    videoUrl: "https://youtu.be/mn2Ab0n8Tqw",
    label: "Featured Film",
    title: "Visual Experiment 01",
    category: "Creative Direction",
  },
  {
    id: "Ys3F9p2_IB0",
    videoUrl: "https://youtu.be/Ys3F9p2_IB0",
    label: "Creative Work",
    title: "Visual Experiment 02",
    category: "Digital Storytelling",
  },
  {
    id: "D2bRbi0m60E",
    videoUrl: "https://youtu.be/D2bRbi0m60E",
    label: "Visual Story",
    title: "Visual Experiment 03",
    category: "Motion & AI",
  },
];

export default function YoutubeSection() {
  const featured = videoContent[0];
  const secondary = videoContent.slice(1);

  return (
    <section
      id="content"
      className="relative overflow-hidden bg-[#0b1425] px-5 py-28 text-white sm:px-8 lg:px-12 xl:px-16"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[5%] h-[520px] w-[520px] rounded-full bg-blue-500/[0.05] blur-[170px]" />

        <div className="absolute bottom-[-10%] right-[-8%] h-[620px] w-[620px] rounded-full bg-amber-500/[0.055] blur-[190px]" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "82px 82px",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1450px]">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end"
        >
          <div>
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-red-400/15 bg-red-500/[0.07]">
                <Radio size={16} className="text-red-400" />
              </div>

              <div>
                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-amber-400">
                  Creator Lab / 2026
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/25">
                  Motion • Story • Experiment
                </p>
              </div>
            </div>

            <h2 className="max-w-5xl text-[clamp(3.5rem,7vw,7rem)] font-black leading-[0.84] tracking-[-0.07em]">
              Ideas move
              <br />

              <span className="text-white/22">
                differently
              </span>

              <br />

              <span className="bg-gradient-to-r from-[#f1cb62] via-[#d4af37] to-[#9b741f] bg-clip-text text-transparent">
                on screen.
              </span>
            </h2>
          </div>

          <div className="border-t border-white/[0.08] pt-6">
            <p className="max-w-md text-sm leading-7 text-white/40">
              A small collection of visual experiments exploring editing,
              motion, AI-assisted creation and digital storytelling outside
              my software engineering work.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <Sparkles size={14} className="text-[#d4af37]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-white/25">
                Selected media experiments
              </span>

              <span className="h-px flex-1 bg-white/[0.08]" />

              <span className="font-mono text-[9px] text-white/30">
                03
              </span>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            MEDIA BOARD
        ===================================================== */}
        <div className="grid gap-5 lg:grid-cols-[1.55fr_.65fr]">

          {/* ===================================================
              FEATURED VIDEO
          =================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link
              href={featured.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <article className="relative h-full min-h-[520px] overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#08111f] sm:min-h-[650px] lg:min-h-[720px]">

                {/* Thumbnail */}
                <img
                  src={`https://i.ytimg.com/vi/${featured.id}/maxresdefault.jpg`}
                  alt={featured.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.035]"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020813] via-[#020813]/20 to-black/10" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#07101a]/45 via-transparent to-transparent" />

                {/* top info */}
                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6 sm:p-8">

                  <div className="flex items-center gap-3 rounded-full border border-white/15 bg-black/20 px-4 py-2 backdrop-blur-xl">

                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,.8)]" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/65">
                      Now Showing
                    </span>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white/60 backdrop-blur-xl transition-all duration-500 group-hover:rotate-45 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-black">
                    <ArrowUpRight size={17} />
                  </div>
                </div>

                {/* Play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">

                    <div className="absolute inset-[-25px] scale-75 rounded-full border border-white/0 transition-all duration-700 group-hover:scale-100 group-hover:border-white/10" />

                    <div className="absolute inset-[-12px] rounded-full bg-red-500/0 blur-2xl transition-all duration-500 group-hover:bg-red-500/20" />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/25 backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:border-red-400/50 group-hover:bg-red-600 sm:h-24 sm:w-24">
                      <Play
                        size={26}
                        fill="white"
                        className="ml-1 text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* bottom */}
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">

                  <div className="mb-4 flex items-center gap-3">

                    <Film size={14} className="text-red-400" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/40">
                      {featured.category}
                    </span>
                  </div>

                  <div className="flex items-end justify-between gap-6">

                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-amber-400">
                        01 / Featured
                      </p>

                      <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                        {featured.title}
                      </h3>
                    </div>

                    <span className="hidden text-[9px] font-bold uppercase tracking-[0.22em] text-white/35 transition-colors group-hover:text-amber-300 sm:block">
                      Watch on YouTube
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </motion.div>

          {/* ===================================================
              SIDE STACK
          =================================================== */}
          <div className="grid gap-5">

            {secondary.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >
                <Link
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <article className="relative min-h-[300px] overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#08111f] lg:min-h-[350px]">

                    <img
                      src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#020813]/95 via-[#020813]/30 to-black/10" />

                    {/* top */}
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">

                      <span className="font-mono text-[9px] tracking-[0.2em] text-white/35">
                        {String(index + 2).padStart(2, "0")}
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white/50 backdrop-blur-md transition-all duration-300 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-black">
                        <ArrowUpRight size={14} />
                      </div>
                    </div>

                    {/* center play */}
                    <div className="absolute inset-0 flex items-center justify-center">

                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/25 backdrop-blur-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600">
                        <Play
                          size={18}
                          fill="white"
                          className="ml-0.5 text-white"
                        />
                      </div>
                    </div>

                    {/* bottom */}
                    <div className="absolute inset-x-0 bottom-0 p-5">

                      <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-amber-400">
                        {video.category}
                      </p>

                      <h4 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white">
                        {video.title}
                      </h4>

                      <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/30">
                        {video.label}
                      </p>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =====================================================
            CREATIVE PROCESS STRIP
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 grid overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#08111f]/60 md:grid-cols-4"
        >
          {[
            ["01", "Idea"],
            ["02", "Experiment"],
            ["03", "Create"],
            ["04", "Publish"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <span className="font-mono text-[8px] text-white/20">
                {number}
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/45">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* =====================================================
            FOOTER
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 flex flex-col justify-between gap-5 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center"
        >
          <div className="flex items-center gap-3">

            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-amber-400 opacity-40" />
              <span className="relative h-2 w-2 rounded-full bg-amber-400" />
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/30">
              Exploring beyond software
            </span>
          </div>

          <div className="flex items-center gap-3">

            <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/20">
              Code
            </span>

            <span className="h-1 w-1 rounded-full bg-white/20" />

            <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/20">
              Design
            </span>

            <span className="h-1 w-1 rounded-full bg-white/20" />

            <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/20">
              Story
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}