import { motion } from "framer-motion";
import { SectionReveal } from "../components/SectionReveal";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Web Development Intern",
    company: "Torvex",
    poweredBy: "IDThirdeye",
    duration: "20 days",
    description: "Built a full-stack website using React and Node.js.",
    type: "Internship",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="mb-16">
            <span className="text-accent text-sm font-medium tracking-wider uppercase">
              Where I've Worked
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 tracking-tight">
              Experience
            </h2>
          </div>
        </SectionReveal>

        <div className="max-w-3xl">
          {experiences.map((exp, index) => (
            <SectionReveal key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-4 border-background" />
                </div>

                <div className="bg-surface border border-border rounded-2xl p-6 lg:p-8 hover:border-foreground/20 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-accent text-sm font-medium mb-2">
                        <Briefcase size={14} />
                        {exp.type}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-foreground-muted mt-1">
                        {exp.company}
                        {exp.poweredBy && (
                          <span className="text-foreground-dim">
                            {" "}
                            — powered by {exp.poweredBy}
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-foreground-muted text-sm shrink-0">
                      <Calendar size={14} />
                      {exp.duration}
                    </div>
                  </div>
                  <p className="text-foreground-muted mt-4 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
