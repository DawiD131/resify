<script lang="ts" setup>
import UiIcon from './UiIcon/UiIcon.vue';
import { computed } from 'vue';

interface Props {
  variant: 'danger' | 'success';
  label?: string;
}

const props = defineProps<Props>();

const emit = defineEmits(['click']);

const mapVariantToIcon = {
  danger: 'minus',
  success: 'plus'
};

const iconVariant = computed(() => mapVariantToIcon[props.variant] as 'minus' | 'plus');
</script>

<template>
  <div class="UiCircleButton" @click="emit('click')" :class="props.variant">
    <button class="button">
      <UiIcon :variant="iconVariant" color="black" size="xxs" />
    </button>
    <span v-if="props.label" class="label"> {{ props.label }} </span>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/helpers.scss';

.UiCircleButton {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    font-size: 1.6rem;
    transition: 0.1s;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }

  &.success {
    .button {
      background: $success;
    }
  }

  &.danger {
    .button {
      background: $danger;

      * > :first-child {
        transform: translateX(-1px);
      }
    }
  }

  .label {
    font-size: 1.6rem;
    color: $black;
  }
}
</style>
