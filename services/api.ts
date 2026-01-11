import axios from 'axios';

const api = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
});

export const fetchCampers = async (page: number, filters: any) => {
  const params = new URLSearchParams();

  params.append('page', page.toString());
  params.append('limit', '4');

  Object.keys(filters).forEach(key => {
    const value = filters[key];
    if (value !== undefined && value !== null && value !== '' && value !== false) {
      params.append(key, value.toString());
    }
  });

  const response = await api.get(`/campers?${params.toString()}`);

  return response.data;
};

export const fetchCamperById = async (id: string) => {
  const response = await api.get(`/campers/${id}`);
  return response.data;
};