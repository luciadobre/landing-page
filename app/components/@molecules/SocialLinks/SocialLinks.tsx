import Image from "next/image";
import Link from "next/link";
import { LazyImage } from "@/app/components/@atoms/LazyImage/LazyImage";
import { cn } from "@/app/lib/utils";

interface SocialLinkItem {
  label: string;
  href: string;
  icon: string;
}

interface SocialLinksProps {
  links: SocialLinkItem[];
  iconClassName?: string;
  linkClassName?: string;
  lazy?: boolean;
}

export function SocialLinks({
  links,
  iconClassName,
  linkClassName,
  lazy = false,
}: SocialLinksProps) {
  const ImageComponent = lazy ? LazyImage : Image;

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={cn(
            "inline-flex items-center gap-2 transition-colors hover:text-primary",
            linkClassName,
          )}
          aria-label={link.label}
        >
          <ImageComponent
            src={link.icon}
            alt=""
            aria-hidden="true"
            width={16}
            height={16}
            className={cn("h-4 w-4", iconClassName)}
          />
          <span>{link.label}</span>
        </Link>
      ))}
    </>
  );
}
