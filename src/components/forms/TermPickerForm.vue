<script lang="ts" setup>
import { computed, ref } from 'vue';
import { UiText, UiButton } from '@/ui';
import { useApiRepository } from '@/core';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';

interface Props {
  restaurantId: number;
}

const props = defineProps<Props>();

const date = ref(new Date().toISOString().split('T')[0]);
const from = ref('');
const to = ref('');

const router = useRouter();
const dateFrom = computed(() => `${date.value} ${from.value}`);
const dateTo = computed(() => `${date.value} ${to.value}`);
const { reservationRepository } = useApiRepository();
const $q = useQuasar();

const submit = async () => {
  try {
    if (!from.value || !to.value) {
      $q.notify({
        message: 'Invalid fields in reservation form',
        position: 'top',
        color: 'red-5',
        timeout: 1000,
        icon: 'warning'
      });

      return;
    }

    await reservationRepository.add({
      restaurantId: props.restaurantId,
      from: new Date(dateFrom.value),
      to: new Date(dateTo.value),
      state: 'pending'
    });

    $q.notify({
      message: 'Reserved!',
      position: 'top',
      color: 'positive',
      timeout: 1000,
      icon: 'thumb_up'
    });

    await router.push('/my-account/reservations');
  } catch (e) {
    console.error(e);
  }
};

const dateOptions = (date: string) => {
  // @ts-ignore
  return date >= new Date().toISOString().split('T')[0].replaceAll('-', '/');
};

const isToday = computed(
  () =>
    new Date(date.value).getDay() === new Date().getDay() &&
    new Date(date.value).getMonth() === new Date().getMonth() &&
    new Date(date.value).getFullYear() === new Date().getFullYear()
);

const fromOptions = (hr: number) => {
  if (isToday.value) {
    return hr > new Date().getHours();
  }
  return true;
};
const toOptions = (hr: number) => {
  if (isToday.value) {
    return hr > new Date().getHours() + 1;
  } else {
    return hr > new Date(dateFrom.value).getHours();
  }
};
</script>

<template>
  <div class="TermPickerForm">
    <div class="input-wrapper">
      <div class="box">
        <UiText size="l" color="dark-light"> Date </UiText>
        <q-date v-model="date" mask="YYYY-MM-DD" class="shadow" :options="dateOptions" />
      </div>

      <div class="box">
        <UiText size="l" color="dark-light"> From </UiText>
        <q-time v-model="from" mask="HH:mm" class="shadow" :options="fromOptions" />
      </div>

      <div class="box">
        <UiText size="l" color="dark-light"> To </UiText>
        <q-time v-model="to" mask="HH:mm" class="shadow" :options="toOptions" />
      </div>
    </div>

    <UiButton expanded variant="success" @click="submit">Make reservation</UiButton>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/helpers';

.TermPickerForm {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

.input-wrapper {
  display: flex;
  justify-content: space-between;

  @include below-tablet {
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
}

.box {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex-grow: 1;
  max-width: 300px;
  min-width: 300px;

  @include below-mobile {
    min-width: 250px;
  }
}

.shadow {
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.25);
}
</style>
