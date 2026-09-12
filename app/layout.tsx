import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keshan Panditharathna | Portfolio",
  description:
    "Software Engineering undergraduate, Web Developer, UI/UX Designer and Problem Solver.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} relative min-h-screen bg-[#07101b] text-gray-200 antialiased`}
      >
        {/* =====================================================
            FIXED GLOBAL BACKGROUND IMAGE
        ===================================================== */}
        <div
          className="
            pointer-events-none
            fixed inset-0
            z-0
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: "url('/image/heroback.png')",
          }}
          aria-hidden="true"
        />

        {/* =====================================================
            DARK OVERLAY

            Content readability + midnight blue portfolio theme
        ===================================================== */}
        <div
          className="
            pointer-events-none
            fixed inset-0
            z-1
            bg-[#06101d]/70
          "
          aria-hidden="true"
        />

        {/* =====================================================
            CINEMATIC GRADIENT
        ===================================================== */}
        <div
          className="
            pointer-events-none
            fixed inset-0
            z-[2]
            bg-gradient-to-b
            from-[#06101d]/30
            via-transparent
            to-[#06101d]/80
          "
          aria-hidden="true"
        />

        {/* =====================================================
            SUBTLE GOLD ATMOSPHERE
        ===================================================== */}
        <div
          className="
            pointer-events-none
            fixed
            -bottom-[20%]
            -right-[10%]
            z-[3]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#D4AF37]/[0.06]
            blur-[180px]
          "
          aria-hidden="true"
        />

        {/* =====================================================
            WEBSITE CONTENT
        ===================================================== */}
        <div className="relative z-10">
          <Navbar />

          {/* Navbar is fixed */}
          <main className="pt-24">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}