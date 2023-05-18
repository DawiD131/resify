<script lang="ts" setup>
import UiRatingWithTitle from '../molecules/UiRatingWithTitle.vue';
import UiTag from '../atoms/UiTag.vue';
import UiButton from '../atoms/UiButton.vue';
import UiIcon from '../atoms/UiIcon/UiIcon.vue';

interface Props {
  rate: 1 | 2 | 3 | 4 | 5;
  title: string;
  thumbUrl: string;
  tags: string[];
  description: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="UiHorizontalRestaurantCard">
    <UiRatingWithTitle :rate="props.rate" :thumb-url="props.thumbUrl" :title="props.title" />
    <div class="tags-box">
      <UiTag v-for="(tag, index) in props.tags" :key="index" :label="tag" />
    </div>
    <div class="action-box">
      <UiIcon color="danger" variant="heart" size="xl" />
      <UiButton variant="primary">See more</UiButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/helpers.scss';

.UiHorizontalRestaurantCard {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: $base-radius;
  padding: 1rem 2rem;

  .action-box {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .tags-box {
    display: flex;
    align-self: flex-end;
    flex-wrap: wrap;
    height: 100%;
    gap: 0.8rem;
  }
}
</style>
