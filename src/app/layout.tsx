import { SITE_URL } from "@/app/site";
import type { Metadata, Viewport } from "next";
import { Lexend_Deca } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const bigShouldersDisplay = localFont({
  src: "../assets/fonts/big-shoulders-display-700.subset.woff2",
  variable: "--font-big-shoulders-display",
  weight: "700",
  display: "swap",
  declarations: [
    {
      prop: "unicode-range",
      value: "U+41, U+44-45, U+4c, U+4e, U+52-53, U+55-56, U+58-59",
    },
  ],
});

const name = "Milepost";
const title = `${name} | Rent sedans, SUVs and luxury cars`;
const description =
  "Three ways to rent a car: an affordable sedan, a spacious SUV, or a luxury model without the bloated prices. Compare each class and pick your drive.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "The Milepost name on the brand's orange, above a line about renting a sedan, an SUV or a luxury car.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: name,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#b65104",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lexendDeca.variable} ${bigShouldersDisplay.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
