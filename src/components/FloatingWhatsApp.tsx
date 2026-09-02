"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { isWhatsAppConfigured } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  if (!isWhatsAppConfigured()) return null;
  const waText = encodeURIComponent("Hello Temple Town Stay, I would like to enquire about room availability.");
  const waUrl = "https://wa.me/" + siteContent.contact.whatsAppNumber + "?text=" + waText;

  return (
    <a href={waUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/25 transition-all hover:scale-110 hidden lg:flex">
      <MessageCircle size={24} />
    </a>
  );
}
