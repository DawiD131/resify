<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  name: string;
  label: string;
  isValid: boolean;
  errorMessage: string;
  modelValue: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits(['update:modelValue']);

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
  <div class="UiCheckbox">
    <div class="checkbox">
      <input type="checkbox" :id="name" v-model="value" />
      <label class="input-label" :for="name"></label>
      <label class="label" :for="name">{{ label }}</label>
    </div>
    <span v-if="!isValid" class="error-msg">{{ errorMessage }}</span>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/helpers.scss';

.UiCheckbox {
  .checkbox {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    cursor: pointer;
  }

  input {
    display: none;
  }

  input:checked + .input-label {
    background: $success;
  }

  .input-label {
    width: 3rem;
    height: 3rem;
    border-radius: 5px;
    background: $grey;
  }

  .error-msg {
    color: $danger;
    font-size: 1.2rem;
  }
}
</style>
