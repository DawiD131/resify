import { defineStore } from 'pinia';
import { useApiRepository } from '@/core/useApiRepository';
import { type Ref, ref } from 'vue';
import { UserDto } from '@/repository/dto/UserDto';
import { useAuthFormState } from '@/core/auth';

interface UseUserStore {
  currentUser: Ref<{
    email: string;
    firstName: string;
    lastName: string;
    isBusiness: boolean;
    favouriteRestaurants: any;
  } | null>;
  getUser: () => Promise<void>;
  register: (user: UserDto) => Promise<void>;
}

export const useUserStore = defineStore<'useUserStore', UseUserStore>('useUserStore', () => {
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
