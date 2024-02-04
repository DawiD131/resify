<script lang="ts" setup>
import UiRatingWithTitle from '../molecules/UiRatingWithTitle.vue';
import UiTag from '../atoms/UiTag.vue';
import UiText from '../atoms/UiText/UiText.vue';
import UiButton from '../atoms/UiButton.vue';
import { useModalStore } from '@/features/modals';

interface Props {
  rate: 1 | 2 | 3 | 4 | 5;
  title: string;
  thumbUrl: string;
  tags: { name: string; id: number }[];
  description: string;
}

const props = defineProps<Props>();

const modalStore = useModalStore();

const handleClick = async () => {
  modalStore.setModalState('authModal', true);
};
</script>

<template>
  <div class="UiVerticalRestaurantCard">
    <UiRatingWithTitle :rate="props.rate" :title="props.title" :thumb-url="props.thumbUrl" />
    <div class="tags-box">
      <UiTag v-for="tag in props.tags" :key="tag.id" :label="tag.name" />
    </div>
    <div class="description">
      <UiText size="xs" color="dark-light">{{ props.description }}</UiText>
    </div>
    <UiButton class="button" variant="primary" size="medium" expanded @click="handleClick"
      >See more</UiButton
    >
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/helpers.scss';

.UiVerticalRestaurantCard {
  display: flex;
  flex-direction: column;
  max-width: 28rem;
  background: $white;
  box-shadow: 5px 4px 18px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  border-radius: $base-radius;
  min-height: 38rem;

  .tags-box {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin: 1.5rem 0 3rem 0;
  }

  .description {
    margin-bottom: 4rem;
  }

  .button {
    margin-top: auto;
  }
}
</style>
