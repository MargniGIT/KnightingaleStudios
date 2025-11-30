import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Knightingale Studios | Indie Game Development",
  description: "Crafting epic dark fantasy experiences through innovative indie game development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="antialiased overflow-visible">
        {children}
      </body>
    </html>
  );
}
