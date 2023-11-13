import { ref, onBeforeMount } from 'vue';
import { useApiRepository } from '@/core/useApiRepository';

export const useRestaurantDetails = (restaurantId: string) => {
  const restaurantDetails = ref<any>(null);

  const { restaurantRepository } = useApiRepository();

  onBeforeMount(async () => {
    const resp = await restaurantRepository.getRestaurant(restaurantId);
    restaurantDetails.value = resp.data;
  });

  return {
    restaurantDetails
  };
};
