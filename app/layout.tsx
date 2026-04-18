import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://www.thetoothclinics.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Tooth Clinic | Best Dentist in Sarita Vihar ",
    template: "%s | The Tooth Clinic"
  },
  description:
    "Affordable dental care in Sarita Vihar, Delhi by Dr. Shourya Poswal. Root canal, braces, aligners, implants, cleaning, whitening, EMI and UPI payment options.",
  keywords: [
    "best dentist in Sarita Vihar",
    "root canal Sarita Vihar",
    "braces Sarita Vihar Delhi",
    "dental clinic Sarita Vihar",
    "affordable dentist Delhi",
    "dental implants Delhi"
  ],
  openGraph: {
    title: "The Tooth Clinic | Best Dentist in Sarita Vihar, Delhi",
    description:
      "Pain relief, smile correction and family dental care with flexible payments in Sarita Vihar, Delhi.",
    url: siteUrl,
    siteName: "The Tooth Clinic",
    locale: "en_IN",
    type: "website"
  },
  alternates: {
    canonical: siteUrl
  },
  icons: {
    icon: [
      {
        url: "/icon.jpg",
        type: "image/jpeg"
      }
    ],
    shortcut: "/icon.jpg",
    apple: "/icon.jpg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
