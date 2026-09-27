import { motion } from "framer-motion";
import { Section } from "./Section";

const skillGroups = [
  {
    category: "Backend",
    skills: ["Python", "Django", "FastAPI", "Flask", "Node.js"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Automation & AI",
    skills: ["n8n", "REST APIs", "AI/LLM APIs", "OCR", "Workflow Automation"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Linux", "Deployment", "Migration"],
  },
  {
    category: "ERP & Business Systems",
    skills: ["ERPNext", "Tally Prime Integration", "ERP Automation"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with."
      description="A focused stack for backend, automation, and cloud workflows."
    >
      {/* Glow aura right behind the skills */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_right,rgba(0,102,255,0.06)_0%,transparent_60%)] pointer-events-none -z-10" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        className="grid md:grid-cols-2 gap-8 relative z-10"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.category}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="glass rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(0,102,255,0.12)] transition-all duration-400"
          >
            <h3 className="font-semibold text-lg mb-4 text-foreground/90">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1.5 rounded-full bg-white/40 border border-white/50 text-foreground/70 hover:border-blue-400/40 hover:shadow-[0_0_12px_rgba(0,102,255,0.15)] transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Certification Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 glass rounded-2xl p-6 max-w-md mx-auto text-center"
      >
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[oklch(0.7_0.14_245)] to-[oklch(0.55_0.2_265)] mb-3 shadow-[0_6px_18px_rgba(59,130,246,0.35)]">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <h4 className="font-semibold text-lg mb-1">AWS Certified Cloud Practitioner</h4>
        <p className="text-sm text-muted-foreground">Amazon Web Services</p>
      </motion.div>

      {/* Currently Exploring Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 text-center"
      >
        <p className="text-sm font-semibold text-muted-foreground/70 mb-3">Currently Exploring</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {["AI Agents", "RAG", "LLM APIs", "Vector Databases", "Production AI Systems"].map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 text-blue-700/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
