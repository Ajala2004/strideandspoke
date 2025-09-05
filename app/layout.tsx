import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { DM_Sans } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Stride & Spoke — Walk Your Story | Premium Naija Footwear",
  description:
    "Stride & Spoke is a Naija footwear brand blending street-smart style with premium comfort. Based in Gombe, Nigeria — walk your story from the streets to the world.",
  keywords: [
    "Stride & Spoke",
    "Naija footwear",
    "streetwear shoes Nigeria",
    "Gombe fashion brand",
    "Nigeria palm slippers",
    "premium comfort shoes",
  ],
  applicationName: "Stride & Spoke",
  authors: [{ name: "Stride & Spoke" }],
  creator: "Stride & Spoke",
  publisher: "Stride & Spoke",
  generator: "Next.js",
  metadataBase: new URL("https://strideandspoke.vercel.app"), // Vercel domain now
  alternates: {
    canonical: "https://strideandspoke.vercel.app",
  },
  openGraph: {
    title: "Stride & Spoke — Walk Your Story",
    description:
      "Street-smart footwear brand blending Naija culture with global style. Walk your story with premium comfort.",
    url: "https://strideandspoke.vercel.app",
    siteName: "Stride & Spoke",
    images: [
      {
        url: "https://via.placeholder.com/1200x630.png?text=Stride+%26+Spoke", // Temporary OG image
        width: 1200,
        height: 630,
        alt: "Stride & Spoke — Walk Your Story",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stride & Spoke — Walk Your Story",
    description: "Street-smart Naija vibes. Premium comfort. Global style.",
    images: [
      "https://via.placeholder.com/1200x630.png?text=Stride+%26+Spoke",
    ],
    creator: "@strideandspoke",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#111111",
  manifest: "/site.webmanifest",
  category: "fashion",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Stride & Spoke" />
        <meta name="copyright" content="Stride & Spoke © 2025" />
        <link rel="canonical" href="https://strideandspoke.vercel.app" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body
        className={`font-sans bg-white text-gray-900 antialiased ${poppins.variable} ${dmSans.variable} ${GeistMono.variable}`}
      >
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />

        {/* Local SEO: Organization + LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Stride & Spoke",
              image:
                "https://via.placeholder.com/500x500.png?text=Stride+%26+Spoke",
              "@id": "https://strideandspoke.vercel.app",
              url: "https://strideandspoke.vercel.app",
              telephone: "+234-704-101-3001", 
              address: {
                "@type": "PostalAddress",
                streetAddress: "Gombe City",
                addressLocality: "Gombe",
                addressRegion: "Gombe State",
                postalCode: "760222", // Example postal code
                addressCountry: "NG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 10.2899, // Gombe approx lat
                longitude: 11.1673, // Gombe approx long
              },
              sameAs: [
                "https://instagram.com/strideandspoke",
                "https://twitter.com/strideandspoke",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
