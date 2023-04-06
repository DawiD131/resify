<script lang="ts" setup>
import UiIcon from '../atoms/UiIcon/UiIcon.vue';

interface Props {
  rate: 1 | 2 | 3 | 4 | 5;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="UiRating">
    <UiIcon v-for="i in props.rate" :key="i" size="s" variant="star" color="yellow" />
  </div>
</template>
