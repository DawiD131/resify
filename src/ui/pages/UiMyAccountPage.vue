<script lang="ts" setup>
import { UiFooter } from '@/ui';
</script>

<template>
  <div class="UiMyAccountPage">
    <slot name="header" />
    <main class="main-content">
      <div class="top-content">
        <div>
          <slot name="top-left" />
        </div>
        <div class="image-box">
          <img src="../../assets/account.svg" alt="account-picture" />
        </div>
      </div>
      <div class="bottom-content">
        <slot name="bottom-content" />
      </div>
    </main>
    <UiFooter />
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/helpers.scss';

.UiMyAccountPage {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .main-content {
    padding: 12rem 0 5rem 0;

    @include page-content-layout-base();
  }

  .image-box {
    @include below-tablet {
      display: none;
    }
  }

  .top-content {
    display: flex;
    justify-content: space-between;
  }

  .bottom-content {
    margin-top: 6rem;
    width: 100%;
  }

  .main-content {
    width: 100%;
  }
}
</style>
