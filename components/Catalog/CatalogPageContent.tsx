"use client";

import { useEffect } from "react";
import Filters from "./Filters/Filters";
import CamperList from "./CamperList/CamperList";
import useCampersStore from "@/store/useCampersStore";
import styles from "./CatalogPageContent.module.css";

const CatalogPageContent = () => {
  const {
    campers,
    filters,
    favorites,
    setFilters,
    toggleFavorite,
    fetchCampers,
  } = useCampersStore();

  
  useEffect(() => {
    fetchCampers();
  }, [filters, fetchCampers]); 

  return (
    <div className={styles.catalog}>
      <Filters filters={filters} setFilters={setFilters} />
      <CamperList
        campers={campers}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default CatalogPageContent;
