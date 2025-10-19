import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { ClientThemeProvider } from "@/components/ClientThemeProvider";
import Footer from "../components/navbar/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunleaf-System",
  description: "Your IT Companion..",
  keywords: ["IT services", "web development", "mobile app development", "cloud services", "UX/UI design", "digital strategy"],
  authors: [{ name: "Sunleaf System" }],
  creator: "Sunleaf System",
  publisher: "Sunleaf System",
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sunleaf-system.com',
    title: 'Sunleaf-System',
    description: 'Your IT Companion..',
    siteName: 'Sunleaf-System',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunleaf-System',
    description: 'Your IT Companion..',
  },
  icons: {
    icon: "/sunleaf2.png",
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
        <ClientThemeProvider>
          <Navbar />
          {children}
          <Footer/>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
