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

  const addRestaurant = async (params: { name: string; description: string }) => {
    try {
      await restaurantRepository.addRestaurant(params);
    } catch (e) {
      console.error(e);
    }
  };

  return {
    restaurants,
    fetchRestaurants,
    addRestaurant
  };
});
