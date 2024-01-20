<script setup lang="ts">
import UiCircleButton from '@/ui/atoms/UiCircleButton.vue';
import UiInput from '@/ui/atoms/UiInput.vue';
import { computed } from 'vue';

interface Props {
  modelValue: number;
  name: string;
  label: string;
  isValid: boolean;
  errorMessage: string;
}
const props = defineProps<Props>();

const emit = defineEmits(['update:modelValue', 'blur']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    if (value > 0 && value <= 10) {
      emit('update:modelValue', value);
    }
  }
});
</script>

<template>
  <div class="UiCounterInput">
    <UiCircleButton variant="success" @click="value++" />
    <UiInput
      :is-valid="isValid"
      :name="name"
      :error-message="errorMessage"
      v-model="value"
      :label="label"
      type="number"
      class="input"
    />
    <UiCircleButton variant="danger" @click="value--" />
  </div>
</template>

<style lang="scss" scoped>
.UiCounterInput {
  display: flex;
  width: 100%;
  gap: 3rem;

  .input {
    width: 100%;
  }
}
</style>
