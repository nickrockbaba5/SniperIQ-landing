import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FinScan - Institutional-Grade Financial Intelligence",
  description: "Advanced AI research platform combining 9 specialized engines for institutional-grade market analysis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
