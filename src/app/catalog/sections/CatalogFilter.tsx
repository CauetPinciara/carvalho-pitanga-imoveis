"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { ComboboxBairros } from "../components/ComboBox";

const CatalogFilter = () => {
  const form = useForm();
  return (
    <div className="flex md:flex-row items-center justify-center px-10 py-4 bg-white shadow-md">
      <div className="w-[80%] flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col">
          <label className="font-bold text-grey-900">Local</label>
          <ComboboxBairros />
        </div>
      </div>
    </div>
  );
};

export default CatalogFilter;
