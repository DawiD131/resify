<script lang="ts" setup>
import { UiBaseFormLayout, UiButton, UiInput } from '@/ui';
import { onMounted, ref } from 'vue';
import { useRestaurantDataValidators } from '@/validators';
import { useVuelidate } from '@vuelidate/core';
import { useRestaurantDetails, useRestaurantStore } from '@/core';
import { useQuasar } from 'quasar';

interface Props {
  restaurantId?: string;
}

const props = defineProps<Props>();
const $q = useQuasar();

const state = ref({
  restaurantName: '',
  description: '',
  city: '',
  address: '',
  zipCode: ''
});

onMounted(async () => {
  if (props.restaurantId) {
    const { fetchRestaurantDetails, restaurantDetails } = useRestaurantDetails(props.restaurantId);
    await fetchRestaurantDetails();

    state.value = {
      restaurantName: restaurantDetails.value.name,
      description: restaurantDetails.value.description,
      city: restaurantDetails.value.address.city,
      address: restaurantDetails.value.address.address,
      zipCode: restaurantDetails.value.address.zipCode
    };
  }
});

const restaurantStore = useRestaurantStore();
const rules = useRestaurantDataValidators();
const $v = useVuelidate(rules, state, { $lazy: true });

const submit = async () => {
  $v.value.$touch();
  await $v.value.$validate();
  if (!$v.value.$invalid) {
    try {
      if (props.restaurantId) {
        await restaurantStore.updateRestaurant(props.restaurantId, {
          name: state.value.restaurantName,
          description: state.value.description,
          city: state.value.city,
          address: state.value.address,
          zipCode: state.value.zipCode
        });
        $q.notify({
          message: 'Restaurant data were changed',
          position: 'top',
          color: 'positive',
          timeout: 1000,
          icon: 'thumb_up'
        });
      } else {
        await restaurantStore.addRestaurant({
          name: state.value.restaurantName,
          description: state.value.description,
          city: state.value.city,
          address: state.value.address,
          zipCode: state.value.zipCode
        });
        $q.notify({
          message: 'Restaurant was added',
          position: 'top',
          color: 'positive',
          timeout: 1000,
          icon: 'thumb_up'
        });
        state.value = {
          restaurantName: '',
          description: '',
          city: '',
          address: '',
          zipCode: ''
        };
      }
    } catch {
      $q.notify({
        message: 'Ooops an error occurred',
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
  <UiBaseFormLayout :title="restaurantId ? 'Edit restaurant' : 'Add restaurant'">
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
      <UiButton variant="success" size="big" expanded @click="submit">
        {{ restaurantId ? 'Edit' : 'Add' }}
      </UiButton>
    </template>
  </UiBaseFormLayout>
</template>
