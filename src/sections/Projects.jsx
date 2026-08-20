import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { SectionReveal } from "../components/SectionReveal";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectModal } from "../components/ProjectModal";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProject = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="mb-16 lg:mb-24">
            <span className="text-accent text-sm font-medium tracking-wider uppercase">
              Selected Work
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 tracking-tight">
              Projects
            </h2>
            <p className="text-foreground-muted mt-4 max-w-2xl">
              Real-world projects I've built to learn, experiment, and grow as a developer.
            </p>
          </div>
        </SectionReveal>

        <div className="space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={openProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProject}
      />
    </section>
  );
}
