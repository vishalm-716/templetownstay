"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { isWhatsAppConfigured } from "@/lib/whatsapp";
import WhatsAppEnquiryForm from "./WhatsAppEnquiryForm";

export default function Contact() {
  const { contact, contactSection } = siteContent;
  const waReady = isWhatsAppConfigured();
  const waText = encodeURIComponent("Hello Temple Town Stay, I would like to enquire about room availability.");
  const waUrl = waReady ? "https://wa.me/" + contact.whatsAppNumber + "?text=" + waText : "";

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-4">{contactSection.heading}</h2>
          <p className="text-xl text-charcoal/60 max-w-2xl mx-auto">{contactSection.subheading}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact cards */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
            <a href={"tel:" + contact.phoneE164} className="flex items-center gap-5 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-stone-100 hover:border-terracotta/20 hover:shadow-lg hover:shadow-terracotta/5 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-terracotta/10 flex items-center justify-center shrink-0 group-hover:bg-terracotta/15 transition-colors">
                <Phone size={24} className="text-terracotta" />
              </div>
              <div>
                <h3 className="text-base font-heading font-bold text-charcoal">Call Temple Town Stay</h3>
                <p className="text-base text-charcoal/60">{contact.phoneDisplay}</p>
              </div>
            </a>

            <a href={"mailto:" + contact.email} className="flex items-center gap-5 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-stone-100 hover:border-terracotta/20 hover:shadow-lg hover:shadow-terracotta/5 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-terracotta/10 flex items-center justify-center shrink-0 group-hover:bg-terracotta/15 transition-colors">
                <Mail size={24} className="text-terracotta" />
              </div>
              <div>
                <h3 className="text-base font-heading font-bold text-charcoal">Email Us</h3>
                <p className="text-base text-charcoal/60">{contact.email}</p>
              </div>
            </a>

            {waReady ? (
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-stone-100 hover:border-terracotta/20 hover:shadow-lg hover:shadow-terracotta/5 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-terracotta/10 flex items-center justify-center shrink-0 group-hover:bg-terracotta/15 transition-colors">
                  <MessageCircle size={24} className="text-terracotta" />
                </div>
                <div>
                  <h3 className="text-base font-heading font-bold text-charcoal">Chat on WhatsApp</h3>
                  <p className="text-base text-charcoal/60">Enquire on WhatsApp</p>
                </div>
              </a>
            ) : null}

            <WhatsAppEnquiryForm />
          </motion.div>

          {/* Map */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-stone-200/60 shadow-sm sticky top-24">
              <iframe src={contact.googleMapsEmbedUrl} width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" title="Temple Town Stay Location Map" className="absolute inset-0" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
