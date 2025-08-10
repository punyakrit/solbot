import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SolBot | Real-Time Solana Trading on Discord",
  description: "SolBot is a Discord-native trading bot that lets users track token prices, manage portfolios, and execute Solana trades using Jupiter and Phoenix—all without leaving chat.",
  keywords: [
    "SolBot",
    "Solana",
    "Discord Bot",
    "Crypto Trading Bot",
    "Jupiter Aggregator",
    "Phoenix DEX",
    "DeFi Tools",
    "Solana Trading",
    "Web3",
    "Token Price Alert",
    "On-chain Trading",
    "Real-time Portfolio",
    "Solana Wallet Bot"
  ],
  openGraph: {
    title: "SolBot | Real-Time Solana Trading on Discord",
    description: "Track, simulate, and execute Solana trades directly from Discord with SolBot. Powered by Jupiter & Phoenix for seamless DeFi.",
    url: "https://sol-bot-discord.vercel.app/",
    siteName: "SolBot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolBot | Real-Time Solana Trading on Discord",
    description: "Trade on Solana right from Discord. SolBot lets you price, simulate, and swap tokens in seconds.",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
