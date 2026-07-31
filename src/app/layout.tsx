import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "NEXUS — UI Showcase",
  description: "A stunning Next.js + HeroUI showcase with glassmorphism and smooth animations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="noise">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
