import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // 👈 1. Import Navbar
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akhilesh | Software Engineer",
  description: "Portfolio of a software engineer specializing in scalable systems.",
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