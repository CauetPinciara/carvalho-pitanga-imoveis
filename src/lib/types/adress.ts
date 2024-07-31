import { Property } from "./property";

export interface Address {
  address_line_1: string;
  address_line_2?: string; // Optional field
  neighborhood: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  number: number;
  apartment?: string; // Optional field
  property: Property;
}
