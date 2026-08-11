"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Founder & Lead Developer",
    company: "KreativeLabs",
    duration: "Feb 2026 - Present",
    description: "Operating a creative studio and agency developing custom full-stack web solutions and digital platforms. Managing digital branding, content creation, and media strategies for clients.",
    tech: ["Next.js", "React", "Node.js", "Tailwind CSS", "Figma"]
  },
  {
    id: 2,
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    duration: "Oct 2025 - Present",
    description: "Engineered multiple business solutions including an inventory management & POS system for a parts business, a luxury portfolio with a booking system for Urban Hair Studio, and an e-commerce platform for NWD Clothing.",
    tech: ["React.js", "Laravel", "Spring Boot", "Google Sheets API"]
  },
  {
    id: 3,
    role: "Digital Content Creator & Marketer",
    company: "Freelance",
    duration: "Jul 2025 - Jan 2026",
    description: "Engaged in affiliate marketing programs, generated high-resolution cinematic clips using AI video platforms (Veo, Whisk), and created craft transformation content for social media feeds.",
    tech: ["AI Video Tools", "Social Media Strategy", "Affiliate Marketing"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="text-amber-500" size={32} />
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Work <span className="text-amber-500">Experience.</span>
            </h2>
          </div>
          <div className="h-1 w-20 bg-amber-500 rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-white/10"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-[11px] w-5 h-5 rounded-full bg-amber-500 border-4 border-[#0a0a0a] z-10"></div>

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                }`}>
                  <div className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300 group">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 mb-4">
                      <span className="text-gray-300 font-medium">{exp.company}</span>
                      <span className="hidden sm:block text-gray-600">•</span>
                      <span className="flex items-center text-sm text-amber-500/80">
                        <Calendar size={14} className="mr-1" /> {exp.duration}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span key={i} className="text-xs font-medium px-3 py-1 bg-white/5 text-gray-400 rounded-full border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}