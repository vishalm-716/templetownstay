"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, BedDouble, Building2, Hash, MessageCircle } from "lucide-react";
import { siteContent, roomData } from "@/data/siteContent";
import { isWhatsAppConfigured } from "@/lib/whatsapp";
import { formatPriceWithGST } from "@/lib/formatters";

export default function RoomDetails() {
  const { stay } = siteContent;
  const waReady = isWhatsAppConfigured();
  const waText = encodeURIComponent("Hello Temple Town Stay, I would like to check availability for a Family Suite Room.");
  const waUrl = waReady ? "https://wa.me/" + siteContent.contact.whatsAppNumber + "?text=" + waText : "";

  return (
    <section id="stay" className="py-24 sm:py-32 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-4">{stay.heading}</h2>
          <p className="text-xl text-charcoal/60 max-w-2xl mx-auto">{stay.subheading}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Images */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image src={stay.room.image} alt="Family Suite Room" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden">
              <Image src={stay.room.secondaryImage} alt="Family Suite Room living area" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-charcoal">{roomData.name}</h3>
            <p className="text-base text-charcoal/60 leading-relaxed">{roomData.description}</p>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-stone-100">
                <Users size={20} className="text-terracotta mb-2" />
                <div className="text-sm font-semibold text-charcoal">Occupancy</div>
                <div className="text-sm text-charcoal/60">{roomData.occupancy.adults} Adults + {roomData.occupancy.children} Child</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-stone-100">
                <Building2 size={20} className="text-terracotta mb-2" />
                <div className="text-sm font-semibold text-charcoal">Total Rooms</div>
                <div className="text-sm text-charcoal/60">{roomData.floorLayout.totalRooms} Rooms</div>
              </div>
            </div>

            {/* Floor layout */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-stone-100">
              <div className="flex items-center gap-2 mb-3">
                <BedDouble size={18} className="text-terracotta" />
                <span className="text-sm font-semibold text-charcoal">Room Layout</span>
              </div>
              <div className="space-y-3">
                {roomData.floorLayout.floors.map(floor => (
                  <div key={floor.level} className="flex items-start gap-3">
                    <span className="text-xs font-medium text-terracotta bg-terracotta/10 px-2 py-1 rounded-lg whitespace-nowrap">{floor.level}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {floor.roomNumbers.map(num => (
                        <span key={num} className="inline-flex items-center gap-1 text-xs font-medium text-charcoal/70 bg-stone-100 px-2 py-1 rounded-lg">
                          <Hash size={10} /> {num}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-stone-100">
              <h4 className="text-sm font-semibold text-charcoal mb-4">Pricing</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-stone-100">
                  <span className="text-sm text-charcoal/70">Family Suite Room</span>
                  <span className="text-sm font-semibold text-charcoal">{formatPriceWithGST(roomData.basePrice, roomData.gstPercentage)}</span>
                </div>
                {roomData.extraBed && (
                  <>
                    <div className="flex justify-between items-center py-2 border-b border-stone-100">
                      <span className="text-sm text-charcoal/70">Extra Bed — Adult</span>
                      <span className="text-sm font-semibold text-charcoal">{formatPriceWithGST(roomData.extraBed.adult.price, roomData.extraBed.adult.gstPercentage)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-charcoal/70">Extra Bed — Child</span>
                      <span className="text-sm font-semibold text-charcoal">{formatPriceWithGST(roomData.extraBed.child.price, roomData.extraBed.child.gstPercentage)}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* CTA */}
            {waReady ? (
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-white bg-terracotta hover:bg-terracotta/90 rounded-2xl transition-all min-h-[48px] shadow-lg shadow-terracotta/20 w-full sm:w-auto">
                <MessageCircle size={20} /> Check Availability on WhatsApp
              </a>
            ) : (
              <span className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-medium text-stone-400 bg-stone-100 rounded-2xl min-h-[48px] w-full sm:w-auto cursor-not-allowed">
                <MessageCircle size={20} /> WhatsApp (not configured)
              </span>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
