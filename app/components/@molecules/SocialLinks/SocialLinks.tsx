import Image from "next/image";
import Link from "next/link";
import type { ElementType } from "react";
import { LazyImage } from "@/app/components/@atoms/LazyImage/LazyImage";
import { cn, shouldUseNativeAnchor } from "@/app/lib/utils";

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
      {links.map((link) => {
        const useNativeAnchor = shouldUseNativeAnchor(link.href);
        const isExternal = /^(https?:)?\/\//.test(link.href);
        const Component: ElementType = useNativeAnchor ? "a" : Link;
        const componentProps = useNativeAnchor
          ? {
              href: link.href,
              target: isExternal ? "_blank" : undefined,
              rel: isExternal ? "noopener noreferrer" : undefined,
            }
          : { href: link.href };
        const className = cn(
          "inline-flex items-center gap-2 transition-colors hover:text-primary",
          linkClassName,
        );
        const content = (
          <>
            <ImageComponent
              src={link.icon}
              alt=""
              aria-hidden="true"
              width={16}
              height={16}
              className={cn("h-4 w-4", iconClassName)}
            />
            <span>{link.label}</span>
          </>
        );

        return (
          <Component
            key={link.label}
            {...componentProps}
            className={className}
            aria-label={link.label}
          >
            {content}
          </Component>
        );
      })}
    </>
  );
}
