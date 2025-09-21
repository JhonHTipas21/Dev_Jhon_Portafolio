import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Plus_Jakarta_Sans } from "next/font/google";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";


const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    type: "website",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={font.className}>
        <Header />
        <main className="container py-10">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
