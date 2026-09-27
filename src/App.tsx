import { AnimatedBackground } from "./components/AnimatedBackground";
import { FloatingParticles } from "./components/FloatingParticles";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

export default function App() {
  useSmoothScroll();

  return (
    <>
      <AnimatedBackground />
      <FloatingParticles />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
