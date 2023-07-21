<script lang="ts" setup>
import { UiBaseFormLayout, UiInput, UiButton } from '@/ui';
import { useAuthFormState, useUserStore } from '@/composables';
import { ref } from 'vue';

const { openLoginForm } = useAuthFormState();
const state = ref({
  email: '',
  pwd: '',
  firstName: '',
  lastName: '',
  isBusiness: false
});

const userStore = useUserStore();

const submit = async () => await userStore.register(state.value);
</script>

<template>
  <UiBaseFormLayout submitText="Login" title="Hello" withShadow>
    <template #inputs>
      <UiInput
        label="First name"
        name="firstName"
        errorMessage="Invalid field"
        :isValid="true"
        v-model="state.firstName"
      />
      <UiInput
        label="Last name"
        name="lastName"
        errorMessage="Invalid field"
        :isValid="true"
        v-model="state.lastName"
      />
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
        v-model="state.pwd"
      />
    </template>
    <template #actions>
      <UiButton variant="success" size="big" expanded @click="submit()">Register</UiButton>
      <UiButton variant="text" @click="openLoginForm()">Or login</UiButton>
    </template>
  </UiBaseFormLayout>
</template>
