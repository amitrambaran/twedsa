import type { Metadata } from "next";
import {
  Luxurious_Script,
  Cormorant_Garamond,
  Inter,
  Noto_Serif_JP,
} from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "T Weds A ❤️",
  description: "#OnCloudRambaran2025",
};

const luxuriousScript = Luxurious_Script({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-luxuriousScript",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-inter",
});

const noto = Noto_Serif_JP({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-noto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${luxuriousScript.variable} ${cormorant.variable} ${noto.variable} bg-[#B31E56]`}
    >
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`bg-base-100 rounded-lg`}>{children}</body>
    </html>
  );
}
