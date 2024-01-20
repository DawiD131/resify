<script lang="ts" setup>
import UiRatingWithTitle from '../molecules/UiRatingWithTitle.vue';
import UiSimpleButton from '@/ui/atoms/UiSimpleButton.vue';
import UiIcon from '@/ui/atoms/UiIcon/UiIcon.vue';
import UiText from '../atoms/UiText/UiText.vue';

interface Props {
  restaurantName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  thumbUrl: string;
  from: string;
  to: string;
  peopleCount: number;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'delete'): void;
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
      <UiRatingWithTitle
        :thumb-url="props.thumbUrl"
        :title="props.restaurantName"
        :rate="props.rating"
      />
    </div>
    <div class="middle-section">
      <div class="time-box">
        <UiText color="primary">From:</UiText>
        <UiText color="dark-light">
          {{ formatDate(new Date(props.from)) }}
        </UiText>
      </div>
      <div class="time-box">
        <UiText color="primary">To:</UiText>
        <UiText color="dark-light">
          {{ formatDate(new Date(props.to)) }}
        </UiText>
      </div>
      <div class="time-box">
        <UiText color="primary">People count:</UiText>
        <UiText color="dark-light">
          {{ peopleCount }}
        </UiText>
      </div>
    </div>
    <UiSimpleButton @click="emit('delete')">
      <UiIcon color="danger" size="l" variant="close" />
    </UiSimpleButton>
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

  .time-box {
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
}
</style>
