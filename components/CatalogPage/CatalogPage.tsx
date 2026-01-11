"use client";
import { useEffect } from 'react';
import { useCamperStore } from '@/store/useCamperStore';
import { fetchCampers } from '@/services/api';
import { Location } from '../Location/Location';
import { VehicleEquipment } from '../Vehicle/VehicleEquipment';
import { VehicleType } from '../Vehicle/VehicleType';
import { CamperList } from '../CamperList/CamperList';
import styles from './CatalogPage.module.css';

export default function CatalogPage() {
  const { filters, page, setItems } = useCamperStore();

  useEffect(() => {
    const loadData = async () => {
      // Очищуємо фільтри від порожніх значень перед запитом
      const activeFilters = Object.fromEntries(
        Object.entries(filters).filter(([_, v]) => v !== "" && v !== false)
      );

      const data = await fetchCampers(page, activeFilters);
      setItems(data.items || data, page === 1);
    };

    loadData();
  }, [filters, page, setItems]); // Магія: useEffect спрацює сам, як тільки зміниться filters

  return (
    <div className={styles.page}>
      {/* Ліва частина: Фільтри */}
      <div className={styles.filters}>
        <Location />
        <div className={styles.vehicle}>
          <p className={styles.title}>Filters</p>
          <VehicleEquipment />
          <VehicleType />
        </div>
      </div>

      {/* Права частина: Результати */}
      <main className={styles.list}>
        <CamperList />
      </main>
    </div>
  );
}