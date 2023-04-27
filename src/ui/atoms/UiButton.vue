<script lang="ts" setup>
interface Props {
  size?: 'medium' | 'big';
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  expanded?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  variant: 'primary',
  expanded: false
});

const emit = defineEmits(['click']);
</script>

<template>
  <button
    @click="emit('click')"
    class="UiButton"
    :class="[props.variant, props.size, { expanded: props.expanded }]"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
@import '../../assets/scss/helpers.scss';

.UiButton {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: $base-radius;
  color: $white;
  cursor: pointer;
  transition: 0.2s;
  font-weight: 300;
  max-width: max-content;

  &.expanded {
    max-width: 100%;
  }

  &.medium {
    padding: 1rem 4.2rem;
    font-size: 1.6rem;
  }

  &.big {
    padding: 1.5rem 5.2rem;
    font-size: 2.2rem;
  }

  &.primary {
    background: $primary;
  }

  &.secondary {
    background: $white;
    color: $primary;
  }

  &.danger {
    background: $danger;
  }

  &.success {
    background: $success;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25);
  }

  @include below-tablet() {
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
}
</style>
