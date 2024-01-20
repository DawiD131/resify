<script lang="ts" setup>
import UiLogo from '../atoms/UiLogo.vue';
import UiText from '../atoms/UiText/UiText.vue';
</script>

<template>
  <footer class="UiFooter">
    <div class="content">
      <UiLogo />
      <UiText color="light" size="xxs">Created by Dawid Kutwin</UiText>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/helpers.scss';

.UiFooter {
  margin-top: auto;
  height: 25rem;
  width: 100%;
  background: url('../../assets/footer-wave.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: flex-end;
  padding: 2.4rem 0;

  @include below-tablet {
    background-size: 210% 100%;
  }

  .content {
    @include page-content-layout-large();

    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
}
</style>
