import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import 'swiper/css';

const app = createApp(App);

function preventMotion(event: any) {
  window.scrollTo(0, 0);
  event.preventDefault();
  event.stopPropagation();
}

app.directive('lock-body-scroll', {
  mounted() {
    document.body.style.overflowY = 'hidden';
    document.body.style.position = 'relative';
    window.document.documentElement.style.overflow = 'hidden';
    window.addEventListener('scroll', preventMotion, false);
    window.addEventListener('touchmove', preventMotion, false);
  },
  unmounted() {
    document.body.style.overflowY = 'visible';
    document.body.style.position = 'static';
    window.document.documentElement.style.overflow = 'visible';
    window.removeEventListener('scroll', preventMotion, false);
    window.removeEventListener('touchmove', preventMotion, false);
  }
});

app.directive('click-outside', {
  beforeMount(el, binding) {
    el.clickOutsideEvent = function (event: any) {
      if (!el.contains(event.target)) {
        binding.value(event);
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent);
  }
});

app.use(createPinia());
app.use(router);

app.mount('#app');
