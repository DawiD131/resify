<script lang="ts" setup>
import { UiSearchInput } from '@/ui';
import { useRestaurantSearch } from '@/features/restaurant-search';

const { foundRestaurant, isLoading, isOpen, onExit, onFocus, queryKey } = useRestaurantSearch();
</script>
<template>
  <UiSearchInput
    v-model="queryKey"
    :is-loading="isLoading"
    placeholder="Search restaurant by name"
    :options="foundRestaurant"
    :is-open="isOpen"
    @exit="onExit"
    @focus="onFocus"
  />
</template>
