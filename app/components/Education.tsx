"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

// Major Educational Qualifications
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
    duration: "2023",
    location: "Sri Lanka",
    description: "Built a strong foundation in programming, database management, and software development principles."
  },
  {
    id: 3,
    degree: "Diploma in Business Management (UK)",
    institution: "ESOFT Metro Campus",
    duration: "2023", 
    location: "Sri Lanka",
    description: "Gained core knowledge in business operations, management principles, and organizational behavior."
  },
  {
    id: 4,
    degree: "G.C.E. Advanced Level Examination",
    institution: "Secondary Education",
    duration: "2022",
    location: "Sri Lanka",
    description: "Completed secondary-level education, laying the groundwork for further studies in the technology field."
  }
];

// Online Courses, Certifications & Workshops
// Oyata Microsoft, Cisco wage ewa issarahata mekata add karanna puluwan
const certificationsData = [
  {
    id: 1,
    title: "Figma Workshop",
    issuer: "NSBM Green University",
    date: "2025" 
  },
  {
    id: 2,
    title: "IT Support Desk Fundamentals",
    issuer: "Cisco Networking Academy",
    date: "2026" 
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative bg-[#10182c]">
      <div className="max-w-4xl mx-auto">

        {/* Section Header */}
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

        {/* Major Education Timeline */}
        <div className="space-y-8 mb-20">
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

                <div className="flex flex-col gap-2 text-sm text-[#8b96ab] whitespace-nowrap">
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

        {/* Certifications & Workshops Sub-section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-[#D4AF37]" size={28} />
            <h3 className="text-2xl font-bold text-[#e8eaf0]">
              Certifications & Workshops
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#0d1424] border border-[#2a3548] p-5 rounded-xl hover:border-[#D4AF37]/40 transition-colors group"
              >
                <h4 className="text-[#e8eaf0] font-semibold text-lg mb-1 group-hover:text-[#D4AF37] transition-colors">
                  {cert.title}
                </h4>
                <p className="text-sm text-[#8b96ab] mb-3">
                  Offered by: <span className="text-[#a8b2c4]">{cert.issuer}</span>
                </p>
                <div className="flex items-center gap-2 text-xs text-[#7ea3d4] font-medium">
                  <Calendar size={14} /> {cert.date}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}