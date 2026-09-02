"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { isWhatsAppConfigured } from "@/lib/whatsapp";

export default function Location() {
  const { contact, location } = siteContent;
  const waReady = isWhatsAppConfigured();
  const waText = encodeURIComponent("Hello Temple Town Stay, I would like to enquire about room availability.");
  const waUrl = waReady ? "https://wa.me/" + contact.whatsAppNumber + "?text=" + waText : "";

  return (
    <section id="location" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-4">{location.heading}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2">
            <div className="relative aspect-video lg:aspect-[16/10] rounded-3xl overflow-hidden border border-stone-200/60 shadow-sm">
              <iframe src={contact.googleMapsEmbedUrl} width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" title="Temple Town Stay Location Map" className="absolute inset-0" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-stone-100">
              <MapPin size={20} className="text-terracotta mb-3" />
              <p className="text-base text-charcoal/70">{siteContent.fullLocation}</p>
            </div>

            <a href={contact.googleMapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-terracotta text-white px-5 py-3.5 rounded-2xl font-semibold text-sm transition-all hover:bg-terracotta/90 min-h-[44px]">
              <MapPin size={18} /> Get Directions
            </a>
            <a href={"tel:" + contact.phoneE164} className="flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-stone-200/60 px-5 py-3.5 rounded-2xl font-semibold text-sm text-charcoal transition-all hover:bg-white min-h-[44px]">
              <Phone size={18} /> Call Now
            </a>
            {waReady ? (
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-stone-200/60 px-5 py-3.5 rounded-2xl font-semibold text-sm text-charcoal transition-all hover:bg-white min-h-[44px]">
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            ) : null}
            <a href={"mailto:" + contact.email} className="flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-stone-200/60 px-5 py-3.5 rounded-2xl font-semibold text-sm text-charcoal transition-all hover:bg-white min-h-[44px]">
              <Mail size={18} /> Send Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
