<script lang="ts" setup>
import { UiRatingWithTitle, UiText, UiButton } from '@/ui';

interface Props {
  userName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  userThumbUrl: string;
  review: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="UiReviewTile">
    <UiRatingWithTitle
      :rate="props.rating"
      :thumbUrl="props.userThumbUrl"
      :title="props.userName"
    />
    <div>
      <UiText>{{ props.review }}</UiText>
    </div>
    <div class="actions">
      <UiButton variant="text" @click="() => ({})">See review</UiButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/helpers.scss';

.UiReviewTile {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: $base-radius;
  padding: 1.5rem 2rem;

  .actions {
    display: flex;
  }
}
</style>
