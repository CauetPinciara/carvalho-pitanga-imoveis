"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Property } from "../../../../sanity.types";
import { SearchInput } from "./SearchInput";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface PropertyHomeDisplayProps {
  property: Property;
}

const PropertyHomeDisplay = ({ property }: PropertyHomeDisplayProps) => {
  return (
    <div id="hero" className="relative w-full h-[650px]">
      <Image
        src={property?.mainImageUrl || "/public/images/hero-image.jpg"}
        alt="Hero background"
        layout="fill"
        className="z-0 object-cover"
      />
      <div
        about="background-opacity"
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-30"
      >
        <div className="w-[80%] h-[550px] flex justify-start items-end">
          <div className="w-[50%] h-[180px] flex flex-col p-4 rounded-md">
            <div className="mb-4 flex flex-col justify-start items-start ">
              <h1 className="text-2xl font-bold text-white">
                {property?.title}
              </h1>
              <h2 className="text-xl text-white">
                {property?.address?.city}, {property?.address?.state}
              </h2>
            </div>
            <div className="w-full flex items-center">
              <Input
                placeholder="Pesquisar por imóveis"
                className="w-full h-14 p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-black"
              />

              <Button className="ml-4 h-14 w-[70px]">
                <Search />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyHomeDisplay;
