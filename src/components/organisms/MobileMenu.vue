<script lang="ts" setup>
import { UiMobileMenu } from '@/ui';
import { useMobileNavState } from '@/core/useMobileNavState';
import RestaurantSearchInput from '@/components/organisms/RestaurantSearchInput.vue';

const { state } = useMobileNavState();
</script>

<template>
  <UiMobileMenu :is-open="state">
    <template #content-top>
      <RestaurantSearchInput />
      <slot name="actions" />
    </template>
  </UiMobileMenu>
</template>
