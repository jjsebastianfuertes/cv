import { CustomLink } from "../../shared/CustomLink";

interface DescriptionProps {
  className?: string | undefined;
}

export const Description = ({ className }: DescriptionProps) => {
  return (
    <section className={className}>
      <p className="text-6xl md:text-7xl font-bold">
        HEY THERE!
      </p>
      <h1 className="text-2xl md:text-4xl font-bold my-6">
        I&apos;m Juan J. Sebastián.
      </h1>
      <h2 className="text-xl md:text-2xl my-4">
        {" "}
        A tech-loving problem solver. I lead teams to build amazing products
        that make a difference.
      </h2>
      <p className="text-xl md:text-2xl my-4">
        I&apos;ve worked with awesome companies like{" "}
        <CustomLink label="Tipti" rel="external" href="https://tipti.market" />
        , <CustomLink label="Shappi" rel="external" href="https://shappi.com" />
        , and{" "}
        <CustomLink label="Nexiu" rel="external" href="https://jobs.nexiu.ai" />
        , and co-founding a few startups:{" "}
        <CustomLink
          label="Studio Nativa"
          rel="external"
          href="https://studionativa.com"
        />
        ,{" "}
        <CustomLink
          label="Live Pahoehoe"
          rel="external"
          href="https://livepahoehoe.com"
        />
        ,{" "}
        {/* , <CustomLink label="D'Pagando" rel="external" href="#" />, and{" "} */}
        <CustomLink
          label="Turismo Paradise"
          rel="external"
          href="https://turismoparadise.com"
        />{" "}
        and{" "}
        <CustomLink
          label="Quipo"
          rel="external"
          href="https://quipo.delivery"
        />
      </p>
      <p className="text-xl md:text-2xl my-4">
        Outside of work, I&apos;m a{" "}
        <CustomLink
          label="bookworm"
          href="https://www.goodreads.com/jjsebastianfuertes"
        />
        , a traveler and a writer on{" "}
        <CustomLink
          label="Medium"
          href="https://jjsebastianfuertes.medium.com/"
        />
        . You can also find me on{" "}
        <CustomLink label="X" href="https://x.com/jjsebastianf" /> discussing
        tech, design, and politics.
      </p>
      <p className="text-xl md:text-2xl my-6">
        <span className="font-bold">
          Curious about my career journey?
        </span>{" "}
        Check out my{" "}
        <CustomLink
          label="LinkedIn"
          href="https://www.linkedin.com/in/jjsebastianfuertes/"
        />
      </p>
      <p className="text-xl md:text-2xl my-6">
        <span className="font-bold">
          Would like to know more about my stack?
        </span>{" "}
        Dive into my world at{" "}
        <CustomLink
          label="Github"
          href="https://github.com/jjsebastianfuertes"
        />{" "}
        &{" "}
        <CustomLink
          label="CodePen"
          href="https://codepen.io/jjsebastianfuertes"
        />
      </p>
      <p className="text-xl md:text-2xl my-16">
        <span className="font-bold">
          Ready to{" "}
          <CustomLink
            label="connect"
            href="mailto:info@jjsebastianfuertes.com"
            target="_self"
          />
          ?
        </span>{" "}
        Let&apos;s build something cool together!
      </p>
    </section>
  );
};
