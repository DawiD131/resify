<script lang="ts" setup>
import { UiBaseFormLayout, UiInput, UiButton } from '@/ui';
import { ref } from 'vue';
import { useUserStore } from '@/core';
import { useUpdatePersonalDataValidators } from '@/validators';
import { useVuelidate } from '@vuelidate/core';
import { useQuasar } from 'quasar';

const userStore = useUserStore();

const state = ref({
  name: userStore.currentUser?.firstName ?? '',
  surname: userStore.currentUser?.lastName ?? '',
  email: userStore.currentUser?.email ?? '',
  passwordConfirmation: ''
});

const $q = useQuasar();
const rules = useUpdatePersonalDataValidators();
const $v = useVuelidate(rules, state, { $lazy: true });

const submit = async () => {
  $v.value.$touch();
  await $v.value.$validate();
  if (!$v.value.$invalid) {
    try {
      await userStore.updatePersonalData({
        firstName: state.value.name,
        lastName: state.value.surname,
        email: state.value.email,
        pwd: state.value.passwordConfirmation
      });
      $q.notify({
        message: 'Personal data was changed',
        position: 'top',
        color: 'positive',
        timeout: 1000,
        icon: 'thumb_up'
      });
    } catch (e) {
      $q.notify({
        message: 'Incorrect credentials',
        position: 'top',
        color: 'red',
        timeout: 1000,
        icon: 'thumb_down'
      });
    } finally {
      $v.value.$reset();
    }
  }
};
</script>

<template>
  <UiBaseFormLayout submitText="Edit" title="Personal data">
    <template #inputs>
      <UiInput
        label="Name"
        name="first name"
        errorMessage="Invalid field"
        :isValid="!$v.name.$invalid"
        v-model="state.name"
        @blur="$v.name.$touch"
      />
      <UiInput
        label="Surname"
        name="surname"
        errorMessage="Invalid field"
        :isValid="!$v.surname.$invalid"
        v-model="state.surname"
        @blur="$v.surname.$touch"
      />
      <UiInput
        label="Email"
        name="email"
        errorMessage="Invalid field"
        :isValid="!$v.email.$invalid"
        v-model="state.email"
        @blur="$v.email.$touch"
      />
      <UiInput
        label="Password confirmation"
        name="password"
        errorMessage="Invalid field"
        :isValid="!$v.passwordConfirmation.$invalid"
        v-model="state.passwordConfirmation"
        type="password"
        @blur="$v.passwordConfirmation.$touch"
      />
    </template>
    <template #actions>
      <UiButton variant="success" size="big" expanded @click="submit">Edit</UiButton>
    </template>
  </UiBaseFormLayout>
</template>
