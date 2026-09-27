import { motion } from "framer-motion";
import { Section } from "./Section";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Magnetic } from "./Magnetic";

const projects = [
  {
    title: "SmartOps AI",
    subtitle: "Intelligent Business & ERP Automation",
    description:
      "AI-powered business automation platform for processing documents, extracting structured data, matching customers and items, and integrating workflows with ERPNext. Built with FastAPI, PostgreSQL with pgvector for semantic search, and AI/OCR services.",
    tech: ["Python", "FastAPI", "PostgreSQL", "pgvector", "ERPNext", "AI", "OCR"],
    architecture: [
      "Email / WhatsApp / Upload",
      "Document Agent",
      "OCR + Extraction",
      "Validation & Matching",
      "Human Confirmation",
      "ERPNext",
    ],
    accent: "from-[oklch(0.7_0.15_240)] to-[oklch(0.55_0.2_265)]",
    github: "#",
  },
  {
    title: "ERP Document Automation",
    subtitle: "Automated Email Processing Pipeline",
    description:
      "Automated incoming business documents from Gmail using OCR and AI classification, then extracted structured data and stored it in MongoDB for ERP processing. Reduced manual data entry by 80% and improved processing speed.",
    tech: ["n8n", "Gmail API", "OCR", "AI Classification", "MongoDB", "Tally"],
    architecture: [
      "Gmail",
      "Attachment Extraction",
      "OCR",
      "AI Classification",
      "Structured JSON",
      "Duplicate Detection",
      "MongoDB",
      "ERP / Tally",
    ],
    accent: "from-[oklch(0.78_0.12_220)] to-[oklch(0.6_0.18_250)]",
    github: "#",
  },
  {
    title: "ERPNext Customization Suite",
    subtitle: "Custom Workflows & Backend Services",
    description:
      "Built custom ERPNext modules for inventory management, automated purchase workflows, and vendor integration. Developed backend services to handle complex business rules and third-party API integrations.",
    tech: ["Python", "ERPNext", "MySQL", "REST APIs", "Automation"],
    accent: "from-[oklch(0.75_0.14_200)] to-[oklch(0.58_0.19_230)]",
    github: "#",
  },
  {
    title: "Cloud Infrastructure Deploy",
    subtitle: "AWS Production Environment",
    description:
      "Designed and deployed scalable production infrastructure on AWS for business applications. Implemented CI/CD pipelines, database migrations, monitoring, and automated backups. Managed EC2, RDS, S3, and CloudWatch services.",
    tech: ["AWS", "Docker", "Linux", "CI/CD", "PostgreSQL", "Monitoring"],
    accent: "from-[oklch(0.72_0.13_180)] to-[oklch(0.56_0.18_210)]",
    github: "#",
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
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full"
          >
            <Magnetic intensity={5} scale={1.02} className="block w-full h-full">
              <article
                data-cursor="card"
                className="group glass rounded-3xl p-7 relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,102,255,0.15)] border border-white/10 hover:border-blue-400/30 w-full h-full flex flex-col"
              >
                <div
                  className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl group-hover:opacity-60 transition-opacity duration-700`}
                />

                <div className="relative flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-1">
                        {p.title}
                      </h3>
                      <p className="text-sm text-muted-foreground/70 font-medium">{p.subtitle}</p>
                    </div>
                    <div className="flex gap-2">
                      {p.github && (
                        <a
                          href={p.github}
                          className="h-9 w-9 shrink-0 rounded-xl glass-pill flex items-center justify-center text-foreground/70 hover:text-primary hover:shadow-[0_0_15px_rgba(0,102,255,0.4)] transition-all duration-300"
                          aria-label="View on GitHub"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4 flex-1">{p.description}</p>

                  {/* Architecture Flow */}
                  {p.architecture && (
                    <div className="mb-5 p-4 rounded-xl bg-white/20 border border-white/30">
                      <p className="text-xs font-semibold text-muted-foreground/70 mb-2">Architecture</p>
                      <div className="flex flex-col gap-1 text-xs font-mono text-foreground/70">
                        {p.architecture.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            {idx > 0 && <span className="text-blue-500">↓</span>}
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

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
