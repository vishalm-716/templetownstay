"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import { buildAvailabilityEnquiryUrl, isWhatsAppConfigured } from "@/lib/whatsapp";

export default function WhatsAppEnquiryForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", checkIn: "", checkOut: "", adults: "2", children: "0", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [waNotConfigured, setWaNotConfigured] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.phone.trim()) errs.phone = "Please enter your phone number.";
    else if (!/^\+?[0-9\s\-]{7,15}$/.test(formData.phone.trim())) errs.phone = "Please enter a valid phone number.";
    if (formData.checkIn && formData.checkOut && formData.checkOut < formData.checkIn) {
      errs.checkOut = "Check-out date must be on or after check-in date.";
    }
    const totalGuests = parseInt(formData.adults || "0", 10) + parseInt(formData.children || "0", 10);
    if (totalGuests < 1) errs.adults = "At least 1 guest is required.";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWaNotConfigured(false);
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    if (!isWhatsAppConfigured()) {
      setWaNotConfigured(true);
      return;
    }

    const totalGuests = parseInt(formData.adults || "0", 10) + parseInt(formData.children || "0", 10);
    const url = buildAvailabilityEnquiryUrl({
      name: formData.name,
      phone: formData.phone,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: `${totalGuests} (${formData.adults} adults, ${formData.children} children)`,
      message: formData.message,
    });
    if (url) window.open(url, "_blank");
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => {
      const next = { ...prev, [field]: value };
      if (field === "checkIn" && next.checkOut && next.checkOut < value) {
        next.checkOut = "";
      }
      return next;
    });
    if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit} className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-stone-100 space-y-5">
      <h3 className="text-lg font-heading font-bold text-charcoal">Send an Enquiry</h3>

      <div>
        <label htmlFor="enq-name" className="block text-sm font-medium text-charcoal/70 mb-1.5">Full Name *</label>
        <input id="enq-name" type="text" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white/80 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/40 min-h-[44px]" placeholder="Your name" />
        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="enq-phone" className="block text-sm font-medium text-charcoal/70 mb-1.5">Phone Number *</label>
        <input id="enq-phone" type="tel" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white/80 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/40 min-h-[44px]" placeholder="Your phone number" />
        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="enq-checkin" className="block text-sm font-medium text-charcoal/70 mb-1.5">Preferred Check-in Date</label>
          <input id="enq-checkin" type="date" min={today} value={formData.checkIn} onChange={(e) => handleChange("checkIn", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white/80 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/40 min-h-[44px]" />
        </div>
        <div>
          <label htmlFor="enq-checkout" className="block text-sm font-medium text-charcoal/70 mb-1.5">Preferred Check-out Date</label>
          <input id="enq-checkout" type="date" min={formData.checkIn || today} value={formData.checkOut} onChange={(e) => handleChange("checkOut", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white/80 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/40 min-h-[44px]" />
          {errors.checkOut && <p className="text-xs text-red-500 mt-1">{errors.checkOut}</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="enq-adults" className="block text-sm font-medium text-charcoal/70 mb-1.5">Adults *</label>
          <input id="enq-adults" type="number" min="1" max="20" value={formData.adults} onChange={(e) => handleChange("adults", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white/80 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/40 min-h-[44px]" />
          {errors.adults && <p className="text-xs text-red-500 mt-1">{errors.adults}</p>}
        </div>
        <div>
          <label htmlFor="enq-children" className="block text-sm font-medium text-charcoal/70 mb-1.5">Children</label>
          <input id="enq-children" type="number" min="0" max="10" value={formData.children} onChange={(e) => handleChange("children", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white/80 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/40 min-h-[44px]" />
        </div>
      </div>

      <div>
        <label htmlFor="enq-message" className="block text-sm font-medium text-charcoal/70 mb-1.5">Message</label>
        <textarea id="enq-message" rows={3} value={formData.message} onChange={(e) => handleChange("message", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white/80 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/40 resize-none" placeholder="Any special requests..." />
      </div>

      {waNotConfigured && (
        <p className="text-sm text-amber-600 bg-amber-50 border border-amber-200 rounded-xl p-3">
          Please add the official WhatsApp number in src/data/siteContent.ts before publishing.
        </p>
      )}

      <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-terracotta hover:bg-terracotta/90 text-white font-semibold rounded-2xl transition-all min-h-[48px]">
        <Send size={16} /> Send Enquiry via WhatsApp
      </button>
    </form>
  );
}
