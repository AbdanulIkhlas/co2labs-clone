import { Geist, Geist_Mono } from "next/font/google";
import { Orbitron } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/fragments/Navbar";
import Footer from "./components/fragments/Footer";

export const generalSansFont = localFont({
  src: "../app/fonts/GeneralSans-Medium.woff2",
  variable: "--font-generalSans",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CO2 Labs",
  description: "CO2 Labs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${generalSansFont.variable} ${orbitron.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
