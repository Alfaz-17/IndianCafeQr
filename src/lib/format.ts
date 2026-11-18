export const formatPrice = (n: number | null): string =>
  n === null
    ? "MRP"
    : new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(n);

export const formatPriceShort = (n: number | null): string =>
  n === null ? "MRP" : `₹${n}`;
