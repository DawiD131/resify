<script lang="ts" setup>
import { UiMyAccountPage } from '@/ui';
import Header from '@/components/organisms/Header.vue';
import AccountSidebar from '@/components/account/AccountSidebar.vue';
</script>
<template>
  <UiMyAccountPage>
    <template #header>
      <Header />
    </template>
    <template #top-left>
      <AccountSidebar />
    </template>
    <template #bottom-content>
      <router-view></router-view>
    </template>
  </UiMyAccountPage>
</template>
