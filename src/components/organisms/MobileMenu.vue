<script lang="ts" setup>
import { UiSearchInput, UiMobileMenu } from '@/ui';
import { useMobileNavStore } from '@/stores/useMobileNavStore';

const mobileNavStore = useMobileNavStore();
</script>

<template>
  <UiMobileMenu :is-open="mobileNavStore.state">
    <template #content-top>
      <UiSearchInput placeholder="search by restaurant name" :is-loading="false" />
      <slot name="actions" />
    </template>
  </UiMobileMenu>
</template>
