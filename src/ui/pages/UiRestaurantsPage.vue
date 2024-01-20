<script lang="ts" setup>
import UiFooter from '../organisms/UiFooter.vue';
</script>

<template>
  <div class="UiRestaurantsPage">
    <slot name="header" />
    <main class="content">
      <div class="main-content"><slot name="main-content" /></div>
    </main>
    <UiFooter />
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/helpers.scss';

.UiRestaurantsPage {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .content {
    min-height: calc(70vh - 12rem);
    margin-top: 12rem;
    width: 100%;
    display: flex;
    gap: 3rem;
    @include page-content-layout-base();

    @include below-tablet() {
      flex-direction: column;
      gap: 0;
    }

    .main-content {
      padding-top: 2rem;
      flex-grow: 1;

      @include below-tablet() {
        padding-top: 0;
      }
    }

    .side {
      min-width: 35rem;
    }
  }
}
</style>
