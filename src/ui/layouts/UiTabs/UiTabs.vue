<script lang="ts" setup>
import { ref } from 'vue';
import { UiButton } from '@/ui';
import { useCssBreakpoints } from '@/composables/useCssBreakpoints';
import UiRwdTabNavItem from './_internals/UiRwdTabNavItem.vue';

interface TabsConfig {
  displayName: string;
  slotName: string;
}

interface Props {
  tabsConfig: TabsConfig[];
}

const props = defineProps<Props>();

const currentSlot = ref(props.tabsConfig[0].slotName);

const breakpoints = useCssBreakpoints();
const isDesktop = breakpoints.greater('tablet');
</script>

<template>
  <div class="UiTabs">
    <div class="navigation" v-if="isDesktop">
      <UiButton
        v-for="config in props.tabsConfig"
        :variant="config.slotName === currentSlot ? 'success' : 'primary'"
        :key="config.slotName"
        @click="() => (currentSlot = config.slotName)"
        >{{ config.displayName }}</UiButton
      >
    </div>
    <div v-for="config in props.tabsConfig" :key="config.slotName">
      <UiRwdTabNavItem
        :isActive="config.slotName === currentSlot"
        :display-name="config.displayName"
        @click="() => (currentSlot = config.slotName)"
        v-if="!isDesktop"
      ></UiRwdTabNavItem>
      <slot :name="config.slotName" v-if="config.slotName === currentSlot" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.UiTabs {
  .navigation {
    display: flex;
    gap: 1rem;
    border-bottom: 1px solid gray;
    padding-bottom: 1rem;
    margin-bottom: 4rem;
  }
}
</style>
