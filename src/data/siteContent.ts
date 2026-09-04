import type { RoomType } from "@/types/room";
import type { ContactInfo } from "@/types/booking";
import type { FAQ } from "@/types/faq";

// ═══════════════════════════════════════════════════════════════
// DEVELOPER NOTE:
// Replace [WHATSAPP_NUMBER] with the official WhatsApp number
// in international format, without +, spaces, or hyphens.
// Example: 919XXXXXXXXX
// Do NOT assume the phone number is the WhatsApp number.
// ═══════════════════════════════════════════════════════════════

export const siteContent = {
  businessName: "TEMPLE TOWN STAY",
  businessNameShort: "Temple Town Stay",
  tagline: "A warm welcome for every journey.",
  city: "Kanchipuram",
  state: "Tamil Nadu",
  country: "India",
  fullLocation: "Kanchipuram, Tamil Nadu, India",

  contact: {
    email: "templetownstay@gmail.com",
    phoneDisplay: "8220226123",
    phoneE164: "+918220226123",
    // WhatsApp number configured — international format, no +, no spaces
    whatsAppNumber: "918489220595",
    googleMapsDirectionsUrl:
      "https://maps.app.goo.gl/Hm3SddrGNE5BqmvBA",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.539433947294!2d79.69403087507476!3d12.87299678743336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUyJzIyLjgiTiA3OcKwNDEnNDcuOCJF!5e0!3m2!1sen!2sin!4v1788500242275!5m2!1sen!2sin",
  } as ContactInfo,

  hero: {
    eyebrow: "Kanchipuram • FAMILY STAY",
    heading: "A Comfortable Stay, Close to Kanchipuram\u2019s Timeless Charm.",
    subheading:
      "Temple Town Stay offers welcoming Family Suite Rooms for travellers, tourists, and families looking for a peaceful and comfortable stay in Kanchipuram.",
    image: "/images/gallery/gallery-30.jpg",
    roomLabel: "Family Suite Rooms",
    occupancyLabel: "2 Adults + 1 Child",
    detailBadge: "12 Rooms Across Two Floors",
  },

  stay: {
    heading: "Made for Comfortable Family Stays.",
    subheading:
      "Explore our Family Suite Rooms, thoughtfully suited for families and travellers visiting Kanchipuram.",
    room: {
      name: "Family Suite Room",
      description:
        "A spacious family suite room designed for comfort, with room for 2 adults and 1 child.",
      image: "/images/gallery/gallery-18.jpg",
      secondaryImage: "/images/gallery/gallery-19.jpg",
    },
  },

  about: {
    heading: "A Welcoming Stay in Kanchipuram.",
    description:
      "Whether you are visiting Kanchipuram with family, exploring the city, or planning a peaceful break, Temple Town Stay offers a comfortable place to pause, rest, and feel at ease.",
    quote:
      "A quiet corner in the temple city, where families find rest and travellers find warmth.",
    images: [
      { src: "/images/gallery/gallery-01.jpg", alt: "Temple Town Stay property exterior" },
      { src: "/images/gallery/gallery-38.jpg", alt: "Welcoming interior at Temple Town Stay" },
      { src: "/images/gallery/gallery-16.jpg", alt: "Relaxing spaces at Temple Town Stay" },
      { src: "/images/gallery/gallery-26.jpg", alt: "Temple Town Stay common area" },
    ],
  },

  whyUs: {
    heading: "A Stay Designed Around Family Comfort.",
    features: [
      {
        title: "Family Suite Rooms",
        description: "Rooms designed for 2 adults and 1 child.",
      },
      {
        title: "Clear Room Choices",
        description:
          "One Family Suite Room category across 12 rooms.",
      },
      {
        title: "Easy to Reach",
        description:
          "Call, WhatsApp, email, and map directions are always easy to access.",
      },
      {
        title: "Kanchipuram Stay",
        description:
          "A convenient accommodation option for tourists and families visiting Kanchipuram.",
      },
    ],
  },

  leadership: {
    heading: "The People Behind Your Stay.",
    welcomeText:
      "A personal welcome awaits at Temple Town Stay.",
    placeholderText:
      "PANDIAN K warmly welcomes every guest to Temple Town Stay. His vision is to create a calm, comfortable home away from home for families and travellers visiting Kanchipuram.",
    // TODO: FUTURE BACKEND - Replace these placeholders after verified owner/CEO details
    // and approved photo are received. Do not publish placeholders in the live site.
    ownerName: "PANDIAN K",
    ownerRole: "Founder & Host",
    ownerBio: "PANDIAN K is the founder and host of Temple Town Stay. With a passion for hospitality and a deep connection to Kanchipuram, he envisioned a comfortable, family-friendly retreat for travellers exploring the temple city. His goal is to make every guest feel at home from the moment they arrive.",
    ownerImage: "/images/owner/owner.jpg" // TODO: Replace with approved owner photo when received,
  },

  location: {
    heading: "Find Your Way to Temple Town Stay.",
  },

  faqs: [
    {
      id: "faq-1",
      question: "What type of room is available at Temple Town Stay?",
      answer: "Temple Town Stay offers Family Suite Rooms.",
    },
    {
      id: "faq-2",
      question: "How many guests can stay in one Family Suite Room?",
      answer: "Each room is designed for 2 adults and 1 child.",
    },
    {
      id: "faq-3",
      question: "How many rooms are available?",
      answer:
        "There are 12 Family Suite Rooms, with 6 rooms on the ground floor and 6 rooms on the first floor.",
    },
    {
      id: "faq-4",
      question: "What are the room numbers?",
      answer:
        "Ground-floor rooms are numbered 101 to 106, while first-floor rooms are numbered 201 to 206.",
    },
    {
      id: "faq-5",
      question: "What is the room tariff?",
      answer: "The Family Suite Room tariff is \u20B94,000 plus 5% GST.",
    },
    {
      id: "faq-6",
      question: "What are the extra bed charges?",
      answer:
        "An extra bed for an adult is \u20B9750 plus 5% GST, and an extra bed for a child is \u20B9500 plus 5% GST.",
    },
    {
      id: "faq-7",
      question: "How can I check room availability?",
      answer:
        "Call Temple Town Stay, send a WhatsApp enquiry, or email templetownstay@gmail.com to check availability.",
    },
  ] as FAQ[],

  contactSection: {
    heading: "Plan Your Stay With Us.",
    subheading:
      "For room availability, stay enquiries, or directions, connect with Temple Town Stay directly.",
  },

  seo: {
    title: "Temple Town Stay | Family Suite Rooms in Kanchipuram",
    description:
      "Stay comfortably in Kanchipuram at Temple Town Stay. Explore Family Suite Rooms for 2 adults and 1 child, with easy phone, WhatsApp, email, and map contact options.",
    ogImage: "/images/gallery/gallery-30.jpg",
  },
} as const;

export const roomData: RoomType = {
  id: "family-suite",
  name: "Family Suite Room",
  description:
    "A spacious family suite room designed for comfort, with room for 2 adults and 1 child.",
  occupancy: { adults: 2, children: 1 },
  basePrice: 4000,
  gstPercentage: 5,
  extraBed: {
    adult: { price: 750, gstPercentage: 5 },
    child: { price: 500, gstPercentage: 5 },
  },
  images: [
    { src: "/images/gallery/gallery-18.jpg", alt: "Family Suite Room interior" },
    { src: "/images/gallery/gallery-19.jpg", alt: "Family Suite Room living area" },
    { src: "/images/gallery/gallery-07.jpg", alt: "Family Suite Room entrance" },
  ],
  floorLayout: {
    totalRooms: 12,
    floors: [
      { level: "Ground Floor", roomNumbers: ["101", "102", "103", "104", "105", "106"] },
      { level: "First Floor", roomNumbers: ["201", "202", "203", "204", "205", "206"] },
    ],
  },
};

export function getWhatsAppUrl(message: string): string {
  const number = siteContent.contact.whatsAppNumber;
  if (number.includes("[WHATSAPP_NUMBER]")) {
    return "";
  }
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

export function getWhatsAppDefaultMessage(): string {
  return "Hello Temple Town Stay, I would like to check availability for a Family Suite Room.";
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getFormattedGst(price: number, gstPercent: number): string {
  return `${formatPrice(price)} + ${gstPercent}% GST`;
}
