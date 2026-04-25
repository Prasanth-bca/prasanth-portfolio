import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Magnetic } from "./Magnetic";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: EASE } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-20"
    >
      {/* Subtle radial glow behind Hero content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,102,255,0.08)_0%,transparent_70%)] pointer-events-none -z-10" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 glass-pill rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8"
        >
          <Sparkles className="h-3.5 w-3.5 text-[oklch(0.6_0.18_255)]" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          variants={item}
          data-cursor="text"
          className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]"
        >
          Hi, I'm <span className="text-gradient">Prasanth</span>
          <br />
          <span className="text-foreground/90">Software Developer</span>
        </motion.h1>

        <motion.p
          variants={item}
          data-cursor="text"
          className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Building automation systems and scalable backend solutions for real-world business
          workflows.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Magnetic intensity={15} scale={1.05}>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-primary-foreground bg-gradient-to-br from-[oklch(0.62_0.18_250)] to-[oklch(0.5_0.2_265)] shadow-[0_10px_30px_rgba(59,130,246,0.25)] hover:shadow-[0_0_25px_rgba(0,102,255,0.4)] hover:-translate-y-0.5 transition-all duration-400 font-medium"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Magnetic>
          <Magnetic intensity={10} scale={1.03}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:bg-white/80 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-400 font-medium text-foreground hover:-translate-y-0.5"
            >
              Contact me
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
}
