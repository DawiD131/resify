<script lang="ts" setup>
import { UiTabs } from '@/ui';
const tabsConfig = [
  {
    displayName: 'Favourite restaurants',
    slotName: 'favourite-restaurants'
  }
];
</script>

<template>
  <UiTabs :tabsConfig="tabsConfig">
    <template #favourite-restaurants>
      <p>Favourite restaurants</p>
    </template>
  </UiTabs>
</template>
