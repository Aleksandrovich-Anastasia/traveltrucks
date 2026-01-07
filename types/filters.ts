export interface CamperFilters {
  location?: string;
  type?: string;   
  equipments?: string[];
  
 
  AC?: boolean;
  Kitchen?: boolean;
  TV?: boolean;
  Bathroom?: boolean;
  Radio?: boolean;
  Refrigerator?: boolean;
  Microwave?: boolean;
  Gas?: boolean;
  Water?: boolean;

  form?: string; 
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

export interface VehicleEquipmentProps {
  filters: CamperFilters;
  setFilters: React.Dispatch<React.SetStateAction<CamperFilters>>;
  equipmentsList: string[]; // зверни увагу на назву
}

