// src/app/property/[id]/page.tsx

import PropertyDetailClient from "./PropertyDetailClient";

// Metadados da página
export const metadata = {
  title: "Detalhes do Imóvel",
};

export default function PropertyDetailPage() {
  return <PropertyDetailClient />;
}
