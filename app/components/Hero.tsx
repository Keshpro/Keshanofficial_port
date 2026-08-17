"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Code2, Palette, Lightbulb } from "lucide-react";

const ROLES = ["Web Developer", "Software Engineer", "UI/UX Designer", "Freelancer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const speed = isDeleting ? 40 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-[90vh] flex items-center px-6 md:px-12 lg:px-20 overflow-hidden bg-[#0a0e1a]">

      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      {/* Background glow — midnight blue base + gold accent glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#10182c]/[0.04] rounded-full blur-[130px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#1e3a5f]/30 rounded-full blur-[140px] -z-10" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left column — text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-[#D4AF37] tracking-widest uppercase text-xs mb-5 flex items-center justify-center lg:justify-start gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] inline-block" />
            Welcome to my portfolio
          </motion.p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-[#e8eaf0] tracking-tight mb-4 leading-tight">
            Hello, I&apos;m Keshan <br className="hidden lg:block" />
            Panditharathna<span className="text-[#D4AF37]">.</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#8b96ab] mb-6 h-8 flex items-center justify-center lg:justify-start font-mono">
            <span className="text-[#5a6478] text-lg">&gt;</span>
            <span className="text-[#e8eaf0] font-semibold ml-2">
              {displayText}
              <span className="border-r-2 border-[#D4AF37] ml-0.5 animate-pulse">&nbsp;</span>
            </span>
          </p>

          <p className="text-base md:text-lg text-[#8b96ab] mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            I&apos;m Keshan, a Software Engineering undergrad and Web Developer
            specializing in creating high-performance, modern web applications
            with a strong eye for design.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link href="#projects">
              <button className="flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c4a02f] text-[#0a0e1a] px-8 py-3 rounded-full font-semibold transition-all duration-300">
                View My Work <ArrowRight size={18} />
              </button>
            </Link>
            <Link href="/resume.pdf" target="_blank">
              <button className="flex items-center gap-2 bg-transparent border border-[#2a3548] hover:border-[#3f4d68] text-[#e8eaf0] px-8 py-3 rounded-full font-medium transition-all duration-300">
                Download CV <Download size={18} />
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right column — image with floating badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-70 sm:w-90 md:w-105 aspect-4/5 rounded-2xl overflow-hidden border border-[#2a3548]">
            <Image
              src="/image/heroimg.jpg"
              alt="Keshan Panditharathna"
              fill
              priority
              className="object-cover grayscale-[15%]"
            />
            {/* thin gradient wash instead of heavy shadow */}
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0e1a]/40 via-transparent to-transparent" />
          </div>

          {/* Floating badge — Design (gold) */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 -right-4 sm:right-0 md:-right-6 flex items-center gap-2 bg-[#0d1220] border border-[#D4AF37]/25 px-4 py-2.5 rounded-xl"
          >
            <Palette size={16} className="text-[#D4AF37]" />
            <span className="text-[#e8eaf0] font-mono text-xs tracking-wide">Design</span>
          </motion.div>

          {/* Floating badge — Code (steel-blue, secondary accent) */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-8 md:-left-10 flex items-center gap-2 bg-[#0d1220] border border-[#4a6fa5]/35 px-4 py-2.5 rounded-xl"
          >
            <Code2 size={16} className="text-[#7ea3d4]" />
            <span className="text-[#e8eaf0] font-mono text-xs tracking-wide">Code</span>
          </motion.div>

          {/* Floating badge — Ideas (gold) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-8 -right-2 sm:right-2 md:-right-4 flex items-center gap-2 bg-[#0d1220] border border-[#D4AF37]/25 px-4 py-2.5 rounded-xl"
          >
            <Lightbulb size={16} className="text-[#D4AF37]" />
            <span className="text-[#e8eaf0] font-mono text-xs tracking-wide">Ideas</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}