import { motion } from "framer-motion";
import { Section } from "./Section";
import { Workflow, Cloud, Database } from "lucide-react";

const highlights = [
  { icon: Workflow, title: "Automation Engineering", desc: "Designing automated workflows that connect email, APIs, databases, ERP systems and AI services." },
  { icon: Database, title: "ERP & Business Systems", desc: "Building and customizing ERPNext workflows, integrations and backend services around real business requirements." },
  { icon: Cloud, title: "Cloud & Deployment", desc: "Deploying and maintaining applications using AWS, Docker, Linux and production infrastructure." },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Backend craft, automation mindset.">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_left,rgba(0,102,255,0.05)_0%,transparent_60%)] pointer-events-none -z-10" />

      <div className="grid md:grid-cols-5 gap-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-3 space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground"
        >
          <p>
            I'm a Software Developer focused on backend development, automation and business systems.
          </p>
          <p>
            I enjoy building systems that connect applications, APIs, databases and business workflows — from automated email processing and ERP integrations to cloud deployments.
          </p>
          <p>
            My current technical focus is Python backend development, AI-powered automation, ERP systems and production deployment.
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="md:col-span-2 space-y-3"
        >
          {highlights.map((h) => (
            <motion.li
              key={h.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="group glass rounded-2xl p-4 flex gap-4 items-start hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,102,255,0.15)] transition-all duration-400"
            >
              <div className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-[oklch(0.7_0.14_245)] to-[oklch(0.55_0.2_265)] flex items-center justify-center text-white shadow-[0_6px_18px_rgba(59,130,246,0.35)] group-hover:shadow-[0_8px_25px_rgba(0,102,255,0.4)] group-hover:scale-110 transition-all duration-300">
                <h.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{h.title}</p>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}
