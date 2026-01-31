"use client";

import { motion } from "framer-motion";
import { Mail, Download, Check, BrainCircuit } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext"; 

export default function Hero() {
  const { t, language } = useLanguage(); 
  const [isCopied, setIsCopied] = useState(false);
  const email = "akhilkotegar@gmail.com"; 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            {t.hero.status} 
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Akhilesh Bhaskar <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Kotegar.
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
            {t.hero.role} at <span className="text-white">TH Deggendorf</span>. 
            {t.hero.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={handleCopyEmail}
              className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <span className="w-5 flex items-center justify-center">
                {isCopied ? <Check size={18} className="text-green-600"/> : <Mail size={18} />}
              </span>
              <span>
                {isCopied ? t.hero.emailCopied : t.hero.contactBtn}
              </span>
            </button>

            <a 
              href="/resume.pdf"  
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Download size={18} />
              {t.hero.resumeBtn} 
            </a>
          </div>
        </motion.div>

        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 relative"
        >
          <div className="bg-[#0f0f0f] border border-white/10 rounded-xl overflow-hidden shadow-2xl relative z-10">
            <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-gray-500 font-mono">Orbit_AI_Logic.ts</span>
            </div>

            <div className="p-6 font-mono text-sm leading-relaxed text-gray-300">
              <div className="flex gap-4 mb-4 text-xs text-gray-500 border-b border-white/5 pb-2">
                <span>Model: <span className="text-purple-400">Gemini Pro</span></span>
                <span>Status: <span className="text-green-400">Active</span></span>
              </div>
              
              <p><span className="text-purple-400">async function</span> <span className="text-yellow-400">generateTask</span>(input) {"{"}</p>
              
              <p className="pl-4 text-gray-500">
                // {language === "de" ? "Workflow Automatisierung via LLM" : "Automating workflow via LLM"}
              </p>

              <p className="pl-4">
                <span className="text-blue-400">const</span> analysis = <span className="text-purple-400">await</span> ai.analyze(input);
              </p>
              <p className="pl-4">
                <span className="text-blue-400">if</span> (analysis.confidence &gt; <span className="text-green-400">0.9</span>) {"{"}
              </p>
              <p className="pl-8">
                db.tasks.create(analysis.payload);
              </p>
              <p className="pl-4">{"}"}</p>
              <p className="pl-4 text-blue-400">return <span className="text-white">analysis;</span></p>
              <p>{"}"}</p>
            </div>
          </div>
          
          <div className="absolute -top-6 -right-6 p-4 bg-[#111] border border-white/10 rounded-xl text-purple-400 hidden md:block animate-bounce delay-700">
            <BrainCircuit size={24} />
          </div>

        </motion.div>
      </div>
    </section>
  );
}