import type { Metadata } from "next";
import { Lunasima } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Juan J. Sebastian",
  description:
    "Explore the professional portfolio and personal projects of Juan J. Sebastian, a passionate Developer & Entrepreneur from Galapagos - Ecuador.",
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
    "seo",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Juan J. Sebastian",
    description:
      "Explore the professional portfolio and personal projects of Juan J. Sebastian, a passionate Developer & Entrepreneur from Ecuador.",
    type: "website",
    url: "https://www.jjsebastianfuertes.com",
    images: "/images/profile.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jjsebastianf",
    creator: "@jjsebastianf",
    title: "Juan J. Sebastian",
    description:
      "Explore the professional portfolio and personal projects of Juan J. Sebastian, a passionate Developer & Entrepreneur from Ecuador.",
    images: "/images/profile.jpg",
  },
};

const notoSansMono = Lunasima({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSansMono.className}>
      <body>{children}</body>
    </html>
  );
}
