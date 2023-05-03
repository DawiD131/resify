<script lang="ts" setup>
import { UiSearchInput, UiMobileMenu, UiButton } from '@/ui';
import { useMobileNavStore } from '@/stores/useMobileNavStore';
import { useModalStore } from '@/features/modals/stores/useModalStore';

const mobileNavStore = useMobileNavStore();
const modalStore = useModalStore();
</script>

<template>
  <UiMobileMenu :is-open="mobileNavStore.state">
    <template #content-top>
      <UiButton
        variant="secondary"
        @click="modalStore.setModalState('authModal', true)"
        expanded
        size="big"
        >Login</UiButton
      >
      <UiSearchInput placeholder="search by restaurant name" :is-loading="false" />
    </template>
  </UiMobileMenu>
</template>
