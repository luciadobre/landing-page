import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/app/components/@molecules/Header/Header";
import { SITE_CONFIG } from "@/app/config/site";

export const metadata: Metadata = {
  title: "Lucia | Frontend Dev",
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
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 bg-accent px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-background transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  );
}
