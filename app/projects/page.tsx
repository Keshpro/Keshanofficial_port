"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Search } from "lucide-react";
import Link from "next/link";
import { allProjects } from "@/app/data/projectsData";
import { useState } from "react";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...Array.from(new Set(allProjects.map((p) => p.category)))];

  // Search ekai, Category filter ekai dekama wada karana widihata logic eka
  const filteredProjects = allProjects.filter((p) => {
    const matchesCategory = filter === "All" || p.category === filter;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-amber-500 hover:text-amber-400 mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to Home
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Digital <span className="text-amber-500">Storefront.</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Browse through my projects like products. Search by name or technology.
          </p>
        </div>

        {/* Search Bar & Filters */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12"
        >
          {/* Categories */}
          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? "bg-amber-500 text-black" 
                    : "bg-[#111] text-gray-400 border border-white/10 hover:border-amber-500/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111] border border-white/10 rounded-full py-3 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
            />
          </div>
        </motion.div>

        {/* E-commerce Style Project Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 group cursor-pointer flex flex-col h-full"
              >
                {/* Product Image Cover */}
                <div className="h-48 w-full overflow-hidden bg-[#1a1a1a]">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-amber-500 text-xs font-semibold tracking-wider uppercase mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-6">
                    {project.description}
                  </p>
                  
                  {/* View Details Button (E-commerce feel) */}
                  <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-300">View Details</span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-colors">
                      <ArrowLeft size={16} className="rotate-135 transform rotate-180" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
          
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500">
              No projects found matching your search.
            </div>
          )}
        </motion.div>

      </div>
    </div>
  );
}