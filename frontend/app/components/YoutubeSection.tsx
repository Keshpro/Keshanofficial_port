"use client";

import { motion } from "framer-motion";
import { MonitorPlay, Play } from "lucide-react";
import Link from "next/link";

// Oyage actual YouTube/TikTok videos wala details methanata danna
const videoContent = [
  {
    title: "Cinematic Car Model Transformation",
    category: "Scale Model Modifications",
    thumbnail: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop", // Oyage thumbnail image link eka danna
    videoUrl: "#", 
  },
  {
    title: "Epoxy Resin & Woodworking Craft",
    category: "Craft Transformation",
    thumbnail: "https://images.unsplash.com/photo-1622322896504-20678dcb2f43?q=80&w=800&auto=format&fit=crop",
    videoUrl: "#",
  },
  {
    title: "High-Resolution AI Cinematic Motion",
    category: "Veo / Whisk AI Generations",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    videoUrl: "#",
  }
];

export default function YoutubeSection() {
  return (
    <section id="content" className="py-24 px-6 relative bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center md:items-start"
        >
          <div className="flex items-center gap-3 mb-4">
            <MonitorPlay className="text-red-500" size={40} />
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Digital <span className="text-amber-500">Content.</span>
            </h2>
          </div>
          <div className="h-1 w-20 bg-amber-500 rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl text-center md:text-left">
            A showcase of my media strategies, craft transformations, and high-end video generation projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoContent.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-[#111] border border-white/10 hover:border-amber-500/50 transition-all duration-500"
            >
              {/* Thumbnail Image */}
              <div className="aspect-video w-full overflow-hidden relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={video.videoUrl} target="_blank">
                    <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.5)] transform scale-90 group-hover:scale-100 transition-all duration-300">
                      <Play className="text-white ml-1" size={24} fill="currentColor" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <p className="text-amber-500 text-xs font-semibold tracking-wider uppercase mb-2">
                  {video.category}
                </p>
                <h3 className="text-white font-medium text-lg line-clamp-2 group-hover:text-amber-400 transition-colors">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}