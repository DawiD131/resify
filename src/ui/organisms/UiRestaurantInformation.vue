<script lang="ts" setup>
import { UiRatingWithTitle, UiTag, UiText, UiButton } from '@/ui';
interface Props {
  rate: 1 | 2 | 3 | 4 | 5;
  restaurantName: string;
  thumbUrl: string;
  restaurantImageUrl: string;
  tags: { name: string; id: number }[];
  description: string;
  buttonText: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="UiRestaurantInformation">
    <div class="top-bar">
      <UiRatingWithTitle
        :title="props.restaurantName"
        :rate="props.rate"
        :thumbUrl="props.thumbUrl"
      />
      <UiButton>{{ props.buttonText }}</UiButton>
    </div>
    <div class="image-box">
      <img :src="props.restaurantImageUrl" alt="restaurant image" />
    </div>
    <div class="bottom-information">
      <div class="tags">
        <UiTag v-for="tag in props.tags" :label="tag.name" :key="tag.id" />
      </div>
      <div>
        <UiText size="xs">
          {{ props.description }}
        </UiText>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.UiRestaurantInformation {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;

  .top-bar {
    justify-content: space-between;
    display: flex;
    align-items: center;
  }

  .image-box {
    width: 100%;

    img {
      width: 100%;
      max-height: 350px;
      object-fit: cover;
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .bottom-information {
    display: flex;
    flex-direction: column;
    max-width: 50%;
    gap: 3rem;
  }
}
</style>
