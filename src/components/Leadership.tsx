"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

export default function Leadership() {
  const { leadership } = siteContent;
  const hasRealData = leadership.ownerName.length > 1 && !leadership.ownerName.startsWith("[");

  return (
    <section id="leadership" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-4">{leadership.heading}</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 border border-stone-100 text-center">
            {/* Owner image or placeholder */}
            <div className="w-32 h-32 mx-auto rounded-full bg-stone-200 flex items-center justify-center mb-6 overflow-hidden">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-stone-400"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>

            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">{leadership.ownerName}</h3>
            <p className="text-sm text-terracotta font-medium mb-4">{leadership.ownerRole}</p>
            <p className="text-lg text-charcoal/60 leading-relaxed mb-6">{leadership.welcomeText}</p>

            {hasRealData ? (
              <div className="bg-cream/50 rounded-2xl p-6 border border-stone-100">
                <p className="text-base text-charcoal/60 leading-relaxed italic">{leadership.ownerBio}</p>
              </div>
            ) : (
              <div className="bg-cream/50 rounded-2xl p-6 border border-stone-100">
                <p className="text-base text-charcoal/50 italic leading-relaxed">{leadership.placeholderText}</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
