<script lang="ts" setup>
import UiSearchInput from '../molecules/UiSearchInput/UiSearchInput.vue';
import UiButton from '../atoms/UiButton.vue';
import UiLogo from '../atoms/UiLogo.vue';
import { useCssBreakpoints } from '../../composables/useCssBreakpoints';
import UiHamburger from '../atoms/UiHamburger.vue';
import { ref } from 'vue';
import UiMobileMenu from '../organisms/UiMobileMenu.vue';

const breakpoints = useCssBreakpoints();

const isDesktop = breakpoints.greater('tablet');

const state = ref(false);
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
    <UiHamburger :is-open="state" @click="() => (state = !state)" v-if="!isDesktop" />
    <UiMobileMenu :is-open="state" />
  </header>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
@import '../../assets/scss/helpers.scss';

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
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);

  @include below-tablet() {
    height: 7rem;
  }

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
