export function formatPriceINR(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatPriceWithGST(price: number, gstPercent: number): string {
  return `${formatPriceINR(price)} + ${gstPercent}% GST`;
}
