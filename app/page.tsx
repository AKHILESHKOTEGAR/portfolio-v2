import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import LanguageSwitch from "./components/LanguageSwitch"; // 👈 Import it

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-blue-500/30">
      <LanguageSwitch /> {/* 👈 Add the button here */}
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Testimonials />
      <Contact />
    </main>
  );
}