"use client";

import { useState } from "react";
import VehicleEquipment from "./VehicleEquipment/VehicleEquipment";
import VehicleType from "./VehicleType/VehicleType";
import Location from "./Location/Location";
import { CamperFilters } from "@/types/filters";
import styles from "./Filters.module.css";

const Filters = () => {
  const [filters, setFilters] = useState<CamperFilters>({});
    
  const locations = ["Kyiv", "Odesa", "Lviv", "Kharkiv", "Dnipro", "Sumy", "Poltava"];
  const vehicleEquipments = [
    "AC", "Automatic", "Kitchen", "TV", "Bathroom", "Refrigerator", "Microwave", "Gas", "Water", "Radio"
  ];
  const vehicleTypes = ["Van", "Fully Integrated", "Alcove"];
  
  return (
    <section className={styles.filters}>
      <Location filters={filters} setFilters={setFilters} locations={locations} />
      <VehicleEquipment filters={filters} setFilters={setFilters} equipmentsList={vehicleEquipments} />
      <VehicleType filters={filters} setFilters={setFilters} types={vehicleTypes} />
    </section>
  );
};

export default Filters;
