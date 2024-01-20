<script lang="ts" setup>
import UiRatingWithTitle from '../molecules/UiRatingWithTitle.vue';
import UiText from '../atoms/UiText/UiText.vue';
import UiButton from '@/ui/atoms/UiButton.vue';

interface Props {
  restaurantName: string;
  userName: string;
  thumbUrl: string;
  from: string;
  to: string;
  reservationState: 'accepted' | 'pending' | 'archived' | 'cancelled';
  peopleCount: number;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'accept'): any;
  (e: 'pending'): any;
  (e: 'cancel'): any;
}>();

function padTwoDigits(num: number) {
  // @ts-ignore
  return num.toString().padStart(2, '0');
}

function formatDate(date: Date, dateDiveder: string = '-') {
  return (
    [date.getFullYear(), padTwoDigits(date.getMonth() + 1), padTwoDigits(date.getDate())].join(
      dateDiveder
    ) +
    ' ' +
    [padTwoDigits(date.getHours()), padTwoDigits(date.getMinutes())].join(':')
  );
}
</script>

<template>
  <div class="UiHorizontalRestaurantCard">
    <div class="left-section">
      <UiRatingWithTitle :thumb-url="thumbUrl" :title="userName" without-rating />
    </div>
    <div class="middle-section">
      <div class="value-box">
        <UiText color="primary">Restaurant:</UiText>
        <UiText color="dark-light">
          {{ restaurantName }}
        </UiText>
      </div>
      <div class="value-box">
        <UiText color="primary">From:</UiText>
        <UiText color="dark-light">
          {{ formatDate(new Date(props.from)) }}
        </UiText>
      </div>
      <div class="value-box">
        <UiText color="primary">To:</UiText>
        <UiText color="dark-light">
          {{ formatDate(new Date(props.to)) }}
        </UiText>
      </div>
      <div class="value-box">
        <UiText color="primary">People count:</UiText>
        <UiText color="dark-light">
          {{ peopleCount }}
        </UiText>
      </div>
    </div>
    <div class="right-section">
      <UiButton
        variant="success"
        size="small"
        v-if="reservationState !== 'archived' && reservationState !== 'accepted'"
        @click="emit('accept')"
      >
        Accept
      </UiButton>
      <UiButton
        variant="primary"
        size="small"
        v-if="reservationState !== 'pending' && reservationState !== 'archived'"
        @click="emit('pending')"
      >
        Move to pending
      </UiButton>
      <UiButton
        variant="danger"
        size="small"
        v-if="reservationState !== 'archived' && reservationState !== 'cancelled'"
        @click="emit('cancel')"
      >
        cancel
      </UiButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/helpers.scss';

.UiHorizontalRestaurantCard {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: $base-radius;
  padding: 1rem 2rem;

  .value-box {
    display: flex;
    gap: 0.8rem;
  }

  .action-box {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .left-section {
    display: flex;
    align-items: center;
    gap: 5rem;
  }

  .middle-section {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    margin: 0 1.5rem;
  }

  .right-section {
    display: flex;
    gap: 1.2rem;
  }
}
</style>
