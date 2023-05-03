<script lang="ts" setup>
interface Props {
  label: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="UiTag">
    {{ props.label }}
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/scss/helpers.scss';

.UiTag {
  background: $secondary;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  display: inline-block;
  font-size: 1.2rem;
  color: $white;
  cursor: default;
}
</style>
