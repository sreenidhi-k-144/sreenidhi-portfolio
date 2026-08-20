import { useState } from "react";
import { motion } from "framer-motion";
import { SectionReveal } from "../components/SectionReveal";
import { CertificateCard } from "../components/CertificateCard";
import { CertificateModal } from "../components/CertificateModal";
import { courseCertificates, eventCertificates } from "../data/certificates";

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("courses");

  const allCertificates =
    activeCategory === "courses" ? courseCertificates : eventCertificates;

  const openCertificate = (cert) => {
    const index = allCertificates.findIndex((c) => c.id === cert.id);
    setSelectedCert({ cert, index });
    setIsModalOpen(true);
  };

  const closeCertificate = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCert(null), 300);
  };

  const handleNavigate = (newIndex) => {
    setSelectedCert({ cert: allCertificates[newIndex], index: newIndex });
  };

  return (
    <section id="certifications" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="mb-16">
            <span className="text-accent text-sm font-medium tracking-wider uppercase">
              Proof of Learning
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 tracking-tight">
              Certifications
            </h2>
          </div>
        </SectionReveal>

        {/* Category Tabs */}
        <SectionReveal delay={0.1}>
          <div className="flex gap-4 mb-12">
            <button
              onClick={() => setActiveCategory("courses")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeCategory === "courses"
                  ? "bg-foreground text-background"
                  : "bg-surface text-foreground-muted hover:text-foreground border border-border"
              }`}
            >
              Course Certificates
            </button>
            <button
              onClick={() => setActiveCategory("events")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeCategory === "events"
                  ? "bg-foreground text-background"
                  : "bg-surface text-foreground-muted hover:text-foreground border border-border"
              }`}
            >
              College Event Certificates
            </button>
          </div>
        </SectionReveal>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCertificates.map((cert, index) => (
            <CertificateCard
              key={cert.id}
              certificate={cert}
              index={index}
              onClick={openCertificate}
            />
          ))}
        </div>

        {allCertificates.length === 0 && (
          <SectionReveal>
            <div className="text-center py-16 bg-surface border border-border rounded-2xl">
              <p className="text-foreground-muted">
                No certificates added yet. Add your certificate files to{" "}
                <code className="text-accent bg-accent/10 px-2 py-1 rounded text-sm">
                  /public/assets/certificates/{activeCategory}/
                </code>
              </p>
            </div>
          </SectionReveal>
        )}
      </div>

      <CertificateModal
        certificates={allCertificates}
        currentIndex={selectedCert?.index ?? 0}
        isOpen={isModalOpen}
        onClose={closeCertificate}
        onNavigate={handleNavigate}
      />
    </section>
  );
}
