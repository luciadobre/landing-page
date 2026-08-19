import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/app/components/@molecules/Header/Header";
import { Footer } from "@/app/components/@molecules/Footer/Footer";
import { SITE_CONFIG } from "@/app/config/site";

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen overflow-x-hidden bg-background text-sm leading-7 text-accent antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
