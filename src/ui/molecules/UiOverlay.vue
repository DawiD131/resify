<script lang="ts" setup>
import { UiIcon, UiText } from '@/ui';

interface Props {
  title: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();
</script>

<template>
  <div class="UiOverlay" v-lock-body-scroll>
    <div class="top-bar">
      <UiText size="xl" color="light">{{ props.title }}</UiText>
      <UiIcon
        variant="close"
        size="l"
        color="white"
        class="icon"
        @click="emit('close')"
        withAction
      />
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/scss/variables.scss';
@import '../../assets/scss/helpers.scss';

.UiOverlay {
  top: 0;
  left: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(10px) contrast(100%) brightness(60%);
  -webkit-backdrop-filter: blur(10px) contrast(100%) brightness(60%);
  z-index: 2000;
  overflow-y: scroll;

  .top-bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem;
  }

  .content {
    max-width: 700px;
    margin: 0 auto;
    width: 100%;
    padding: 2rem 1.5rem;

    @include below-tablet() {
      padding: 2rem 1.5rem 20rem 1.5rem;
    }
  }
}
</style>
