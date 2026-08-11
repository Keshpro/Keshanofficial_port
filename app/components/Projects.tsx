"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import Link from "next/link";

// Oyage actual projects tika methana add karala thiyenawa template ekak widihata
const projectsData = [
  {
    title: "Inventory & POS System",
    description: "An inventory management and point-of-sale system for a parts business. Features automatic metric calculations linking a React frontend to Google Sheets data streams.",
    tech: ["React.js", "Google Sheets API", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Urban Hair Studio",
    description: "A luxury-style responsive portfolio and automated booking system demo website for a client, deployed live on Vercel.",
    tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "VANGUARED Marketplace",
    description: "A multi-vendor apparel and footwear digital marketplace with seller item uploads, Google authentication, and database order recording.",
    tech: ["React.js", "Node.js", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "NWD Clothing E-Commerce",
    description: "A React-based e-commerce web platform for a women's clothing shop. Includes a complete storefront interface and live hosting.",
    tech: ["React.js", "Node.js", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-amber-500">Work.</span>
          </h2>
          <div className="h-1 w-20 bg-amber-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-amber-500/50 transition-colors duration-300 group"
            >
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-medium px-3 py-1 bg-white/5 text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <Link href={project.githubUrl} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  <GitBranch size={22} />
                </Link>
                <Link href={project.liveUrl} target="_blank" className="text-gray-400 hover:text-amber-500 transition-colors">
                  <ExternalLink size={22} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}