import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { StickyMobileCTA } from "@/components/shared/StickyMobileCTA";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  title: {
    default: `${site.businessName} — Your Guide to Spray Foam Certification, Recertification & State Licensing`,
    template: `%s | ${site.businessName}`,
  },
  description:
    "A neutral guide to spray foam applicator certification — SPFA PCP, manufacturer programs, state licensing requirements, and recertification/CEU renewal — explained honestly, without selling you a course.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.businessName,
    title: `${site.businessName} — Your Guide to Spray Foam Certification, Recertification & State Licensing`,
    description:
      "A neutral guide to spray foam applicator certification, recertification, and state licensing requirements.",
    images: [
      {
        url: "/images/hero-certification-review.jpg",
        width: 1200,
        height: 630,
        alt: site.businessName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.businessName} — Your Guide to Spray Foam Certification, Recertification & State Licensing`,
    description:
      "A neutral guide to spray foam applicator certification, recertification, and state licensing requirements.",
    images: ["/images/hero-certification-review.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.businessName,
  description:
    "A neutral navigator for spray foam applicator certification, recertification, and state licensing requirements — backed by Contractors Choice Agency.",
  url: site.url,
  telephone: site.phoneDigits,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  areaServed: "US",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <SmoothScroll>
          {children}
          <StickyMobileCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
