<script lang="ts" setup>
import { headingSizes, type HeadingSizes, headingColors, type HeadingColors } from './_internals';

interface Props {
  text: string;
  size: HeadingSizes;
  color: HeadingColors;
}

const props = defineProps<Props>();

const sizeClass = headingSizes[props.size];
const colorClass = headingColors[props.color];
</script>

<template>
  <component :is="props.size" :class="[sizeClass, colorClass]">{{ props.text }}</component>
</template>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';

@each $name, $size in $heading-sizes {
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
