<script lang="ts" setup>
import UiRatingWithTitle from '../molecules/UiRatingWithTitle.vue';
import UiTag from '../atoms/UiTag.vue';
import UiButton from '../atoms/UiButton.vue';
import UiIcon from '../atoms/UiIcon/UiIcon.vue';
import UiSimpleButton from '../atoms/UiSimpleButton.vue';

interface Props {
  rate: 1 | 2 | 3 | 4 | 5;
  title: string;
  thumbUrl: string;
  tags: { name: string; id: number }[];
  isFavourite: boolean;
  variant?: 'primary' | 'secondary';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary'
});

const emit = defineEmits<{
  (e: 'seeDetails'): void;
  (e: 'manage'): void;
  (e: 'like'): void;
}>();
</script>

<template>
  <div class="UiHorizontalRestaurantCard">
    <div class="left-section">
      <UiRatingWithTitle :rate="props.rate" :thumb-url="props.thumbUrl" :title="props.title" />
      <div class="tags-box">
        <UiTag v-for="tag in props.tags" :label="tag.name" :key="tag.id" />
      </div>
    </div>

    <div class="action-box">
      <UiSimpleButton @click="emit('like')" v-if="variant === 'primary'">
        <UiIcon :color="isFavourite ? 'danger' : 'dark'" variant="heart" size="xl" />
      </UiSimpleButton>
      <UiButton v-if="variant === 'primary'" variant="primary" @click="emit('seeDetails')"
        >See more</UiButton
      >
      <UiButton v-if="variant === 'secondary'" variant="primary" @click="emit('manage')"
        >Manage</UiButton
      >
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

  .left-section {
    display: flex;
    align-items: center;
    gap: 5rem;
  }

  .tags-box {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;

    @include below-mobile() {
      display: none;
    }
  }
}
</style>
