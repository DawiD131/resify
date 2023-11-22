import { ref, onBeforeMount, computed } from 'vue';
import { useApiRepository } from '@/core/useApiRepository';

const restaurantDetails = ref<any>(null);

export const useRestaurantDetails = (restaurantId: string) => {
  const { restaurantRepository, tagRepository } = useApiRepository();

  const loadRestaurantDetails = async () => {
    const resp = await restaurantRepository.getRestaurant(restaurantId);
    restaurantDetails.value = resp.data;
  };

  onBeforeMount(() => loadRestaurantDetails());

  const tags = computed(() => restaurantDetails.value.tags ?? []);

  const addTag = async (name: string) => {
    await tagRepository.addTag({ name, restaurantId: Number(restaurantId) });
    await loadRestaurantDetails();
  };

  const removeTag = async (id: number) => {
    await tagRepository.removeTag(id);
    await loadRestaurantDetails();
  };

  return {
    restaurantDetails,
    fetchRestaurantDetails: async () => {
      const resp = await restaurantRepository.getRestaurant(restaurantId);
      restaurantDetails.value = resp.data;
    },
    tags,
    removeTag,
    addTag
  };
};
