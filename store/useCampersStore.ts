import { create } from "zustand";
import axios from "axios";
import { Camper, CampersResponse } from "@/types/camper";

export interface CamperWithEquipments extends Camper {
  equipmentsList: string[];
}

const EQUIPMENT_KEYS = [
  "AC",
  "bathroom",
  "kitchen",
  "TV",
  "radio",
  "refrigerator",
  "microwave",
  "gas",
  "water",
] as const;

interface CampersState {
  campers: CamperWithEquipments[];
  favorites: string[];
  filters: {
    location?: string;
    type?: string;
    equipments?: string[];
  };
  fetchCampers: () => Promise<void>;
  toggleFavorite: (id: string) => void;
  setFilters: (
    filters: Partial<CampersState["filters"]> | ((prev: CampersState["filters"]) => CampersState["filters"])
  ) => void;
}

const useCampersStore = create<CampersState>((set, get) => ({
  campers: [],
  favorites: [],
  filters: {
    location: "",
    type: undefined,
    equipments: [],
  },

  fetchCampers: async () => {
  const { filters } = get();

  try {
    const { data } = await axios.get<CampersResponse>(
      "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
      {
        params: {
          location: filters.location || undefined,
          type: filters.type || undefined,
        },
      }
    );

    let items = data.items;

    // 🔹 фільтрація по equipments
    if (filters.equipments?.length) {
      items = items.filter((camper) =>
        filters.equipments!.every(
          (equip) => camper[equip as keyof typeof camper] === true
        )
      );
    }

    const campersWithEquipments = items.map((camper) => ({
      ...camper,
      equipmentsList: EQUIPMENT_KEYS.filter(
        (key) => camper[key] === true
      ),
    }));

    set({ campers: campersWithEquipments });
  } catch (error) {
    console.error("Error fetching campers:", error);
    set({ campers: [] });
  }
},


  toggleFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.includes(id)
        ? state.favorites.filter((fav) => fav !== id)
        : [...state.favorites, id],
    })),

  setFilters: (filters) =>
    set((state) => ({
      filters:
        typeof filters === "function"
          ? filters(state.filters)
          : { ...state.filters, ...filters },
    })),
}));

export default useCampersStore;
