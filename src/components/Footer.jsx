import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "../data/personal";
import { social } from "../data/social";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-foreground font-medium text-lg">{personal.name}</p>
            <p className="text-foreground-muted text-sm mt-1">
              {personal.tagline}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground-muted hover:text-foreground hover:bg-surface-elevated rounded-lg transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground-muted hover:text-foreground hover:bg-surface-elevated rounded-lg transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${social.email}`}
              className="p-2 text-foreground-muted hover:text-foreground hover:bg-surface-elevated rounded-lg transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-foreground-dim text-sm">
            &copy; {currentYear} {personal.name}. Built with curiosity and care.
          </p>
        </div>
      </div>
    </footer>
  );
}
