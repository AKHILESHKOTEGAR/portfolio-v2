"use client";

import { GraduationCap, Briefcase, Languages, FileText, ExternalLink } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      {/* FIXED WIDTH HERE: Changed max-w-5xl to max-w-6xl to match Projects section */}
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Professional Profile</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          
          {/* COLUMN 1: EXECUTIVE SUMMARY */}
          <div className="space-y-8 text-gray-400 leading-relaxed text-lg">
            <p className="text-xl text-white font-medium">
              I am a Software Engineer bridging the gap between <span className="text-blue-400">theoretical research</span> and <span className="text-purple-400">production engineering</span>.
            </p>
            
            <p>
              Currently pursuing my <strong>M.Sc. in Applied Computer Science</strong> at TH Deggendorf, I am focused on mastering distributed systems and software architecture. My goal is to build systems that are not just functional, but scalable and secure by design.
            </p>
            
            <p>
              My engineering foundation was built at <strong>Ramaiah Institute of Technology (8.05 GPA)</strong>, where I specialized in Data Science. My thesis on <em>"Anomaly Detection in Space Logs using Self-Supervised Learning"</em> demonstrated my ability to handle complex, unstructured datasets and apply state-of-the-art AI solutions to critical infrastructure.
            </p>

            <p>
              In the industry, I spent 1.5 years at <strong>Celebto Technologies</strong> shifting from frontend development to backend cloud automation. I successfully implemented RBAC security models and optimized CI/CD pipelines, directly contributing to the company's operational efficiency.
            </p>

            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg mt-8">
              <p className="text-sm text-blue-300">
                <strong>Current Focus:</strong> Seeking a Werkstudent or Full-time position in Germany where I can apply my expertise in Next.js, Cloud Computing, and AI.
              </p>
            </div>
          </div>

          {/* COLUMN 2: KEY METRICS */}
          <div className="grid gap-6 content-start">
            
            {/* CARD 1: ACADEMIC EXCELLENCE */}
            <div className="p-6 bg-[#111] border border-white/10 rounded-xl hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-blue-400" size={20} />
                <h3 className="text-white font-bold text-md">Academic Excellence</h3>
              </div>
              <div className="space-y-4">
                
                {/* Masters */}
                <div>
                  <div className="flex justify-between">
                    <span className="text-white text-sm font-medium">M.Sc. Applied Computer Science</span>
                    <span className="text-xs text-gray-500">2025-Present</span>
                  </div>
                  <p className="text-xs text-gray-500">TH Deggendorf • Focus on System Design</p>
                </div>

                <div className="h-[1px] bg-white/5" />

                {/* Bachelors */}
                <div>
                  <div className="flex justify-between">
                    <span className="text-white text-sm font-medium">B.E. Information Science</span>
                    <span className="text-xs text-gray-500">GPA: 8.05/10</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">Ramaiah Institute of Technology</p>
                  
                  {/* Thesis Link */}
                  <a 
                    href="/thesis.pdf" 
                    target="_blank" 
                    className="group flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 transition-colors w-fit p-2 bg-blue-500/10 rounded-lg"
                  >
                    <FileText size={14} />
                    <span>Thesis: Space Log Anomaly Detection</span>
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 2: EXPERIENCE */}
            <div className="p-6 bg-[#111] border border-white/10 rounded-xl hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-purple-400" size={20} />
                <h3 className="text-white font-bold text-md">Industry Experience</h3>
              </div>
              <p className="text-white text-sm font-medium">Celebto Technologies</p>
              <p className="text-xs text-gray-500 mb-2">Software Engineer Intern • 1.5 Years</p>
              <ul className="list-disc list-inside text-xs text-gray-400 space-y-1">
                <li>Engineered GCP Cloud Automation & RBAC Security.</li>
                <li>Reduced deployment errors via Docker & CI/CD.</li>
                <li>Collaborated in Agile/Scrum teams.</li>
              </ul>
            </div>

            {/* CARD 3: LANGUAGES */}
            <div className="p-6 bg-[#111] border border-white/10 rounded-xl hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Languages className="text-green-400" size={20} />
                <h3 className="text-white font-bold text-md">Communication</h3>
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