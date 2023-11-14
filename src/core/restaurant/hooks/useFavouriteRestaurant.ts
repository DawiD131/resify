import { useRestaurantStore, useApiRepository } from '@/core';

export const useFavouriteRestaurant = () => {
  const restaurantStore = useRestaurantStore();
  const apiRepository = useApiRepository();

  const addRestaurantToFavourite = async (restaurantId: number) => {
    await apiRepository.favouriteRestaurantRepository.addRestaurantToFavourite(restaurantId);
    await restaurantStore.fetchRestaurants();
  };

  const removeRestaurantFromFavourite = async (id: string) => {
    await apiRepository.favouriteRestaurantRepository.removeRestaurantFromFavourite(id);
    await restaurantStore.fetchRestaurants();
  };

  return {
    addRestaurantToFavourite,
    removeRestaurantFromFavourite
  };
};
