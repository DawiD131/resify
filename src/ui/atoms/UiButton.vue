<script lang="ts" setup>
interface Props {
  label: string;
  size?: 'medium' | 'big';
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  variant: 'primary'
});

const emit = defineEmits(['click']);
</script>

<template>
  <button @click="emit('click')" class="UiButton" :class="[props.variant, props.size]">
    {{ props.label }}
  </button>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.UiButton {
  border: none;
  border-radius: $base-radius;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  color: $white;
  cursor: pointer;
  transition: 0.2s;

  &.medium {
    padding: 1.2rem 4.8rem;
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
    background: transparent;
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
}
</style>
