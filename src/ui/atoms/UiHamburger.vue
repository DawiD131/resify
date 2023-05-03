<script setup lang="ts">
interface Props {
  isOpen: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'click'): void;
}>();
</script>

<template>
  <div class="UiHamburger" :class="{ active: props.isOpen }" @click="emit('click')">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/helpers.scss';

.UiHamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 22px;
  cursor: pointer;

  .line {
    width: 100%;
    height: 2px;
    background-color: $white;
    transition: transform 0.3s ease;
  }

  &.active .line:first-child {
    transform: translateY(10px) rotate(45deg);
  }

  &.active .line:nth-child(2) {
    opacity: 0;
  }

  &.active .line:last-child {
    transform: translateY(-9px) rotate(-45deg);
  }
}
</style>
