<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  name: string;
  label: string;
  isValid: boolean;
  errorMessage: string;
  modelValue: string | number;
  type?: 'text' | 'password' | 'number';
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text'
});

const emit = defineEmits(['update:modelValue', 'blur']);

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
  <label class="UiInput">
    <label class="input-container">
      <input
        v-model="value"
        class="input"
        :placeholder="props.label"
        @blur="emit('blur')"
        :type="props.type"
      />
      <label class="label">{{ props.label }}</label>
    </label>
    <span class="error-msg" v-if="!props.isValid">{{ props.errorMessage }}</span>
  </label>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/helpers.scss';

.UiInput {
  display: flex;
  flex-direction: column;
  position: relative;

  .input {
    background: $grey;
    height: 3.6rem;
    border-radius: $base-radius;
    padding: 0 1.2rem;
    width: 100%;

    @include below-tablet() {
      font-size: 1.8rem;
      height: 4.3rem;
    }
  }

  .input-container {
    position: relative;
    display: block;
    width: 100%;

    .input:not(:placeholder-shown) + .label {
      top: 0;
      background: $grey;
      padding: 1px 5px;
      border-radius: 5px;
      opacity: 1;
    }

    .label {
      font-size: 1rem;
      position: absolute;
      display: inline-block;
      top: 50%;
      left: 1.2rem;
      transform: translateY(-50%);
      transition: 0.3s;
      opacity: 0;
    }
  }

  .error-msg {
    position: absolute;
    bottom: -1.8rem;
    left: 1.2rem;
    color: $danger;
    font-size: 1.2rem;
  }
}
</style>
