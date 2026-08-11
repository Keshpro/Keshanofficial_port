"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

// Links tika update karala thiyenne aluth page ekata saha home eke sections walata yanna
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-[#0a0e1a]/70 backdrop-blur-md border-b border-[#2a3548]"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#e8eaf0] tracking-tighter">
          KESHAN<span className="text-[#D4AF37]">.</span>PANDITHARATHNA
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-[#8b96ab]">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-[#D4AF37] transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-[#8b96ab] hover:text-[#e8eaf0]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0a0e1a] border-b border-[#2a3548] absolute w-full"
        >
          <ul className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium text-[#8b96ab]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-[#D4AF37] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}