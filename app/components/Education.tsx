"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "BSc (Honours) in Software Engineering",
    institution: "NSBM Green University",
    duration: "Expected 2029",
    location: "Homagama, Sri Lanka",
    description: "Currently pursuing a Bachelor's degree in Software Engineering, focusing on modern software architecture, full-stack development, and scalable applications."
  },
  {
    id: 2,
    degree: "Diploma in Information Technology (UK)",
    institution: "ESOFT Metro Campus",
    duration: "2024",
    location: "Sri Lanka",
    description: "Built a strong foundation in programming, database management, and software development principles."
  },
  {
    id: 3,
    degree: "G.C.E. Advanced Level Examination",
    institution: "Secondary Education",
    duration: "2022",
    location: "Sri Lanka",
    description: "Completed secondary-level education, laying the groundwork for further studies in the technology field."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative bg-[#0a0e1a]">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center md:items-start"
        >
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="text-[#D4AF37]" size={36} />
            <h2 className="text-3xl md:text-5xl font-bold text-[#e8eaf0]">
              Education <span className="text-[#D4AF37]">&</span> Background.
            </h2>
          </div>
          <div className="h-1 w-20 bg-[#D4AF37] rounded-full mb-6"></div>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0d1424] border border-[#2a3548] rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Decorative side accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2a3548] group-hover:bg-[#D4AF37] transition-colors"></div>

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#e8eaf0] mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="text-lg text-[#a8b2c4] font-medium">
                    {edu.institution}
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-sm text-[#8b96ab]">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#7ea3d4]" /> {edu.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#7ea3d4]" /> {edu.location}
                  </span>
                </div>
              </div>

              <p className="text-[#8b96ab] leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}