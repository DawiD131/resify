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
    try {
      await restaurantRepository.addRestaurant(params);
    } catch (e) {
      console.error(e);
    }
  };

  const deleteRestaurant = async (id: number) => {
    try {
      await restaurantRepository.deleteRestaurant(id);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    restaurants,
    fetchRestaurants,
    addRestaurant,
    deleteRestaurant
  };
});
