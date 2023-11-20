import { createRouter, createWebHistory } from 'vue-router';
import Index from '../pages/Index.vue';
import { useAuthStore, useUserStore } from '@/core';

const lockPathWhenBusiness = () => {
  const userStore = useUserStore();
  return !userStore.isBusinessAccount;
};
const lockPathWhenPersonal = () => {
  const userStore = useUserStore();
  return userStore.isBusinessAccount;
};

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
      path: '/restaurant-details/:id',
      name: 'restaurant-details',
      component: () => import('../pages/RestaurantDetails.vue')
    },
    {
      path: '/my-account',
      name: 'my-account',
      redirect: { name: 'personal-data' },
      component: () => import('../pages/MyAccount.vue'),
      children: [
        {
          name: 'personal-data',
          path: 'personal-data',
          component: () => import('../components/account/PersonalData.vue')
        },
        {
          name: 'reservations',
          path: 'reservations',
          beforeEnter: [lockPathWhenBusiness],
          component: () => import('../components/account/Reservations.vue')
        },
        {
          name: 'favourite-restaurants',
          path: 'favourite-restaurants',
          component: () => import('../components/account/FavouriteRestaurants.vue')
        },
        {
          name: 'restaurant-registration',
          path: 'restaurant-registration',
          component: () => import('../components/account/RestaurantRegistration.vue'),
          beforeEnter: [lockPathWhenPersonal]
        },
        {
          name: 'my-restaurants',
          path: 'my-restaurants',
          beforeEnter: [lockPathWhenPersonal],
          component: () => import('../components/account/MyRestaurants.vue')
        }
      ]
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
