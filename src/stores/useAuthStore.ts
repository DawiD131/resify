import { defineStore } from 'pinia';
import { useApiRepository } from '@/composables/useApiRepository';
import { ref } from 'vue';
import router from '../router';
import { useModalStore } from '@/features/modals/stores/useModalStore';

export const useAuthStore = defineStore('useAuthStore', () => {
  const { authRepository } = useApiRepository();
  const modalStore = useModalStore();

  const isLoggedIn = ref(false);

  const login = async (email: string, password: string) => {
    const resp = await authRepository.login(email, password);

    if (resp?.status === 200) {
      isLoggedIn.value = true;
      modalStore.closeModals();
      await router.push('/restaurants');
    } else {
      isLoggedIn.value = false;
    }
  };

  return {
    isLoggedIn,
    login
  };
});
