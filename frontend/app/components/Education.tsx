"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "Software Engineering Academic Program",
    institution: "NSBM Green University",
    duration: "Mar 2026 - Present",
    location: "Homagama, Sri Lanka",
    description: "Currently pursuing higher studies in Software Engineering, focusing on modern software architecture, full-stack development, and scalable applications."
  },
  {
    id: 2,
    degree: "Higher Education / IT Program",
    institution: "Esoft Metro College",
    duration: "Completed 2025",
    location: "Matale, Sri Lanka",
    description: "Successfully completed academic requirements and graduated in June 2025. Built a strong foundation in programming, database management, and software development principles."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center md:items-start"
        >
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="text-amber-500" size={36} />
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Education <span className="text-amber-500">&</span> Background.
            </h2>
          </div>
          <div className="h-1 w-20 bg-amber-500 rounded-full mb-6"></div>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Decorative side accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/5 group-hover:bg-amber-500 transition-colors"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="text-lg text-gray-300 font-medium">
                    {edu.institution}
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-amber-500/80" /> {edu.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-amber-500/80" /> {edu.location}
                  </span>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}