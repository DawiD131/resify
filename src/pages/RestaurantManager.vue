<script lang="ts" setup>
import { UiRestaurantDetailsPage, UiButton, UiRestaurantInformation, UiTabs } from '@/ui';
import Header from '@/components/organisms/Header.vue';
import { useRestaurantDetails } from '@/core';
import { useRoute } from 'vue-router';
import RestaurantDataForm from '@/components/forms/RestaurantDataForm.vue';

const route = useRoute();

const tabsConfig = [
  {
    displayName: 'Restaurant informations',
    slotName: 'restaurant-informations'
  },
  {
    displayName: 'Restaurant tags',
    slotName: 'restaurant-tags'
  },
  {
    displayName: 'Restaurant Menu',
    slotName: 'restaurant-menu'
  }
];

const { restaurantDetails } = useRestaurantDetails(route.params.id as string);
</script>

<template>
  <UiRestaurantDetailsPage v-if="restaurantDetails">
    <template #header>
      <Header />
    </template>
    <template #top-section>
      <UiRestaurantInformation
        :restaurantName="restaurantDetails.name"
        :rate="3"
        thumbUrl="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-animated-logo-template-design-6da604bf6329fd9931237066088d59d8_screen.jpg?ts=1601244370"
        restaurantImageUrl="https://media.gettyimages.com/id/1248298359/photo/luxury-restaurant-interior-at-night.jpg?s=612x612&w=gi&k=20&c=vF5kJ4HiY11A5DqXzoGwP-PdfKMSsF3EmiKPtQfhrkc="
        :tags="['italian food', 'drinks', 'tasty food']"
        :description="restaurantDetails.description"
        buttonText="see menu"
      />
    </template>
    <template #middle-section>
      <UiTabs :tabs-config="tabsConfig">
        <template #restaurant-informations>
          <RestaurantDataForm />
        </template>
        <template #restaurant-tags> </template>
        <template #restaurant-menu></template>
      </UiTabs>
    </template>
    <template #bottom-section>
      <UiButton variant="danger" size="big" expanded>Remove restaurant</UiButton>
    </template>
  </UiRestaurantDetailsPage>
</template>

<style lang="scss" scoped>
.no-review-info {
  margin: 4rem 0;
  text-align: center;
}
</style>
