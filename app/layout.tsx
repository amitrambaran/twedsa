import type { Metadata } from "next";
import { Great_Vibes, Inter, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "T Weds A ❤️",
  description: "#OnCloudRambaran2025",
};

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-greatVibes",
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
      className={`${inter.variable} ${greatVibes.variable} ${noto.variable} bg-[#B31E56]`}
    >
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`bg-base-100`}>{children}</body>
    </html>
  );
}
