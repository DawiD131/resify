<script lang="ts" setup>
import { UiInputWithButton, UiTag } from '@/ui';
import { useRestaurantDetails } from '@/core';
import { ref } from 'vue';
import UiHeading from '@/ui/atoms/UiHeading/UiHeading.vue';
import { useQuasar } from 'quasar';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';
interface Props {
  tags: { id: number; name: string }[];
  restaurantId: string;
}

const props = defineProps<Props>();
const state = ref({
  tag: ''
});

const $v = useVuelidate(
  {
    tag: { required, minLength: minLength(3) }
  },
  state,
  { $lazy: true }
);
const $q = useQuasar();
const { addTag, removeTag } = useRestaurantDetails(props.restaurantId);

const submit = async () => {
  $v.value.$touch();
  await $v.value.$validate();
  if (!$v.value.$invalid) {
    try {
      await addTag(state.value.tag);
      state.value.tag = '';
      $q.notify({
        message: 'Tag was added',
        position: 'top',
        color: 'positive',
        timeout: 1000,
        icon: 'thumb_up'
      });
    } catch {
      $q.notify({
        message: 'Ooops something went wrong',
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
        :is-valid="!$v.tag.$invalid"
        name="tag-input"
        error-message="Tag is invalid"
        v-model="state.tag"
        label="tag name"
        @click="submit"
        @blur="$v.tag.$touch()"
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
