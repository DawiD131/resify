<script lang="ts" setup>
import UiIcon from '../../atoms/UiIcon/UiIcon.vue';
import UiSearchElement from './_internals/UiSearchElement.vue';
import { computed } from 'vue';

interface Props {
  placeholder: string;
  isLoading: boolean;
  modelValue: string;
  isOpen: boolean;
  options: { displayName: string; id: number; thumbUrl: string }[];
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'exit'): void;
  (e: 'focus'): void;
  (e: 'item-click', value: number): void;
  (e: 'update:modelValue', value: string): void;
}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emit('update:modelValue', value);
  }
});

const exit = () => emit('exit');
</script>

<template>
  <div class="UiSearchInput" v-click-outside="exit" @keydown.esc="exit">
    <div class="input-relative-box">
      <input :placeholder="props.placeholder" v-model="value" @focus="emit('focus')" />
      <UiIcon class="icon" color="black" variant="search" size="s" />
    </div>

    <div class="search-items" v-if="options.length && isOpen">
      <UiSearchElement
        v-for="option in options"
        @itemClick="emit('item-click', option.id)"
        :key="option.id"
        :id="option.id"
        :display-name="option.displayName"
        :thumb-url="option.thumbUrl"
        @search-item-click="exit"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../assets/scss/helpers.scss';

.UiSearchInput {
  position: relative;

  .input-relative-box {
    position: relative;

    input {
      width: 100%;
      padding: 1rem 1.4rem 1rem 4.2rem;
      border-radius: $base-radius;
      background: $white;

      &::placeholder {
        color: $text-light-dark;
        font-weight: 300;
      }

      @include below-tablet() {
        font-size: 1.8rem;
        padding: 1.2rem 1.4rem 1.2rem 4.2rem;
      }
    }

    .icon {
      position: absolute;
      left: 1.2rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .search-items {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border-radius: $base-radius;
    padding: 1.5rem 2rem;
    top: 5rem;
    position: absolute;
    width: 100%;
    background: $white;
    box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.25);

    @include below-tablet {
      top: 7rem;
    }
  }
}
</style>
