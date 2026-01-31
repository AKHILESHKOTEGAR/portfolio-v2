"use client";

import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-1 bg-white/10 backdrop-blur-md border border-white/20 px-2 py-2 rounded-full shadow-2xl hover:scale-105 transition-transform"
    >
      <span 
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-full text-sm font-bold transition-colors cursor-pointer ${language === "en" ? "bg-white text-black" : "text-gray-400 hover:text-white"}`}
      >
        EN
      </span>
      <span 
        onClick={() => setLanguage("de")}
        className={`px-3 py-1 rounded-full text-sm font-bold transition-colors cursor-pointer ${language === "de" ? "bg-white text-black" : "text-gray-400 hover:text-white"}`}
      >
        DE
      </span>
    </motion.button>
  );
}