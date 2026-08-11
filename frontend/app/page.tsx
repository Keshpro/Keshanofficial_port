import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Education from "@/app/components/Education";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import YoutubeSection from "@/app/components/YoutubeSection";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";
// Footer eka thiyenawanum ekath import karanna (e.g., import Footer from "@/app/components/Footer";)

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-200">
      <Hero />
      <About />
      <Skills />
      <Education /> 
      <Experience /> 
      <Projects />
      <YoutubeSection /> 
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}