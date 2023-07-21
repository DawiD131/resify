<script lang="ts" setup>
import { UiBaseFormLayout, UiInput, UiButton } from '@/ui';
import { ref } from 'vue';
import { useUserStore } from '@/composables';

const userStore = useUserStore();

const state = ref({
  name: userStore.currentUser?.firstName ?? '',
  surname: userStore.currentUser?.lastName ?? '',
  age: 0,
  email: userStore.currentUser?.email ?? ''
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
        type="number"
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
