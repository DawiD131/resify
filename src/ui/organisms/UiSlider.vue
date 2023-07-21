<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import _ from 'lodash';

import 'swiper/css';

interface Props {
  slidesCount: number;
  spaceBetween: number;
  breakpoints?: any;
}

const props = withDefaults(defineProps<Props>(), {
  breakpoints: {
    0: { slidesPerView: 1.7 },
    530: { slidesPerView: 2 },
    767: { slidesPerView: 3 },
    1023: { slidesPerView: 4 }
  }
});
</script>

<template>
  <swiper :breakpoints="props.breakpoints" :space-between="10" class="swiper">
    <swiper-slide v-for="i in _.range(props.slidesCount)" :key="i">
      <slot :name="`slide-${i}`" />
    </swiper-slide>
  </swiper>
</template>
