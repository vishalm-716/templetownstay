"use client";

import React from "react";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { isWhatsAppConfigured } from "@/lib/whatsapp";

export default function MobileContactBar() {
  const { contact } = siteContent;
  const waReady = isWhatsAppConfigured();
  const waText = encodeURIComponent("Hello Temple Town Stay, I would like to enquire about room availability.");
  const waUrl = waReady ? "https://wa.me/" + contact.whatsAppNumber + "?text=" + waText : "";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/90 backdrop-blur-xl border-t border-stone-200/60 px-4 py-2 safe-area-bottom">
      <div className="flex items-center justify-around">
        <a href={"tel:" + contact.phoneE164} className="flex flex-col items-center gap-1 py-2 min-w-[60px] min-h-[44px]">
          <Phone size={20} className="text-terracotta" />
          <span className="text-[10px] font-medium text-charcoal/70">Call</span>
        </a>
        {waReady ? (
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 py-2 min-w-[60px] min-h-[44px]">
            <MessageCircle size={20} className="text-terracotta" />
            <span className="text-[10px] font-medium text-charcoal/70">WhatsApp</span>
          </a>
        ) : null}
        <a href={"mailto:" + contact.email} className="flex flex-col items-center gap-1 py-2 min-w-[60px] min-h-[44px]">
          <Mail size={20} className="text-terracotta" />
          <span className="text-[10px] font-medium text-charcoal/70">Email</span>
        </a>
        <a href={contact.googleMapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 py-2 min-w-[60px] min-h-[44px]">
          <MapPin size={20} className="text-terracotta" />
          <span className="text-[10px] font-medium text-charcoal/70">Maps</span>
        </a>
      </div>
    </div>
  );
}
