"use client";

import { motion } from "framer-motion";

const skills = [
  "React.js", "Next.js", "Tailwind CSS", 
  "Node.js", "Spring Boot", "PHP", "Laravel",
  "UI/UX Design", "Figma", "MySQL", "MongoDB"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-amber-500">Skills.</span>
          </h2>
          <div className="h-1 w-20 bg-amber-500 rounded-full"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-[#111] border border-white/10 px-6 py-3 rounded-full text-gray-300 font-medium hover:border-amber-500/50 hover:text-amber-500 transition-all cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}