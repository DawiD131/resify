<script lang="ts" setup>
import { UiBaseFormContainer, UiInput, UiButton } from '@/ui';
import { ref } from 'vue';
import { useAuthForm } from '@/composables/useAuthForm';
import { useAuthStore } from '@/stores/useAuthStore';

const authStore = useAuthStore();

const state = ref({
  email: '',
  password: ''
});

const { openRegistrationForm } = useAuthForm();

const submit = async () => await authStore.login(state.value.email, state.value.password);
</script>

<template>
  <UiBaseFormContainer submitText="Login" title="Hello again">
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
  </UiBaseFormContainer>
</template>
