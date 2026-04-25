import { motion } from "framer-motion";
import { Section } from "./Section";
import { Magnetic } from "./Magnetic";

const skills = [
  "Python",
  "MongoDB",
  "MySQL",
  "AWS Cloud",
  "Deployment & Migration",
  "n8n Automation",
  "ERPNext Customization",
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I build with."
      description="A focused stack for backend, automation, and cloud workflows."
    >
      {/* Glow aura right behind the skills */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_right,rgba(0,102,255,0.06)_0%,transparent_60%)] pointer-events-none -z-10" />

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="flex flex-wrap gap-4 relative z-10"
      >
        {skills.map((s) => (
          <motion.div
            key={s}
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 15 },
              show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <Magnetic intensity={6} scale={1.05}>
              <li
                className="group glass-pill rounded-full px-5 py-2.5 text-sm font-medium text-foreground/80 cursor-default hover:shadow-[0_0_20px_rgba(0,102,255,0.2)] border border-transparent hover:border-blue-500/20 transition-all duration-300"
              >
                <span className="bg-gradient-to-r from-[oklch(0.45_0.15_255)] to-[oklch(0.5_0.18_265)] bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                  {s}
                </span>
              </li>
            </Magnetic>
          </motion.div>
        ))}
      </motion.ul>
    </Section>
  );
}
