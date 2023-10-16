<script lang="ts" setup>
import { UiTabs } from '@/ui';
import RestaurantDataForm from '@/components/forms/RestaurantDataForm.vue';
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
      <RestaurantDataForm />
    </template>
  </UiTabs>
</template>
