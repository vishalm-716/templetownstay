import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/data/siteContent";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  metadataBase: new URL("https://templetownstay.com"),
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    images: [{ url: siteContent.seo.ogImage, width: 1200, height: 630 }],
    type: "website",
    locale: "en_IN",
    siteName: siteContent.businessName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    images: [siteContent.seo.ogImage],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

const lodgingBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: siteContent.businessName,
  description: siteContent.seo.description,
  url: "https://templetownstay.com",
  telephone: siteContent.contact.phoneE164,
  email: siteContent.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteContent.city,
    addressRegion: siteContent.state,
    addressCountry: siteContent.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.869588687436464,
    longitude: 79.69169712483954,
  },
  numberOfRooms: "12",
  maximumAttendeeCapacity: 3,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteContent.businessName,
  description: siteContent.seo.description,
  image: siteContent.seo.ogImage,
  telephone: siteContent.contact.phoneE164,
  email: siteContent.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteContent.city,
    addressRegion: siteContent.state,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.869588687436464,
    longitude: 79.69169712483954,
  },
  url: "https://templetownstay.com",
  priceRange: "4000 INR",
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: siteContent.faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      </head>
      <body className="min-h-screen bg-cream antialiased" style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
