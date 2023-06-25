<script lang="ts" setup>
import { UiLandingPage, UiHeading, UiButton, UiVerticalRestaurantCard, UiSlider } from '@/ui';
import _ from 'lodash';
import { useModalStore } from '@/features/modals/stores/useModalStore';
import { useMobileNavStore } from '@/stores/useMobileNavStore';
import Header from '@/components/organisms/Header.vue';

const modalStore = useModalStore();
const mobileNavStore = useMobileNavStore();
</script>

<template>
  <Header>
    <template #actions>
      <UiButton
        variant="secondary"
        size="medium"
        @click="modalStore.setModalState('authModal', true)"
        >Login</UiButton
      >
    </template>
    <template #mobile-menu-actions>
      <UiButton
        expanded
        variant="secondary"
        size="big"
        @click="modalStore.setModalState('authModal', true)"
        >Login</UiButton
      >
    </template>
  </Header>
  <UiLandingPage>
    <template #hero>
      <UiHeading size="h1" color="dark">Easily book tables at your favorite restaurants!</UiHeading>
      <UiButton variant="primary" size="big">Let's started!</UiButton>
    </template>
    <template #mid-section-heading>
      <UiHeading size="h2" color="light">Best rated</UiHeading>
    </template>
    <template #mid-section-content>
      <UiSlider :slidesCount="10" :space-between="10" class="swiper">
        <template v-for="i in _.range(10)" :key="i" #[`slide-${i}`]>
          <UiVerticalRestaurantCard
            :rate="3"
            title="Restaurant name"
            thumb-url="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-animated-logo-template-design-6da604bf6329fd9931237066088d59d8_screen.jpg?ts=1601244370"
            :tags="['italian', 'pizza', 'pasta', 'drinks']"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis venenatis placerat..."
          />
        </template>
      </UiSlider>
    </template>
    <template #bottom-section-heading>
      <UiHeading size="h2" color="dark">Recently added</UiHeading>
    </template>
    <template #bottom-section-content>
      <UiSlider :slidesCount="10" :space-between="10" class="swiper">
        <template v-for="i in _.range(10)" :key="i" #[`slide-${i}`]>
          <UiVerticalRestaurantCard
            :rate="3"
            title="Restaurant name"
            thumb-url="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-animated-logo-template-design-6da604bf6329fd9931237066088d59d8_screen.jpg?ts=1601244370"
            :tags="['italian', 'pizza', 'pasta', 'drinks']"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis venenatis placerat..."
          />
        </template>
      </UiSlider>
    </template>
  </UiLandingPage>
</template>

<style lang="scss">
.swiper {
  padding: 3rem 0;
}
</style>
