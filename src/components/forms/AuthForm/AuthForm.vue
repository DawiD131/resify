<script lang="ts" setup>
import LoginForm from './internals/LoginForm.vue';
import RegistrationForm from './internals/RegistrationForm.vue';
import { useAuthFormState } from '@/composables';

const { isLoginFormOpen } = useAuthFormState();
</script>

<template>
  <LoginForm v-if="isLoginFormOpen" />
  <RegistrationForm v-else />
</template>
