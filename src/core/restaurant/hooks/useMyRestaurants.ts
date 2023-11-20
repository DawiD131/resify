import { useUserStore, useApiRepository } from '@/core';
import { ref } from 'vue';

export const useMyRestaurants = () => {
  const userStore = useUserStore();
  const apiRepository = useApiRepository();
  const myRestaurants = ref<any>([]);

  const fetchMyRestaurants = async () => {
    if (userStore.currentUser?.id) {
      const response = await apiRepository.restaurantRepository.getRestaurantsByOwnerId(
        userStore.currentUser?.id ?? 0
      );

      myRestaurants.value = response.data;
    }
  };

  return {
    myRestaurants,
    fetchMyRestaurants
  };
};
