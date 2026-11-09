import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function ProjectCard({ project, index, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imgError, setImgError] = useState(false);
  const cardRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const showImage = Boolean(project.image) && !imgError;

  const handleMouseMove = (e) => {
    if (!cardRef.current || reducedMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 20,
      y: (e.clientY - rect.top - rect.height / 2) / 20,
    });
  };

  const isEven = index % 2 === 0;

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      onClick={() => onClick(project)}
      className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center cursor-pointer ${
        !isEven ? "lg:direction-rtl" : ""
      }`}
      data-cursor="VIEW"
    >
      {/* Image */}
      <div className={`relative overflow-hidden rounded-2xl bg-surface ${!isEven ? "lg:order-2" : ""}`}>
        <motion.div
          animate={
            reducedMotion
              ? {}
              : {
                  x: mousePosition.x,
                  y: mousePosition.y,
                  scale: isHovered ? 1.05 : 1,
                }
          }
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          className="aspect-[16/10] bg-surface-elevated flex items-center justify-center p-4"
        >
          {showImage ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="max-w-full max-h-full w-auto h-auto object-contain object-center rounded-lg"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="text-foreground-dim text-sm font-medium">
              {project.title} Preview
            </div>
          )}
        </motion.div>

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-background/40 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center"
          >
            <ArrowUpRight className="text-background" size={24} />
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className={`${!isEven ? "lg:order-1 lg:text-right" : ""}`}>
        <span className="text-accent text-sm font-medium tracking-wider uppercase">
          {project.number}
        </span>
        <h3 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-foreground-muted mt-4 text-lg leading-relaxed">
          {project.shortDescription}
        </p>
        <div className={`flex flex-wrap gap-2 mt-6 ${!isEven ? "lg:justify-end" : ""}`}>
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium text-foreground-muted bg-surface border border-border rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
