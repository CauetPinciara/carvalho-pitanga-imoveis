// src/components/CatalogFilter.tsx
import React from "react";

const CatalogFilter = () => {
  return (
    <div className="flex md:flex-row items-center justify-center px-10 py-4 bg-white shadow-md">
      <div className="w-[80%] flex flex-col md:flex-row items-center justify-between">
        <input
          type="text"
          placeholder="Buscar por cidade"
          className="border p-2 rounded w-1/3"
        />
        <select className="border p-2 rounded">
          <option value="">Tipo de imóvel</option>
          <option value="casa">Casa</option>
          <option value="apartamento">Apartamento</option>
          <option value="cobertura">Cobertura</option>
          <option value="comercial">Comercial</option>
        </select>
        <select className="border p-2 rounded">
          <option value="">Preço</option>
          <option value="menor">Menor Preço</option>
          <option value="maior">Maior Preço</option>
        </select>
        <button className="bg-primary text-white py-2 px-4 rounded">
          Aplicar Filtros
        </button>
      </div>
    </div>
  );
};

export default CatalogFilter;
