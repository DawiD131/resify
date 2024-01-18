<script lang="ts" setup>
import { UiRestaurantManagerPage, UiButton, UiRestaurantInformation, UiTabs } from '@/ui';
import Header from '@/components/organisms/Header.vue';
import { useRestaurantDetails, useRestaurantStore } from '@/core';
import { useRoute, useRouter } from 'vue-router';
import RestaurantDataForm from '@/components/forms/RestaurantDataForm.vue';
import TagsForm from '@/components/forms/TagsForm.vue';

const route = useRoute();
const router = useRouter();

const tabsConfig = [
  {
    displayName: 'Restaurant informations',
    slotName: 'restaurant-informations'
  },
  {
    displayName: 'Restaurant tags',
    slotName: 'restaurant-tags'
  }
];

const { restaurantDetails, tags } = useRestaurantDetails(route.params.id as string);
const restaurantStore = useRestaurantStore();
const handleRemoveRestaurantClick = async () => {
  await restaurantStore.deleteRestaurant(Number(route.params.id));
  await router.push('/my-account/my-restaurants');
};
</script>

<template>
  <UiRestaurantManagerPage v-if="restaurantDetails">
    <template #header>
      <Header />
    </template>
    <template #top-section>
      <UiRestaurantInformation
        :restaurantName="restaurantDetails.name"
        :rate="3"
        thumbUrl="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-animated-logo-template-design-6da604bf6329fd9931237066088d59d8_screen.jpg?ts=1601244370"
        restaurantImageUrl="https://media.gettyimages.com/id/1248298359/photo/luxury-restaurant-interior-at-night.jpg?s=612x612&w=gi&k=20&c=vF5kJ4HiY11A5DqXzoGwP-PdfKMSsF3EmiKPtQfhrkc="
        :tags="tags"
        :description="restaurantDetails.description"
        buttonText="see menu"
      />
    </template>
    <template #middle-section>
      <UiTabs :tabs-config="tabsConfig">
        <template #restaurant-informations>
          <RestaurantDataForm :restaurant-id="route.params.id as string" />
        </template>
        <template #restaurant-tags>
          <TagsForm :tags="tags" :restaurant-id="route.params.id as string" />
        </template>
      </UiTabs>
    </template>
    <template #bottom-section>
      <UiButton variant="danger" size="big" expanded @click="handleRemoveRestaurantClick"
        >Remove restaurant</UiButton
      >
    </template>
  </UiRestaurantManagerPage>
</template>

<style lang="scss" scoped>
.no-review-info {
  margin: 4rem 0;
  text-align: center;
}
</style>
