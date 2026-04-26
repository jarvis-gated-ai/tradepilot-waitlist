import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FLDWRK — AI-native field service for the trades",
  description:
    "Run your plumbing, HVAC, or electrical business from your truck. Voice-first. AI-powered. No laptop required.",
  openGraph: {
    title: "FLDWRK — AI-native field service for the trades",
    description:
      "Voice-first job management for plumbers, HVAC techs, and electricians. Dictate notes, get AI quotes, track your truck — all hands-free.",
    type: "website",
    url: "https://fldwrk.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "FLDWRK — AI-native field service for the trades",
    description:
      "Voice-first job management for plumbers, HVAC techs, and electricians.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
