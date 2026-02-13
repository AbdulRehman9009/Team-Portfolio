import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Team Portfolio - Elite Web Development & Design Agency",
  description: "Transform your ideas into high-performing web applications. Expert team specializing in web development, automation, UI/UX design, and SEO optimization. 100+ successful projects delivered.",
  keywords: ["web development", "UI/UX design", "automation", "SEO optimization", "full stack development", "team portfolio"],
  authors: [{ name: process.env.NEXT_PUBLIC_SITE_NAME || "Team Portfolio" }],
  creator: process.env.NEXT_PUBLIC_SITE_NAME || "Team Portfolio",
  publisher: process.env.NEXT_PUBLIC_SITE_NAME || "Team Portfolio",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://teamportfolio.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://teamportfolio.com",
    title: "Team Portfolio - Elite Web Development & Design",
    description: "Expert web development team delivering high-performance digital solutions. Specializing in custom code, SEO-first architecture, and scalable systems.",
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "Team Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Portfolio - Elite Web Development",
    description: "Transform your ideas into high-performing web applications with our expert team.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when ready for production
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
