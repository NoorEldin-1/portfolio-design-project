import Contact from "./contactSection/components/Contact";
import Experience from "./experienceSection/components/Experience";
import Hero from "./heroSection/components/Hero";
import Navbar from "./navbar/components/Navbar";
import Projects from "./projectsSection/components/Projects";
import Skills from "./skillsSection/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
