<script lang="ts" setup>
import { UiBaseFormLayout, UiInput, UiButton } from '@/ui';
import { ref } from 'vue';

const state = ref({
  name: '',
  surname: '',
  age: 0,
  email: ''
});

const submit = () => console.log('personal data updated!');
</script>

<template>
  <UiBaseFormLayout submitText="Edit" title="Personal data">
    <template #inputs>
      <UiInput
        label="Name"
        name="first name"
        errorMessage="Invalid field"
        :isValid="true"
        v-model="state.name"
      />
      <UiInput
        label="Surname"
        name="surname"
        errorMessage="Invalid field"
        :isValid="true"
        v-model="state.surname"
      />
      <UiInput
        label="Age"
        name="age"
        errorMessage="Invalid field"
        :isValid="true"
        v-model="state.age"
      />
      <UiInput
        label="Email"
        name="email"
        errorMessage="Invalid field"
        :isValid="true"
        v-model="state.email"
      />
    </template>
    <template #actions>
      <UiButton variant="success" size="big" expanded @click="submit">Edit</UiButton>
    </template>
  </UiBaseFormLayout>
</template>
