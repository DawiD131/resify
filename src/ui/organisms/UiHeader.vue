<script lang="ts" setup>
import UiSearchInput from '../molecules/UiSearchInput/UiSearchInput.vue';
import UiLogo from '../atoms/UiLogo.vue';
import { useCssBreakpoints } from '@/core/useCssBreakpoints';
import UiHamburger from '../atoms/UiHamburger.vue';

interface Props {
  hamburgerState: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'hamburgerClick'): void;
}>();

const breakpoints = useCssBreakpoints();
const isDesktop = breakpoints.greater('tablet');
</script>

<template>
  <header class="UiHeader">
    <div class="content">
      <UiLogo />
      <UiSearchInput
        placeholder="search by restaurant name"
        :is-loading="false"
        class="search"
        v-if="isDesktop"
      />
      <div class="actions" v-if="isDesktop">
        <slot name="actions" />
      </div>
      <UiHamburger
        :is-open="props.hamburgerState"
        @click="emit('hamburgerClick')"
        v-if="!isDesktop"
      />
      <slot name="mobile-nav" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/helpers.scss';

.UiHeader {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  background: $primary;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);

  .content {
    @include page-content-layout-large();
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

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
    gap: 0.8rem;
  }
}
</style>
