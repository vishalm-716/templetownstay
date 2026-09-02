"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { siteContent } from "@/data/siteContent";
import { isWhatsAppConfigured } from "@/lib/whatsapp";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Stay", href: "#stay" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map(l => l.href.replace("#", ""));
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 });
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  const waText = encodeURIComponent("Hello Temple Town Stay, I would like to enquire about room availability.");
  const waBase = siteContent.contact.whatsAppNumber;
  const waReady = waBase && !waBase.includes("[WHATSAPP_NUMBER]");
  const whatsAppUrl = waReady ? "https://wa.me/" + waBase + "?text=" + waText : "";

  return (
    <header
      className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + (isScrolled ? "bg-white/85 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.06)] border-b border-stone-200/40" : "bg-white/40 backdrop-blur-sm")}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2 shrink-0" aria-label="Temple Town Stay - Home">
            <BrandLogo size="sm" />
          </a>
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                className={"relative px-3 py-2 text-sm font-medium transition-colors rounded-lg min-h-[44px] flex items-center " + (activeSection === link.href.replace("#", "") ? "text-terracotta" : "text-charcoal/70 hover:text-charcoal")}>
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.span layoutId="activeNav" className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-terracotta rounded-full" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                )}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a href={"tel:" + siteContent.contact.phoneE164} className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-charcoal bg-cream/80 hover:bg-cream border border-stone-200/60 rounded-xl transition-all min-h-[44px]">
              <Phone size={16} /> Call Now
            </a>
            {waReady ? (
              <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-terracotta hover:bg-terracotta/90 rounded-xl transition-all min-h-[44px]">
                <MessageCircle size={16} /> Enquire on WhatsApp
              </a>
            ) : (
              <span className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-stone-400 bg-stone-100 rounded-xl min-h-[44px] cursor-not-allowed">
                <MessageCircle size={16} /> WhatsApp
              </span>
            )}
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl hover:bg-stone-100 transition-colors" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-stone-200/40">
            <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                  className={"block px-4 py-3 text-base font-medium rounded-xl min-h-[44px] flex items-center transition-colors " + (activeSection === link.href.replace("#", "") ? "text-terracotta bg-terracotta/5" : "text-charcoal/70 hover:text-charcoal hover:bg-stone-50")}>
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 pt-3 border-t border-stone-100 mt-3">
                <a href={"tel:" + siteContent.contact.phoneE164} className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-charcoal bg-cream/80 border border-stone-200/60 rounded-xl min-h-[44px]">
                  <Phone size={16} /> Call Now
                </a>
                {waReady ? (
                  <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-terracotta rounded-xl min-h-[44px]">
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                ) : (
                  <span className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-stone-400 bg-stone-100 rounded-xl min-h-[44px]">
                    <MessageCircle size={16} /> WhatsApp
                  </span>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}