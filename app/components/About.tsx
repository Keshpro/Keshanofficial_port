"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Laptop2, Palette, Video, Braces, ArrowUpRight, Download } from "lucide-react";

const highlights = [
  {
    icon: Laptop2,
    title: "Full-Stack Web",
    desc: "Building responsive, modern applications using React.js, Node.js, Spring Boot, and Laravel.",
  },
  {
    icon: Palette,
    title: "UI/UX & Branding",
    desc: "Designing high-end minimalist interfaces, corporate identities, and engaging digital layouts.",
  },
  {
    icon: Video,
    title: "Media & AI Content",
    desc: "Leveraging AI tools for cinematic video generation and managing digital content strategies.",
  },
  {
    icon: Braces,
    title: "Business Solutions",
    desc: "Developing custom E-commerce platforms, POS systems, and automated management dashboards.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 bg-[#10182c]">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >

            <h3 className="text-2xl md:text-4xl font-bold text-[#e8eaf0] leading-tight mb-5">
              I&apos;m Keshan Panditharathna <br></br> A Software Engineer & Problem Solver.
            </h3>

            <p className="text-[#8b96ab] text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              I build full-stack web applications with a strong focus on clean code, responsive interfaces, and practical problem-solving. I enjoy turning ideas into reliable, user-friendly digital solutions.
            </p>

            <div className="flex items-center gap-6">
              <Link href="#projects">
                <button className="flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c4a02f] text-[#0a0e1a] px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300">
                  View My Work <ArrowUpRight size={16} />
                </button>
              </Link>
              <Link href="/image/keshan_panditharathna.pdf" target="_blank">
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
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[320px] aspect-4/3 rounded-2xl overflow-hidden border border-[#2a3548]">
              <Image
                src="/image/heroimg.jpg"
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
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-[#8b96ab] italic text-lg"
        >
          &quot;Work Hard in Silence&quot;
        </motion.p>
      </div>
    </section>
  );
}