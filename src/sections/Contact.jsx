import { motion } from "framer-motion";
import { SectionReveal } from "../components/SectionReveal";
import { MagneticButton } from "../components/MagneticButton";
import { social } from "../data/social";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent text-sm font-medium tracking-wider uppercase">
              Get In Touch
            </span>
            <h2 className="text-5xl lg:text-7xl font-bold text-foreground mt-6 tracking-tight">
              Let's build something.
            </h2>
            <p className="text-foreground-muted text-lg mt-6 leading-relaxed">
              I'm currently looking for full-stack development and web development
              internship opportunities. If you have an opportunity or just want to
              connect, I'd love to hear from you.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <MagneticButton>
              <a
                href={`mailto:${social.email}`}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-accent transition-colors"
              >
                <Mail size={18} />
                Email Me
                <ArrowUpRight
                  size={16}
                  className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground rounded-full font-medium hover:bg-surface-elevated transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
                <ArrowUpRight
                  size={16}
                  className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground rounded-full font-medium hover:bg-surface-elevated transition-colors"
              >
                <Github size={18} />
                GitHub
                <ArrowUpRight
                  size={16}
                  className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                />
              </a>
            </MagneticButton>
          </div>
        </SectionReveal>

        {/* Philosophy */}
        <SectionReveal delay={0.4}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-24 text-center"
          >
            <p className="text-foreground-dim text-sm tracking-wider uppercase">
              Personal Philosophy
            </p>
            <p className="text-3xl lg:text-4xl font-bold text-foreground mt-3 tracking-tight">
              Improve yourself.
            </p>
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  );
}
