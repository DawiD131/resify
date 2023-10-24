<script lang="ts" setup>
import { UiBaseFormLayout, UiInput, UiButton } from '@/ui';
import { ref } from 'vue';
import { useAuthStore, useAuthFormState } from '@/core';
import { useVuelidate } from '@vuelidate/core';
import { useLoginValidators } from '@/validators';

const rules = useLoginValidators();
const { openRegistrationForm } = useAuthFormState();
const authStore = useAuthStore();

const state = ref({
  email: '',
  password: ''
});

const $v = useVuelidate(rules, state, { $lazy: true });

const submit = async () => {
  $v.value.$touch();
  if (!$v.value.$invalid) {
    await authStore.login(state.value.email, state.value.password);
  }
};
</script>

<template>
  <UiBaseFormLayout submitText="Login" title="Hello again" withShadow>
    <template #inputs>
      <UiInput
        label="Email"
        name="email"
        errorMessage="Invalid field"
        :isValid="!$v.email.$invalid"
        v-model="state.email"
        @blur="$v.email.$touch()"
      />
      <UiInput
        label="Password"
        name="password"
        errorMessage="Invalid field"
        :isValid="!$v.password.$invalid"
        v-model="state.password"
        @blur="$v.password.$touch()"
        type="password"
      />
    </template>
    <template #actions>
      <UiButton variant="success" size="big" expanded @click="submit">Login</UiButton>
      <UiButton variant="text" @click="openRegistrationForm()">Or create account</UiButton>
    </template>
  </UiBaseFormLayout>
</template>
