<script lang="ts" setup>
import { inject } from 'vue';
import type { SearchInputItem } from './types';
import UiSearchInputItem from './_internals/UiSearchInputItem.vue';
import UiIcon from '../../atoms/UiIcon/UiIcon.vue';

interface Props {
  placeholder: string;
  isLoading: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(['change']);

const inputItems = inject<SearchInputItem[]>('search-input-items');
</script>

<template>
  <div class="UiSearchInput">
    <div class="input-relative-box">
      <input @change="emit('change')" :placeholder="props.placeholder" />
      <UiIcon class="icon" color="black" variant="search" size="s" />
    </div>
    <div>
      <UiSearchInputItem v-for="(item, index) in inputItems" :key="index" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';

.UiSearchInput {
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
    }

    .icon {
      position: absolute;
      left: 1.2rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
