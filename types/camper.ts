export interface GalleryImage {
  thumb: string;
  original: string;
}

export interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface Camper {
  id: string;
  name: string;
  location: string;
  form: string;
  price: number;
  rating: number;
  gallery: GalleryImage[];
  description: string;

  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;

  // ⚠️ обладнання приходить З ВЕРХНЬОГО РІВНЯ
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;

  reviews: Review[];
}

export interface CampersResponse {
  total: number;
  items: Camper[];
}
