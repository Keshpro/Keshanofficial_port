import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keshan Panditharathna | Portfolio",
  description: "Web Developer & Software Engineering Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0a] text-gray-200`}>
        <Navbar />
        {/* Navbar eka fixed nisa, main content eka yatata yanne nathi wenna pt-24 (padding-top) denawa */}
        <div className="pt-24">{children}</div>
      </body>
    </html>
  );
}