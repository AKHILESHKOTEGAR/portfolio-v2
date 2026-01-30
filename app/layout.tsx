import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar"; // Importing from your new folder
import "./globals.css";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}