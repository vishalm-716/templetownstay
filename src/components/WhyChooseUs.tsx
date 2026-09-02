"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, LayoutGrid, Phone, MapPin } from "lucide-react";
import { siteContent } from "@/data/siteContent";

const icons = [Users, LayoutGrid, Phone, MapPin];

export default function WhyChooseUs() {
  const { whyUs } = siteContent;

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-4">{whyUs.heading}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {whyUs.features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-stone-100 hover:border-terracotta/20 hover:shadow-lg hover:shadow-terracotta/5 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-terracotta/10 flex items-center justify-center shrink-0 group-hover:bg-terracotta/15 transition-colors">
                    <Icon size={22} className="text-terracotta" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-charcoal mb-2">{feature.title}</h3>
                    <p className="text-base text-charcoal/60 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
