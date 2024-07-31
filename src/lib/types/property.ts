import { Address } from "./adress";
import { RelatedPerson } from "./related-person";

enum PropertyType {
  Apartment = "apartment",
  Commercial = "commercial",
  House = "house",
  Penthouse = "penthouse",
}

export interface Property {
  title: string;
  active: boolean;
  price: number;
  rent: number;
  main_image: string; // URL
  videos: string[]; // URLs
  images: string[]; // URLs
  rooms: number;
  bathrooms: number;
  type: PropertyType; // Enumeration values
  square_meters: number;
  iptu: number;
  condominium_fee: number;
  garage_spaces: number;
  suites: number;
  living_rooms: number;
  furnished: boolean;
  description: string;
  address: Address; // Relation with Address
  captured_by: RelatedPerson; // Relation with Related Person
  owner: RelatedPerson; // Relation with Related Person
}
