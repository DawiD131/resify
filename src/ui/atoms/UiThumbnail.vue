<script lang="ts" setup>
interface Props {
  size: 'little' | 'small' | 'medium';
  src: string;
  alt: string;
}

const props = defineProps<Props>();
</script>

<template>
  <img :src="props.src" :alt="props.alt" :class="['UiThumbnail', props.size]" />
</template>

<style lang="scss" scoped>
.UiThumbnail {
  border-radius: 50%;

  &.little {
    width: 4.5rem;
    height: 4.5rem;
  }

  &.small {
    width: 6.5rem;
    height: 6.5rem;
  }

  &.medium {
    width: 8rem;
    height: 8rem;
  }
}
</style>
