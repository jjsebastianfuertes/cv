import { useTranslations } from "next-intl";
import { CustomLink } from "../../shared/CustomLink";
import { ReactNode } from "react";

interface DescriptionProps {
  className?: string | undefined;
}

function link(href: string, rel?: string, target?: string) {
  function RichLink(chunks: ReactNode) {
    return (
      <CustomLink
        label={chunks as string}
        href={href}
        rel={rel}
        target={target}
      />
    );
  }
  return RichLink;
}

export const Description = ({ className }: DescriptionProps) => {
  const t = useTranslations("home");

  return (
    <section className={className}>
      <p className="text-6xl md:text-7xl font-bold">{t("greeting")}</p>
      <h1 className="text-2xl md:text-4xl font-bold my-6">{t("intro")}</h1>
      <h2 className="text-xl md:text-2xl my-4">{t("subtitle")}</h2>
      <p className="text-xl md:text-2xl my-4">
        {t.rich("companies", {
          tipti: link("https://tipti.market", "external"),
          shappi: link("https://shappi.com", "external"),
          nexiu: link("https://jobs.nexiu.ai", "external"),
          studioNativa: link("https://studionativa.com", "external"),
          livePahoehoe: link("https://livepahoehoe.com", "external"),
          turismoParadise: link("https://turismoparadise.com", "external"),
          quipo: link("https://quipo.delivery", "external"),
          roky: link("https://rokytraining.com", "external"),
        })}
      </p>
      <p className="text-xl md:text-2xl my-4">
        {t.rich("hobbies", {
          bookworm: link("https://www.goodreads.com/jjsebastianfuertes"),
          ig: link("https://www.instagram.com/jjsebastianfuertes/"),
          medium: link("https://jjsebastianfuertes.medium.com/"),
          x: link("https://x.com/jjsebastianf"),
        })}
      </p>
      <p className="text-xl md:text-2xl my-6">
        <span className="font-bold">{t("career")}</span>{" "}
        {t.rich("careerCta", {
          linkedin: link("https://www.linkedin.com/in/jjsebastianfuertes/"),
        })}
      </p>
      <p className="text-xl md:text-2xl my-6">
        <span className="font-bold">{t("stack")}</span>{" "}
        {t.rich("stackCta", {
          github: link("https://github.com/jjsebastianfuertes"),
          codepen: link("https://codepen.io/jjsebastianfuertes"),
        })}
      </p>
      <p className="text-xl md:text-2xl my-16">
        <span className="font-bold">
          {t.rich("connect", {
            connect: link(
              "mailto:info@jjsebastianfuertes.com",
              undefined,
              "_self",
            ),
          })}
        </span>{" "}
        {t("connectCta")}
      </p>
    </section>
  );
};
