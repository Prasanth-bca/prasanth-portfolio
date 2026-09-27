import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const experience = {
  company: "Altius Technologies",
  role: "Software Developer",
  location: "Coimbatore",
  period: "2024 – Present",
  highlights: [
    "Developed backend applications and business automation workflows using Python, FastAPI, and Django",
    "Built ERPNext customizations and integrations for business processes, improving operational efficiency",
    "Developed automated document-processing pipelines using n8n, OCR and AI for data extraction",
    "Worked with databases (MySQL, MongoDB, PostgreSQL), REST APIs, and Linux environments",
    "Deployed and maintained cloud applications on AWS infrastructure",
  ],
};

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked.">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glass rounded-3xl p-8 max-w-3xl mx-auto relative overflow-hidden"
      >
        {/* Decorative gradient */}
        <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br from-[oklch(0.7_0.15_240)] to-[oklch(0.55_0.2_265)] opacity-15 blur-3xl" />

        <div className="relative">
          <div className="flex items-start gap-4 mb-6">
            <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-[oklch(0.7_0.14_245)] to-[oklch(0.55_0.2_265)] flex items-center justify-center text-white shadow-[0_6px_18px_rgba(59,130,246,0.35)]">
              <Briefcase className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-2xl font-semibold tracking-tight mb-1">
                {experience.role}
              </h3>
              <p className="text-lg font-medium text-muted-foreground mb-1">
                {experience.company}
              </p>
              <p className="text-sm text-muted-foreground/70">
                {experience.location} · {experience.period}
              </p>
            </div>
          </div>

          <ul className="space-y-3 ml-16">
            {experience.highlights.map((highlight, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-3 text-muted-foreground leading-relaxed"
              >
                <span className="text-blue-500 mt-1.5 shrink-0">•</span>
                <span>{highlight}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Section>
  );
}
