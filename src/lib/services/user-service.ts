import { ApiPaginationResponse } from "../types/api";
import { User } from "../types/user";
import apiClient from "./api-client";

const userService = {
  countUsers: async (): Promise<number> => {
    const response = await apiClient.get("/users/count");
    return response.data;
  },
  listUsers: async (): Promise<User[]> => {
    const response = await apiClient.get("/users");
    return response.data;
  },
};

export default userService;
