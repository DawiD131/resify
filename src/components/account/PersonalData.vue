<script lang="ts" setup>
import { UiTabs } from '@/ui';
import PersonalDataForm from '@/components/forms/PersonalDataForm.vue';
import ChangePasswordForm from '@/components/forms/ChangePasswordForm.vue';

const tabsConfig = [
  {
    displayName: 'Personal details',
    slotName: 'personal-details'
  },
  {
    displayName: 'Change password',
    slotName: 'change-password'
  }
];
</script>
<template>
  <UiTabs :tabsConfig="tabsConfig">
    <template #personal-details>
      <PersonalDataForm />
    </template>
    <template #change-password>
      <ChangePasswordForm />
    </template>
  </UiTabs>
</template>
