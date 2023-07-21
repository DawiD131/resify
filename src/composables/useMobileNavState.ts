import { ref } from 'vue';
import { createGlobalState } from '@vueuse/core';

export const useMobileNavState = createGlobalState(() => {
  const state = ref(false);

  const setState = (value: boolean) => (state.value = value);

  return {
    state,
    setState
  };
});
