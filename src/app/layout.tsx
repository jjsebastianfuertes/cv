import type { Metadata } from "next";
import { Lunasima } from "next/font/google";
import "./globals.css";
import { ProfilePage, WithContext } from "schema-dts";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Juan J. Sebastian | Entrepreneur & Tech Lead",
  description:
    "Tech Lead and Entrepreneur guiding teams to build scalable products that solve complex problems and generate meaningful social impact.",
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
  alternates: {
    canonical: "https://www.jjsebastianfuertes.com",
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
  const jsonLd: WithContext<ProfilePage> = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://www.jjsebastianfuertes.com",
    mainEntity: {
      "@type": "Person",
      name: "Juan J. Sebastian",
      familyName: "Fuertes Salcedo",
      givenName: "Juan Jose Sebastian",
      alternateName: "Sebastian Fuertes",
      identifier: "jjsebastianfuertes",
      jobTitle: "Entrepreneur & Tech Lead",
      birthDate: "1995-11-06",
      email: "info@jjsebastianfuertes.com",
      telephone: "+593 99 258 3955",
      nationality: {
        "@type": "Country",
        name: "Ecuador",
        alternateName: "EC",
      },
      knowsAbout: [
        "Mobile Development",
        "Web Development",
        "Tech Lead",
        "Head of Development",
        "Entrepreneurship",
        "Project Management",
        "Agile Methodologies",
        "Team Leadership",
        "Problem Solving",
        "Communication",
        "Collaboration",
        "Creativity",
        "Adaptability",
        "Time Management",
        "Critical Thinking",
        "User Experience Design",
      ],
      skills: [
        "JavaScript",
        "TypeScript",
        "Dart",
        "PHP",
        "SQL",
        "MySQL",
        "PostgreSQL",
        "Flutter",
        "Laravel",
        "Vue",
        "React",
        "Node.js",
        "Next.js",
        "RESTful APIs",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Git",
        "Agile Methodologies",
        "Scrum",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Juan Leon Mera",
        addressLocality: "Galapagos",
        addressRegion: "Santa Cruz",
        addressCountry: "EC",
        postalCode: "200102",
      },
      workLocation: [
        {
          "@type": "Place",
          name: "Santa Cruz",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Galapagos",
            addressRegion: "Santa Cruz",
            addressCountry: "EC",
          },
        },
        {
          "@type": "Place",
          name: "Quito",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Quito",
            addressRegion: "Pichincha",
            addressCountry: "EC",
          },
        },
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Universidad San Francisco de Quito",
        alternateName: "USFQ",
        sameAs: "https://www.usfq.edu.ec",
      },
      sameAs: [
        "https://www.linkedin.com/in/jjsebastianfuertes",
        "https://www.github.com/jjsebastianfuertes",
        "https://www.instagram.com/jjsebastianfuertes",
        "https://x.com/jjsebastianf",
      ],
      url: "https://www.jjsebastianfuertes.com",
      description:
        "Explore the professional portfolio and personal projects of Juan J. Sebastian, a passionate Developer & Entrepreneur from Ecuador.",
      image: {
        "@type": "ImageObject",
        url: "https://www.jjsebastianfuertes.com/images/profile.jpg",
      },
    },
  };
  return (
    <html lang="en" className={notoSansMono.className}>
      <head>
        <GoogleAnalytics gaId="G-4DG2JTLNM9" debugMode />
        <Script
          id="profile-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground" suppressHydrationWarning>{children}</body>
    </html>
  );
}
