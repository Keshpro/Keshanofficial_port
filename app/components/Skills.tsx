"use client";

import { motion } from "framer-motion";

const rowOne = ["React.js", "Next.js", "Tailwind CSS", "Figma", "UI/UX Design"];
const rowTwo = ["Node.js", "Spring Boot", "Laravel", "PHP", "MySQL", "MongoDB"];

const skillCategories = [
  {
    label: "Frontend",
    desc: "Interfaces that feel fast and intentional.",
    skills: ["React.js", "Next.js", "Tailwind CSS"],
    span: "lg:col-span-2",
  },
  {
    label: "Backend",
    desc: "APIs and services that hold under load.",
    skills: ["Node.js", "Spring Boot", "Laravel", "PHP"],
    span: "lg:col-span-1",
  },
  {
    label: "Database",
    desc: "Structuring and querying data reliably.",
    skills: ["MySQL", "MongoDB"],
    span: "lg:col-span-1",
  },
  {
    label: "Design",
    desc: "Wireframe to pixel-perfect, end to end.",
    skills: ["Figma", "UI/UX Design"],
    span: "lg:col-span-2",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-[#10182c] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <p className="font-mono text-[#D4AF37] tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] inline-block" />
            What I work with
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#e8eaf0]">
            My <span className="text-[#D4AF37]">Skills.</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee rows — full bleed, edge-fade masked */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4 mb-20"
      >
        <div
          className="overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max gap-4 animate-marquee-left hover:[animation-play-state:paused]">
            {[...rowOne, ...rowOne, ...rowOne].map((skill, i) => (
              <span
                key={`r1-${i}`}
                className="shrink-0 bg-[#0d1424] border border-[#2a3548] px-6 py-3 rounded-full text-[#e8eaf0] text-sm font-medium hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div
          className="overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max gap-4 animate-marquee-right hover:[animation-play-state:paused]">
            {[...rowTwo, ...rowTwo, ...rowTwo].map((skill, i) => (
              <span
                key={`r2-${i}`}
                className="shrink-0 bg-[#0d1424] border border-[#2a3548] px-6 py-3 rounded-full text-[#e8eaf0] text-sm font-medium hover:border-[#7ea3d4]/50 hover:text-[#7ea3d4] transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bento grid — category depth */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className={`${cat.span} relative bg-[#0d1424] border border-[#2a3548] rounded-2xl p-7 overflow-hidden group hover:border-[#D4AF37]/30 transition-colors duration-300`}
            >
              {/* corner glow, appears on hover */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/6 rounded-full blur-2xl transition-all duration-500" />

              <div className="relative flex items-start justify-between mb-4">
                <h3 className="font-mono text-[#7ea3d4] uppercase tracking-wider text-xs">
                  {cat.label}
                </h3>
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              </div>

              <p className="relative text-[#8b96ab] text-sm mb-6 leading-relaxed">
                {cat.desc}
              </p>

              <div className="relative flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono text-[#e8eaf0]/80 bg-[#0a0e1a] border border-[#2a3548] px-3 py-1.5 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-33.333%); }
          to { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 28s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 32s linear infinite;
        }
      `}</style>
    </section>
  );
}