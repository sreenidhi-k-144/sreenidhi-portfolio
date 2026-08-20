import { motion } from "framer-motion";
import { Award, Calendar, Building2 } from "lucide-react";

export function CertificateCard({ certificate, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onClick(certificate)}
      className="group cursor-pointer"
      data-cursor="VIEW"
    >
      <div className="relative overflow-hidden rounded-xl bg-surface border border-border hover:border-foreground/20 transition-colors">
        {/* Certificate Preview */}
        <div className="aspect-[4/3] bg-surface-elevated flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Award className="text-foreground-dim group-hover:text-accent transition-colors" size={48} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Info */}
        <div className="p-5">
          <h3 className="text-foreground font-semibold text-lg group-hover:text-accent transition-colors">
            {certificate.title}
          </h3>
          <div className="flex items-center gap-4 mt-3 text-foreground-muted text-sm">
            <span className="flex items-center gap-1.5">
              <Building2 size={14} />
              {certificate.organization}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {certificate.date}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
