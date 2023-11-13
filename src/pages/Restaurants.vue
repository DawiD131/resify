<script lang="ts" setup>
import { UiRestaurantsPage, UiFilterBar, UiHorizontalRestaurantCard } from '@/ui';
import Header from '@/components/organisms/Header.vue';
import { onBeforeMount } from 'vue';
import { useRestaurantStore } from '@/core/restaurant';

const restaurantStore = useRestaurantStore();
onBeforeMount(async () => {
  await restaurantStore.fetchRestaurants();
});
</script>

<template>
  <UiRestaurantsPage>
    <template #header>
      <Header />
    </template>
    <template #side>
      <UiFilterBar
        :first-criteria="{
          title: 'Location',
          options: [
            {
              id: 'jn1kj2nkjn',
              value: 'Warsaw'
            },
            {
              id: 'asdnasidji',
              value: 'Krakow'
            }
          ],
          currentCriteria: [
            {
              id: 'asdnasidji',
              value: 'Krakow'
            }
          ]
        }"
        :second-criteria="{
          title: 'Tags',
          options: [
            {
              id: 'jn1kj2nkjn',
              value: 'Italian'
            },
            {
              id: 'asdnasidji',
              value: 'Polish food'
            }
          ],
          currentCriteria: [
            {
              id: 'asdnasidji',
              value: 'Polish food'
            }
          ]
        }"
      />
    </template>
    <template #main-content>
      <UiHorizontalRestaurantCard
        v-for="restaurant in restaurantStore.restaurants"
        :key="restaurant.id"
        :rate="3"
        :title="restaurant.name"
        thumb-url="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-animated-logo-template-design-6da604bf6329fd9931237066088d59d8_screen.jpg?ts=1601244370"
        :tags="['italian', 'pizza', 'pasta', 'drinks']"
        @click="$router.push(`restaurant-details/${restaurant.id}`)"
      />
    </template>
  </UiRestaurantsPage>
</template>
