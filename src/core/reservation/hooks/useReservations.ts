import { ref } from 'vue';
import { useApiRepository } from '@/core';
export const useReservations = (accountType: 'private' | 'business') => {
  const reservations = ref<any>([]);
  const { reservationRepository } = useApiRepository();

  const loadReservations = async () => {
    const resp = await reservationRepository.getAll(accountType);
    reservations.value = resp.data;
  };

  return {
    reservations,
    loadReservations
  };
};
