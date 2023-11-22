<script lang="ts" setup>
import UiIcon from '@/ui/atoms/UiIcon/UiIcon.vue';
import UiSimpleButton from '@/ui/atoms/UiSimpleButton.vue';

interface Props {
  label: string;
  withAction?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  withAction: false
});

const emit = defineEmits<{
  (e: 'click'): void;
}>();
</script>

<template>
  <div class="UiTag">
    <span class="name">
      {{ props.label }}
    </span>
    <UiSimpleButton @click="emit('click')" v-if="withAction">
      <UiIcon color="white" size="xs" variant="close" />
    </UiSimpleButton>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/scss/helpers.scss';

.UiTag {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  background: $secondary;
  border-radius: 0.4rem;
  padding: 0.8rem 1.2rem;
  font-size: 1.2rem;
  color: $white;
  cursor: default;

  .name {
    margin: 0;
    padding: 0;
    line-height: 100%;
  }
}
</style>
