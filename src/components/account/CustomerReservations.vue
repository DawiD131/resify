<script lang="ts" setup>
import { UiTabs, UiRestaurateurReservationCard, UiFlexWithGapLayout, UiHeading } from '@/ui';
import { useReservations } from '@/core';
import { computed, onMounted } from 'vue';

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
  },
  {
    displayName: 'Cancelled reservations',
    slotName: 'cancelled-reservations'
  }
];
const { loadReservations, reservations, cancel, activate, pending } = useReservations('business');

onMounted(() => {
  loadReservations();
});

const activeReservations = computed(() =>
  reservations.value.filter((reservation: any) => reservation.state === 'accepted')
);
const pendingReservations = computed(() =>
  reservations.value.filter((reservation: any) => reservation.state === 'pending')
);
const archivedReservations = computed(() =>
  reservations.value.filter((reservation: any) => reservation.state === 'archived')
);
const cancelledReservations = computed(() =>
  reservations.value.filter((reservation: any) => reservation.state === 'cancelled')
);

console.log(reservations);
</script>

<template>
  <UiTabs :tabsConfig="tabsConfig">
    <template #active-reservations>
      <UiFlexWithGapLayout>
        <UiRestaurateurReservationCard
          v-for="reservation in activeReservations"
          :user-name="`${reservation.user.firstName} ${reservation.user.lastName}`"
          :key="reservation.id"
          :to="reservation.to"
          :from="reservation.from"
          :restaurant-name="reservation.restaurant.name"
          :rating="3"
          thumb-url="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          :reservation-state="reservation.state"
          @cancel="cancel(reservation.id, reservation)"
          @pending="pending(reservation.id, reservation)"
        />
        <UiHeading v-if="!pendingReservations.length" size="h4" color="dark-light"
          >You don't have pending reservations</UiHeading
        >
      </UiFlexWithGapLayout>
    </template>
    <template #pending-reservations>
      <UiFlexWithGapLayout>
        <UiRestaurateurReservationCard
          v-for="reservation in pendingReservations"
          :user-name="`${reservation.user.firstName} ${reservation.user.lastName}`"
          :key="reservation.id"
          :to="reservation.to"
          :from="reservation.from"
          :restaurant-name="reservation.restaurant.name"
          :rating="3"
          thumb-url="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          :reservation-state="reservation.state"
          @cancel="cancel(reservation.id, reservation)"
          @accept="activate(reservation.id, reservation)"
        />
        <UiHeading v-if="!pendingReservations.length" size="h4" color="dark-light"
          >You don't have pending reservations</UiHeading
        >
      </UiFlexWithGapLayout>
    </template>

    <template #cancelled-reservations>
      <UiFlexWithGapLayout>
        <UiRestaurateurReservationCard
          v-for="reservation in cancelledReservations"
          :user-name="`${reservation.user.firstName} ${reservation.user.lastName}`"
          :key="reservation.id"
          :to="reservation.to"
          :from="reservation.from"
          :restaurant-name="reservation.restaurant.name"
          :rating="3"
          thumb-url="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          :reservation-state="reservation.state"
          @pending="pending(reservation.id, reservation)"
          @accept="activate(reservation.id, reservation)"
        />
        <UiHeading v-if="!pendingReservations.length" size="h4" color="dark-light"
          >You don't have pending reservations</UiHeading
        >
      </UiFlexWithGapLayout>
    </template>
  </UiTabs>
</template>
