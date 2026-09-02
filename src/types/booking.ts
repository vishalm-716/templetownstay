export interface BookingInquiry {
  id: string;
  guestName: string;
  phone: string;
  checkInDate?: string;
  checkOutDate?: string;
  numberOfGuests: number;
  message: string;
  createdAt: string;
}

export interface ContactInfo {
  phoneDisplay: string;
  phoneE164: string;
  email: string;
  whatsAppNumber: string;
  googleMapsDirectionsUrl: string;
  googleMapsEmbedUrl: string;
}
