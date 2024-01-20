import { defineStore } from 'pinia';
import { useApiRepository } from '@/core/useApiRepository';
import { ref } from 'vue';

export const useRestaurantStore = defineStore('useRestaurantStore', () => {
  const { restaurantRepository } = useApiRepository();

  const restaurants = ref<any>([]);
  const fetchRestaurants = async () => {
    const response = await restaurantRepository.getRestaurants();
    restaurants.value = response.data;
  };

  const addRestaurant = async (params: {
    name: string;
    description: string;
    city: string;
    address: string;
    zipCode: string;
  }) => {
    await restaurantRepository.addRestaurant(params);
  };

  const deleteRestaurant = async (id: number) => {
    await restaurantRepository.deleteRestaurant(id);
  };

  const updateRestaurant = async (
    id: string,
    params: {
      name: string;
      description: string;
      city: string;
      address: string;
      zipCode: string;
    }
  ) => {
    await restaurantRepository.updateRestaurant(id, params);
  };

  return {
    restaurants,
    fetchRestaurants,
    addRestaurant,
    deleteRestaurant,
    updateRestaurant
  };
});
