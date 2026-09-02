import { siteContent } from "@/data/siteContent";

export function buildWhatsAppUrl(message: string): string {
  const number = siteContent.contact.whatsAppNumber;
  if (!number || number.includes("[WHATSAPP_NUMBER]")) {
    return "";
  }
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

export function isWhatsAppConfigured(): boolean {
  const number = siteContent.contact.whatsAppNumber;
  return !!number && !number.includes("[WHATSAPP_NUMBER]");
}

export function buildAvailabilityEnquiryUrl(formData: {
  name: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  message: string;
}): string {
  const lines = [
    "Hello Temple Town Stay,",
    "",
    "I would like to check room availability.",
    "",
    `Name: ${formData.name}`,
    `Phone: ${formData.phone}`,
    `Preferred check-in: ${formData.checkIn || "Not provided"}`,
    `Preferred check-out: ${formData.checkOut || "Not provided"}`,
    `Guests: ${formData.guests}`,
    `Message: ${formData.message}`,
    "",
    "Please share availability and booking details.",
  ];

  return buildWhatsAppUrl(lines.join("\n"));
}
