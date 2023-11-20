<script lang="ts" setup>
import { type LinkSizes, linkSizes } from './_internals';
import { computed } from 'vue';

interface Props {
  to: string;
  label: string;
  isActive?: boolean;
  size: LinkSizes;
}

const props = withDefaults(defineProps<Props>(), {
  isActive: false
});

const sizeClass = computed(() => linkSizes[props.size]);
</script>

<template>
  <router-link
    replace
    :to="props.to"
    :class="[{ isActive: props.isActive }, sizeClass, 'UiLink']"
    >{{ props.label }}</router-link
  >
</template>

<style lang="scss" scoped>
@import '../../../assets/scss/helpers.scss';

@each $name, $size in $text-sizes {
  .size-#{$name} {
    font-size: $size;
  }
}

.UiLink {
  color: $primary;
  cursor: pointer;

  &.isActive {
    color: $secondary;
  }
}
</style>
