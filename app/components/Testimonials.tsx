"use client";

import { Quote } from "lucide-react";
import { useLanguage } from "../context/LanguageContext"; 

export default function Testimonials() {
  const { t, language } = useLanguage(); 

  const content = {
    en: [
      {
        name: "Anshumali Jain", 
        role: "Founder @ Celebto Technologies",
        // Synthesized from LOR 1: Mentions "1.5 years", "RBAC", "Cloud", and "Right attitude"
        text: "During his 1.5-year internship, Akhilesh delivered high-quality software including RBAC and Cloud Automation. He has the right attitude and aptitude to learn and grow into a successful professional."
      },
      {
        name: "Dr. Lincy Meera Mathews", 
        role: "Professor @ Ramaiah Institute (MSRIT)",
        // Synthesized from LOR 2: Mentions "Hazegan", "Exceptional problem-solving", and "Diligent student"
        text: "Akhilesh showcased exceptional problem-solving skills on his 'Hazegan' AI project. He is a diligent student who combines complex theoretical knowledge with practical execution."
      }
    ],
    de: [
      {
        name: "Anshumali Jain",
        role: "Gründer @ Celebto Technologies",
        text: "Während seines 1,5-jährigen Praktikums lieferte Akhilesh hochwertige Software, einschließlich RBAC und Cloud-Automatisierung. Er hat die richtige Einstellung und Begabung, um sich zu einem erfolgreichen Profi zu entwickeln."
      },
      {
        name: "Dr. Lincy Meera Mathews",
        role: "Professor @ Ramaiah Institute (MSRIT)",
        text: "Akhilesh zeigte bei seinem 'Hazegan' KI-Projekt außergewöhnliche Problemlösungsfähigkeiten. Er ist ein fleißiger Student, der komplexe theoretische Kenntnisse mit praktischer Umsetzung verbindet."
      }
    ]
  };

  const testimonials = language === "en" ? content.en : content.de;

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-12 flex items-center gap-4">
          <div className="p-3 bg-blue-500/10 rounded-full">
            <Quote className="text-blue-400" size={24} />
          </div>
          <h2 className="text-3xl font-bold text-white">{t.testimonials.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="p-8 bg-[#111] border border-white/10 rounded-2xl relative">
              {/* Decorative Quote Mark */}
              <div className="absolute top-4 right-6 text-7xl text-white/5 font-serif">”</div>
              
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{item.name}</h4>
                  <p className="text-blue-400 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}