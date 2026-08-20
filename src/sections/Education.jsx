import { motion } from "framer-motion";
import { SectionReveal } from "../components/SectionReveal";
import { personal } from "../data/personal";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 lg:py-32 bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="mb-16">
            <span className="text-accent text-sm font-medium tracking-wider uppercase">
              Academic Background
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 tracking-tight">
              Education
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-background border border-border rounded-2xl p-8 lg:p-10 max-w-3xl hover:border-foreground/20 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <GraduationCap className="text-accent" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                      {personal.degree}
                    </h3>
                    <p className="text-foreground-muted text-lg mt-1">
                      {personal.college}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-foreground-muted text-sm shrink-0">
                    <Calendar size={14} />
                    2024 – {personal.graduationYear}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-accent" />
                    <span className="text-foreground font-medium">
                      CGPA: {personal.cgpa}/{personal.cgpaMax}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-accent" />
                    <span className="text-foreground-muted">
                      Computer Science & Engineering
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  );
}
