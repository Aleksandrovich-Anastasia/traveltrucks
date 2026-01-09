"use client";

import { FC } from "react";
import { VehicleEquipmentProps } from "@/types/filters";
import styles from "./Vehicle.module.css";

const VehicleEquipment: FC<VehicleEquipmentProps> = ({
  filters,
  setFilters,
  equipmentsList,
}) => {
  const toggleEquipment = (value: string) => {
    setFilters((prev) => {
      const current = prev.equipments ?? [];

      return {
        ...prev,
        equipments: current.includes(value)
          ? current.filter((e) => e !== value)
          : [...current, value],
      };
    });
  };

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Vehicle equipment</h4>

      <div className={styles.list}>
        {equipmentsList.map(({ label, value }) => {
          const isChecked = filters.equipments?.includes(value);

          return (
            <label key={value} className={styles.item}>
              <input
                type="checkbox"
                className={styles.input}
                checked={!!isChecked}
                onChange={() => toggleEquipment(value)}
              />

              <svg className={styles.icon}>
                <use href={`/sprite.svg#icon-${value}`} />
              </svg>

              <span className={styles.label}>{label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default VehicleEquipment;
