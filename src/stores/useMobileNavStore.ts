import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMobileNavStore = defineStore('useMobileNavStore', () => {
  const state = ref(false);

  const setState = (value: boolean) => (state.value = value);

  return {
    state,
    setState
  };
});
