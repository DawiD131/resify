<script lang="ts" setup>
import { useUserStore } from '@/stores/useUserStore';
import { onBeforeMount } from 'vue';

const userStore = useUserStore();

onBeforeMount(() => {
  userStore.getUser();
});
</script>

<template>
  <h1>Hello! -> {{ userStore.currentUser }}</h1>
</template>
