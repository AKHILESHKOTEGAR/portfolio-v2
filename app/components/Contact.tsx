"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight, Phone, Check } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext"; 

export default function Contact() {
  const { t } = useLanguage(); // 👈 Get Translations
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  const email = "akhilkotegar@gmail.com"; 
  const phone = "+49 15565794606";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        
        {/* Status Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold tracking-wider mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          {t.contact.status}
        </motion.div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          {t.contact.heading}
        </h2>

        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          {t.contact.text}
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          
          {/* Email Button */}
          <button 
            onClick={handleCopyEmail}
            className="group relative w-full md:w-auto px-8 py-4 bg-white text-black font-bold text-lg rounded-full flex items-center justify-center gap-3 hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
          >
            {copiedEmail ? <Check size={20} className="text-green-600"/> : <Mail size={20} />}
            <span>{copiedEmail ? t.hero.emailCopied : email}</span>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-200" />
          </button>

          {/* Phone Button */}
          <button 
            onClick={handleCopyPhone}
            className="group relative w-full md:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-medium text-lg rounded-full flex items-center justify-center gap-3 hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
          >
            {copiedPhone ? <Check size={20} className="text-green-400"/> : <Phone size={20} />}
            <span>{copiedPhone ? "Copied!" : phone}</span>
          </button>
          
        </div>

        {/* Social Links Footer */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <p>{t.contact.footer}</p>
            
            <span className="hidden md:block text-gray-700">•</span>
            
            {/* Link to Impressum */}
            <a href="/impressum" className="hover:text-white transition-colors">
              {t.contact.impressum}
            </a>
            
            <span className="hidden md:block text-gray-700">•</span>
            
            {/* 👇 NEW: Link to Privacy Policy */}
            <a href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </a>
          </div>
          
          <div className="flex items-center gap-8">
            <a 
              href="https://www.linkedin.com/in/akhilesh-kotegar-489890249/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a 
              href="https://github.com/AKHILESHKOTEGAR" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              GitHub <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}