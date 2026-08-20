import { motion } from "framer-motion";
import { SectionReveal } from "../components/SectionReveal";
import { skills } from "../data/skills";

const statusConfig = {
  Completed: { color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
  Learning: { color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20" },
  Basic: { color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
  Exploring: { color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
  Know: { color: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/20" },
};

const categories = ["Web", "Programming", "Currently Exploring", "Tools"];

export function Learning() {
  return (
    <section id="learning" className="py-24 lg:py-32 bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-medium tracking-wider uppercase">
              My Journey
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 tracking-tight">
              Currently Learning
            </h2>
            <p className="text-foreground-muted mt-4 max-w-2xl mx-auto">
              A transparent look at where I am in my learning path. No fake percentages — just honest progress.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter((s) => s.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <SectionReveal key={category} delay={catIndex * 0.1}>
                <div className="bg-background border border-border rounded-2xl p-6 lg:p-8">
                  <h3 className="text-foreground font-semibold text-lg mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {categorySkills.map((skill, i) => {
                      const config = statusConfig[skill.status] || statusConfig.Basic;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
                          className="flex items-center justify-between group"
                        >
                          <span className="text-foreground font-medium group-hover:text-accent transition-colors">
                            {skill.name}
                          </span>
                          <span
                            className={`px-3 py-1 text-xs font-medium rounded-full border ${config.color} ${config.bg} ${config.border}`}
                          >
                            {skill.status}
                          </span>
                        </motion.div>
                      );
                    })}
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
