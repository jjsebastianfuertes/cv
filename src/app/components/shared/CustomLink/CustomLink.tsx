interface CustomLinkProps {
  label: string;
  href: string;
  rel?: string;
  target?: string;
}

export const CustomLink = ({
  label,
  href,
  rel,
  target = "_blank",
}: CustomLinkProps) => {
  return (
    <span className="relative">
      <a
        className="after:block 
        after:w-full
        after:h-[0.6rem]
      after:bg-yellow-400
        after:bg-opacity-35
        after:absolute
        after:-bottom-[0.1rem]
        after:left-0 
        after:right-0
        hover:after:transform 
        hover:after:ease-in-out 
        hover:after:duration-300 
        hover:after:h-[1.8rem]"
        href={href}
        target={target}
        rel={rel}
      >
        {label}
      </a>
    </span>
  );
};
