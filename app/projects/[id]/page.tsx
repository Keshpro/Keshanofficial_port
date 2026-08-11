"use client";

import { allProjects } from "@/app/data/projectsData";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ProjectDetailsPage() {
  const params = useParams();
  const project = allProjects.find((p) => p.id === params.id);
  const [activeImage, setActiveImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">
        Project not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        <Link href="/projects" className="inline-flex items-center text-amber-500 hover:text-amber-400 mb-12 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Back to Catalog
        </Link>

        {/* Product Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Side: Images Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-4"
          >
            {/* Main Image */}
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#111] border border-white/5">
              <img 
                src={project.images[activeImage]} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2">
              {project.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${activeImage === idx ? 'border-amber-500' : 'border-transparent opacity-50 hover:opacity-100'}`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Product Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <span className="text-amber-500 font-semibold tracking-widest uppercase text-sm mb-2">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {project.title}
            </h1>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {project.longDescription}
            </p>

            {/* Tech Stack (Like Product Specifications) */}
            <div className="mb-10">
              <h3 className="text-white font-semibold mb-4 text-lg">Technologies Used:</h3>
              <div className="grid grid-cols-2 gap-3">
                {project.tech.map((tech, i) => (
                  <div key={i} className="flex items-center text-gray-300">
                    <Check size={16} className="text-amber-500 mr-2" />
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons (Like Add to Cart / Buy Now) */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <Link href={project.liveUrl} target="_blank" className="flex-1">
                <button className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-xl font-bold transition-all duration-300">
                  <ExternalLink size={20} /> Live Preview
                </button>
              </Link>
              <Link href={project.githubUrl} target="_blank" className="flex-1">
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
