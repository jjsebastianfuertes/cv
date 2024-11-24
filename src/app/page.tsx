import Image from "next/image";
import { CustomLink } from "./components/shared/CustomLink";

export default function Home() {
  return (
    <main className="grid grid-cols-1 m-12 md:m-14 md:grid-cols-2 md:gap-14 xl:gap-28 lg:my-20 xl:mx-40">
      <section className="col-start-1">
        <p className="text-7xl font-bold text-slate-900">Hey there!</p>
        <p className="text-4xl font-bold text-slate-900 my-6">I&apos;m Juan J. Sebastián.</p>
        <p className="text-2xl my-4">
          {" "}
          A tech-loving problem solver. I lead teams to build amazing products
          that make a difference.
        </p>
        <p className="text-2xl my-4">
          I&apos;ve worked with awesome companies like{" "}
          <CustomLink
            label="Tipti"
            rel="external"
            href="https://tipti.market"
          />{" "}
          and{" "}
          <CustomLink label="Shappi" rel="external" href="https://shappi.com" />
          , and co-founding a few startups:{" "}
          <CustomLink label="Freshy" rel="external" href="#" />,{" "}
          <CustomLink label="FORMA" rel="external" href="#" />,{" "}
          <CustomLink label="D'Pagando" rel="external" href="#" />, and{" "}
          <CustomLink label="TheGuide" rel="external" href="#" />
        </p>
        <p className="text-2xl my-4">
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
        <p className="text-2xl my-6">
          <span className="font-bold text-slate-900">Curious about my career journey?</span>{" "}
          Check out my{" "}
          <CustomLink
            label="LinkedIn"
            href="https://www.linkedin.com/in/jjsebastianfuertes/"
          />
        </p>
        <p className="text-2xl my-6">
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
        <p className="text-2xl my-16">
          Ready to{" "}
          <CustomLink
            label="connect"
            href="mailto:jjsebastianfuertes@gmail.com"
            target="_self"
          />
          ? Let&apos;s build something cool together!
        </p>
      </section>
      <div className="hidden md:block md:h-full md:col-start-2">
        <figure className="md:h-96 md:sticky md:top-0">
          <Image
            src="/images/profile.png"
            alt="Profile picture of Juan J. Sebastián"
            fill
            sizes="100%"
            object-fit="contain"
            className="shadow-lg rounded-lg"
          />
        </figure>
      </div>
    </main>
  );
}
