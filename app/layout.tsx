import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import IntroAnimation from "./IntroAnimation";
import CustomCursor from "./CustomCursor";
import { AppProvider } from "@/contexts/AppContext";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ATTOM Agency",
  description:
    "Brand strategy, creative direction and digital growth — built from the inside out.",
  openGraph: {
    title: "ATTOM Agency",
    description:
      "Brand strategy, creative direction and digital growth — built from the inside out.",
    url: "https://attom.agency",
    siteName: "ATTOM Agency",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppProvider>
          <IntroAnimation />
          <CustomCursor />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}