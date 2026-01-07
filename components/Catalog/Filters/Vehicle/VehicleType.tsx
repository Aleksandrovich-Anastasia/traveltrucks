"use client";

import { FC } from "react";
import { VehicleTypeProps } from "@/types/filters";
import styles from "./Vehicle.module.css";

const VehicleType: FC<VehicleTypeProps> = ({ filters, setFilters, types }) => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Vehicle type</h4>

      <div className={styles.list}>
        {types.map((type) => (
          <label key={type} className={styles.item}>
            <input
              type="radio"
              name="vehicleType"
              className={styles.input}
              checked={filters.type === type}
              onChange={() =>
                setFilters((prev) => ({ ...prev, type }))
              }
            />
            {type}
          </label>
        ))}
      </div>
    </div>
  );
};

export default VehicleType;
