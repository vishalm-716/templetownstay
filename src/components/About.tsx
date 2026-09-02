"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

export default function About() {
  const { about } = siteContent;

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Image composition */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image src={about.images[0].src} alt={about.images[0].alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-xl hidden sm:block">
              <Image src={about.images[1].src} alt={about.images[1].alt} fill className="object-cover" sizes="200px" />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal leading-tight">{about.heading}</h2>
            <p className="text-xl text-charcoal/60 leading-relaxed">{about.description}</p>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-stone-100 shadow-sm">
              <div className="w-12 h-1 bg-terracotta/40 rounded-full mb-4" />
              <p className="text-lg italic text-charcoal/70 leading-relaxed">“{about.quote}”</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {about.images.slice(1, 3).map((img, i) => (
                <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 640px) 50vw, 25vw" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
