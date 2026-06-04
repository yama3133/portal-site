import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: 本番 URL が決まったら環境変数 NEXT_PUBLIC_SITE_URL に設定してください
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
const pageTitle = `${profile.nameEn} — ${profile.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: profile.tagline,
  openGraph: {
    title: pageTitle,
    description: profile.tagline,
    url: siteUrl,
    siteName: profile.nameEn,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: profile.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: "#07070d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
