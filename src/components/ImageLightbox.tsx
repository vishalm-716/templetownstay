"use client";

import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { GalleryImage } from "@/types/gallery";

interface ImageLightboxProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ImageLightbox({ images, currentIndex, onClose, onNavigate }: ImageLightboxProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight" && currentIndex !== null && currentIndex < images.length - 1) onNavigate(currentIndex + 1);
    if (e.key === "ArrowLeft" && currentIndex !== null && currentIndex > 0) onNavigate(currentIndex - 1);
  }, [currentIndex, images.length, onClose, onNavigate]);

  useEffect(() => {
    if (currentIndex !== null) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [currentIndex, handleKeyDown]);

  if (currentIndex === null) return null;
  const image = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center" onClick={onClose} role="dialog" aria-modal="true" aria-label="Image lightbox">
        <button onClick={onClose} className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="Close lightbox">
          <X size={24} />
        </button>

        {currentIndex > 0 && (
          <button onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex - 1); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="Previous image">
            <ChevronLeft size={24} />
          </button>
        )}

        {currentIndex < images.length - 1 && (
          <button onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex + 1); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="Next image">
            <ChevronRight size={24} />
          </button>
        )}

        <motion.div key={image.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative max-w-[90vw] max-h-[85vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
          <Image src={image.src} alt={image.alt} fill className="object-contain" sizes="90vw" priority />
        </motion.div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
