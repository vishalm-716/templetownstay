// TODO: FUTURE BACKEND
// This service file provides placeholder interfaces for a future booking engine.
// Replace static implementations with actual API calls when backend is integrated.

import type { BookingInquiry } from "@/types/booking";

// TODO: FUTURE BACKEND - Replace with actual API call
export async function submitBookingInquiry(
  inquiry: Omit<BookingInquiry, "id" | "createdAt">
): Promise<{ success: boolean; message: string }> {
  // Static placeholder — does not persist data
  console.log("Booking inquiry (static mode):", inquiry);
  return {
    success: true,
    message: "Inquiry received. Please contact us via WhatsApp for confirmation.",
  };
}

// TODO: FUTURE BACKEND - Replace with database query
export async function checkAvailability(
  _checkIn: string,
  _checkOut: string,
  _roomType?: string
): Promise<{ available: boolean; roomsRemaining?: number }> {
  // Static placeholder — always returns available
  return { available: true, roomsRemaining: undefined };
}

// TODO: FUTURE BACKEND - Replace with database query
export async function getRoomRates(): Promise<
  Array<{
    roomType: string;
    basePrice: number;
    gstPercentage: number;
  }>
> {
  return [
    { roomType: "Family Suite Room", basePrice: 4000, gstPercentage: 5 },
  ];
}
