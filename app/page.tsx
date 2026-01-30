import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact"; // <-- Import Contact

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact /> {/* <-- Added Contact Section */}
    </main>
  );
}