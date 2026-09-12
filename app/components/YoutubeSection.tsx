"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Film,
  MoveUpRight,
} from "lucide-react";
import Link from "next/link";

const videoContent = [
  {
    id: "mn2Ab0n8Tqw",
    videoUrl: "https://youtu.be/mn2Ab0n8Tqw",
    label: "Featured Film",
  },
  {
    id: "Ys3F9p2_IB0",
    videoUrl: "https://youtu.be/Ys3F9p2_IB0",
    label: "Creative Work",
  },
  {
    id: "D2bRbi0m60E",
    videoUrl: "https://youtu.be/D2bRbi0m60E",
    label: "Visual Story",
  },
];

export default function YoutubeSection() {
  return (
    <section
      id="content"
      className="relative overflow-hidden bg-[#10182c] px-5 py-24 sm:px-6 md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.08] blur-[150px]" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-amber-500/[0.07] blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#101D40] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#101D40] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-red-400/20 bg-red-500/10">
                <Film size={19} className="text-red-400" />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-blue-100/35">
                  Beyond the code
                </p>

                <p className="mt-1 text-xs font-medium text-white/70">
                  Video & Digital Storytelling
                </p>
              </div>
            </div>

            <h2 className="max-w-4xl text-[clamp(3rem,7vw,6.5rem)] font-black leading-[0.85] tracking-[-0.06em] text-white">
              I don&apos;t just
              <br />
              <span className="text-white/25">build things.</span>
              <br />

              <span className="relative inline-block">
                I tell stories.

                <span className="absolute -bottom-2 left-1 h-[3px] w-[35%] rounded-full bg-amber-400" />
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <div className="mb-6 h-px w-full bg-white/10" />

            <p className="max-w-md text-sm leading-7 text-blue-100/45 md:text-[15px]">
              A selection of my visual experiments and digital content —
              exploring storytelling, editing, motion and creative technology
              beyond software development.
            </p>

            <div className="mt-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
              <Film size={14} />
              <span>Selected uploads</span>
              <span className="h-px flex-1 bg-white/10" />
              <span>03</span>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FILM STRIP
        ===================================================== */}
        <div className="relative">

          {/* Desktop vertical rail */}
          <div className="absolute bottom-0 left-[27px] top-0 hidden w-px bg-white/[0.08] lg:block" />

          <div className="space-y-6 lg:space-y-8">
            {videoContent.map((video, index) => {
              const number = String(index + 1).padStart(2, "0");

              return (
                <motion.article
                  key={video.id}
                  initial={{
                    opacity: 0,
                    y: 50,
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
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  className="group relative lg:grid lg:grid-cols-[55px_1fr]"
                >
                  {/* Number rail */}
                  <div className="relative z-10 hidden lg:flex lg:justify-start">
                    <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full border border-white/10 bg-[#10182c] text-[11px] font-bold tracking-[0.15em] text-white/35 transition-all duration-500 group-hover:border-amber-400/40 group-hover:text-amber-400">
                      {number}
                    </div>
                  </div>

                  {/* Main Card */}
                  <Link
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch video ${number} on YouTube`}
                    className="relative block"
                  >
                    <div
                      className={`relative overflow-hidden rounded-[26px] border border-white/[0.09] bg-[#071126] transition-all duration-700 hover:border-white/20 ${
                        index === 1
                          ? "lg:ml-[7%] lg:w-[93%]"
                          : index === 2
                          ? "lg:ml-[2%] lg:w-[98%]"
                          : ""
                      }`}
                    >
                      <div className="relative aspect-video overflow-hidden">

                        {/* Real YouTube thumbnail */}
                        <img
                          src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
                          alt={`YouTube video ${number}`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.035]"
                        />

                        {/* Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/55 via-transparent to-transparent" />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/5 to-[#020617]/10" />

                        <div className="absolute inset-0 bg-blue-950/10 transition-colors duration-700 group-hover:bg-transparent" />

                        {/* Top info */}
                        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 md:p-7">

                          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-2 backdrop-blur-xl">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,.8)]" />

                            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/70">
                              {video.label}
                            </span>
                          </div>

                          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white/60 backdrop-blur-xl transition-all duration-500 group-hover:rotate-45 group-hover:border-amber-400/50 group-hover:bg-amber-400 group-hover:text-black">
                            <ArrowUpRight size={17} />
                          </div>
                        </div>

                        {/* Center play interaction */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative">

                            {/* Outer pulse */}
                            <div className="absolute inset-[-22px] scale-75 rounded-full border border-white/0 transition-all duration-700 group-hover:scale-100 group-hover:border-white/10" />

                            <div className="absolute inset-[-10px] rounded-full bg-red-500/0 blur-2xl transition duration-500 group-hover:bg-red-500/20" />

                            <div className="relative flex h-[70px] w-[70px] items-center justify-center rounded-full border border-white/20 bg-black/25 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-red-400/50 group-hover:bg-red-600 md:h-[82px] md:w-[82px]">
                              <Play
                                size={24}
                                fill="white"
                                className="ml-1 text-white"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Bottom content */}
                        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 md:p-7">

                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <Film
                                size={14}
                                className="text-red-400"
                              />

                              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/45">
                                YouTube / Keshan
                              </span>
                            </div>

                            <p className="text-sm font-medium text-white/80 md:text-base">
                              Watch the full project
                            </p>
                          </div>

                          <div className="hidden items-center gap-3 md:flex">
                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/35 transition-colors group-hover:text-amber-300">
                              Play film
                            </span>

                            <MoveUpRight
                              size={15}
                              className="text-white/35 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-amber-300"
                            />
                          </div>
                        </div>

                        {/* Hover border */}
                        <div className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-inset ring-white/0 transition duration-500 group-hover:ring-white/10" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            FOOTER
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-col justify-between gap-6 border-t border-white/8 pt-7 sm:flex-row sm:items-center"
        >
          <div className="flex items-center gap-3">
            <div className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-100/35">
              Exploring beyond software
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/20">
              Code
            </span>

            <span className="h-1 w-1 rounded-full bg-white/20" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/20">
              Design
            </span>

            <span className="h-1 w-1 rounded-full bg-white/20" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/20">
              Story
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}