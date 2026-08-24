import Image from "next/image";
import type { ShowcasePhoto } from "@/app/config/showcase";

interface ShowcaseSlideProps {
  photo: ShowcasePhoto;
  isFirstSlide?: boolean;
}

export function ShowcaseSlide({ photo, isFirstSlide = false }: ShowcaseSlideProps) {
  return (
    <div className="relative h-80 w-full shrink-0 lg:h-130">
      <Image
        src={photo.photoSource}
        alt={photo.caption}
        fill
        sizes="(max-width: 1024px) 90vw, 480px"
        className="object-cover"
        priority={isFirstSlide}
      />
    </div>
  );
}
