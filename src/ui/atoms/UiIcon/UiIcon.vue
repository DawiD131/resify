<script lang="ts" setup>
import {
  iconColors,
  iconsSet,
  iconSizes,
  type IconNames,
  type IconColors,
  type IconSizes
} from './_internals';
import { computed } from 'vue';

interface Props {
  color: IconColors;
  variant: IconNames;
  size: IconSizes;
  withAction: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  withAction: false
});

const emit = defineEmits(['click']);

const colorClass = computed(() => iconColors[props.color]);
const sizeClass = computed(() => iconSizes[props.size]);
const icon = computed(() => iconsSet[props.variant]);
</script>

<template>
  <button v-if="props.withAction" @click="emit('click')">
    <svg
      :viewBox="icon.viewBox"
      xmlns="http://www.w3.org/2000/svg"
      :class="[colorClass, sizeClass]"
    >
      <path v-for="(path, index) in icon.paths" :d="path" :key="index" />
    </svg>
  </button>
  <svg
    :viewBox="icon.viewBox"
    xmlns="http://www.w3.org/2000/svg"
    :class="[colorClass, sizeClass]"
    v-else
  >
    <path v-for="(path, index) in icon.paths" :d="path" :key="index" />
  </svg>
</template>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';

@each $name, $color in $icon-colors {
  .color-#{$name} {
    fill: $color;
  }
}

@each $name, $size in $icon-sizes {
  .size-#{$name} {
    width: $size;
  }
}
</style>
