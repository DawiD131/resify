<script lang="ts" setup>
import { UiHeader, UiButton } from '@/ui';
import MobileMenu from './MobileMenu.vue';
import { useMobileNavState } from '@/core/useMobileNavState';
import { useAuthStore } from '@/core';
import { useModalStore } from '@/features/modals/stores/useModalStore';

const modalStore = useModalStore();
const authStore = useAuthStore();
const { setState, state } = useMobileNavState();

const logout = async () => await authStore.logout();
</script>

<template>
  <UiHeader @hamburgerClick="setState(!state)" :hamburger-state="state">
    <template #actions>
      <UiButton
        variant="secondary"
        @click="$router.push('/restaurants')"
        v-if="authStore.isLoggedIn"
        >Restaurants</UiButton
      >
      <UiButton variant="secondary" @click="$router.push('/my-account')" v-if="authStore.isLoggedIn"
        >My account</UiButton
      >
      <UiButton variant="secondary" @click="logout" v-if="authStore.isLoggedIn">Logout</UiButton>
      <UiButton
        v-if="!authStore.isLoggedIn"
        variant="secondary"
        size="medium"
        @click="modalStore.setModalState('authModal', true)"
        >Login</UiButton
      >
    </template>
    <template #mobile-nav>
      <MobileMenu>
        <template #actions>
          <UiButton
            variant="secondary"
            expanded
            size="big"
            @click="
              () => {
                $router.push('/restaurants');
                setState(false);
              }
            "
            v-if="authStore.isLoggedIn"
            >Restaurants</UiButton
          >
          <UiButton
            variant="secondary"
            expanded
            size="big"
            @click="
              () => {
                $router.push('/my-account');
                setState(false);
              }
            "
            v-if="authStore.isLoggedIn"
            >My account</UiButton
          >
          <UiButton
            variant="secondary"
            expanded
            size="big"
            v-if="authStore.isLoggedIn"
            @click="
              () => {
                logout();
                setState(false);
              }
            "
            >Logout</UiButton
          >
          <UiButton
            expanded
            variant="secondary"
            size="big"
            @click="
              () => {
                modalStore.setModalState('authModal', true);
                setState(false);
              }
            "
            v-else
            >Login</UiButton
          >
        </template>
      </MobileMenu>
    </template>
  </UiHeader>
</template>
