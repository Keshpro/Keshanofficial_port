"use client";

import { ArrowUpRight, GitBranch, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#101D40]">

      {/* =========================================
          BACKGROUND EFFECTS
      ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Blue Glow */}
        <div className="absolute left-[-15%] bottom-[-40%] h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[140px]" />

        {/* Amber Glow */}
        <div className="absolute right-[-10%] top-[-30%] h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[140px]" />

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


      {/* =========================================
          MAIN FOOTER
      ========================================= */}

      <div className="relative mx-auto max-w-6xl px-6 py-16">

        {/* =====================================
            TOP BRAND AREA
        ===================================== */}

        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">

          {/* Brand */}
          <div>

            {/* Logo */}
            <Link
              href="/"
              className="group flex w-fit items-center gap-3"
            >
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10">
                <span className="text-base font-black text-amber-400">
                  K
                </span>

                <div className="absolute inset-0 -z-10 rounded-xl bg-amber-400/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div>
                <p className="text-lg font-black tracking-tight text-white">
                  KESHAN
                  <span className="text-amber-400">.</span>
                  PANDITHARATHNA
                </p>

                <p className="mt-1 text-[8px] font-medium uppercase tracking-[0.3em] text-blue-100/30">
                  Software Engineer
                </p>
              </div>
            </Link>

            {/* Description */}
            <p className="mt-6 max-w-md text-sm leading-6 text-blue-100/40">
              Building digital experiences, software solutions and creative
              technology projects with a focus on modern design and practical
              results.
            </p>

          </div>


          {/* =====================================
              CTA
          ===================================== */}

          <Link
            href="/#contact"
            className="group flex w-fit items-center gap-3 rounded-full border border-amber-400/20 bg-amber-400/10 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300 transition-all duration-300 hover:border-amber-400/40 hover:bg-amber-400 hover:text-black"
          >
            Let's Build Something

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

        </div>


        {/* =====================================
            DIVIDER
        ===================================== */}

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />


        {/* =====================================
            BOTTOM AREA
        ===================================== */}

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

          {/* Copyright */}
          <div className="flex flex-col gap-2">
            <p className="text-xs text-blue-100/30">
              © {currentYear} Keshan Panditharathna.
            </p>

            <p className="text-[9px] uppercase tracking-[0.25em] text-blue-100/15">
              All rights reserved.
            </p>
          </div>


          {/* Center Status */}
          <div className="flex items-center gap-3">

            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-blue-100/30">
              Available for new opportunities
            </span>

          </div>


          {/* GitHub */}
          <Link
            href="https://github.com/oyage-github"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
          >

            <GitBranch
              size={16}
              className="text-blue-100/40 transition-colors duration-300 group-hover:text-white"
            />

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-100/30 transition-colors duration-300 group-hover:text-white">
              GitHub
            </span>

            <ArrowUpRight
              size={13}
              className="text-blue-100/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-400"
            />

          </Link>

        </div>


        {/* =====================================
            FINAL BRAND LINE
        ===================================== */}

        <div className="mt-12 flex items-center justify-between">

          <div className="flex items-center gap-2">
            <Sparkles
              size={12}
              className="text-amber-400/40"
            />

            <span className="text-[8px] uppercase tracking-[0.35em] text-blue-100/15">
              Designed & Built with intention
            </span>
          </div>

          <span className="text-[8px] tracking-[0.4em] text-blue-100/10">
            KP / 2026
          </span>

        </div>

      </div>
    </footer>
  );
}