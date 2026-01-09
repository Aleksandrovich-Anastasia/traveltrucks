export interface CamperFilters {
  location: string;
  type: string;
  equipments: string[];
}




export interface LocationProps {
  filters: CamperFilters;
  setFilters: React.Dispatch<React.SetStateAction<CamperFilters>>;
  locations: string[];
}

export interface VehicleTypeProps {
  filters: CamperFilters;
  setFilters: React.Dispatch<React.SetStateAction<CamperFilters>>;
  types: string[];
}

export interface VehicleEquipmentItem {
  label: string;
  value: string;
}

export interface VehicleEquipmentProps {
  filters: CamperFilters;
  setFilters: (
    filters:
      | Partial<CamperFilters>
      | ((prev: CamperFilters) => CamperFilters)
  ) => void;
  equipmentsList: VehicleEquipmentItem[];
}


