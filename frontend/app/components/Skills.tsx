"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "UI/UX Design", "Figma"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Spring Boot", "PHP", "Laravel"],
  },
  {
    label: "Database",
    skills: ["MySQL", "MongoDB"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const groupVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0e1a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <p className="font-mono text-[#D4AF37] tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] inline-block" />
            What I work with
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#e8eaf0] mb-4">
            My <span className="text-[#D4AF37]">Skills.</span>
          </h2>
          <div className="h-1 w-20 bg-[#D4AF37] rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.label}
              variants={groupVariants}
              className="bg-[#0d1424] border border-[#2a3548] rounded-2xl p-6 md:p-8"
            >
              <h3 className="font-mono text-[#7ea3d4] uppercase tracking-wider text-xs mb-5">
                {category.label}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={pillVariants}
                    className="bg-[#0a0e1a] border border-[#2a3548] px-5 py-2.5 rounded-full text-[#e8eaf0] text-sm font-medium hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}