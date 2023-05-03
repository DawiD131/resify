import { computed, ref } from 'vue';

const isLoginFormOpen = ref(true);

export const useAuthForm = () => {
  const openLoginForm = () => (isLoginFormOpen.value = true);
  const openRegistrationForm = () => (isLoginFormOpen.value = false);

  return {
    isLoginFormOpen: computed(() => isLoginFormOpen.value),
    openLoginForm,
    openRegistrationForm
  };
};
