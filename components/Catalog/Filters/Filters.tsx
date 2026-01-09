"use client";

import { FC } from "react";
import { CamperFilters } from "@/types/filters";
import Location from "./Location/Location";
import VehicleType from "./Vehicle/VehicleType";
import VehicleEquipment from "./Vehicle/VehicleEquipment";
import styles from "./Filters.module.css";

interface Props {
  filters: CamperFilters;
  setFilters: (filters: Partial<CamperFilters> | ((prev: CamperFilters) => CamperFilters)) => void;
}

const camperTypes = ["Van", "Fully Integrated", "Alcove"];
const camperEquipments = [
  { label: "AC", value: "AC" },
  { label: "Kitchen", value: "kitchen" },
  { label: "TV", value: "TV" },
  { label: "Bathroom", value: "bathroom" },
  { label: "Refrigerator", value: "refrigerator" },
  { label: "Microwave", value: "microwave" },
  { label: "Gas", value: "gas" },
  { label: "Water", value: "water" },
  { label: "Radio", value: "radio" },
];
const locations = ["Kyiv", "Lviv", "Odesa", "Kharkiv", "Dnipro", "Sumy", "Poltava"];

const Filters: FC<Props> = ({ filters, setFilters }) => {
  return (
    <div className={styles.filters}>
      <Location filters={filters} setFilters={setFilters} locations={locations} />
      <VehicleEquipment filters={filters} setFilters={setFilters} equipmentsList={camperEquipments} />
      <VehicleType filters={filters} setFilters={setFilters} types={camperTypes} />
    </div>
  );
};

export default Filters;
