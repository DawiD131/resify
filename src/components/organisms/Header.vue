<script lang="ts" setup>
import { UiHeader, UiButton } from '@/ui';
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
      <slot name="actions">
        <UiButton variant="secondary">Logout</UiButton>
        <UiButton variant="secondary" @click="$router.push('/my-account')">My account</UiButton>
      </slot>
    </template>
    <template #mobile-nav>
      <MobileMenu>
        <template #actions>
          <slot name="mobile-menu-actions">
            <UiButton variant="secondary" expanded size="big">My account</UiButton>
            <UiButton variant="secondary" expanded size="big">Logout</UiButton>
          </slot>
        </template>
      </MobileMenu>
    </template>
  </UiHeader>
</template>
