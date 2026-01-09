import { create } from "zustand";
import { Camper, CampersResponse } from "@/types/camper";
import { CamperFilters } from "@/types/filters";
import { getCampers } from "@/services/campersApi";

interface CampersState {
  campers: Camper[];
  total: number;
  loading: boolean;
  error: string | null;

  filters: CamperFilters;
  page: number;
  limit: number;

  setFilters: (filters: CamperFilters) => void;
  loadCampers: () => Promise<void>;
  loadMore: () => Promise<void>;
  resetCampers: () => void;
}

export const useCampersList = create<CampersState>((set, get) => ({
  campers: [],
  total: 0,
  loading: false,
  error: null,

  filters: {
    location: "",
    form: "",
    AC: false,
    kitchen: false,
    TV: false,
    bathroom: false,
    radio: false,
    refrigerator: false,
    microwave: false,
    gas: false,
    water: false,
  },

  page: 1,
  limit: 6,

  
  setFilters: (filters) =>
    set({
      filters,
      campers: [],
      page: 1,
    }),

  loadCampers: async () => {
    const { filters, page, limit } = get();
    set({ loading: true, error: null });

    try {
      const data: CampersResponse = await getCampers({
        ...filters,
        page,
        limit,
      });

      set({
        campers: data.items,
        total: data.total,
      });
    } catch (err: unknown) {
      set({
        error: err instanceof Error ? err.message : "Failed to load campers",
      });
    } finally {
      set({ loading: false });
    }
  },

  loadMore: async () => {
    const { filters, page, limit, campers } = get();
    set({ loading: true, error: null });

    try {
      const nextPage = page + 1;

      const data: CampersResponse = await getCampers({
        ...filters,
        page: nextPage,
        limit,
      });

      set({
        campers: [...campers, ...data.items],
        total: data.total,
        page: nextPage,
      });
    } catch (err: unknown) {
      set({
        error: err instanceof Error ? err.message : "Failed to load campers",
      });
    } finally {
      set({ loading: false });
    }
  },

  resetCampers: () =>
    set({
      campers: [],
      total: 0,
      page: 1,
    }),
}));
