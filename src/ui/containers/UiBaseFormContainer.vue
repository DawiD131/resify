<script lang="ts" setup>
import { UiButton, UiHeading } from '@/ui';

interface Props {
  submitText?: string;
  title: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'submit'): void;
}>();
</script>

<template>
  <div class="UiBaseFormContainer">
    <form>
      <UiHeading size="h3" class="header" color="dark">{{ props.title }}</UiHeading>
      <div class="inputs">
        <slot name="inputs" />
        <div class="row-inputs">
          <slot name="row-inputs" />
        </div>
      </div>
      <div class="actions">
        <slot name="actions">
          <UiButton variant="success" expanded @click="emit('submit')" size="big">
            {{ props.submitText }}</UiButton
          >
        </slot>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/helpers.scss';

.UiBaseFormContainer {
  background: $white;
  padding: 3rem 2rem;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: $base-radius;

  .header {
    margin-bottom: 2rem;
    text-align: center;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .row-inputs {
    display: flex;
    gap: 2rem;

    @include below-tablet {
      flex-direction: column;
    }
  }

  .actions {
    margin-top: 3.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
}
</style>
