"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home", active: true },
  { label: "Projects", href: "#projects" },
  { label: "Thinking", href: "#thinking" },
  { label: "Lab", href: "#lab" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-6 sm:px-8 lg:px-12"
    >
      {/* ============ LOGO ============ */}
      <Link href="#home" className="flex items-center gap-3">
        <span className="font-serif text-2xl font-bold leading-none text-white">
          K.
        </span>

        <span className="hidden h-8 w-px bg-white/15 sm:block" />

        <span className="hidden flex-col sm:flex">
          <span className="text-[13px] font-medium tracking-[0.02em] text-white">
            Keshan <span className="font-bold">Panditharathna</span>
          </span>
          <span className="font-mono text-[9px] tracking-[0.22em] text-white/40">
            Software engineer
          </span>
        </span>
      </Link>

      {/* ============ CENTER NAV ============ */}
      <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`relative pb-2 text-[14px] transition-colors ${
              link.active
                ? "font-medium text-[#e7b83e]"
                : "text-white/55 hover:text-white"
            }`}
          >
            {link.label}
            {link.active && (
              <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#e7b83e]" />
            )}
          </Link>
        ))}
      </nav>

      {/* ============ CTA ============ */}
      <Link
        href="#contact"
        className="group flex items-center gap-2 rounded-full border border-[#e7b83e]/60 px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:border-[#e7b83e] hover:bg-[#e7b83e]/10"
      >
        Let&apos;s Talk
        <ArrowUpRight
          size={14}
          className="text-[#e7b83e] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </Link>
    </motion.header>
  );
}