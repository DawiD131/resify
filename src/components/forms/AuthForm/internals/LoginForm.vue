<script lang="ts" setup>
import { UiBaseFormLayout, UiInput, UiButton } from '@/ui';
import { ref } from 'vue';
import { useAuthStore, useAuthFormState } from '@/composables';

const authStore = useAuthStore();

const state = ref({
  email: '',
  password: ''
});

const { openRegistrationForm } = useAuthFormState();

const submit = async () => await authStore.login(state.value.email, state.value.password);
</script>

<template>
  <UiBaseFormLayout submitText="Login" title="Hello again" withShadow>
    <template #inputs>
      <UiInput
        label="Email"
        name="email"
        errorMessage="Invalid field"
        :isValid="true"
        v-model="state.email"
      />
      <UiInput
        label="Password"
        name="password"
        errorMessage="Invalid field"
        :isValid="true"
        v-model="state.password"
      />
    </template>
    <template #actions>
      <UiButton variant="success" size="big" expanded @click="submit">Login</UiButton>
      <UiButton variant="text" @click="openRegistrationForm()">Or create account</UiButton>
    </template>
  </UiBaseFormLayout>
</template>
