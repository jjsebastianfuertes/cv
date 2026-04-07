import type { Metadata } from "next";
import { Lunasima } from "next/font/google";
import "../globals.css";
import { ProfilePage, WithContext } from "schema-dts";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const notoSansMono = Lunasima({
  weight: ["400", "700"],
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
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
      description: t("ogDescription"),
      type: "website",
      url: "https://www.jjsebastianfuertes.com",
      images: "/images/profile.jpg",
    },
    twitter: {
      card: "summary_large_image",
      site: "@jjsebastianf",
      creator: "@jjsebastianf",
      title: "Juan J. Sebastian",
      description: t("ogDescription"),
      images: "/images/profile.jpg",
    },
    alternates: {
      canonical: "https://www.jjsebastianfuertes.com",
      languages: {
        en: "https://www.jjsebastianfuertes.com",
        es: "https://www.jjsebastianfuertes.com/es",
        "x-default": "https://www.jjsebastianfuertes.com",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "metadata" });

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
      description: t("ogDescription"),
      image: {
        "@type": "ImageObject",
        url: "https://www.jjsebastianfuertes.com/images/profile.jpg",
      },
    },
  };

  return (
    <html lang={locale} className={notoSansMono.className}>
      <head>
        <GoogleAnalytics gaId="G-4DG2JTLNM9" debugMode />
        <Script
          id="profile-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="bg-background text-foreground"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
