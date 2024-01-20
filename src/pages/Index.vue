<script lang="ts" setup>
import { UiLandingPage, UiHeading, UiButton, UiVerticalRestaurantCard, UiSlider } from '@/ui';
import Header from '@/components/organisms/Header.vue';
import { useModalStore } from '@/features/modals/stores/useModalStore';
import { onMounted } from 'vue';
import { useRestaurantStore } from '@/core';

const modalStore = useModalStore();

const restaurantStore = useRestaurantStore();

onMounted(() => {
  restaurantStore.fetchRestaurants();
});

const openLoginModal = () => {
  modalStore.setModalState('authModal', true);
};
</script>

<template>
  <Header />
  <UiLandingPage>
    <template #hero>
      <UiHeading size="h1" color="dark">Easily book tables at your favorite restaurants!</UiHeading>
      <UiButton variant="primary" size="big" @click="openLoginModal">Let's started!</UiButton>
    </template>
    <template #mid-section-heading>
      <UiHeading size="h2" color="light">Best rated</UiHeading>
    </template>
    <template #mid-section-content>
      <UiSlider
        :slidesCount="10"
        :space-between="10"
        class="swiper"
        v-if="restaurantStore.restaurants.length"
      >
        <template
          v-for="(item, index) in restaurantStore.restaurants"
          :key="item.id"
          #[`slide-${index}`]
        >
          <UiVerticalRestaurantCard
            :rate="3"
            :title="item.name"
            thumb-url="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-animated-logo-template-design-6da604bf6329fd9931237066088d59d8_screen.jpg?ts=1601244370"
            :tags="item.tags"
            :description="item.description.slice(0, 150)"
          />
        </template>
      </UiSlider>
      <UiHeading size="h2" color="dark-light" v-else>There is no restaurants yet</UiHeading>
    </template>
    <template #bottom-section-heading>
      <UiHeading size="h2" color="dark">Recently added</UiHeading>
    </template>
    <template #bottom-section-content>
      <UiSlider
        :slidesCount="10"
        :space-between="10"
        class="swiper"
        v-if="restaurantStore.restaurants.length"
      >
        <template
          v-for="(item, index) in restaurantStore.restaurants"
          :key="item.id"
          #[`slide-${index}`]
        >
          <UiVerticalRestaurantCard
            :rate="3"
            :title="item.name"
            thumb-url="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-animated-logo-template-design-6da604bf6329fd9931237066088d59d8_screen.jpg?ts=1601244370"
            :tags="item.tags"
            :description="item.description.slice(0, 150)"
          />
        </template>
      </UiSlider>
      <UiHeading size="h2" color="dark-light" v-else>There is no restaurants yet</UiHeading>
    </template>
  </UiLandingPage>
</template>

<style lang="scss" scoped>
.swiper {
  padding: 3rem 0;
}
</style>
