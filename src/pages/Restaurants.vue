<script lang="ts" setup>
import { UiRestaurantsPage, UiButton, UiFilterBar, UiHorizontalRestaurantCard } from '@/ui';
import Header from '@/components/organisms/Header.vue';
import _ from 'lodash';
</script>

<template>
  <UiRestaurantsPage>
    <template #header>
      <Header>
        <template #actions>
          <UiButton variant="secondary" @click="() => console.log('logout')">Logout</UiButton>
          <UiButton variant="secondary" @click="() => console.log('logout')">My account</UiButton>
        </template>
        <template #mobile-menu-actions>
          <UiButton variant="secondary" @click="() => console.log('logout')" expanded size="big"
            >My account</UiButton
          >
          <UiButton variant="secondary" @click="() => console.log('logout')" expanded size="big"
            >Logout</UiButton
          >
        </template>
      </Header>
    </template>
    <template #side>
      <UiFilterBar
        :first-criteria="{
          title: 'Location',
          options: [
            {
              id: 'jn1kj2nkjn',
              value: 'Warsaw'
            },
            {
              id: 'asdnasidji',
              value: 'Krakow'
            }
          ],
          currentCriteria: [
            {
              id: 'asdnasidji',
              value: 'Krakow'
            }
          ]
        }"
        :second-criteria="{
          title: 'Tags',
          options: [
            {
              id: 'jn1kj2nkjn',
              value: 'Italian'
            },
            {
              id: 'asdnasidji',
              value: 'Polish food'
            }
          ],
          currentCriteria: [
            {
              id: 'asdnasidji',
              value: 'Polish food'
            }
          ]
        }"
      />
    </template>
    <template #main-content>
      <UiHorizontalRestaurantCard
        v-for="i in _.range(8)"
        :key="i"
        :rate="3"
        title="Restaurant name"
        thumb-url="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-animated-logo-template-design-6da604bf6329fd9931237066088d59d8_screen.jpg?ts=1601244370"
        :tags="['italian', 'pizza', 'pasta', 'drinks']"
        @click="$router.push('restaurant-details')"
      />
    </template>
  </UiRestaurantsPage>
</template>
