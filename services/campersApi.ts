import axios from "axios";
import { Camper, CampersResponse } from "@/types/camper";
import { CamperFilters } from "@/types/filters";

const api = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

/**
 * Отримання списку кемперів з бекенд-фільтрацією та пагінацією
 */
export const getCampers = async (
  params: CamperFilters & { page: number; limit: number }
): Promise<CampersResponse> => {
  const cleanParams: Record<string, string | boolean | number> = {};

  // filters
  if (params.location) cleanParams.location = params.location;
  if (params.form) cleanParams.form = params.form;

  if (params.AC) cleanParams.AC = true;
  if (params.Kitchen) cleanParams.Kitchen = true;
  if (params.TV) cleanParams.TV = true;
  if (params.Bathroom) cleanParams.bathroom = true;
  if (params.Radio) cleanParams.radio = true;
  if (params.Refrigerator) cleanParams.refrigerator = true;
  if (params.Microwave) cleanParams.microwave = true;
  if (params.Gas) cleanParams.gas = true;
  if (params.Water) cleanParams.water = true;

  // pagination
  cleanParams.page = params.page;
  cleanParams.limit = params.limit;

  const response = await api.get<CampersResponse>("/campers", {
    params: cleanParams,
  });

  return response.data;
};

/**
 * Отримання одного кемпера за ID
 */
export const getCamperById = async (id: string): Promise<Camper> => {
  const response = await api.get<Camper>(`/campers/${id}`);
  return response.data;
};
