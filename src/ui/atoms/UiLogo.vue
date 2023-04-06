<script lang="ts" setup>
import UiIcon from '../atoms/UiIcon/UiIcon.vue';
import UiText from '../atoms/UiText/UiText.vue';
</script>
<template>
  <div class="UiLogo">
    <UiIcon variant="logo" size="xxl" color="white" />
    <UiText size="xl" color="light" class="text">resify</UiText>
  </div>
</template>

<style lang="scss" scoped>
.UiLogo {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .text {
    font-family: 'Montserrat Alternates', sans-serif;
  }
}
</style>
