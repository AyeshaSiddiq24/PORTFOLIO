import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import SkillsCertifications from "./components/SkillsCertifications";


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <SkillsCertifications/>
      <Contact />
      <Footer />
    
    </>
  );
}
