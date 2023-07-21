<script lang="ts" setup>
import { UiMyAccountPage, UiTabs } from '@/ui';
import Header from '@/components/organisms/Header.vue';
import PersonalDataForm from '@/components/forms/PersonalDataForm.vue';
import ChangePasswordForm from '@/components/forms/ChangePasswordForm.vue';
import AccountSidebar from '@/components/account/AccountSidebar.vue';

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
  <UiMyAccountPage>
    <template #header>
      <Header />
    </template>
    <template #top-left>
      <AccountSidebar />
    </template>
    <template #bottom-content>
      <UiTabs :tabsConfig="tabsConfig">
        <template #personal-details>
          <PersonalDataForm />
        </template>
        <template #change-password>
          <ChangePasswordForm />
        </template>
      </UiTabs>
    </template>
  </UiMyAccountPage>
</template>
