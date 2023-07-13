<script lang="ts" setup>
import { UiMyAccountPage, UiAccountSidebar } from '@/ui';
import Header from '@/components/organisms/Header.vue';

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
  <UiMyAccountPage>
    <template #header>
      <Header />
    </template>
    <template #top-left>
      <UiAccountSidebar
        userThumbnailUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        userName="John Doe"
        :navItems="navItems"
      />
    </template>
  </UiMyAccountPage>
</template>
