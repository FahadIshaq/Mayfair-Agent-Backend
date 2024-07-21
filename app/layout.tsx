import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Providers from "@/store/provider";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "VictorHarris",
  description: "Office Space to Rent in London, UK via Victor Harris",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <body className={inter.className}>
        <Providers>
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
