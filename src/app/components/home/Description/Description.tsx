import { CustomLink } from "../../shared/CustomLink";

interface DescriptionProps {
  className?: string | undefined;
}

export const Description = ({ className }: DescriptionProps) => {
  return (
    <section className={className}>
      <p className="text-6xl md:text-7xl font-bold text-slate-900">
        HEY THERE!
      </p>
      <h1 className="text-2xl md:text-4xl font-bold text-slate-900 my-6">
        I&apos;m Juan J. Sebastián.
      </h1>
      <p className="text-xl md:text-2xl my-4">
        {" "}
        A tech-loving problem solver. I lead teams to build amazing products
        that make a difference.
      </p>
      <p className="text-xl md:text-2xl my-4">
        I&apos;ve worked with awesome companies like{" "}
        <CustomLink label="Tipti" rel="external" href="https://tipti.market" />{" "}
        and{" "}
        <CustomLink label="Shappi" rel="external" href="https://shappi.com" />,
        and co-founding a few startups:{" "}
        <CustomLink label="Merkat" rel="external" href="https://merkat.store" />
        , <CustomLink label="FORMA" rel="external" href="#" />,{" "}
        <CustomLink label="D'Pagando" rel="external" href="#" />, and{" "}
        <CustomLink label="TheGuide" rel="external" href="#" />
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
        <span className="font-bold text-slate-900">
          Curious about my career journey?
        </span>{" "}
        Check out my{" "}
        <CustomLink
          label="LinkedIn"
          href="https://www.linkedin.com/in/jjsebastianfuertes/"
        />
      </p>
      <p className="text-xl md:text-2xl my-6">
        <span className="font-bold text-slate-900">
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
        <span className="font-bold text-slate-900">
          Ready to{" "}
          <CustomLink
            label="connect"
            href="mailto:jjsebastianfuertes@gmail.com"
            target="_self"
          />
          ?
        </span>{" "}
        Let&apos;s build something cool together!
      </p>
    </section>
  );
};
