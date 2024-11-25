import Image from "next/image";
import profile from "../../../../../public/images/profile.jpg";

interface AvatarProps {
    className?: string | undefined;
}

export const Avatar = ({className}: AvatarProps) => {
  return (
    <section className={className}>
      <div className="lg:h-96 lg:sticky lg:top-0">
        <figure className="lg:relative lg:h-96">
          <Image
            src={profile}
            alt="Profile picture of Juan J. Sebastián"
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
