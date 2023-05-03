<script lang="ts" setup>
import { UiBaseFormContainer, UiInput, UiButton } from '@/ui';
import { ref } from 'vue';
import { useAuthForm } from '@/composables/useAuthForm';

const state = ref('');
const { openRegistrationForm } = useAuthForm();
</script>

<template>
  <UiBaseFormContainer submitText="Login" title="Hello again">
    <template #inputs>
      <UiInput
        label="Email"
        name="email"
        errorMessage="Invalid field"
        :isValid="true"
        v-model="state"
      />
      <UiInput
        label="Password"
        name="password"
        errorMessage="Invalid field"
        :isValid="true"
        v-model="state"
      />
    </template>
    <template #actions>
      <UiButton variant="success" size="big" expanded>Login</UiButton>
      <UiButton variant="text" @click="openRegistrationForm()">Or create account</UiButton>
    </template>
  </UiBaseFormContainer>
</template>
