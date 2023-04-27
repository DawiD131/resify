<script setup lang="ts">
interface Props {
  isOpen: boolean;
}

const props = defineProps<Props>();
</script>

<template>
  <Transition>
    <div class="UiMobileMenu" v-if="props.isOpen">
      <slot />
    </div>
  </Transition>
</template>

<style scoped lang="scss">
@import '../../assets/scss/variables.scss';

.UiMobileMenu {
  height: calc(100vh - 44px);
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  z-index: 10000;
  background: $primary;
  border-top: 1px solid $white;
}

.v-leave-active,
.v-enter-active {
  transition: transform 0.5s ease-in-out;
}

.v-leave-from {
  transform: translateX(0);
}

.v-enter-from {
  transform: translateX(-100%);
}

.v-leave-to {
  transform: translateX(-100%);
}
</style>
