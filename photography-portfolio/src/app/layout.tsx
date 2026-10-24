import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-serif" });

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.photographerName} — Photographer`,
    template: `%s | ${siteConfig.photographerName}`
  },
  description: "A photography portfolio exploring people, places, products and the moments in between.",
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    title: `${siteConfig.photographerName} — Photographer`,
    description: "Stories, framed with intention.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmSerif.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
