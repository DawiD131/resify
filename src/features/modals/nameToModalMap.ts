import { defineAsyncComponent } from 'vue';

export const nameToModalMap = {
  authModal: {
    component: defineAsyncComponent(() => import('./components/AuthModal.vue')),
    displayName: 'Login/Register'
  },
  reviewModal: {
    component: defineAsyncComponent(() => import('./components/ReviewModal.vue')),
    displayName: 'Review'
  }
};

export type ModalNames = keyof typeof nameToModalMap;
