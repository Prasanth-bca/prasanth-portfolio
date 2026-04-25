import { motion } from "framer-motion";
import { Section } from "./Section";
import { Workflow, Cloud, Database } from "lucide-react";

const highlights = [
  { icon: Workflow, title: "Workflow Automation", desc: "Streamlining business processes end-to-end." },
  { icon: Database, title: "ERP Customization", desc: "Tailoring ERPNext to fit unique operations." },
  { icon: Cloud, title: "Cloud Deployments", desc: "Scalable, reliable infrastructure on AWS." },
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
            I'm a Software Developer focused on building automation systems and backend solutions.
            I specialize in ERP customization, workflow automation, and deploying scalable
            applications.
          </p>
          <p>
            I have hands-on experience with ERP systems, cloud deployments, and automation tools to
            streamline business processes and improve efficiency.
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
