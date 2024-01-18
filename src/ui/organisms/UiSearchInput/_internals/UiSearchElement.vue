<script lang="ts" setup>
import UiThumbnail from '@/ui/atoms/UiThumbnail.vue';
import UiText from '@/ui/atoms/UiText/UiText.vue';
import UiButton from '@/ui/atoms/UiButton.vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/core';
import { useModalStore } from '@/features/modals';

interface Props {
  displayName: string;
  thumbUrl: string;
  id: number;
}

const props = defineProps<Props>();

const userStore = useUserStore();
const modalStore = useModalStore();
const router = useRouter();

const emit = defineEmits<{
  (e: 'search-item-click'): void;
}>();

const handleClick = async () => {
  if (!userStore.currentUser) {
    modalStore.setModalState('authModal', true);
    return;
  }
  await router.push(`/restaurant-details/${props.id}`);
  emit('search-item-click');
};
</script>

<template>
  <div class="UiSearchElement">
    <div class="logo">
      <UiThumbnail size="little" :src="thumbUrl" alt="thumbnail" />
      <UiText size="xs" color="dark">{{ displayName }}</UiText>
    </div>

    <UiButton size="small" variant="primary" @click="handleClick">See more</UiButton>
  </div>
</template>

<style lang="scss" scoped>
.UiSearchElement {
  .logo {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
