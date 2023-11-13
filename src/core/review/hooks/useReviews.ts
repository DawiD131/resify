import { ref } from 'vue';
import { useApiRepository } from '@/core/useApiRepository';

const reviews = ref<any>([]);

export const useReviews = (restaurantId: string) => {
  const apiRepository = useApiRepository();

  const loadReviews = async () => {
    const resp = await apiRepository.reviewRepository.getReviews(Number(restaurantId));
    reviews.value = resp.data;
  };

  const addReview = async (params: { rate: number; description: string }) => {
    await apiRepository.reviewRepository.addReview(Number(restaurantId), params);
    await loadReviews();
  };

  return {
    loadReviews,
    addReview,
    reviews
  };
};
