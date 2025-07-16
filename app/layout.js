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

export const metadata = {
  title: "Julio Tejeda | Profile",
  description: "Full-Stack Developer portfolio of Julio Tejeda.",
  keywords: ["Julio Tejeda", "Full-Stack Developer", "Portfolio", "Next.js"],
  authors: [{ name: "Julio Tejeda" }],
  openGraph: {
    title: "Julio Tejeda | Profile",
    description: "Full-Stack Developer portfolio of Julio Tejeda.",
    siteName: "Julio Tejeda Portfolio",
    images: [
      {
        url: "/favicon.ico",
        width: 48,
        height: 48,
        alt: "Julio Tejeda",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};