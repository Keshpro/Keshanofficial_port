"use client";
import { GitBranch  } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/5 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-gray-500 text-sm">
          © {currentYear} Keshan Panditharathna. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <Link href="https://github.com/oyage-github" target="_blank" className="text-gray-500 hover:text-white transition-colors">
            <GitBranch size={20} />
          </Link>
        </div>

      </div>
    </footer>
  );
}