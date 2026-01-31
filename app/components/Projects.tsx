"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ScanFace, Smartphone, BrainCircuit } from "lucide-react";
import { useLanguage } from "../context/LanguageContext"; // 👈 Import Hook

export default function Projects() {
  const { t, language } = useLanguage(); // 👈 Get Translations

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t.projects.title}</h2>
          <p className="text-gray-400 max-w-2xl text-lg">
             {t.projects.subtitle}
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* PROJECT 1: ORBIT (Main Feature) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 relative p-8 bg-[#111] border border-white/10 rounded-3xl overflow-hidden group min-h-[400px]"
          >
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="text-white" />
            </div>
            
            <div className="h-full flex flex-col justify-between relative z-10">
              <div className="p-3 bg-purple-500/10 w-fit rounded-xl mb-4">
                <BrainCircuit className="text-purple-400" size={28} />
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Orbit - AI Workspace</h3>
                <p className="text-gray-400 mb-6 max-w-lg">
                  {language === "en" 
                    ? "A multi-tenant SaaS CRM that uses Google Gemini AI to automate email drafting and task management. Reduced administrative workload by 40%."
                    : "Ein Multi-Tenant SaaS CRM, das Google Gemini AI nutzt, um E-Mail-Entwürfe und Aufgabenverwaltung zu automatisieren. Reduzierte den administrativen Aufwand um 40%."}
                </p>
                <div className="flex flex-wrap gap-3 text-xs font-mono text-gray-500 uppercase">
                  <span>Next.js 16</span> • <span>TypeScript</span> • <span>Prisma</span> • <span>Gemini AI</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px]" />
          </motion.div>


          {/* PROJECT 2: DOG BREED ID (AI/ML) */}
          <motion.div 
             whileHover={{ y: -5 }}
             className="md:col-span-1 relative p-8 bg-[#111] border border-white/10 rounded-3xl overflow-hidden group min-h-[400px]"
          >
             <div className="h-full flex flex-col justify-between relative z-10">
              <div className="p-3 bg-blue-500/10 w-fit rounded-xl mb-4">
                <ScanFace className="text-blue-400" size={28} />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Breed Vision AI</h3>
                <p className="text-gray-400 mb-6 text-sm">
                  {language === "en"
                    ? "Computer vision model classifying 120+ dog breeds with 85% accuracy. Optimized using Transfer Learning."
                    : "Computer-Vision-Modell zur Klassifizierung von 120+ Hunderassen mit 85% Genauigkeit. Optimiert durch Transfer Learning."}
                </p>
                 <div className="flex flex-wrap gap-3 text-xs font-mono text-gray-500 uppercase">
                  <span>Python</span> • <span>TensorFlow</span> • <span>Keras</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* PROJECT 3: WINE STORE APP (Cloud/Mobile) */}
          <motion.div 
             whileHover={{ y: -5 }}
             className="md:col-span-3 relative p-8 bg-[#111] border border-white/10 rounded-3xl overflow-hidden group flex flex-col md:flex-row items-center gap-8"
          >
             <div className="flex-1">
                <div className="p-3 bg-green-500/10 w-fit rounded-xl mb-4">
                  <Smartphone className="text-green-400" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Serverless Inventory App</h3>
                <p className="text-gray-400 mb-6">
                  {language === "en"
                    ? "Mobile app for real-time stock management. Optimized backend performance by 90% using AWS Lambda caching and MongoDB indexing."
                    : "Mobile App für Echtzeit-Lagerverwaltung. Backend-Performance um 90% optimiert durch AWS Lambda Caching und MongoDB Indexierung."}
                </p>
                <div className="flex flex-wrap gap-3 text-xs font-mono text-gray-500 uppercase">
                  <span>Flutter</span> • <span>AWS Lambda</span> • <span>MongoDB</span> • <span>Serverless</span>
                </div>
             </div>
             
             <a 
               href="https://github.com/AKHILESHKOTEGAR" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="px-6 py-3 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors"
             >
               <Github size={18} />
               {t.projects.viewCode}
             </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}