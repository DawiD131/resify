import { createRouter, createWebHistory } from 'vue-router';
import Index from '../pages/Index.vue';
import { useAuthStore, useUserStore } from '@/composables';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: () => import('../pages/Restaurants.vue')
    },
    {
      path: '/restaurant-details',
      name: 'restaurant-details',
      component: () => import('../pages/RestaurantDetails.vue')
    },
    {
      path: '/my-account',
      name: 'my-account',
      component: () => import('../pages/MyAccount.vue')
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  const userStore = useUserStore();

  // todo: consider better option below
  await authStore.tryToFetchUser();
  await userStore.getUser();

  if (authStore.isLoggedIn && to.name === 'index') next({ name: 'restaurants' });
  if (!authStore.isLoggedIn && to.name !== 'index') next({ name: 'index' });
  else next();
});

export default router;
