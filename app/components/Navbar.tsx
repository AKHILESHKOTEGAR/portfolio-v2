"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Navbar() {
  const links = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex items-center gap-8 shadow-2xl">
        
        {/* LOGO */}
        <div className="hidden md:block font-bold text-lg tracking-tight text-white/90">
          Akhilesh<span className="text-blue-500">.dev</span>
        </div>

        {/* LINKS */}
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-400">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-white transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* SOCIALS - Fixed with rel="noopener noreferrer" */}
        <div className="h-4 w-[1px] bg-white/10 mx-2" />
        <div className="flex gap-4">
          <a 
            href="https://github.com/AKHILESHKOTEGAR"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>

      </div>
    </motion.nav>
  );
}