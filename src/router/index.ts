import { createRouter, createWebHistory } from 'vue-router';
import Index from '../pages/Index.vue';

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
    // {
    //   path: '/about',
    //   name: 'about',
    //
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
});

export default router;
