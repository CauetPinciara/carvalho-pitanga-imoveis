import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Property } from "../../../../sanity.types";
import { useNextSanityImage } from "next-sanity-image";
import { sanityClient } from "@/lib/services/sanity-client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Bed, Bath, Car, Ruler } from "lucide-react";
import IconWithTooltip from "./IconWithTooltip";

interface PropertyDisplayProps {
  property: Property;
}

const PropertyDisplay = ({ property }: PropertyDisplayProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto">
      {/* Carrossel de fotos dos imóveis */}
      <div className="relative">
        <Carousel className="w-full" loop>
          <CarouselContent>
            {property?.gallery?.map((image, index) => {
              const { width, height, ...imageProps } = useNextSanityImage(
                sanityClient,
                image
              );

              return (
                <CarouselItem key={index}>
                  <AspectRatio ratio={3 / 2}>
                    <Image
                      {...imageProps}
                      alt={`Photo of ${property.title}`}
                      fill
                      className="object-cover"
                    />
                  </AspectRatio>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Informações sobre o imóvel */}
      <div className="p-6">
        <h2 className="text-gray-900 text-xl font-semibold">
          {property.title}
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          {property.address?.line1}, {property.address?.city},{" "}
          {property.address?.state}, {property.address?.zip},{" "}
          {property.address?.country}
        </p>
        <div className="flex items-center text-gray-600 text-sm space-x-4 mb-4">
          <IconWithTooltip
            icon={Bed}
            tooltipText="Quartos"
            text={property.bedrooms ?? 0}
          />
          <IconWithTooltip
            icon={Bath}
            tooltipText="Banheiros"
            text={(property.bathrooms ?? 0) + (property.suites ?? 0)}
          />
          <IconWithTooltip
            icon={Car}
            tooltipText="Vagas"
            text={property.parkingSpaces ?? 0}
          />
          <IconWithTooltip
            icon={Ruler}
            tooltipText="Área"
            text={`${property.area ?? 0} m²`}
          />
        </div>
        <div className="text-gray-900 text-lg font-semibold">
          R${property.salePrice?.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default PropertyDisplay;
