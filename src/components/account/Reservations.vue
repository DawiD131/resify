<script lang="ts" setup>
import { UiTabs } from '@/ui';
const tabsConfig = [
  {
    displayName: 'Active reservations',
    slotName: 'active-reservations'
  },
  {
    displayName: 'Archived reservations',
    slotName: 'archived-reservations'
  }
];
</script>

<template>
  <UiTabs :tabsConfig="tabsConfig">
    <template #active-reservations>
      <p>Active reservations</p>
    </template>
    <template #archived-reservations>
      <p>Archived reservations</p>
    </template>
  </UiTabs>
</template>
