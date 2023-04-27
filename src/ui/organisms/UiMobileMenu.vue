<script setup lang="ts">
import { onMounted, ref, watch, onUnmounted } from 'vue';

interface Props {
  isOpen: boolean;
}

const props = defineProps<Props>();

const menuEl = ref<HTMLElement | null>(null);

const updateMenuHeight = () => {
  if (menuEl.value?.style) {
    menuEl.value.style.height = `calc(${window.innerHeight}px - 7rem)`;
  }
};

watch(menuEl, () => updateMenuHeight());
onMounted(() => window.addEventListener('resize', updateMenuHeight));
onUnmounted(() => window.removeEventListener('resize', updateMenuHeight));
</script>

<template>
  <Transition>
    <div class="UiMobileMenu" v-if="props.isOpen" ref="menuEl">
      <slot />
    </div>
  </Transition>
</template>

<style scoped lang="scss">
@import '../../assets/scss/variables.scss';

.UiMobileMenu {
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
