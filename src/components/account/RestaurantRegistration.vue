<script lang="ts" setup>
import { UiTabs } from '@/ui';
const tabsConfig = [
  {
    displayName: 'Restaurant registration',
    slotName: 'restaurant-registration'
  }
];
</script>

<template>
  <UiTabs :tabsConfig="tabsConfig">
    <template #restaurant-registration>
      <p>Restaurant registration</p>
    </template>
  </UiTabs>
</template>
