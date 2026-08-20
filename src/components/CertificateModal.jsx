import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function CertificateModal({
  certificates,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) {
  const reducedMotion = useReducedMotion();
  const [zoom, setZoom] = useState(1);
  const currentCertificate = certificates[currentIndex];

  const handleNext = useCallback(() => {
    setZoom(1);
    onNavigate((currentIndex + 1) % certificates.length);
  }, [currentIndex, certificates.length, onNavigate]);

  const handlePrev = useCallback(() => {
    setZoom(1);
    onNavigate((currentIndex - 1 + certificates.length) % certificates.length);
  }, [currentIndex, certificates.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          handleNext();
          break;
        case "ArrowLeft":
          handlePrev();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  useEffect(() => {
    if (isOpen) setZoom(1);
  }, [isOpen, currentIndex]);

  if (!currentCertificate) return null;

  const isPdf = currentCertificate.file?.toLowerCase().endsWith(".pdf");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-background/95 backdrop-blur-xl" />

          {/* Content */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reducedMotion ? {} : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl mx-4 h-[90vh] flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4">
              <div>
                <h3 className="text-foreground font-semibold text-lg">
                  {currentCertificate.title}
                </h3>
                <p className="text-foreground-muted text-sm">
                  {currentCertificate.organization} &middot; {currentCertificate.date}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {/* Zoom Controls */}
                {!isPdf && (
                  <>
                    <button
                      onClick={() => setZoom((z) => Math.max(0.5, z - 0.25))}
                      className="p-2 text-foreground-muted hover:text-foreground hover:bg-surface-elevated rounded-lg transition-colors"
                      aria-label="Zoom out"
                    >
                      <ZoomOut size={18} />
                    </button>
                    <button
                      onClick={() => setZoom((z) => Math.min(3, z + 0.25))}
                      className="p-2 text-foreground-muted hover:text-foreground hover:bg-surface-elevated rounded-lg transition-colors"
                      aria-label="Zoom in"
                    >
                      <ZoomIn size={18} />
                    </button>
                  </>
                )}
                <a
                  href={currentCertificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-foreground-muted hover:text-foreground hover:bg-surface-elevated rounded-lg transition-colors"
                  aria-label="Open in new tab"
                >
                  <Maximize2 size={18} />
                </a>
                <button
                  onClick={onClose}
                  className="p-2 text-foreground-muted hover:text-foreground hover:bg-surface-elevated rounded-lg transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Viewer */}
            <div className="flex-1 overflow-auto flex items-center justify-center p-4">
              {isPdf ? (
                <iframe
                  src={currentCertificate.file}
                  className="w-full h-full rounded-lg border border-border"
                  title={currentCertificate.title}
                />
              ) : (
                <motion.div
                  animate={{ scale: zoom }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="max-w-full max-h-full"
                >
                  <img
                    src={currentCertificate.file}
                    alt={`${currentCertificate.title} certificate`}
                    className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="hidden items-center justify-center h-64 text-foreground-muted">
                    Certificate preview not available
                  </div>
                </motion.div>
              )}
            </div>

            {/* Navigation */}
            {certificates.length > 1 && (
              <div className="flex items-center justify-between p-4 border-t border-border">
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-2 px-4 py-2 text-foreground-muted hover:text-foreground hover:bg-surface-elevated rounded-lg transition-colors"
                >
                  <ChevronLeft size={18} />
                  Previous
                </button>
                <span className="text-foreground-muted text-sm">
                  {currentIndex + 1} / {certificates.length}
                </span>
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-4 py-2 text-foreground-muted hover:text-foreground hover:bg-surface-elevated rounded-lg transition-colors"
                >
                  Next
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
