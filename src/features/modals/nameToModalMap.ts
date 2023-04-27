import { defineAsyncComponent } from 'vue';

export const nameToModalMap = {
  authModal: {
    component: defineAsyncComponent(() => import('./components/AuthModal.vue')),
    displayName: 'Login/Register'
  }
};

export type ModalNames = keyof typeof nameToModalMap;
