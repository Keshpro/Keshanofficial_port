"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* =========================================
          DESKTOP / MAIN NAVBAR
      ========================================= */}

      <motion.nav
        initial={{
          y: -30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6"
      >
        <div className="mx-auto max-w-6xl">

          <div className="relative flex h-[68px] items-center justify-between rounded-2xl border border-white/[0.08] bg-[#0B1735]/80 px-4 shadow-2xl shadow-black/20 backdrop-blur-2xl md:px-6">

            {/* =====================================
                LOGO
            ===================================== */}

            <Link
              href="/"
              className="group relative flex items-center gap-3"
            >
              {/* Logo Mark */}
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10">
                <span className="text-sm font-black text-amber-400">
                  K
                </span>

                {/* Glow */}
                <div className="absolute inset-0 -z-10 rounded-xl bg-amber-400/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Logo Text */}
              <div className="hidden sm:block">
                <p className="text-sm font-black tracking-tight text-white">
                  KESHAN
                  <span className="text-amber-400">.</span>
                  PANDITHARATHNA
                </p>

                <p className="mt-0.5 text-[8px] font-medium uppercase tracking-[0.28em] text-blue-100/30">
                  Software Engineer
                </p>
              </div>

              {/* Mobile Logo */}
              <p className="text-sm font-black tracking-tight text-white sm:hidden">
                KESHAN
                <span className="text-amber-400">.</span>
              </p>
            </Link>


            {/* =====================================
                DESKTOP NAVIGATION
            ===================================== */}

            <div className="hidden items-center gap-1 md:flex">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative rounded-xl px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-100/50 transition-all duration-300 hover:bg-white/[0.05] hover:text-white"
                >
                  {link.name}

                  {/* Hover line */}
                  <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-amber-400 transition-all duration-300 group-hover:w-5" />
                </Link>
              ))}

            </div>


            {/* =====================================
                DESKTOP CTA
            ===================================== */}

            <Link
              href="/#contact"
              className="group hidden items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-amber-300 transition-all duration-300 hover:border-amber-400/40 hover:bg-amber-400 hover:text-black md:flex"
            >
              Let's Talk

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>


            {/* =====================================
                MOBILE MENU BUTTON
            ===================================== */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-100/60 transition-all duration-300 hover:border-amber-400/30 hover:text-white md:hidden"
            >
              {isOpen ? (
                <X size={19} />
              ) : (
                <Menu size={19} />
              )}
            </button>

          </div>
        </div>
      </motion.nav>


      {/* =========================================
          MOBILE MENU
      ========================================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed left-4 right-4 top-[92px] z-40 md:hidden"
          >
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0B1735]/95 shadow-2xl shadow-black/30 backdrop-blur-2xl">

              {/* Mobile Header */}
              <div className="border-b border-white/[0.06] px-6 py-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-100/30">
                  Navigation
                </p>
              </div>


              {/* Links */}
              <div className="p-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between rounded-xl px-4 py-4 transition-all duration-300 hover:bg-white/[0.05]"
                    >
                      <div className="flex items-center gap-4">

                        {/* Number */}
                        <span className="text-[9px] font-bold tracking-widest text-white/20">
                          0{index + 1}
                        </span>

                        {/* Name */}
                        <span className="text-sm font-semibold text-blue-100/60 transition-colors group-hover:text-white">
                          {link.name}
                        </span>

                      </div>

                      <ArrowUpRight
                        size={15}
                        className="text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-400"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>


              {/* Mobile CTA */}
              <div className="border-t border-white/[0.06] p-4">
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-amber-300"
                >
                  Start a Conversation

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}