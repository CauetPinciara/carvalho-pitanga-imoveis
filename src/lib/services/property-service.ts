import { ApiPaginationResponse } from "../types/api";
import { Property } from "../types/property";
import apiClient from "./api-client";

const propertyService = {
  getProperties: async (): Promise<ApiPaginationResponse<Property>> => {
    const response = await apiClient.get("/properties");
    return response.data;
  },
  getPropertyById: async (
    id: string
  ): Promise<ApiPaginationResponse<Property>> => {
    const response = await apiClient.get(`/properties/${id}`);
    return response.data;
  },
  createProperty: async (
    property: any
  ): Promise<ApiPaginationResponse<Property>> => {
    const response = await apiClient.post("/properties", property);
    return response.data;
  },
};

export default propertyService;
