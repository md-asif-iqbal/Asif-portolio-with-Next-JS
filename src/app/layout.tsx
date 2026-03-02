import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import Spotlight from "@/components/Spotlight";
import Socials from "@/components/Socials";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Md. Asif Iqbal – Software Engineer",
  description:
    "Software Engineer with 2+ years of experience building production-grade web apps using MERN stack, Next.js & TypeScript.",
  metadataBase: new URL("https://asif-portfolio-three.vercel.app"),
  openGraph: {
    title: "Md. Asif Iqbal – Software Engineer",
    description:
      "Software Engineer with 2+ years of experience building production-grade web apps using MERN stack, Next.js & TypeScript.",
    url: "https://asif-portfolio-three.vercel.app",
    siteName: "Asif Iqbal Portfolio",
    images: [{ url: "/next.svg", width: 1200, height: 630, alt: "Portfolio" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.className}`}>
      <body className="antialiased noise">
        <Background />
        <Spotlight />
        <Socials />
        {children}
      </body>
    </html>
  );
}
