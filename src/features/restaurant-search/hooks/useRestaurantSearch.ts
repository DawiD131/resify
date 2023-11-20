import { useApiRepository } from '@/core';
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';

export const useRestaurantSearch = () => {
  const apiRepository = useApiRepository();
  const foundRestaurant = ref<any>([]);
  const isLoading = ref(false);
  const isOpen = ref(false);
  const queryKey = ref('');

  const onFocus = () => {
    searchRestaurant(queryKey.value);
    isOpen.value = true;
  };
  const onExit = () => {
    isOpen.value = false;
    // queryKey.value = '';
  };

  const searchRestaurant = async (queryKey: string) => {
    isLoading.value = true;
    const resp = await apiRepository.restaurantRepository.searchRestaurants(queryKey);
    foundRestaurant.value = resp.data;
    isLoading.value = false;
  };

  watch(queryKey, (value) => {
    searchRestaurant(value);
  });

  return {
    foundRestaurant: computed(() =>
      foundRestaurant.value.map((it: any) => ({
        displayName: it.name,
        thumbUrl:
          'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-animated-logo-template-design-6da604bf6329fd9931237066088d59d8_screen.jpg?ts=1601244370',
        id: it.id
      }))
    ),
    isLoading,
    onFocus,
    onExit,
    isOpen,
    queryKey
  };
};
