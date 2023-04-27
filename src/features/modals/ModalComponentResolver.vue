<script lang="ts" setup>
import UiOverlay from '@/ui/molecules/UiOverlay.vue';
import { useModalStore } from '@/features/modals/stores/useModalStore';

const modalStore = useModalStore();
</script>

<template>
  <UiOverlay
    :title="modalStore.activeDisplayName ?? ''"
    v-if="modalStore.activeModalName"
    @close="modalStore.closeModals()"
  >
    <component :is="modalStore.activeModalComponent" />
  </UiOverlay>
</template>
