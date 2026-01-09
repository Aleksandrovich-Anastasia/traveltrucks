"use client";

import { FC } from "react";
import { VehicleTypeProps } from "@/types/filters";
import styles from "./Vehicle.module.css";

const TYPE_ICONS: Record<string, string> = {
  Van: "icon-van",
  "Fully Integrated": "icon-fully-integrated",
  Alcove: "icon-alcove",
};

const VehicleType: FC<VehicleTypeProps> = ({ filters, setFilters, types }) => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Vehicle type</h4>

      <div className={styles.list}>
        {types.map((type) => {
          const isChecked = filters.type === type;

          return (
            <label
              key={type}
              className={`${styles.item} ${isChecked ? styles.active : ""}`}
            >
              <input
                type="radio"
                name="vehicleType"
                className={styles.input}
                checked={isChecked}
                onChange={() =>
                  setFilters((prev) => ({ ...prev, type }))
                }
              />

              <svg className={styles.icon}>
                <use href={`/sprite.svg#${TYPE_ICONS[type]}`} />
              </svg>

              <span className={styles.label}>{type}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default VehicleType;
