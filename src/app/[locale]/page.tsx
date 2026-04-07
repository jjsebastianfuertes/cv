import { Description } from "../components/home/Description";
import { Avatar } from "../components/home/Avatar/Avatar";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className=" grid grid-cols-1 m-12 md:m-14 lg:grid-cols-2 lg:gap-14 xl:gap-28 lg:my-20 xl:mx-40">
      <Description className="col-start-1" />
      <Avatar className="hidden lg:block lg:h-full lg:relative" />
    </main>
  );
}
