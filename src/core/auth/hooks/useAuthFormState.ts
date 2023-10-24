import { computed, ref } from 'vue';
import { createGlobalState } from '@vueuse/core';

export const useAuthFormState = createGlobalState(() => {
  const isLoginFormOpen = ref(true);
  const openLoginForm = () => (isLoginFormOpen.value = true);
  const openRegistrationForm = () => (isLoginFormOpen.value = false);

  return {
    isLoginFormOpen: computed(() => isLoginFormOpen.value),
    openLoginForm,
    openRegistrationForm
  };
});
