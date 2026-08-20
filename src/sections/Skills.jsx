import { motion } from "framer-motion";
import { SectionReveal } from "../components/SectionReveal";
import { skills } from "../data/skills";
import { Code2, Terminal, Wrench, Sparkles } from "lucide-react";

const categoryIcons = {
  Web: Code2,
  Programming: Terminal,
  "Currently Exploring": Sparkles,
  Tools: Wrench,
};

const categoryDescriptions = {
  Web: "Frontend technologies I'm actively working with",
  Programming: "Languages I use for problem solving and logic",
  "Currently Exploring": "New technologies I'm diving into",
  Tools: "Development and productivity tools",
};

export function Skills() {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="py-24 lg:py-32 bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-medium tracking-wider uppercase">
              What I Work With
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 tracking-tight">
              Skills
            </h2>
            <p className="text-foreground-muted mt-4 max-w-2xl mx-auto">
              Technologies and tools I actually use or am actively learning. No fluff, no filler.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, catIndex) => {
            const Icon = categoryIcons[category] || Code2;
            const categorySkills = skills.filter((s) => s.category === category);

            return (
              <SectionReveal key={category} delay={catIndex * 0.1}>
                <div className="bg-background border border-border rounded-2xl p-6 h-full hover:border-foreground/20 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="text-accent" size={20} />
                  </div>
                  <h3 className="text-foreground font-semibold text-lg">{category}</h3>
                  <p className="text-foreground-dim text-sm mt-1 mb-4">
                    {categoryDescriptions[category]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1.5 text-sm font-medium text-foreground-muted bg-surface-elevated border border-border rounded-lg hover:text-foreground hover:border-foreground/20 transition-colors"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
