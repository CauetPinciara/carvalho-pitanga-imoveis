import React from "react";
import { sanityClient } from "@/lib/services/sanity-client";
import { Property } from "../../../../sanity.types";
import { Button } from "@/components/ui/button";

type PropertyDetailsProps = {
  id: string;
};

const PropertyDetails = async ({ id }: PropertyDetailsProps) => {
  const query = `*[_type == "property" && _id == $id][0] {
    ...,
    "mainImageUrl": mainImage.asset->url
  }`;
  const property: Property = await sanityClient.fetch(query, { id });

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        {/* Carrossel */}
        <div className="w-full md:w-1/4">
          {/* <Carousel images={property.gallery?.map((img) => img.asset?._ref)} /> */}
          Carrosel
        </div>

        {/* Imagem Principal */}
        <div className="w-full md:w-1/2">
          <img
            src={property.mainImageUrl}
            alt={property.title}
            className="w-full h-auto"
          />
        </div>

        {/* Carrossel */}
        <div className="w-full md:w-1/4">
          {/* <Carousel images={property.gallery?.map((img) => img.asset?._ref)} /> */}
          Carrosel
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-4">
        <div className="flex-1">
          {/* Título */}
          <h1 className="text-2xl font-bold">{property.title}</h1>

          {/* Dados */}
          <div className="mt-4">
            <div className="flex justify-between">
              <div>
                <p>Bedrooms: {property.bedrooms}</p>
                <p>Bathrooms: {property.bathrooms}</p>
                <p>Garage: {property.parkingSpaces}</p>
              </div>
              <div>
                <p>Year Built: 2023</p> {/* Atualizar com o dado correto */}
                <p>Area: {property.area} sq ft</p>
                <p>Lot Size: 5800 sq ft</p> {/* Atualizar com o dado correto */}
              </div>
            </div>
          </div>

          {/* Descrição */}
          <div className="mt-4">
            <h2 className="text-xl font-bold">Description</h2>
            <p>{property.description}</p>
          </div>

          {/* Recomendações */}
          <div className="mt-4">
            <h2 className="text-xl font-bold">Features</h2>
            <ul className="list-disc pl-5">
              <li>2 Stories</li>
              <li>Central Cooling</li>
              <li>Electric Range</li>
              <li>Fire Place</li>
              {/* Adicionar mais features conforme necessário */}
            </ul>
          </div>
        </div>

        {/* Ações */}
        <div className="flex-none w-full md:w-1/4 mt-4 md:mt-0 md:ml-4">
          <div>
            <h2 className="text-xl font-bold">Share</h2>
            {/* Botões de Compartilhar */}
            <div className="flex space-x-2 mt-2">
              <Button>Facebook</Button>
              <Button>Twitter</Button>
            </div>
            {/* Botão de Contato */}
            <Button className="mt-4">Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
