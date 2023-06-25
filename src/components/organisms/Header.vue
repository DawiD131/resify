<script lang="ts" setup>
import { UiHeader } from '@/ui';
import MobileMenu from './MobileMenu.vue';
import { useMobileNavStore } from '@/stores/useMobileNavStore';

const mobileNavStore = useMobileNavStore();
</script>

<template>
  <UiHeader
    @hamburgerClick="mobileNavStore.setState(!mobileNavStore.state)"
    :hamburger-state="mobileNavStore.state"
  >
    <template #actions>
      <slot name="actions" />
    </template>
    <template #mobile-nav>
      <MobileMenu>
        <template #actions>
          <slot name="mobile-menu-actions" />
        </template>
      </MobileMenu>
    </template>
  </UiHeader>
</template>
