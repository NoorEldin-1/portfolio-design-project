import Contact from "./contactSection/Contact";
import Experience from "./experienceSection/Experience";
import Hero from "./heroSection/Hero";
import Navbar from "./navbar/Navbar";
import Projects from "./projectsSection/Projects";
import Skills from "./skillsSection/Skills";

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
