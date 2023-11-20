<script lang="ts" setup>
import { UiBaseFormLayout, UiInput, UiButton } from '@/ui';
import { useAuthFormState, useUserStore } from '@/core';
import { ref } from 'vue';
import { useRegisterValidators } from '@/validators';
import useVuelidate from '@vuelidate/core';
import UiCheckbox from '@/ui/atoms/UiCheckbox.vue';

const { openLoginForm } = useAuthFormState();
const state = ref({
  email: '',
  pwd: '',
  firstName: '',
  lastName: '',
  isBusiness: false
});

const rules = useRegisterValidators();
const $v = useVuelidate(rules, state, { $lazy: true });

const userStore = useUserStore();

const submit = async () => {
  $v.value.$touch();
  if (!$v.value.$invalid) {
    await userStore.register(state.value);
  }
};
</script>

<template>
  <UiBaseFormLayout submitText="Login" title="Hello" withShadow>
    <template #inputs>
      <UiInput
        label="First name"
        name="firstName"
        errorMessage="Invalid field"
        :isValid="!$v.firstName.$invalid"
        v-model="state.firstName"
        @blur="$v.firstName.$touch()"
      />
      <UiInput
        label="Last name"
        name="lastName"
        errorMessage="Invalid field"
        :isValid="!$v.lastName.$invalid"
        v-model="state.lastName"
        @blur="$v.lastName.$touch()"
      />
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
        :isValid="!$v.pwd.$invalid"
        v-model="state.pwd"
        @blur="$v.pwd.$touch()"
        type="password"
      />
      <UiCheckbox
        :is-valid="!$v.isBusiness.$invalid"
        name="account-type"
        error-message="Invalid field"
        v-model="state.isBusiness"
        label="register business account"
      />
    </template>
    <template #actions>
      <UiButton variant="success" size="big" expanded @click="submit()">Register</UiButton>
      <UiButton variant="text" @click="openLoginForm()">Or login</UiButton>
    </template>
  </UiBaseFormLayout>
</template>
