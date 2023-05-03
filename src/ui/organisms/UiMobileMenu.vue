<script setup lang="ts">
import { onMounted, ref, watch, onUnmounted } from 'vue';
import UiLogo from '@/ui/atoms/UiLogo.vue';
import UiText from '@/ui/atoms/UiText/UiText.vue';

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
    <div class="UiMobileMenu" v-if="props.isOpen" ref="menuEl" v-lock-body-scroll>
      <div class="content">
        <div class="content-top">
          <slot name="content-top" />
        </div>
        <div class="content-bottom">
          <slot name="content-bottom" />
          <div class="footer">
            <UiLogo />
            <UiText color="light" size="xxs">Created by Dawid Kutwin</UiText>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
@import '../../assets/scss/helpers.scss';

.UiMobileMenu {
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  z-index: 10000;
  background-color: $primary;
  border-top: 1px solid $white;

  .content-top {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.5rem 2rem;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
  }
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
