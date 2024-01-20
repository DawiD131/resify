import { defineStore } from 'pinia';
import { useApiRepository } from '@/core/useApiRepository';
import { computed, ref } from 'vue';
import { UserDto } from '@/repository/dto/UserDto';
import { useAuthFormState } from '@/core/auth';

export const useUserStore = defineStore('useUserStore', () => {
  const { userRepository } = useApiRepository();

  const currentUser = ref<{
    email: string;
    firstName: string;
    lastName: string;
    isBusiness: boolean;
    favouriteRestaurants: any;
    id: number;
  } | null>(null);

  const { openLoginForm } = useAuthFormState();

  const getUser = async () => {
    try {
      const resp = await userRepository.getUser();
      currentUser.value = resp?.data;
    } catch (e) {
      currentUser.value = null;
    }
  };

  const register = async (user: UserDto) => {
    try {
      await userRepository.register(user);
      openLoginForm();
    } catch (e) {
      console.log(e);
    }
  };

  const changePassword = async (payload: { currentPwd: string; newPwd: string }) => {
    await userRepository.changePassword(payload);
  };

  return {
    register,
    getUser,
    currentUser,
    changePassword,
    isBusinessAccount: computed(() => (currentUser.value ? currentUser.value.isBusiness : false))
  };
});
