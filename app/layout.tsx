import Providers from "./providers";
import "./globals.css";

import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Settings } from "@/components/settings";

const analyticsDomain = process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN;
const analyticsScriptUrl = process.env.NEXT_PUBLIC_ANALYTICS_SCRIPT_URL;

const siteUrl = "https://narayanmishra.vercel.app"; // Replace with your actual site URL

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Narayan Mishra",
    template: "%s – Narayan Mishra",
  },
  description:
    "Full-Stack developer, AI & ML Engineer, Freelancer and a Learner.",
  openGraph: {
    title: "Narayan Mishra",
    description:
      "Full-Stack developer, AI & ML Engineer, Freelancer and a Learner.",
    url: siteUrl,
    siteName: "Narayan Mishra",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Narayan Mishra",
    description:
      "Full-Stack developer, AI & ML Engineer, Freelancer and a Learner.",
  },
};

const inter = localFont({
  src: [
    { path: "../public/fonts/inter-400.ttf", weight: "400" },
    { path: "../public/fonts/inter-500.ttf", weight: "500" },
    { path: "../public/fonts/inter-600.ttf", weight: "600" },
    { path: "../public/fonts/inter-700.ttf", weight: "700" },
  ],
  variable: "--font-inter",
});

const schibstedGrotesk = localFont({
  src: [
    { path: "../public/fonts/schibsted-grotesk-400.ttf", weight: "400" },
    { path: "../public/fonts/schibsted-grotesk-500.ttf", weight: "500" },
    { path: "../public/fonts/schibsted-grotesk-600.ttf", weight: "600" },
    { path: "../public/fonts/schibsted-grotesk-700.ttf", weight: "700" },
  ],
  variable: "--font-schibsted-grotesk",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn(
        inter.variable,
        schibstedGrotesk.variable,
        GeistSans.variable,
        "font-sans antialiased",
      )}
      suppressHydrationWarning
    >
      <body className={cn("font-display bg-theme-bg")}>
        <Settings />
        <Navbar />
        <main>
          <Providers>{children}</Providers>
        </main>
        <Footer />
        {analyticsDomain && analyticsScriptUrl ? (
          <Script
            src={analyticsScriptUrl}
            data-domain={analyticsDomain}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
