<script lang="ts" setup>
import UiBaseFormContainer from '@/ui/containers/UiBaseFormContainer.vue';
import UiInput from '@/ui/atoms/UiInput.vue';
import { ref } from 'vue';

const state = ref('');
</script>

<template>
  <UiBaseFormContainer submitText="Login" title="Hello">
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
  </UiBaseFormContainer>
</template>
