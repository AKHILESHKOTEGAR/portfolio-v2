"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false);
  const email = "akhilkotegar@gmail.com"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        
        {/* Status Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold tracking-wider mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          AVAILABLE FOR NEW OPPORTUNITIES
        </motion.div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Ready to build something <br />
          <span className="text-gray-500">exceptional?</span>
        </h2>

        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          I am currently looking for <span className="text-white">Werkstudent</span> or <span className="text-white">Full-time</span> positions in Germany. 
          Whether you have a question about my thesis, a project idea, or just want to say hi, my inbox is always open.
        </p>

        {/* The Big Email Button */}
        <div className="flex flex-col items-center gap-6">
          <button 
            onClick={handleCopy}
            className="group relative px-8 py-4 bg-white text-black font-bold text-xl rounded-full flex items-center gap-3 hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
          >
            <Mail size={24} />
            <span>{isCopied ? "Email Copied!" : "akhilkotegar@gmail.com"}</span>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-200" />
          </button>
        </div>

        {/* Social Links Footer */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© 2026 Akhilesh Bhaskar Kotegar.</p>
          
          <div className="flex items-center gap-8">
            <a href="https://linkedin.com/in/akhilesh-kotegar" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a href="https://github.com/AKHILESHKOTEGAR" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
              GitHub <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}