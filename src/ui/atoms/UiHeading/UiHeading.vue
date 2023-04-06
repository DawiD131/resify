<script lang="ts" setup>
import { headingSizes, type HeadingSizes, headingColors, type HeadingColors } from './_internals';

interface Props {
  size: HeadingSizes;
  color: HeadingColors;
}

const props = defineProps<Props>();

const sizeClass = headingSizes[props.size];
const colorClass = headingColors[props.color];
</script>

<template>
  <component :is="props.size" :class="[sizeClass, colorClass]"><slot /></component>
</template>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 300;
}

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
