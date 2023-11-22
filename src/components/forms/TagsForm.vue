<script lang="ts" setup>
import { UiInputWithButton, UiTag } from '@/ui';
import { useRestaurantDetails } from '@/core';
import { ref } from 'vue';
import UiHeading from '@/ui/atoms/UiHeading/UiHeading.vue';
interface Props {
  tags: { id: number; name: string }[];
  restaurantId: string;
}

const props = defineProps<Props>();

const inputState = ref('');

const { addTag, removeTag } = useRestaurantDetails(props.restaurantId);

const submit = async () => {
  console.log('');
  await addTag(inputState.value);
  inputState.value = '';
};
</script>

<template>
  <div class="TagsForm">
    <div class="tags" v-if="tags.length">
      <UiTag
        v-for="tag in tags"
        :label="tag.name"
        :key="tag.id"
        with-action
        @click="removeTag(tag.id)"
      />
    </div>
    <UiHeading v-else size="h3" color="dark-light"
      >Your restaurant doesn't have any tags yet
    </UiHeading>

    <div class="input-wrapper">
      <UiInputWithButton
        :is-valid="true"
        name="tag-input"
        error-message="Tag is invalid"
        v-model="inputState"
        label="tag name"
        @click="submit"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.TagsForm {
  padding: 3rem 2rem;

  .tags {
    display: flex;
    gap: 1.2rem;
    flex-wrap: wrap;
    max-width: 800px;
  }

  .input-wrapper {
    margin-top: 4rem;
    max-width: 300px;
  }
}
</style>
