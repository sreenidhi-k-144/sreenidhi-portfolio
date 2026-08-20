import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personal } from "../data/personal";
import { social } from "../data/social";
import { MagneticButton } from "../components/MagneticButton";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function Hero() {
  const reducedMotion = useReducedMotion();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <motion.div
          variants={reducedMotion ? {} : containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Name */}
          <motion.h1
            variants={reducedMotion ? {} : itemVariants}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-foreground"
          >
            {personal.name.toUpperCase()}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={reducedMotion ? {} : itemVariants}
            className="text-xl sm:text-2xl md:text-3xl text-foreground-muted max-w-3xl mx-auto leading-relaxed font-light"
          >
            {personal.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={reducedMotion ? {} : itemVariants}
            className="text-foreground-dim max-w-xl mx-auto leading-relaxed"
          >
            Computer Science student exploring web development, building real-world
            projects and continuously improving through hands-on learning.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={reducedMotion ? {} : itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <MagneticButton>
              <button
                onClick={() => scrollToSection("projects")}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-accent transition-colors"
              >
                Explore My Work
                <ArrowDown
                  size={18}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </button>
            </MagneticButton>

            <MagneticButton>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-full font-medium hover:bg-surface-elevated transition-colors"
              >
                Let's Connect
              </button>
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={reducedMotion ? {} : itemVariants}
            className="flex items-center justify-center gap-4 pt-8"
          >
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-foreground-muted hover:text-foreground hover:bg-surface-elevated rounded-full transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-foreground-muted hover:text-foreground hover:bg-surface-elevated rounded-full transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${social.email}`}
              className="p-3 text-foreground-muted hover:text-foreground hover:bg-surface-elevated rounded-full transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-foreground/40 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
