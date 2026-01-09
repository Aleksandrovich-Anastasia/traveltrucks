"use client";

import { FC } from "react";
import Image from "next/image";
import { CamperWithEquipments } from "@/store/useCampersStore";
import styles from "./CamperCard.module.css";

interface Props {
  camper: CamperWithEquipments;
  isFavorite?: boolean;
  toggleFavorite?: (id: string) => void;
}

const CamperCard: FC<Props> = ({
  camper,
  isFavorite = false,
  toggleFavorite,
}) => {
  const firstImage = camper.gallery?.[0]?.thumb ?? "/placeholder.png";

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={firstImage}
          alt={camper.name}
          width={292}
          height={320}
          className={styles.image}
          priority
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3>{camper.name}</h3>
          <span>€{(camper.price ?? 0).toFixed(2)}</span>
          <button
            className={`${styles.favorite} ${isFavorite ? styles.active : ""}`}
            onClick={() => toggleFavorite?.(camper.id)}
          >
            <svg className={styles.icon}>
              <use href="/sprite.svg#icon-heart" />
            </svg>
          </button>
        </div>
        <div className={styles.ratinglocation}>
          <div className={styles.meta}>
            <svg className={styles.iconstar}>
              <use href="/sprite.svg#icon-star" />
            </svg>
            <svg className={styles.iconmap}>
              <use href="/sprite.svg#icon-Map" />
            </svg>
            <p className={styles.location}>{camper.location}</p>
          </div>
          
        </div>
        <p className={styles.description}>{camper.description}</p>

        <ul className={styles.equipments}>
  {camper.equipmentsList.map((eq) => (
    <li key={eq}>
      <svg className={styles.icon} width={20} height={20}>
       <use href={`/sprite.svg#icon-${eq.charAt(0).toUpperCase() + eq.slice(1)}`} />
      </svg>
      {eq.charAt(0).toUpperCase() + eq.slice(1)}
    </li>
  ))}
</ul>




        <button className={styles.button}>Show more</button>
      </div>
    </article>
  );
};

export default CamperCard;
