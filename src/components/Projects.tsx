import { motion } from "framer-motion";
import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";

import { Magnetic } from "./Magnetic";

const projects = [
  {
    title: "ERPNext Customization & Automation",
    description:
      "Customized ERP workflows and automated business processes using backend logic and integrations. Improved efficiency by reducing manual work and streamlining operations.",
    tech: ["Python", "ERPNext", "MySQL", "Automation"],
    accent: "from-[oklch(0.7_0.15_240)] to-[oklch(0.55_0.2_265)]",
  },
  {
    title: "n8n Workflow Automation",
    description:
      "Built automated workflows for email processing, data extraction, and system integration using n8n — connecting disparate systems into reliable pipelines.",
    tech: ["n8n", "APIs", "Automation", "MongoDB"],
    accent: "from-[oklch(0.78_0.12_220)] to-[oklch(0.6_0.18_250)]",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work."
      description="Backend systems and automation that move real business metrics."
    >
      {/* Subtle radial glow behind Projects section */}
      <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(100,150,255,0.05)_0%,transparent_60%)] pointer-events-none -z-10" />
      
      <div className="grid md:grid-cols-2 gap-6 relative z-10">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            // Slide-in with Depth: Translate Y + Scale
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full"
          >
            <Magnetic intensity={5} scale={1.02} className="block w-full h-full">
              <article
                data-cursor="card"
                className="group glass rounded-3xl p-7 relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,102,255,0.15)] border border-white/10 hover:border-blue-400/30 w-full h-full"
              >
                <div
                  className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl group-hover:opacity-60 transition-opacity duration-700`}
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <div className="h-9 w-9 shrink-0 rounded-xl glass-pill flex items-center justify-center text-foreground/70 group-hover:text-primary group-hover:shadow-[0_0_15px_rgba(0,102,255,0.4)] group-hover:rotate-12 transition-all duration-300">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-white/50 border border-white/60 text-foreground/70 group-hover:border-blue-300/40 transition-colors duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Magnetic>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
