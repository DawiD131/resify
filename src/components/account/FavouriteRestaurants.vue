<script lang="ts" setup>
import { UiTabs, UiFlexWithGapLayout, UiHorizontalRestaurantCard, UiHeading } from '@/ui';
import { useFavouriteRestaurant, useRestaurantStore } from '@/core';
import { computed, onMounted } from 'vue';

const restaurantStore = useRestaurantStore();
const { removeRestaurantFromFavourite } = useFavouriteRestaurant();

onMounted(() => {
  restaurantStore.fetchRestaurants();
});

const favouriteRestaurants = computed(() =>
  restaurantStore.restaurants.filter((it: any) => it.isFavourite)
);
const tabsConfig = [
  {
    displayName: 'Favourite restaurants',
    slotName: 'favourite-restaurants'
  }
];
</script>

<template>
  <UiTabs :tabsConfig="tabsConfig">
    <template #favourite-restaurants>
      <UiFlexWithGapLayout v-if="favouriteRestaurants.length">
        <UiHorizontalRestaurantCard
          v-for="restaurant in favouriteRestaurants"
          :key="restaurant.id"
          :rate="3"
          :title="restaurant.name"
          :is-favourite="restaurant.isFavourite"
          thumb-url="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-animated-logo-template-design-6da604bf6329fd9931237066088d59d8_screen.jpg?ts=1601244370"
          :tags="restaurant.tags"
          @like="removeRestaurantFromFavourite(restaurant.id)"
          @see-details="$router.push(`/restaurant-details/${restaurant.id}`)"
        />
      </UiFlexWithGapLayout>
      <UiHeading v-else size="h3" color="dark"
        >You don't have any favourite restaurant yet</UiHeading
      >
    </template>
  </UiTabs>
</template>
