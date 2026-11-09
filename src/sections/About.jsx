import { motion } from "framer-motion";
import { personal } from "../data/personal";
import { SectionReveal } from "../components/SectionReveal";

const stats = [
  { value: personal.cgpa, label: "CGPA", suffix: `/${personal.cgpaMax}` },
  { value: personal.graduationYear, label: "Graduation", suffix: "" },
  { value: "CSE", label: "Computer Science & Engineering", suffix: "" },
  { value: "CCBP 4.0", label: "Full-Stack Learning", suffix: "" },
];

const bioParagraphs = Array.isArray(personal.bio)
  ? personal.bio
  : personal.bio.split(/\n\s*\n/);

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] gap-10 md:gap-12 lg:gap-16 items-start">
          {/* Image */}
          <SectionReveal className="w-full max-w-[280px] sm:max-w-[320px] mx-auto md:mx-0 md:max-w-none">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-elevated">
                <img
                  src="/assets/profile.jpeg"
                  alt={`${personal.name} - Profile Photo`}
                  className="w-full h-full object-cover object-top"
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
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/20 rounded-2xl -z-10 pointer-events-none" />
            </div>
          </SectionReveal>

          {/* Content */}
          <div className="text-left min-w-0">
            <SectionReveal>
              <span className="text-accent text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 tracking-tight leading-[1.15] text-balance">
                {personal.philosophy}
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="mt-6 sm:mt-8 max-w-prose space-y-5">
                {bioParagraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-foreground-muted text-base sm:text-lg leading-8"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </SectionReveal>

            {/* Stats */}
            <SectionReveal delay={0.3}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5 mt-10">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                    className="p-4 sm:p-5 bg-surface border border-border rounded-xl"
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                      {stat.value}
                      <span className="text-accent">{stat.suffix}</span>
                    </div>
                    <div className="text-foreground-muted text-sm mt-1 leading-snug">
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
