<script lang="ts" setup>
import { UiText, UiIcon } from '@/ui';
import { computed } from 'vue';

interface Props {
  displayName: string;
  isActive: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'click'): void;
}>();

const color = computed(() => props.isActive && 'primary');
</script>

<template>
  <div class="UiRwdTabNavItem" :class="{ isActive: props.isActive }" @click="emit('click')">
    <UiText :color="color" size="s">{{ props.displayName }}</UiText>
    <UiIcon variant="arrow_down" size="l" :color="color" class="icon" />
  </div>
</template>

<style lang="scss" scoped>
.UiRwdTabNavItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  border-bottom: 1px solid gray;
  cursor: pointer;
  margin-bottom: 2rem;

  .icon {
    transition: all 0.3s;
  }

  &.isActive .icon {
    transform: rotate(180deg);
  }
}
</style>
