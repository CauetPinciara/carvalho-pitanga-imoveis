// pages/catalog.js
import CatalogFilter from "./sections/CatalogFilter";
import { Navbar } from "@/components/layout/Navbar";
import PropertiesList from "./sections/PropertiesList";

export default function Catalog() {
  return (
    <>
      <Navbar />
      <CatalogFilter />
      <PropertiesList />
    </>
  );
}
