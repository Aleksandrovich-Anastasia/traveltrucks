"use client";

import { FC } from "react";
import { VehicleEquipmentProps } from "@/types/filters";
import styles from "./Vehicle.module.css";

const VehicleEquipment: FC<VehicleEquipmentProps> = ({
  filters,
  setFilters,
  equipmentsList,
}) => {
  const toggleEquipment = (equip: string) => {
    setFilters((prev) => {
      const current = prev.equipments || [];
      return {
        ...prev,
        equipments: current.includes(equip)
          ? current.filter((e) => e !== equip)
          : [...current, equip],
      };
    });
  };

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Vehicle equipment</h4>

      <div className={styles.list}>
        {equipmentsList.map((equip) => {
          const isChecked = filters.equipments?.includes(equip);

          return (
            <label key={equip} className={styles.item}>
              <input
                type="checkbox"
                className={styles.input}
                checked={!!isChecked}
                onChange={() => toggleEquipment(equip)}
              />

              <svg className={styles.icon}>
                <use href={`/sprite.svg#icon-${equip}`} />
              </svg>

              <span className={styles.label}>{equip}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default VehicleEquipment;
