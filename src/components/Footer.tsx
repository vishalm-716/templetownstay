import React from "react";
import BrandLogo from "./BrandLogo";
import { siteContent } from "@/data/siteContent";
import { isWhatsAppConfigured } from "@/lib/whatsapp";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Stay", href: "#stay" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const { contact } = siteContent;
  const waReady = isWhatsAppConfigured();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <BrandLogo size="sm" className="[&_span]:text-white" />
            </div>
            <p className="text-base text-white/50 leading-relaxed mb-4">{siteContent.fullLocation}</p>
            <p className="text-base italic text-white/40">{siteContent.tagline}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-base text-white/50 hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 tracking-wider uppercase">Contact</h3>
            <ul className="space-y-2.5">
              <li><a href={"tel:" + contact.phoneE164} className="text-base text-white/50 hover:text-white transition-colors">Call: {contact.phoneDisplay}</a></li>
              <li><a href={"mailto:" + contact.email} className="text-base text-white/50 hover:text-white transition-colors">Email: {contact.email}</a></li>
              {waReady && (<li><a href={"https://wa.me/" + contact.whatsAppNumber} target="_blank" rel="noopener noreferrer" className="text-base text-white/50 hover:text-white transition-colors">WhatsApp Enquiry</a></li>)}
              <li><a href={contact.googleMapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="text-base text-white/50 hover:text-white transition-colors">Get Directions</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">© {year} Temple Town Stay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
