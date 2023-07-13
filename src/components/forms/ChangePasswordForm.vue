<script lang="ts" setup>
import { UiBaseFormLayout, UiInput, UiButton } from '@/ui';
import { ref } from 'vue';

const state = ref({
  password: '',
  newPassword: '',
  passwordConfirm: ''
});

const submit = () => console.log('Password changed!');
</script>

<template>
  <UiBaseFormLayout submitText="Edit" title="Change password">
    <template #inputs>
      <UiInput
        label="Password"
        name="password"
        errorMessage="Invalid field"
        :isValid="true"
        v-model="state.password"
      />
      <UiInput
        label="New password"
        name="new-password"
        errorMessage="Invalid field"
        :isValid="true"
        v-model="state.newPassword"
      />
      <UiInput
        label="Confirm password"
        name="password-confirmation"
        errorMessage="Invalid field"
        :isValid="true"
        v-model="state.passwordConfirm"
      />
    </template>
    <template #actions>
      <UiButton variant="success" size="big" expanded @click="submit">Change</UiButton>
    </template>
  </UiBaseFormLayout>
</template>
