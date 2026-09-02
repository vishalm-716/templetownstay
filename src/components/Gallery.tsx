"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ChevronDown } from "lucide-react";
import { galleryImages } from "@/data/gallery";
import ImageLightbox from "./ImageLightbox";

const PREVIEW_COUNT = 6;

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const previewImages = useMemo(() => galleryImages.slice(0, PREVIEW_COUNT), []);
  const remainingCount = galleryImages.length - PREVIEW_COUNT;
  const visibleImages = showAll ? galleryImages : previewImages;

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-terracotta mb-4">
            <Camera size={20} />
            <span className="text-sm font-semibold tracking-widest uppercase">Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-4">
            A Look Around Temple Town Stay.
          </h2>
          <p className="text-xl text-charcoal/50 max-w-2xl mx-auto">
            {showAll
              ? `Showing all ${galleryImages.length} photos.`
              : `Showing ${PREVIEW_COUNT} of ${galleryImages.length} photos.`}
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {visibleImages.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: showAll ? Math.min(i * 0.03, 0.3) : 0 }}
                className="break-inside-avoid"
              >
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="relative w-full rounded-2xl overflow-hidden group cursor-pointer bg-stone-100"
                  aria-label={`View ${img.title}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width || 800}
                    height={img.height || 600}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium">{img.title}</p>
                      <p className="text-white/70 text-xs capitalize">{img.category}</p>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More / View Less button */}
        {!showAll && remainingCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white bg-terracotta hover:bg-terracotta/90 rounded-2xl transition-all shadow-lg shadow-terracotta/20 min-h-[48px]"
            >
              <Camera size={20} />
              View All {galleryImages.length} Photos
              <ChevronDown size={18} />
            </button>
            <p className="text-sm text-charcoal/40 mt-3">
              {remainingCount} more photos to explore
            </p>
          </motion.div>
        )}

        {showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => {
                setShowAll(false);
                document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-charcoal/60 bg-white/70 hover:bg-white border border-stone-200/60 rounded-2xl transition-all backdrop-blur-sm min-h-[44px]"
            >
              Show Less
            </button>
          </motion.div>
        )}
      </div>

      <ImageLightbox
        images={visibleImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
