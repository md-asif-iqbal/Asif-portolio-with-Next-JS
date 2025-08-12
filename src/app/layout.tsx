import type { Metadata } from "next";
import "./globals.css";
import Background from "@/components/Background";
import Spotlight from "@/components/Spotlight";
import Socials from "@/components/Socials";

export const metadata: Metadata = {
  title: "M D. Asif Iqbal – Portfolio",
  description: "MERN Stack Developer building scalable, secure web applications.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "M D. Asif Iqbal – Portfolio",
    description: "MERN Stack Developer building scalable, secure web applications.",
    url: "https://example.com",
    siteName: "Asif Iqbal Portfolio",
    images: [
      { url: "/next.svg", width: 1200, height: 630, alt: "Portfolio" },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Background />
        <Spotlight />
        <Socials />
        {children}
      </body>
    </html>
  );
}
