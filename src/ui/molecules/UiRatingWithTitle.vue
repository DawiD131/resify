<script lang="ts" setup>
import UiRating from './UiRating.vue';
import UiThumbnail from '../atoms/UiThumbnail.vue';
import UiText from '../atoms/UiText/UiText.vue';

interface Props {
  rate?: 1 | 2 | 3 | 4 | 5;
  title: string;
  thumbUrl: string;
  withoutRating?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  withoutRating: false,
  rate: 1
});
</script>

<template>
  <div class="UiRatingWithTitle">
    <UiThumbnail size="small" :src="props.thumbUrl" alt="restaurant logo" />
    <div class="info-box">
      <UiText size="s" color="dark">{{ props.title }}</UiText>
      <UiRating :rate="props.rate" v-if="!props.withoutRating" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.UiRatingWithTitle {
  display: flex;
  align-items: center;
  gap: 1.2rem;

  .info-box {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
}
</style>
