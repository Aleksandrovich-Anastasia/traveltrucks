"use client";

import { FC } from "react";
import { LocationProps } from "@/types/filters";

const Location: FC<LocationProps> = ({ filters, setFilters, locations }) => {
  return (
    <div>
      <h4>Location</h4>
      <select
        value={filters.location || ""}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, location: e.target.value }))
        }
      >
        <option value="">All</option>
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Location;
