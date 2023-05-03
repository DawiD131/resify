<script lang="ts" setup>
import LoginForm from './internals/LoginForm.vue';
import RegistrationForm from './internals/RegistrationForm.vue';
import { useAuthForm } from '@/composables/useAuthForm';

const { isLoginFormOpen } = useAuthForm();
</script>

<template>
  <LoginForm v-if="isLoginFormOpen" />
  <RegistrationForm v-else />
</template>
