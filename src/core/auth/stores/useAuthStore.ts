import { defineStore } from 'pinia';
import { useApiRepository } from '@/core/useApiRepository';
import { ref } from 'vue';
import router from '@/router';
import { useModalStore } from '@/features/modals/stores/useModalStore';
import { useMobileNavState } from '@/core/useMobileNavState';

export const useAuthStore = defineStore('useAuthStore', () => {
  const { authRepository, userRepository } = useApiRepository();
  const modalStore = useModalStore();
  const { setState } = useMobileNavState();

  const isLoggedIn = ref(false);

  const login = async (email: string, password: string) => {
    const resp = await authRepository.login(email, password);

    if (resp?.status === 200) {
      isLoggedIn.value = true;
      modalStore.closeModals();

      await router.push('/restaurants');
      setState(false);
    } else {
      isLoggedIn.value = false;
    }
  };

  const logout = async () => {
    try {
      await authRepository.logout();
      isLoggedIn.value = false;
      await router.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  const tryToFetchUser = async () => {
    try {
      await userRepository.getUser();
      isLoggedIn.value = true;
    } catch (e) {
      isLoggedIn.value = false;
    }
  };

  return {
    logout,
    isLoggedIn,
    login,
    tryToFetchUser
  };
});
