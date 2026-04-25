import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, Linkedin, Github } from "lucide-react";

import { Magnetic } from "./Magnetic";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "prasanth.e390@gmail.com",
    href: "mailto:prasanth.e390@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/prasanth-e",
    href: "https://www.linkedin.com/in/prasanth-e-ba208b252/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Prasanth-bca",
    href: "https://github.com/Prasanth-bca",
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together."
      description="Open to backend, automation, and ERP projects. Reach out anytime."
    >
      {/* Background Section Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_bottom,rgba(0,102,255,0.06)_0%,transparent_70%)] pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="glass-strong rounded-3xl p-8 md:p-10 relative z-10"
      >
        <div className="grid sm:grid-cols-3 gap-6">
          {links.map((l, i) => (
            <motion.div
              key={l.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full"
            >
              <Magnetic intensity={10} scale={1.04} className="block w-full h-full">
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  data-cursor="card"
                  className="group glass rounded-2xl p-5 flex flex-col gap-3 hover:shadow-[0_0_25px_rgba(0,102,255,0.2)] border border-transparent hover:border-blue-500/20 transition-all duration-400 w-full h-full block"
                >
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[oklch(0.7_0.14_245)] to-[oklch(0.5_0.2_265)] flex items-center justify-center text-white shadow-[0_8px_22px_rgba(0,102,255,0.35)] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,102,255,0.5)] transition-all duration-300">
                    <l.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-2">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{l.label}</p>
                    <p className="font-medium text-foreground/90 group-hover:text-primary transition-colors break-all">
                      {l.value}
                    </p>
                  </div>
                </a>
              </Magnetic>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Prasanth · Crafted with care.
      </p>
    </Section>
  );
}
