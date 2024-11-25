import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Juan J. Sebastian",
  description:
    "Explore the professional portfolio and personal projects of Juan J. Sebastian, a passionate Developer & Entrepreneur from Ecuador.",
  keywords: [
    "jjsebastiafuertes",
    "Juan J. Sebastian",
    "Developer",
    "Entrepreneur",
    "Ecuadorian",
    "Mobile",
    "Websites",
    "Galapagos",
    "sebastian fuertes",
    "seo"
  ],
  robots: "index, follow",
  openGraph: {
    title: "Juan J. Sebastian",
    description:
      "Explore the professional portfolio and personal projects of Juan J. Sebastian, a passionate Developer & Entrepreneur from Ecuador.",
    type: "website",
    url: "https://www.jjsebastianfuertes.com",
    images: "https://www.juanjsebastian.com/og-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jjsebastianf",
    creator: "@jjsebastianf",
    title: "Juan J. Sebastian",
    description:
      "Explore the professional portfolio and personal projects of Juan J. Sebastian, a passionate Developer & Entrepreneur from Ecuador.",
    images: "https://www.jjsebastianfuertes.com/og",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
