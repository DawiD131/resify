<script lang="ts" setup>
import UiFooter from '../organisms/UiFooter.vue';
</script>

<template>
  <main class="UiLandingPageContainer">
    <section class="hero-section">
      <div class="hero-left">
        <slot name="hero" />
      </div>
      <div class="hero-image">
        <img src="../../assets/hero.svg" alt="hero-image" />
      </div>
    </section>
    <section class="wave-background">
      <div class="section section--with-waves">
        <div class="section-heading">
          <slot name="mid-section-heading" />
        </div>
        <div class="section-content">
          <slot name="mid-section-content" />
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-heading">
        <slot name="bottom-section-heading" />
      </div>
      <div class="section-content">
        <slot name="bottom-section-content" />
      </div>
    </section>
    <UiFooter />
  </main>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/helpers.scss';

.UiLandingPageContainer {
  display: flex;
  flex-direction: column;

  .hero-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 12rem 6rem 5rem 6rem;

    @include below-mobile() {
      padding: 10rem 2rem 3rem 2rem;
    }

    .hero-image {
      max-width: 700px;
      flex-grow: 3;
      flex-basis: 50%;
      min-width: 300px;

      img {
        width: 100%;
      }
    }

    .hero-left {
      flex-basis: 50%;
      max-width: 800px;
      margin-top: 8rem;
      display: flex;
      flex-direction: column;
      gap: 3rem;
      justify-content: flex-start;

      @include below-tablet {
        margin-top: 4rem;
      }

      @include below-mobile {
        margin-top: 0;
      }
    }

    @include below-mobile {
      gap: 8rem;

      .hero-image,
      .hero-left {
        flex-basis: 100%;
      }
    }
  }

  .wave-background {
    background: url('../../assets/wave.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;

    @include below-tablet {
      background-size: 150% 100%;
    }
  }

  .section {
    min-height: 450px;
    padding-left: 6rem;
    padding-right: 6rem;

    @include below-mobile {
      padding-left: 2rem;
      padding-right: 2rem;
    }

    &--with-waves {
      min-height: 600px;
      padding-top: 13rem;
      padding-bottom: 13rem;
    }
  }

  .section-heading {
    margin-bottom: 4rem;

    @include below-mobile {
      margin-bottom: 1rem;
    }
  }
}
</style>
