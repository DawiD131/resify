<script lang="ts" setup>
import UiHeading from '../atoms/UiHeading/UiHeading.vue';
import UiTag from '../atoms/UiTag.vue';

interface FilterCriteria {
  title: string;
  options: {
    id: string;
    value: string;
  }[];
  currentCriteria: { id: string; value: string }[];
}

interface Props {
  firstCriteria: FilterCriteria;
  secondCriteria: FilterCriteria;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="UiFilterBar">
    <div class="criteria-section">
      <UiHeading size="h5" color="dark">{{ props.firstCriteria.title }}</UiHeading>
      <div class="tags-box">
        <UiTag
          v-for="option in props.firstCriteria.options"
          :key="option.id"
          :label="option.value"
        />
      </div>
    </div>
    <div class="criteria-section">
      <UiHeading size="h5" color="dark">{{ props.secondCriteria.title }}</UiHeading>
      <div class="tags-box">
        <UiTag
          v-for="option in props.secondCriteria.options"
          :key="option.id"
          :label="option.value"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/helpers.scss';

.UiFilterBar {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: $base-radius;
  max-width: 320px;
  padding: 2.5rem 2rem;

  @include below-tablet() {
    // todo: implement rwd
    display: none;
  }

  .tags-box {
    display: flex;
    align-self: flex-end;
    flex-wrap: wrap;
    height: 100%;
    gap: 1.2rem;
    margin: 2rem;
  }
}
</style>
