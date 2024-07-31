import { Property } from "./property";

export interface RelatedPerson {
  full_name: string;
  phone: string;
  email: string;
  captured_properties: Property[];
  owned_properties: Property[];
}
