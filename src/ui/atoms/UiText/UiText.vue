<script lang="ts" setup>
import { type TextSizes, type TextColors, textColors, textSizes } from './_internals';
import { computed } from 'vue';

interface Props {
  text: string;
  size: TextSizes;
  color: TextColors;
}

const props = defineProps<Props>();

const sizeClass = computed(() => textSizes[props.size]);
const colorClass = computed(() => textColors[props.color]);
</script>

<template>
  <span :class="[sizeClass, colorClass]">{{ props.text }}</span>
</template>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';

@each $name, $size in $text-sizes {
  .size-#{$name} {
    font-size: $size;
  }
}

@each $name, $color in $text-colors {
  .color-#{$name} {
    color: $color;
  }
}
</style>
