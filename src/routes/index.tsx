import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { FloatingParticles } from "@/components/FloatingParticles";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Prasanth — Software Developer" },
      {
        name: "description",
        content:
          "Software Developer building automation systems and scalable backend solutions for real-world business workflows.",
      },
      { property: "og:title", content: "Prasanth — Software Developer" },
      {
        property: "og:description",
        content:
          "Backend, automation, and ERPNext customization. Building scalable solutions for real-world business workflows.",
      },
    ],
  }),
});

function Index() {
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
        <Projects />
        <Contact />
      </main>
    </>
  );
}
