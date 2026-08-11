"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Laptop2, Braces, Palette, Video, ArrowUpRight, Download } from "lucide-react";

const highlights = [
  {
    icon: Laptop2,
    title: "Full-Stack Web",
    desc: "Building responsive, modern applications using React.js and Spring Boot.",
  },
  {
    icon: Braces,
    title: "Software Dev",
    desc: "Developing robust desktop and enterprise software with Java and Electron.js.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    desc: "Crafting unique brand identities, logos, and professional promotional materials.",
  },
  {
    icon: Video,
    title: "Photo & Video",
    desc: "Capturing compelling visual stories and producing professional brand videos.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, backgroundColor: "#0a0e1a" }}
      whileInView={{ opacity: 1, backgroundColor: "#10182c" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative py-24 px-6 bg-[#10182c]"
    >
      {/* subtle top divider glow so the section change reads clearly */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#2a3548] to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl md:text-4xl font-semibold text-[#e8eaf0] mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <p className="font-mono text-[#D4AF37] tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] inline-block" />
              Hello there
            </p>

            <h3 className="text-2xl md:text-4xl font-bold text-[#e8eaf0] leading-tight mb-5">
              Hi, I&apos;m Keshan Panditharathna — a calm-minded creative
              developer crafting serene digital journeys.
            </h3>

            <p className="text-[#8b96ab] text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              I specialize in UI/UX design, web development, and digital
              solutions that blend creativity with functionality. I love
              turning ideas into clean, intuitive, and enjoyable experiences
              for users.
            </p>

            <div className="flex items-center gap-6">
              <Link href="#projects">
                <button className="flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c4a02f] text-[#0a0e1a] px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300">
                  View My Work <ArrowUpRight size={16} />
                </button>
              </Link>
              <Link href="/resume.pdf" target="_blank">
                <button className="flex items-center gap-2 text-[#7ea3d4] hover:text-[#a3c2e8] font-medium text-sm transition-colors duration-300">
                  Download Resume <Download size={16} />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[320px] aspect-4/3 rounded-2xl overflow-hidden border border-[#2a3548]">
              <Image
                src="/images/about-photo.jpg"
                alt="Keshan Panditharathna"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {highlights.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="bg-[#0d1424] border border-[#2a3548] p-6 rounded-2xl hover:border-[#D4AF37]/30 transition-colors duration-300"
            >
              <Icon className="text-[#7ea3d4] mb-4" size={26} />
              <h4 className="text-[#e8eaf0] font-bold text-sm mb-2">{title}</h4>
              <p className="text-xs text-[#8b96ab] leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-[#8b96ab] italic text-lg"
        >
          &quot;Work Hard in Silent&quot;
        </motion.p>
      </div>
    </motion.section>
  );
}