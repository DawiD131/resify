<script lang="ts" setup>
import { UiBaseFormLayout, UiButton, UiInput } from '@/ui';
import { ref, onMounted } from 'vue';
import { useReviewValidator } from '@/validators';
import { useVuelidate } from '@vuelidate/core';
import { useReviews } from '@/core';
import { useRoute } from 'vue-router';
import { useModalStore } from '@/features/modals';

const modalStore = useModalStore();

const state = ref({
  rate: 0,
  description: ''
});

const route = useRoute();

const rules = useReviewValidator();
const $v = useVuelidate(rules, state, { $lazy: true });

const { loadReviews, addReview } = useReviews(route.params.id as string);

onMounted(() => {
  loadReviews();
});

const submit = async () => {
  await addReview({
    rate: Number(state.value.rate),
    description: state.value.description
  });
  modalStore.setModalState('reviewModal', false);
};
</script>

<template>
  <UiBaseFormLayout submitText="Add" title="Add review" with-shadow>
    <template #inputs>
      <UiInput
        label="Restaurant name"
        name="restaurantName"
        errorMessage="Invalid field"
        :isValid="!$v.rate.$invalid"
        v-model="state.rate"
        @blur="$v.rate.$touch()"
      />
      <UiInput
        label="Description"
        name="description"
        errorMessage="Invalid field"
        :isValid="!$v.description.$invalid"
        v-model="state.description"
        @blur="$v.description.$touch()"
      />
    </template>
    <template #actions>
      <UiButton variant="success" size="big" expanded @click="submit">Add</UiButton>
    </template>
  </UiBaseFormLayout>
</template>
