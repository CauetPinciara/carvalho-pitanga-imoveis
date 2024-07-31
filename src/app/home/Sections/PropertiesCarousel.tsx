"use client";

import PropertyDisplay from "@/app/home/components/PropertyDisplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { sanityClient } from "@/lib/services/sanity-client";

import { useEffect, useState } from "react";

export function PropertiesCarousel() {
  const [properties, setProperties] = useState<any[]>([]);

  const fetchData = async () => {
    const response = await sanityClient.fetch<any[]>(
      `*[_type == "property"]{
      ...,
      "mainImageUrl": mainImage.asset->url, 
      }`
    );
    setProperties(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      id="properties-carousel"
      className="p-14 flex flex-col items-center bg-background h-[700px] justify-center"
    >
      <h1 className="text-center text-2xl font-bold pb-6">Imóveis</h1>
      <div className="w-[80%]">
        <Carousel className="w-full" draggable={false}>
          <CarouselContent>
            {properties.map((property, index) => (
              <CarouselItem className="basis-1/3" key={index} data-vaul-no-drag>
                <PropertyDisplay property={property} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
