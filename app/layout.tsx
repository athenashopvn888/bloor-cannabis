import type { Metadata } from "next";
import "./globals.css";
import AgeGate from "./components/AgeGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://bloorcannabisdispensary.com"),
  title: {
    default: "Bloor Cannabis Dispensary — Premium Cannabis Dispensary, Toronto",
    template: "%s | Bloor Cannabis Dispensary",
  },
  description:
    "Shop 200+ premium cannabis strains at Bloor Cannabis Dispensary. Exotic, Premium, AAA+, AA & Budget flower from $3/g. Toronto's uplifting dispensary at 993 Bloor St W. Open Mon-Thu: 11 AM - 11 PM, Fri-Sat: 11 AM - 3 AM, Sun: 11 AM - 11 PM.",
  keywords: [
    "cannabis dispensary Toronto",
    "weed store Toronto",
    "exotic flower Toronto",
    "premium cannabis",
    "Bloor Cannabis Dispensary",
    "cheap weed Toronto",
    "dispensary near me",
    "THC flower",
    "indica sativa hybrid",
    "edibles Toronto",
    "vapes",
    "pre-rolls",
    "native cigarettes Toronto",
    "weed store Mississauga",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://bloorcannabisdispensary.com",
    siteName: "Bloor Cannabis Dispensary",
    title: "Bloor Cannabis Dispensary — Premium Toronto Cannabis Dispensary",
    description:
      "200+ strains from $3/g. Exotic to Budget. Toronto's uplifting dispensary at 993 Bloor St W. Open Mon-Thu: 11 AM - 11 PM, Fri-Sat: 11 AM - 3 AM, Sun: 11 AM - 11 PM.",
    images: [
      {
        url: "https://bloorcannabisdispensary.com/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "Bloor Cannabis Dispensary — Premium Cannabis Dispensary Toronto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloor Cannabis Dispensary — Toronto's Uplifting Dispensary",
    description: "200+ strains from $3/g. Mon-Thu: 11:00 AM - 11:00 PM, Fri-Sat: 11:00 AM - 03:00 AM, Sun: 11:00 AM - 11:00 PM at 993 Bloor St W, Toronto.",
    images: ["https://bloorcannabisdispensary.com/wp-content/uploads/2026/04/46Oi5.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://bloorcannabisdispensary.com",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  additionalType: "https://schema.org/Store",
  "@id": "https://bloorcannabisdispensary.com",
  name: "Bloor Cannabis Dispensary",
  description: "Cannabis dispensary at 993 Bloor St W in Toronto, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Mon-Thu: 11:00 AM - 11:00 PM, Fri-Sat: 11:00 AM - 03:00 AM, Sun: 11:00 AM - 11:00 PM.",
  url: "https://bloorcannabisdispensary.com",
  telephone: "+14372239353",
  image: "https://bloorcannabisdispensary.com/wp-content/uploads/2026/04/7Clmh.jpg",
  priceRange: "$3 - $12/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: "993 Bloor St W",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M6H 1M1",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.6609278,
    longitude: -79.4299091,
  },
  openingHoursSpecification: [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Sunday"
    ],
    "opens": "11:00",
    "closes": "23:00"
  },
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Friday",
      "Saturday"
    ],
    "opens": "11:00",
    "closes": "03:00"
  }
],
  sameAs: [
    "https://bloorcannabisdispensary.com/",
    "https://bloorcannabisdispensary.com/",
  ],
  hasMap: "https://bloorcannabisdispensary.com/",
  areaServed: {
    "@type": "City",
    name: "Toronto",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        <meta name="geo.position" content="43.6609278;-79.4299091" />
        <meta name="ICBM" content="43.6609278, -79.4299091" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TTEQ4M34CS"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TTEQ4M34CS');
            `
          }}
        />
      </head>
      <body>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
