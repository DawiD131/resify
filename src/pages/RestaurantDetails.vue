<script lang="ts" setup>
import {
  UiRestaurantDetailsPage,
  UiButton,
  UiRestaurantInformation,
  UiHeading,
  UiSlider,
  UiReviewTile
} from '@/ui';
import Header from '@/components/organisms/Header.vue';
import _ from 'lodash';
</script>

<template>
  <UiRestaurantDetailsPage>
    <template #header>
      <Header>
        <template #actions>
          <UiButton variant="secondary">Logout</UiButton>
          <UiButton variant="secondary">My account</UiButton>
        </template>
        <template #mobile-menu-actions>
          <UiButton variant="secondary" expanded size="big">My account</UiButton>
          <UiButton variant="secondary" expanded size="big">Logout</UiButton>
        </template>
      </Header>
    </template>
    <template #top-section>
      <UiRestaurantInformation
        restaurantName="Fabryka pizzy"
        :rate="3"
        thumbUrl="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-animated-logo-template-design-6da604bf6329fd9931237066088d59d8_screen.jpg?ts=1601244370"
        restaurantImageUrl="https://media.gettyimages.com/id/1248298359/photo/luxury-restaurant-interior-at-night.jpg?s=612x612&w=gi&k=20&c=vF5kJ4HiY11A5DqXzoGwP-PdfKMSsF3EmiKPtQfhrkc="
        :tags="['italian food', 'drinks', 'tasty food']"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis venenatis placerat. Cras ornare finibus lacinia. Sed ac ultrices massa, nec finibus nibh. Aenean elit ligula, eleifend ut congue eu, dapibus vel nibh. In commodo ligula in sem ornare blandit. Proin gravida enim non nibh congue imperdiet. Pellentesque sagittis eget sapien et efficitur."
        buttonText="see menu"
      />
    </template>
    <template #middle-section-heading>
      <UiHeading size="h2" color="dark">Reviews</UiHeading>
      <UiButton>Add review</UiButton>
    </template>
    <template #middle-section>
      <UiSlider :slidesCount="10" :space-between="10" class="swiper">
        <template v-for="i in _.range(10)" :key="i" #[`slide-${i}`]>
          <UiReviewTile
            userName="John Doe"
            :rating="4"
            userThumbUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis venenatis placerat. Cras ornare finibus lacinia. Sed ac ultrices massa, nec finibus nibh. Aenean elit ligula, eleifend ut congue eu, dapibus vel nibh. In commodo ligula in sem ornare blandit. Proin gravida enim non nibh congue imperdiet. Pellentesque sagittis eget sapien et efficitur."
          />
        </template>
      </UiSlider>
    </template>
    <template #bottom-section-heading>
      <UiHeading size="h2" color="dark">Make reservation</UiHeading>
    </template>
  </UiRestaurantDetailsPage>
</template>
