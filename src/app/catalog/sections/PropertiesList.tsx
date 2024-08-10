"use client";
import React, { useState, useEffect } from "react";
import { sanityClient } from "@/lib/services/sanity-client";
import PropertyDisplay from "@/app/home/components/PropertyDisplay";
import Link from "next/link";

const PropertiesList = () => {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const propertiesPerPage = 10; // Número de propriedades por página

  const fetchData = async (page: number) => {
    setLoading(true);
    const start = (page - 1) * propertiesPerPage;
    const response = await sanityClient.fetch<any[]>(
      `*[_type == "property"] | order(_createdAt desc) [${start}...${start + propertiesPerPage}] {
        ...,
        "mainImageUrl": mainImage.asset->url,
      }`
    );
    setProperties((prev) => [...prev, ...response]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    )
      return;
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="flex md:flex-row items-center justify-center">
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <Link key={property._id} href={`/properties/${property._id}`}>
              <PropertyDisplay property={property} />
            </Link>
          ))}
        </div>
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default PropertiesList;
