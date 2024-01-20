<script lang="ts" setup>
import { UiBaseFormLayout, UiInput, UiButton } from '@/ui';
import { computed, ref } from 'vue';
import { useUserStore } from '@/core';
import { useQuasar } from 'quasar';
import { useVuelidate } from '@vuelidate/core';
import { usePasswordChangeValidators } from '@/validators';

const userStore = useUserStore();
const $q = useQuasar();

const state = ref({
  password: '',
  newPassword: '',
  passwordConfirm: ''
});

const rules = usePasswordChangeValidators(computed(() => state.value.newPassword));
const $v = useVuelidate(rules, state, { $lazy: true });

const submit = async () => {
  $v.value.$touch();
  await $v.value.$validate();
  if (!$v.value.$invalid) {
    try {
      await userStore.changePassword({
        currentPwd: state.value.password,
        newPwd: state.value.newPassword
      });
      $q.notify({
        message: 'Password was changed',
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
      state.value.password = '';
      state.value.newPassword = '';
      state.value.passwordConfirm = '';
      $v.value.$reset();
    }
  }
};
</script>

<template>
  <UiBaseFormLayout submitText="Edit" title="Change password">
    <template #inputs>
      <UiInput
        type="password"
        label="Password"
        name="password"
        errorMessage="Invalid field"
        :isValid="!$v.password.$invalid"
        v-model="state.password"
        @blur="$v.password.$touch()"
      />
      <UiInput
        type="password"
        label="New password"
        name="new-password"
        errorMessage="Invalid field"
        :isValid="!$v.newPassword.$invalid"
        v-model="state.newPassword"
        @blur="$v.newPassword.$touch()"
      />
      <UiInput
        type="password"
        label="Confirm password"
        name="password-confirmation"
        errorMessage="Invalid field"
        :isValid="!$v.passwordConfirm.$invalid"
        v-model="state.passwordConfirm"
        @blur="$v.passwordConfirm.$touch()"
      />
    </template>
    <template #actions>
      <UiButton variant="success" size="big" expanded @click="submit">Change</UiButton>
    </template>
  </UiBaseFormLayout>
</template>
