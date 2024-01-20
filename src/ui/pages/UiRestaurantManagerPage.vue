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
      <div class="mid-section">
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .main-content {
    width: 100%;
    margin-top: 12rem;
    @include page-content-layout-base();
  }

  .middle-section-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 6rem 0 4rem 0;
  }

  .mid-section {
    margin: 10rem 0 15rem 0;
  }
}
</style>
