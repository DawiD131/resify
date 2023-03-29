<script lang="ts" setup>
interface Props {
  size: 'small' | 'medium';
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
