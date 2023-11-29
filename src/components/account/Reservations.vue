<script lang="ts" setup>
import { UiTabs, UiPersonalReservationCard } from '@/ui';
import { useReservations } from '@/core';
import { computed, onMounted } from 'vue';
import UiFlexWithGapLayout from '@/ui/layouts/UiFlexWithGapLayout.vue';
import UiHeading from '@/ui/atoms/UiHeading/UiHeading.vue';

const tabsConfig = [
  {
    displayName: 'Active reservations',
    slotName: 'active-reservations'
  },
  {
    displayName: 'Pending reservations',
    slotName: 'pending-reservations'
  },
  {
    displayName: 'Archived reservations',
    slotName: 'archived-reservations'
  }
];
const { loadReservations, reservations } = useReservations('private');

onMounted(() => {
  loadReservations();
});

const activeReservations = computed(() =>
  reservations.value.filter((reservation: any) => reservation.state === 'active')
);
const pendingReservations = computed(() =>
  reservations.value.filter((reservation: any) => reservation.state === 'pending')
);
const archivedReservations = computed(() =>
  reservations.value.filter((reservation: any) => reservation.state === 'archived')
);
</script>

<template>
  <UiTabs :tabsConfig="tabsConfig">
    <template #active-reservations>
      <UiFlexWithGapLayout>
        <UiPersonalReservationCard
          v-for="reservation in activeReservations"
          :key="reservation.id"
          :to="reservation.to"
          :from="reservation.from"
          :restaurant-name="reservation.restaurant.name"
          :rating="3"
          thumb-url="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-animated-logo-template-design-6da604bf6329fd9931237066088d59d8_screen.jpg?ts=1601244370"
        />
        <UiHeading v-if="!activeReservations.length" size="h4" color="dark-light"
          >You don't have active reservations</UiHeading
        >
      </UiFlexWithGapLayout>
    </template>
    <template #pending-reservations>
      <UiFlexWithGapLayout>
        <UiPersonalReservationCard
          v-for="reservation in pendingReservations"
          :key="reservation.id"
          :to="reservation.to"
          :from="reservation.from"
          :restaurant-name="reservation.restaurant.name"
          :rating="3"
          thumb-url="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-animated-logo-template-design-6da604bf6329fd9931237066088d59d8_screen.jpg?ts=1601244370"
        />
        <UiHeading v-if="!pendingReservations.length" size="h4" color="dark-light"
          >You don't have pending reservations</UiHeading
        >
      </UiFlexWithGapLayout>
    </template>
    <template #archived-reservations>
      <UiFlexWithGapLayout>
        <UiPersonalReservationCard
          v-for="reservation in archivedReservations"
          :key="reservation.id"
          :to="reservation.to"
          :from="reservation.from"
          :restaurant-name="reservation.restaurant.name"
          :rating="3"
          thumb-url="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-animated-logo-template-design-6da604bf6329fd9931237066088d59d8_screen.jpg?ts=1601244370"
        />
        <UiHeading v-if="!archivedReservations.length" size="h4" color="dark-light"
          >You don't have archived reservations</UiHeading
        >
      </UiFlexWithGapLayout>
    </template>
  </UiTabs>
</template>
