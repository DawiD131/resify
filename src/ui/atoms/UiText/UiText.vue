<script lang="ts" setup>
import { type TextSizes, type TextColors, textColors, textSizes } from './_internals';
import { computed } from 'vue';

interface Props {
  size?: TextSizes;
  color?: TextColors;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'xs',
  color: 'dark'
});

const sizeClass = computed(() => textSizes[props.size]);
const colorClass = computed(() => textColors[props.color]);
</script>

<template>
  <span :class="[sizeClass, colorClass]"><slot /></span>
</template>

<style lang="scss" scoped>
@import '../../../assets/scss/helpers.scss';

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
