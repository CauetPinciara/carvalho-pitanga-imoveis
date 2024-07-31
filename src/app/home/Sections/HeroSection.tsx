"use client";

import { sanityClient } from "@/lib/services/sanity-client";
import PropertyHomeDisplay from "../components/PropertyHomeDisplay";
import { useEffect, useState } from "react";

export function HeroSection() {
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

  return <PropertyHomeDisplay property={properties[0]} />;
}
