import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SurcoDev's Home Page",
  description: "NextJS framework",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
