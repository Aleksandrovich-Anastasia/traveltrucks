"use client";

import { FC } from "react";
import { VehicleTypeProps } from "@/types/filters";

const VehicleType: FC<VehicleTypeProps> = ({ filters, setFilters, types }) => {
  return (
    <div>
      <h4>Vehicle Type</h4>
      {types.map((type) => (
        <label key={type}>
          <input
            type="radio"
            name="vehicleType"
            value={type}
            checked={filters.type === type}
            onChange={() =>
              setFilters((prev) => ({ ...prev, type }))
            }
          />
          {type}
        </label>
      ))}
    </div>
  );
};

export default VehicleType;
