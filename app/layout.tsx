import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "T Weds A ❤️",
  description: "#OnCloudRambaran2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="cupcake" lang="en">
      <head>
        <link rel="icon" href="/favicon.png"></link>
      </head>
      <body className="bg-base-100">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
