<script lang="ts" setup>
import { UiAccountSidebar } from '@/ui';
import { useUserStore } from '@/composables';
import { computed } from 'vue';

const userStore = useUserStore();

const userName = computed(
  () => `${userStore.currentUser?.firstName} ${userStore.currentUser?.lastName}`
);

const navItems = [
  {
    label: 'Personal data',
    to: ''
  },
  {
    label: 'Favourite restaurants',
    to: ''
  },
  {
    label: 'My orders',
    to: ''
  }
];
</script>
<template>
  <UiAccountSidebar
    userThumbnailUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
    :userName="userName"
    :navItems="navItems"
  />
</template>
