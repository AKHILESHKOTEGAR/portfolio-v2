import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // 👈 1. Import Navbar
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Akhilesh Kotegar | Software Engineer",
    template: "%s | Akhilesh Kotegar",
  },
  description: "Software Engineer & Master's Student at TH Deggendorf. Specializing in Distributed Systems, AI, and Cloud Architecture (AWS/GCP).",
  icons: {
    icon: "/favicon.ico", // You can add a favicon later if you want
  },
  openGraph: {
    title: "Akhilesh Kotegar | Software Engineer",
    description: "Portfolio of a software engineer specializing in scalable systems and AI.",
    url: "https://your-website-url.vercel.app", // 👈 REPLACE with your actual Vercel link later
    siteName: "Akhilesh Kotegar Portfolio",
    images: [
      {
        url: "/opengraph-image.png", // We will create this simple placeholder next
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar /> {/* 👈 2. Add Navbar inside the Provider */}
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}