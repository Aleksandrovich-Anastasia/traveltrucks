import { create } from "zustand";
import { Camper } from "@/types/camper";

interface ChosenState {
  chosen: Camper[];
  addToChosen: (camper: Camper) => void;
  removeFromChosen: (id: string) => void;
  isChosen: (id: string) => boolean;
  loadFromStorage: () => void;
}

const STORAGE_KEY = "chosenCampers";

export const useChosenList = create<ChosenState>((set, get) => ({
  chosen: [],

  addToChosen: (camper) => {
    const { chosen } = get();
    if (!chosen.find((c) => c.id === camper.id)) {
      const newList = [...chosen, camper];
      set({ chosen: newList });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
    }
  },

  removeFromChosen: (id) => {
    const { chosen } = get();
    const newList = chosen.filter((c) => c.id !== id);
    set({ chosen: newList });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
  },

  isChosen: (id) => {
    return get().chosen.some((c) => c.id === id);
  },

  loadFromStorage: () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed: Camper[] = JSON.parse(stored);
        set({ chosen: parsed });
      } catch {
        set({ chosen: [] });
      }
    }
  },
}));
