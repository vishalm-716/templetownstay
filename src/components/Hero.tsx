"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { isWhatsAppConfigured } from "@/lib/whatsapp";

export default function Hero() {
  const { hero, contact } = siteContent;
  const waReady = isWhatsAppConfigured();
  const waText = encodeURIComponent("Hello Temple Town Stay, I would like to enquire about room availability.");
  const waUrl = waReady ? "https://wa.me/" + contact.whatsAppNumber + "?text=" + waText : "";

  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 80; window.scrollTo({ top, behavior: "smooth" }); }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image src={hero.image} alt="Temple Town Stay property" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-cream/40 to-cream/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-3xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-terracotta uppercase mb-4">
            {hero.eyebrow}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-charcoal leading-[1.1] mb-6">
            {hero.heading}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="text-xl sm:text-2xl text-charcoal/70 leading-relaxed mb-10 max-w-2xl">
            {hero.subheading}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="flex flex-col sm:flex-row gap-4 mb-10">
            {waReady ? (
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-white bg-terracotta hover:bg-terracotta/90 rounded-2xl transition-all min-h-[48px] shadow-lg shadow-terracotta/20">
                <MessageCircle size={20} /> Book Now via WhatsApp
              </a>
            ) : (
              <span className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-medium text-stone-400 bg-stone-100 rounded-2xl min-h-[48px]">
                <MessageCircle size={20} /> WhatsApp (not configured)
              </span>
            )}
            <a href={"tel:" + contact.phoneE164} className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-charcoal bg-white/80 hover:bg-white border border-stone-200/60 rounded-2xl transition-all min-h-[48px] backdrop-blur-sm">
              <Phone size={20} /> Call Now
            </a>
          </motion.div>

          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} onClick={() => handleScroll("#stay")} className="text-base font-medium text-charcoal/60 hover:text-charcoal transition-colors flex items-center gap-1.5">
            Explore Our Rooms <ChevronDown size={16} />
          </motion.button>
        </motion.div>

        {/* Info cards — positioned below CTA on desktop to avoid overlapping text */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className="hidden sm:flex gap-3 mt-2">
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl px-5 py-3 shadow-lg shadow-black/5 border border-white/50">
            <div className="text-sm font-semibold text-charcoal">{hero.roomLabel}</div>
            <div className="text-sm text-charcoal/60">{hero.occupancyLabel}</div>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-3 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg shadow-black/5 border border-white/50">
            <div className="text-xs font-medium text-charcoal/70">{hero.detailBadge}</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-6 h-10 rounded-full border-2 border-charcoal/20 flex items-start justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-charcoal/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
