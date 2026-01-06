import axios from "axios";
import { Camper, CampersResponse } from "@/types/camper";
import { CamperFilters } from "@/types/filters";

const api = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

export const getCampers = async (params?: CamperFilters): Promise<CampersResponse> => {
  const response = await api.get<CampersResponse>("/campers", { params });
  return response.data;
};

export const getCamperById = async (id: string): Promise<Camper> => {
  const response = await api.get<Camper>(`/campers/${id}`);
  return response.data;
};
