<script lang="ts" setup>
import { UiSearchInput, UiMobileMenu } from '@/ui';
import { useMobileNavState } from '@/composables/useMobileNavState';

const { state } = useMobileNavState();
</script>

<template>
  <UiMobileMenu :is-open="state">
    <template #content-top>
      <UiSearchInput placeholder="search by restaurant name" :is-loading="false" />
      <slot name="actions" />
    </template>
  </UiMobileMenu>
</template>
