<script lang="ts" setup>
import UiSearchInput from '@/ui/molecules/UiSearchInput/UiSearchInput.vue';
import UiMobileMenu from '@/ui/organisms/UiMobileMenu.vue';
import { useMobileNavStore } from '@/stores/useMobileNavStore';
import UiButton from '@/ui/atoms/UiButton.vue';
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
