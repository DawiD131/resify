<template>
  <div class="UiFlexWIthGapLayout">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.UiFlexWIthGapLayout {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
