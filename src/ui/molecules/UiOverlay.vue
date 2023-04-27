<script lang="ts" setup>
import UiIcon from '../atoms/UiIcon/UiIcon.vue';
import UiText from '@/ui/atoms/UiText/UiText.vue';

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
      <UiText size="xl" color="dark">{{ props.title }}</UiText>
      <UiIcon
        variant="close"
        size="l"
        color="black"
        class="icon"
        @click="emit('close')"
        withAction
      />
    </div>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/scss/variables.scss';

.UiOverlay {
  top: 0;
  left: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(10px) contrast(100%);
  -webkit-backdrop-filter: blur(10px) contrast(100%);
  z-index: 2000;

  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem;
  }
}
</style>
