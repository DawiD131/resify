<script lang="ts" setup>
import UiHeader from '@/ui/organisms/UiHeader.vue';
import UiLandingPageContainer from '@/ui/containers/UiLandingPageContainer.vue';
import UiHeading from '@/ui/atoms/UiHeading/UiHeading.vue';
import UiButton from '@/ui/atoms/UiButton.vue';
import UiVerticalRestaurantCard from '@/ui/organisms/UiVerticalRestaurantCard.vue';
import _ from 'lodash';
import UiSlider from '@/ui/organisms/UiSlider.vue';
</script>

<template>
  <UiHeader />
  <UiLandingPageContainer>
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
  </UiLandingPageContainer>
</template>

<style lang="scss">
.swiper {
  padding: 3rem 0;
}
</style>
