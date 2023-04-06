<script lang="ts" setup>
import UiSearchInput from '../molecules/UiSearchInput/UiSearchInput.vue';
import UiButton from '../atoms/UiButton.vue';
import UiLogo from '../atoms/UiLogo.vue';
import { useCssBreakpoints } from '../../composables/useCssBreakpoints';

const breakpoints = useCssBreakpoints();

const isDesktop = breakpoints.greater('tablet');
</script>

<template>
  <header class="UiHeader">
    <UiLogo />
    <UiSearchInput
      placeholder="search by restaurant name"
      :is-loading="false"
      class="search"
      v-if="isDesktop"
    />
    <div class="actions" v-if="isDesktop">
      <UiButton variant="secondary" size="medium">Login</UiButton>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.UiHeader {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: $primary;
  padding: 1rem 2rem;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.25);

  .search {
    flex-basis: 35%;
    margin-left: 3rem;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 2;
  }
}
</style>