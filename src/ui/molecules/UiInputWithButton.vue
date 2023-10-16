<script setup lang="ts">
import UiInput from '../atoms/UiInput.vue';
import UiCircleButton from '../atoms/UiCircleButton.vue';
import { computed } from 'vue';

interface Props {
  name: string;
  label: string;
  isValid: boolean;
  errorMessage: string;
  modelValue: string | number;
}

const props = defineProps<Props>();

const emit = defineEmits(['update:modelValue', 'click']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  }
});
</script>

<template>
  <div class="UiInputWithButton">
    <UiInput
      :is-valid="isValid"
      :name="name"
      :error-message="errorMessage"
      :model-value="value"
      :label="label"
      class="input"
    />
    <UiCircleButton variant="success" @click="emit('click')" />
  </div>
</template>

<style lang="scss" scoped>
.UiInputWithButton {
  display: flex;
  gap: 1.2rem;
  align-items: center;

  .input {
    flex-grow: 1;
  }
}
</style>
