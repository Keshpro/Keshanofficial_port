import Hero from "@/app/components/Hero";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import YoutubeSection from "./components/YoutubeSection";
import Projects from "@/app/components/Projects";
import Experience from "./components/Experience";
import About from "./components/About"; 




export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-200">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <YoutubeSection />
      <Footer />
    </main>
  );
}