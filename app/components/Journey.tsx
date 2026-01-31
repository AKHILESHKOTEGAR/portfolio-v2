"use client";

import { useLanguage } from "../context/LanguageContext";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Journey() {
  const { t } = useLanguage();

  const events = [
    {
      year: "Oct 2025 - Present",
      title: t.journey.edu1,
      location: t.journey.edu1loc,
      icon: <GraduationCap size={20} />,
      color: "bg-blue-500",
      description: "Focus on AI, High Performance Computing & Distributed Systems."
    },
    {
      year: "Mar 2025 - July 2025",
      title: t.journey.work2, 
      location: t.journey.work2loc,
      icon: <Briefcase size={20} />,
      color: "bg-purple-500",
      description: "Returned to lead a specific module migration to Cloud Architecture."
    },
    {
      year: "Nov 2022 - Apr 2024",
      title: t.journey.work2, 
      location: t.journey.work2loc,
      icon: <Briefcase size={20} />,
      color: "bg-purple-500",
      description: "Full-stack development (Next.js) and initial Google Cloud setup."
    },
    {
      year: "2021 - 2025",
      title: t.journey.edu2,
      location: t.journey.edu2loc,
      icon: <GraduationCap size={20} />,
      color: "bg-green-500",
      description: "Specialized in Data Science. GPA: 8.05/10."
    },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="text-3xl font-bold text-white mb-16 text-center">{t.journey.title}</h2>

        <div className="relative border-l border-white/10 ml-6 md:ml-12 space-y-12">
          {events.map((event, index) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              key={index} 
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-3 top-1 w-6 h-6 rounded-full border-4 border-[#050505] ${event.color}`} />
              
              {/* Content Card */}
              <div className="bg-[#111] border border-white/10 p-6 rounded-2xl hover:border-white/20 transition-colors">
                <span className="text-xs font-mono text-blue-400 mb-2 block">{event.year}</span>
                <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <MapPin size={14} />
                  {event.location}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}