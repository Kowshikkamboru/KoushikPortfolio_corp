import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#111512",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "Amboru Koushik | Software Engineer, AI Builder, Product Systems",
  description:
    "Portfolio of Amboru Koushik: production Flutter apps, AI/ML research, GenAI systems, data workflows, and product engineering case studies.",
  keywords: [
    "Amboru Koushik",
    "Software Engineer",
    "AI Engineer",
    "Flutter",
    "Next.js",
    "Data Analyst",
    "IEEE Published Author",
    "GenAI",
    "Portfolio",
  ],
  authors: [{ name: "Amboru Koushik" }],
  openGraph: {
    title: "Amboru Koushik | Software Engineer, AI Builder, Product Systems",
    description:
      "Production apps, IEEE AI/ML research, patent-filed innovation, and product engineering case studies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
