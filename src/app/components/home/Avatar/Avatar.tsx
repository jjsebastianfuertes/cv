import Image from "next/image";
import profile from "../../../../../public/images/profile.jpg";
import { useTranslations } from "next-intl";

interface AvatarProps {
  className?: string | undefined;
}

export const Avatar = ({ className }: AvatarProps) => {
  const t = useTranslations("avatar");

  return (
    <section className={className}>
      <div className="lg:h-96 lg:sticky lg:top-0">
        <figure className="lg:relative lg:h-96">
          <Image
            src={profile}
            alt={t("alt")}
            fill
            sizes="100%"
            object-fit="cover"
            priority
            className="shadow-lg rounded-lg object-cover"
          />
        </figure>
      </div>
    </section>
  );
};
