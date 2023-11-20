<script lang="ts" setup>
import { UiFooter } from '@/ui';
</script>

<template>
  <div class="UiRestaurantManagerPage">
    <slot name="header" />
    <main class="main-content">
      <div>
        <slot name="top-section" />
      </div>
      <div>
        <slot name="middle-section"></slot>
      </div>
      <div>
        <slot name="bottom-section" />
      </div>
    </main>
    <UiFooter />
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/helpers.scss';

.UiRestaurantManagerPage {
  .main-content {
    margin-top: 12rem;
    @include page-content-layout-base();
  }
}
</style>
