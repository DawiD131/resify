import { defineStore } from 'pinia';
import { useApiRepository } from '@/composables/useApiRepository';
import { ref } from 'vue';
import { UserDto } from '@/repository/dto/UserDto';
import { useAuthFormState } from '@/composables/auth';

export const useUserStore = defineStore('useUserStore', () => {
  const { userRepository } = useApiRepository();
  const currentUser = ref(null);

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

  return {
    register,
    getUser,
    currentUser
  };
});
