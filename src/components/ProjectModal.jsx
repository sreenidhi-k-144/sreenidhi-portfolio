import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, ArrowRight } from "lucide-react";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function ProjectModal({ project, isOpen, onClose }) {
  const reducedMotion = useReducedMotion();
  const contentRef = useRef(null);
  const [imgError, setImgError] = useState(false);
  const showImage = Boolean(project?.image) && !imgError;

  useEffect(() => {
    setImgError(false);
  }, [project?.id]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-background/95 backdrop-blur-xl" />

          {/* Content */}
          <motion.div
            ref={contentRef}
            initial={reducedMotion ? {} : { opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? {} : { opacity: 0, y: 60, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl mx-4 my-8 lg:my-16 bg-surface border border-border rounded-3xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur rounded-full text-foreground hover:bg-surface-elevated transition-colors"
              aria-label="Close project details"
            >
              <X size={20} />
            </button>

            {/* Hero Image */}
            <div className="aspect-video bg-surface-elevated flex items-center justify-center overflow-hidden p-6">
              {showImage ? (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="max-w-full max-h-full w-auto h-auto object-contain object-center rounded-xl"
                  onError={() => setImgError(true)}
                />
              ) : (
                <span className="text-foreground-dim text-sm font-medium">
                  {project.title} Preview
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <span className="text-accent text-sm font-medium tracking-wider uppercase">
                {project.number}
              </span>
              <h2
                id="project-title"
                className="text-3xl lg:text-5xl font-bold text-foreground mt-2"
              >
                {project.title}
              </h2>

              <p className="text-foreground-muted text-lg mt-4 leading-relaxed">
                {project.description}
              </p>

              {/* Overview & Problem/Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                {project.problem && (
                  <div>
                    <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-3">
                      Problem
                    </h3>
                    <p className="text-foreground-muted leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                )}
                {project.solution && (
                  <div>
                    <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-3">
                      Solution
                    </h3>
                    <p className="text-foreground-muted leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>

              {/* Technologies */}
              <div className="mt-10">
                <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm font-medium text-foreground bg-surface-elevated border border-border rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hardware (for VisionSync) */}
              {project.hardware && (
                <div className="mt-10">
                  <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">
                    Hardware Components
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {project.hardware.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-foreground-muted text-sm"
                      >
                        <ArrowRight size={14} className="text-accent" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t border-border">
                {project.github && !project.github.includes("PASTE") ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-accent transition-colors"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                ) : project.githubNote ? (
                  <span className="inline-flex items-center gap-2 px-6 py-3 bg-surface-elevated text-foreground-muted rounded-full font-medium border border-border">
                    <Github size={18} />
                    {project.githubNote}
                  </span>
                ) : null}

                {project.liveDemo && !project.liveDemo.includes("PASTE") && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-full font-medium hover:bg-surface-elevated transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
