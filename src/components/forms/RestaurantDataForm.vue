<script lang="ts" setup>
import { UiBaseFormLayout, UiButton, UiInput } from '@/ui';
import { ref } from 'vue';
import { useRestaurantDataValidators } from '@/validators';
import { useVuelidate } from '@vuelidate/core';
import { useRestaurantStore } from '@/core/restaurant';

const state = ref({
  restaurantName: '',
  description: '',
  city: '',
  address: '',
  zipCode: '',
  tag: ''
});

const restaurantStore = useRestaurantStore();
const rules = useRestaurantDataValidators();
const $v = useVuelidate(rules, state, { $lazy: true });

const submit = async () => {
  await restaurantStore.addRestaurant({
    name: state.value.restaurantName,
    description: state.value.description
  });
};
</script>

<template>
  <UiBaseFormLayout submitText="Add" title="Add restaurant">
    <template #inputs>
      <UiInput
        label="Restaurant name"
        name="restaurantName"
        errorMessage="Invalid field"
        :isValid="!$v.restaurantName.$invalid"
        v-model="state.restaurantName"
        @blur="$v.restaurantName.$touch()"
      />
      <UiInput
        label="Description"
        name="description"
        errorMessage="Invalid field"
        :isValid="!$v.description.$invalid"
        v-model="state.description"
        @blur="$v.description.$touch()"
      />
      <UiInput
        label="City"
        name="city"
        errorMessage="Invalid field"
        :isValid="!$v.city.$invalid"
        v-model="state.city"
        @blur="$v.city.$touch()"
      />
      <UiInput
        label="Address"
        name="address"
        errorMessage="Invalid field"
        :isValid="!$v.address.$invalid"
        v-model="state.address"
        @blur="$v.address.$touch()"
      />
      <UiInput
        label="Zip code"
        name="zipCode"
        errorMessage="Invalid field"
        :isValid="!$v.zipCode.$invalid"
        v-model="state.zipCode"
        @blur="$v.zipCode.$touch()"
      />
    </template>
    <template #actions>
      <UiButton variant="success" size="big" expanded @click="submit">Add</UiButton>
    </template>
  </UiBaseFormLayout>
</template>
