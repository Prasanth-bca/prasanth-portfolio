import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Magnetic } from "./Magnetic";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(96%,860px)]"
    >
      <nav className="glass-strong rounded-2xl px-3 py-2 flex items-center justify-between">
        <Magnetic intensity={8} scale={1.05}>
          <button
            onClick={() => handleClick("home")}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-colors"
          >
            <span className="h-7 w-7 rounded-lg bg-gradient-to-br from-[oklch(0.65_0.18_250)] to-[oklch(0.55_0.2_265)] shadow-[0_4px_14px_rgba(59,130,246,0.45)]" />
            <span className="font-semibold tracking-tight">Prasanth</span>
          </button>
        </Magnetic>
        <ul className="hidden sm:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <Magnetic intensity={5} scale={1.02}>
                <button
                  onClick={() => handleClick(l.id)}
                  className="relative px-3.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg"
                >
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-white/70 shadow-[0_0_15px_rgba(255,255,255,0.3)] border border-white/70"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className={`relative ${active === l.id ? "text-foreground" : ""}`}>
                    {l.label}
                  </span>
                </button>
              </Magnetic>
            </li>
          ))}
        </ul>
        <Magnetic intensity={8} scale={1.05}>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleClick("contact");
            }}
            className="hidden sm:inline-flex text-sm font-medium px-4 py-1.5 rounded-xl text-primary-foreground bg-gradient-to-br from-[oklch(0.62_0.18_250)] to-[oklch(0.5_0.2_265)] shadow-[0_6px_18px_rgba(59,130,246,0.35)] hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:-translate-y-0.5 transition-all"
          >
            Get in touch
          </a>
        </Magnetic>
      </nav>
    </motion.header>
  );
}
