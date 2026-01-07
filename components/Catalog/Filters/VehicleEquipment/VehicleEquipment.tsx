"use client";

import { FC } from "react";
import { VehicleEquipmentProps } from "@/types/filters";

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
    <div>
      <h4>Vehicle equipment</h4>
      {equipmentsList.map((equip) => (
        <label key={equip}>
          <input
            type="checkbox"
            checked={filters.equipments?.includes(equip) || false}
            onChange={() => toggleEquipment(equip)}
          />
          {equip}
        </label>
      ))}
    </div>
  );
};

export default VehicleEquipment;
