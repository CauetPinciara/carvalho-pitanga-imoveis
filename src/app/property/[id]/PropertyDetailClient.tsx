"use client";

// src/app/property/[id]/PropertyDetailClient.tsx
import { useParams } from "next/navigation";

export default function PropertyDetailClient() {
  const params = useParams();
  const id = params?.id;

  if (!id) {
    return <div>Imóvel não encontrado</div>;
  }

  return (
    <div>
      <h1>Detalhes do Imóvel {id}</h1>
      <p>Informações detalhadas sobre o imóvel.</p>
    </div>
  );
}
