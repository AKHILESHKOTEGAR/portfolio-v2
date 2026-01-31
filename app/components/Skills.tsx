"use client";

import { useLanguage } from "../context/LanguageContext";

// Define the skills with Name + Icon URL key
const skillsData = [
  { name: "Java", icon: "java" },
  { name: "Kotlin", icon: "kotlin" },
  { name: "Python", icon: "python" },
  { name: "AI/ML", icon: "tensorflow" }, 
  { name: "Next.js 16", icon: "nextjs" },
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "ts" },
  { name: "AWS", icon: "aws" },
  { name: "GCP", icon: "gcp" },
  { name: "Docker", icon: "docker" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "Git", icon: "git" },
  { name: "Linux", icon: "linux" },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="py-24 border-b border-white/5 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <h3 className="text-gray-500 text-sm font-mono uppercase tracking-widest mb-12 text-center">
          {t.skills.title}
        </h3>

        {/* The Badge Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {skillsData.map((skill, index) => (
            <div 
              key={index}
              className="group flex items-center gap-3 px-5 py-3 bg-[#111] border border-white/10 rounded-full hover:border-blue-500/50 hover:bg-white/5 transition-all cursor-default"
            >
              {/* Icon Image */}
              <img 
                src={`https://skillicons.dev/icons?i=${skill.icon}&theme=dark`} 
                alt={skill.name}
                className="w-6 h-6 group-hover:scale-110 transition-transform"
              />
              
              {/* Text Name */}
              <span className="text-gray-300 font-medium text-sm group-hover:text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}