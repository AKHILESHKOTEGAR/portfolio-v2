"use client";

import { GraduationCap, Briefcase, Languages, FileText, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext"; // 👈 Import Hook

export default function About() {
  const { t, language } = useLanguage(); 

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t.about.title}</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          
          {/* COLUMN 1: EXECUTIVE SUMMARY */}
          <div className="space-y-8 text-gray-400 leading-relaxed text-lg">
            <p className="text-xl text-white font-medium">
              {t.about.bio1}
            </p>
            
            <p>
              {t.about.bio2} {language === "en" 
                ? "I am focused on mastering distributed systems and software architecture. My goal is to build systems that are not just functional, but scalable and secure by design." 
                : "Ich konzentriere mich auf verteilte Systeme und Softwarearchitektur. Mein Ziel ist es, Systeme zu bauen, die nicht nur funktional, sondern auch skalierbar und sicher sind."}
            </p>
            
            <p>
               {language === "en" ? "My engineering foundation was built at" : "Mein technisches Fundament habe ich am"} <strong>Ramaiah Institute of Technology (8.05 GPA)</strong>, {language === "en" 
                 ? "where I honed my skills in Software Engineering, Data Structures (DSA), and System Architecture." 
                 : "wo ich meine Fähigkeiten in Software-Engineering, Datenstrukturen (DSA) und Systemarchitektur vertieft habe."}
            </p>

            {/* 👇 UPDATED SECTION: Work while studying */}
            <p>
               {language === "en" ? "In the industry, I worked at" : "In der Industrie arbeitete ich bei"} <strong>Celebto Technologies</strong> {language === "en" 
                 ? "for 1.5 years alongside my Bachelor's studies, shifting from frontend to backend cloud automation, followed by an intensive 6-month tenure in my final semester." 
                 : "für 1,5 Jahre parallel zu meinem Bachelorstudium (Wechsel von Frontend zu Backend-Cloud-Automation), gefolgt von weiteren 6 Monaten im letzten Semester."}
            </p>

            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg mt-8">
              <p className="text-sm text-blue-300 mb-2">
                <strong>{t.about.currentFocus}</strong>
              </p>
            </div>
          </div>

          {/* COLUMN 2: KEY METRICS */}
          <div className="grid gap-6 content-start">
            
            {/* CARD 1: ACADEMIC EXCELLENCE */}
            <div className="p-6 bg-[#111] border border-white/10 rounded-xl hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-blue-400" size={20} />
                <h3 className="text-white font-bold text-md">{t.about.academic}</h3>
              </div>
              <div className="space-y-4">
                
                {/* Masters */}
                <div>
                  <div className="flex justify-between">
                    <span className="text-white text-sm font-medium">M.Sc. Applied Computer Science</span>
                    <span className="text-xs text-gray-500">2025-Present</span>
                  </div>
                  <p className="text-xs text-gray-500">TH Deggendorf • {language === "en" ? "Focus on System Design" : "Schwerpunkt Systemdesign"}</p>
                </div>

                <div className="h-[px] bg-white/5" />

                {/* Bachelors */}
                <div>
                  <div className="flex justify-between">
                    <span className="text-white text-sm font-medium">B.E. Information Science</span>
                    <span className="text-xs text-gray-500">GPA: 8.05/10</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">Ramaiah Institute of Technology</p>
                  
                  {/* Thesis Link */}
                  <a 
                    href="/paper.pdf" 
                    target="_blank" 
                    className="group flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 transition-colors w-fit p-2 bg-blue-500/10 rounded-lg"
                  >
                    <FileText size={14} />
                    <span>{t.about.thesis}: Space Log Anomaly Detection</span>
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#111] border border-white/10 rounded-xl hover:border-white/20 transition-colors group">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-purple-400 group-hover:scale-110 transition-transform" size={20} />
                <h3 className="text-white font-bold text-md">{t.about.experience}</h3>
              </div>
              
              <p className="text-white text-sm font-medium">Celebto Technologies</p>
              <p className="text-xs text-gray-500 mb-4">{t.about.intern} • 1.5 Years</p>
              
              <ul className="list-disc list-inside text-xs text-gray-400 space-y-2 leading-relaxed">
                {/* Point 1: Security & Cloud Impact */}
                <li>
                  {language === "en" 
                    ? "Architected secure GCP environments using RBAC, ensuring data integrity for enterprise clients." 
                    : "Architektierte sichere GCP-Umgebungen mittels RBAC, um die Datenintegrität für Unternehmenskunden zu gewährleisten."}
                </li>
                
                {/* Point 2: DevOps Impact */}
                <li>
                  {language === "en" 
                    ? "Revolutionized deployment workflows with Docker & CI/CD, cutting manual errors by ~40%." 
                    : "Revolutionierte Deployment-Workflows mit Docker & CI/CD und reduzierte manuelle Fehler um ~40%."}
                </li>

                {/* Point 3: Product Passion (New!) */}
                <li>
                  {language === "en" 
                    ? "Bridged design and code by translating complex Figma UIs into responsive, high-performance applications." 
                    : "Verband Design und Code durch die Übersetzung komplexer Figma-UIs in responsive, leistungsstarke Anwendungen."}
                </li>
              </ul>
            </div>

            {/* CARD 3: LANGUAGES */}
            <div className="p-6 bg-[#111] border border-white/10 rounded-xl hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Languages className="text-green-400" size={20} />
                <h3 className="text-white font-bold text-md">{t.about.languages}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">English</p>
                  <p className="text-white font-medium">Professional (C1)</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">German</p>
                  <p className="text-white font-medium">Basic (A1)</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}