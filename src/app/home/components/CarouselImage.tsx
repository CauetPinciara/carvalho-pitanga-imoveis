import { FC } from "react";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { sanityClient } from "@/lib/services/sanity-client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PropertyImage } from "../../../../sanity.types";

interface CarouselImageProps {
  image: PropertyImage;
  title?: string;
}

const CarouselImage: FC<CarouselImageProps> = ({ image, title }) => {
  const { width, height, ...imageProps } = useNextSanityImage(
    sanityClient,
    image
  );

  return (
    <AspectRatio ratio={3 / 2}>
      <Image
        {...imageProps}
        alt={`Photo of ${title}`}
        fill
        className="object-cover"
      />
    </AspectRatio>
  );
};

export default CarouselImage;
