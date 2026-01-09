"use client";

import { FC } from "react";
import { CamperWithEquipments } from "@/types/camper";
import CamperCard from "./CamperCard/CamperCard";
import styles from "./CamperList.module.css";

interface CamperListProps {
  campers: CamperWithEquipments[];
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

const CamperList: FC<CamperListProps> = ({ campers = [], favorites, toggleFavorite }) => {
  return (
    <div className={styles.list}>
      {campers.map((camper) => (
        <CamperCard
          key={camper.id}
          camper={camper}
          isFavorite={favorites.includes(camper.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default CamperList;
