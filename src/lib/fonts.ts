import { Work_Sans, Inter } from "next/font/google";

// Font pairing locked by the Stitch design system (ai/research/design-system.md) —
// both fonts confirmed on the Stitch API's known-good font enum (avoiding
// Fraunces/Karla/Bitter/Source Sans Pro, which failed enum validation earlier
// tonight). Distinct pairing from every other site in this batch.
export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const headingFont = Work_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  display: "swap",
});
