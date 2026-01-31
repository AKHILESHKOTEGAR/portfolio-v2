"use client";

import { useEffect, useState } from "react";
// 👇 FIX 1: Use curly braces { } for Named Import
import { GitHubCalendar } from "react-github-calendar"; 
import { useLanguage } from "../context/LanguageContext";

export default function GithubStats() {
  const { t, language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // 👇 FIX 2: Prevent Hydration Mismatch (Client-side only render)
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-24 px-6 bg-[#050505] flex justify-center border-t border-white/5">
      <div className="max-w-4xl w-full">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            {language === "en" ? "Code Activity" : "Code-Aktivität"}
          </h2>
          <p className="text-gray-400">
            {language === "en" 
              ? "My contributions to open source and private projects on GitHub." 
              : "Meine Beiträge zu Open Source und privaten Projekten auf GitHub."}
          </p>
        </div>

        <div className="flex justify-center p-8 bg-[#111] border border-white/10 rounded-2xl hover:border-white/20 transition-colors min-h-[200px] items-center">
          {mounted ? (
            <GitHubCalendar 
              username="AKHILESHKOTEGAR" 
              colorScheme="dark"
              fontSize={12}
              blockSize={12}
              blockMargin={5}
              theme={{
                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
              }}
            />
          ) : (
            <div className="text-gray-500 text-sm animate-pulse">Loading GitHub Stats...</div>
          )}
        </div>
        
      </div>
    </section>
  );
}