import { LazyImage } from "@/app/components/@atoms/LazyImage/LazyImage";
import type { ShowcasePhoto } from "@/app/config/showcase";

interface ShowcaseSlideProps {
  photo: ShowcasePhoto;
}

export function ShowcaseSlide({ photo }: ShowcaseSlideProps) {
  return (
    <div className="relative h-80 w-full shrink-0 lg:h-130">
      <LazyImage
        src={photo.photoSource}
        alt={photo.caption}
        fill
        sizes="(max-width: 1024px) 90vw, 480px"
        className="object-cover"
      />
    </div>
  );
}
