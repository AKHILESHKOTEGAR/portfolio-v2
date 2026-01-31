"use client";

import { useLanguage } from "../context/LanguageContext"; 

const skills = [
  "Next.js 16", "React", "TypeScript", "Python", "TensorFlow", 
  "Google Gemini", "AWS Lambda", "PostgreSQL", "Prisma", 
  "Docker", "Google Cloud (GCP)", "Tailwind CSS", "Git"
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="py-20 overflow-hidden border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        {/* 👇 TRANSLATED TITLE */}
        <h3 className="text-gray-500 text-sm font-mono uppercase tracking-widest">
          {t.skills.title}
        </h3>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap gap-8">
          {[...skills, ...skills].map((skill, index) => (
            <div 
              key={index}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-gray-300 font-medium hover:bg-white/10 hover:text-white transition-colors cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}