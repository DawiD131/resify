<script setup lang="ts">
import ModalComponentResolver from '@/features/modals/ModalComponentResolver.vue';
</script>

<template>
  <RouterView />
  <ModalComponentResolver />
</template>

<style lang="scss">
@import 'assets/scss/global.scss';
</style>
