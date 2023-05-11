import { defineStore } from 'pinia';
import { useApiRepository } from '@/composables/useApiRepository';
import { ref } from 'vue';

export const useUserStore = defineStore('useUserStore', () => {
  const { userRepository } = useApiRepository();
  const currentUser = ref(null);

  const getUser = async () => {
    try {
      const resp = await userRepository.getUser();
      currentUser.value = resp?.data;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getUser,
    currentUser
  };
});
