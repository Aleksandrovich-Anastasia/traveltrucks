import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Camper } from '@/types/camper';

interface CamperState {
  items: Camper[];
  favorites: string[];
  filters: Record<string, any>;
  page: number;
  isLoading: boolean;
  hasMore: boolean; // Додано для контролю кнопки Load More
  
  // Оновлення списку (reset: true для нових фільтрів, false для пагінації)
  setItems: (newItems: Camper[], reset: boolean) => void;
  
  // Додавання/видалення з обраного
  toggleFavorite: (id: string) => void;
  
  // Оновлення конкретного фільтра (викликає скидання списку та сторінки)
  updateFilter: (key: string, value: any) => void;
  
  // Повне скидання або встановлення фільтрів
  setFilters: (newFilters: Record<string, any>) => void;
  
  setPage: (page: number) => void;
  setLoading: (loading: boolean) => void;
}

export const useCamperStore = create<CamperState>()(
  persist(
    (set) => ({
      items: [],
      favorites: [],
      filters: {
        location: '',
        form: '', // для типу кузова
        // інші фільтри (AC, kitchen тощо) будуть додаватися сюди динамічно як true/false
      },
      page: 1,
      isLoading: false,
      hasMore: true,

      setItems: (newItems, reset) => set((state) => ({
        items: reset ? newItems : [...state.items, ...newItems],
        // Якщо бекенд повернув менше 4 об'єктів (наш ліміт), Load More більше не потрібен
        hasMore: newItems.length >= 4, 
      })),

      toggleFavorite: (id) => set((state) => ({
        favorites: state.favorites.includes(id)
          ? state.favorites.filter(favId => favId !== id)
          : [...state.favorites, id]
      })),

      updateFilter: (key, value) => set((state) => ({
        filters: { ...state.filters, [key]: value },
        items: [], // Скидаємо попередні результати при зміні фільтра
        page: 1,   // Повертаємось на першу сторінку
        hasMore: true,
      })),

      setFilters: (newFilters) => set({
        filters: newFilters,
        items: [],
        page: 1,
        hasMore: true,
      }),

      setPage: (page) => set({ page }),
      setLoading: (isLoading) => set({ isLoading }),
    }),
    {
      name: 'travel-trucks-favorites',
      // Зберігаємо в LocalStorage ТІЛЬКИ список ID обраних кемперів
      partialize: (state) => ({ favorites: state.favorites }),
    }
  )
);