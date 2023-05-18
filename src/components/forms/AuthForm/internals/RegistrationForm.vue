<script lang="ts" setup>
import { UiBaseFormLayout, UiInput, UiButton } from '@/ui';
import { useAuthForm } from '@/composables/useAuthForm';
import { ref } from 'vue';

const { openLoginForm } = useAuthForm();
const state = ref('');
</script>

<template>
  <UiBaseFormLayout submitText="Login" title="Hello">
    <template #inputs>
      <UiInput
        label="First name"
        name="firstName"
        errorMessage="Invalid field"
        :isValid="true"
        v-model="state"
      />
      <UiInput
        label="Last name"
        name="lastName"
        errorMessage="Invalid field"
        :isValid="true"
        v-model="state"
      />
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
      <UiButton variant="success" size="big" expanded>Register</UiButton>
      <UiButton variant="text" @click="openLoginForm()">Or login</UiButton>
    </template>
  </UiBaseFormLayout>
</template>
