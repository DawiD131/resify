<script lang="ts" setup>
import { UiRestaurantsPage, UiFilterBar, UiHorizontalRestaurantCard } from '@/ui';
import Header from '@/components/organisms/Header.vue';
import { onBeforeMount } from 'vue';
import { useRestaurantStore, useFavouriteRestaurant } from '@/core/restaurant';
import UiHeading from '@/ui/atoms/UiHeading/UiHeading.vue';

const { addRestaurantToFavourite, removeRestaurantFromFavourite } = useFavouriteRestaurant();
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
      <div v-if="restaurantStore.restaurants.length" class="restaurant-items-wrapper">
        <UiHorizontalRestaurantCard
          v-for="restaurant in restaurantStore.restaurants"
          :key="restaurant.id"
          :rate="3"
          :title="restaurant.name"
          :is-favourite="restaurant.isFavourite"
          thumb-url="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-animated-logo-template-design-6da604bf6329fd9931237066088d59d8_screen.jpg?ts=1601244370"
          :tags="restaurant.tags"
          @like="
            restaurant.isFavourite
              ? removeRestaurantFromFavourite(restaurant.id)
              : addRestaurantToFavourite(restaurant.id)
          "
          @see-details="$router.push(`restaurant-details/${restaurant.id}`)"
        />
      </div>
      <UiHeading v-else size="h2" color="dark-light">There is no restaurants yet</UiHeading>
    </template>
  </UiRestaurantsPage>
</template>

<style lang="scss" scoped>
.restaurant-items-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}
</style>
