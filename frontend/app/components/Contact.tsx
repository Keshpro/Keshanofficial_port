"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-amber-500">Touch.</span>
          </h2>
          <div className="h-1 w-20 bg-amber-500 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-lg mx-auto">
            Currently looking for internship opportunities. My inbox is always open whether you have a question or just want to say hi!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-gray-300"
          >
            <div className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-amber-500">
              <Phone size={20} />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">Call Me</p>
              <p className="font-medium">0771844491</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-gray-300"
          >
            <div className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-amber-500">
              <MapPin size={20} />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-medium">155 Kumbiyangoda, Matale</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-gray-300"
          >
            <div className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-amber-500">
              <Mail size={20} />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">Email</p>
              {/* Oyage email eka methanata danna */}
              <a href="mailto:hello@keshanpandi.me" className="font-medium hover:text-amber-500 transition-colors">
                hello@keshanpandi.me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}