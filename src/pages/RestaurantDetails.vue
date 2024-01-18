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
import { useRestaurantDetails, useReviews, useUserStore } from '@/core';
import { useRoute } from 'vue-router';
import { useModalStore } from '@/features/modals';
import { onMounted } from 'vue';
import TermPicker from '@/components/forms/TermPickerForm.vue';

const userStore = useUserStore();

const modalStore = useModalStore();
const route = useRoute();
const { loadReviews, reviews } = useReviews(route.params.id as string);

onMounted(() => loadReviews());

const { restaurantDetails, tags } = useRestaurantDetails(route.params.id as string);
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
        :tags="tags"
        :description="restaurantDetails.description"
        buttonText="see menu"
      />
    </template>
    <template #middle-section-heading>
      <UiHeading size="h2" color="dark">Reviews</UiHeading>
      <UiButton @click="modalStore.setModalState('reviewModal', true)">Add review</UiButton>
    </template>
    <template #middle-section>
      <div v-if="reviews.length">
        <UiSlider :slidesCount="reviews.length" :space-between="10" class="swiper">
          <template v-for="(review, index) in reviews" :key="review.id" #[`slide-${index}`]>
            <UiReviewTile
              :userName="`${review.user.firstName} ${review.user.lastName}`"
              :rating="review.rate"
              userThumbUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              :review="review.description"
            />
          </template>
        </UiSlider>
      </div>
      <UiHeading v-else size="h4" color="dark" class="no-review-info"
        >This restaurant doesn't have any review yet</UiHeading
      >
    </template>
    <template #bottom-section-heading v-if="!userStore.isBusinessAccount">
      <UiHeading size="h2" color="dark-light">Make reservation</UiHeading>
    </template>
    <template #bottom-section v-if="!userStore.isBusinessAccount">
      <TermPicker :restaurant-id="Number(route.params.id)" />
    </template>
  </UiRestaurantDetailsPage>
</template>

<style lang="scss" scoped>
.no-review-info {
  margin: 4rem 0;
  text-align: center;
}
</style>
