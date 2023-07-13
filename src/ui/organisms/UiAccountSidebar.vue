<script lang="ts" setup>
import { UiRatingWithTitle, UiButton } from '@/ui';

interface NavItem {
  label: string;
  to: string;
}

interface Props {
  userName: string;
  userThumbnailUrl: string;
  navItems: NavItem[];
}

const props = defineProps<Props>();
</script>
<template>
  <div class="UiAccountSidebar">
    <UiRatingWithTitle :title="props.userName" :thumbUrl="props.userThumbnailUrl" />
    <div class="nav-items">
      <UiButton
        variant="text"
        v-for="(navItem, index) in props.navItems"
        :key="index"
        @click="$router.push(navItem.to)"
        >{{ navItem.label }}</UiButton
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/helpers.scss';

.UiAccountSidebar {
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: $base-radius;
  padding: 4rem 4.5rem;

  .nav-items {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
