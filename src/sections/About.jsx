import { motion } from "framer-motion";
import { personal } from "../data/personal";
import { SectionReveal } from "../components/SectionReveal";

const stats = [
  { value: personal.cgpa, label: "CGPA", suffix: `/${personal.cgpaMax}` },
  { value: personal.graduationYear, label: "Graduation", suffix: "" },
  { value: "CSE", label: "Computer Science & Engineering", suffix: "" },
  { value: "CCBP 4.0", label: "Full-Stack Learning", suffix: "" },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <SectionReveal>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-elevated">
                <img
                  src="/assets/profile.jpeg"
                  alt={`${personal.name} - Profile Photo`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="hidden items-center justify-center h-full text-foreground-dim">
                  <span className="text-sm">Add your photo to /public/assets/profile.jpeg</span>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/20 rounded-2xl -z-10" />
            </div>
          </SectionReveal>

          {/* Content */}
          <div className="text-left">
            <SectionReveal>
              <span className="text-accent text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 tracking-tight">
                {personal.philosophy}
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-foreground-muted text-lg leading-relaxed mt-6">
                {personal.bio}
              </p>
            </SectionReveal>

            {/* Stats */}
            <SectionReveal delay={0.3}>
              <div className="grid grid-cols-2 gap-6 mt-10">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                    className="p-4 bg-surface border border-border rounded-xl"
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-foreground">
                      {stat.value}
                      <span className="text-accent">{stat.suffix}</span>
                    </div>
                    <div className="text-foreground-muted text-sm mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
