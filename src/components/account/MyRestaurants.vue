<script lang="ts" setup>
import { UiFlexWithGapLayout, UiHorizontalRestaurantCard, UiTabs } from '@/ui';
import { useMyRestaurants } from '@/core';
import { onMounted } from 'vue';

const { fetchMyRestaurants, myRestaurants } = useMyRestaurants();
onMounted(() => fetchMyRestaurants());

const tabsConfig = [
  {
    displayName: 'My restaurants',
    slotName: 'my-restaurant'
  }
];
</script>

<template>
  <UiTabs :tabsConfig="tabsConfig">
    <template #my-restaurant>
      <UiFlexWithGapLayout v-if="myRestaurants.length">
        <UiHorizontalRestaurantCard
          v-for="restaurant in myRestaurants"
          :key="restaurant.id"
          :rate="3"
          :title="restaurant.name"
          :is-favourite="restaurant.isFavourite"
          thumb-url="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-animated-logo-template-design-6da604bf6329fd9931237066088d59d8_screen.jpg?ts=1601244370"
          :tags="['italian', 'pizza', 'pasta', 'drinks']"
          @manage="$router.push(`/restaurant-manager/${restaurant.id}`)"
          variant="secondary"
        />
      </UiFlexWithGapLayout>
    </template>
  </UiTabs>
</template>
