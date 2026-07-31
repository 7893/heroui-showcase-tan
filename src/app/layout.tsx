import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "HeroUI Showcase",
  description: "A glassmorphic UI showcase built with Next.js, HeroUI v3 and Framer Motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="noise">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
