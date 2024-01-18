import { ref } from 'vue';
import { useApiRepository } from '@/core';
export const useReservations = (accountType: 'private' | 'business') => {
  const reservations = ref<any>([]);
  const { reservationRepository } = useApiRepository();

  const loadReservations = async () => {
    const resp = await reservationRepository.getAll(accountType);
    reservations.value = resp.data;
  };

  const cancel = async (id: number, reservation: any) => {
    await reservationRepository.update(id, { ...reservation, state: 'cancelled' });
    await loadReservations();
  };

  const activate = async (id: number, reservation: any) => {
    await reservationRepository.update(id, { ...reservation, state: 'accepted' });
    await loadReservations();
  };
  const pending = async (id: number, reservation: any) => {
    await reservationRepository.update(id, { ...reservation, state: 'pending' });
    await loadReservations();
  };

  return {
    reservations,
    loadReservations,
    cancel,
    activate,
    pending
  };
};
