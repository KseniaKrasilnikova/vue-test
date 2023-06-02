<template>
  <div class="example-app">
    <div class="example-app__logo">
      <app-inline-svg>
        <logo-vue />
      </app-inline-svg>
    </div>
    <div class="example-app__message">
      {{ message }}
    </div>
    <div class="example-app__counter">
      {{ counter }}
    </div>
    <div class="example-app__actions">
      <button
        type="button"
        class="button"
        @click="decreaseCounter"
      >
        -
      </button>
      <button
        type="button"
        class="button"
        @click="increaseCounter"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import AppInlineSvg from '~/vue-components/AppInlineSvg.vue';
import LogoVue from '~/static/img/logo-vue.svg?inline';

export default {
  components: {
    AppInlineSvg,
    LogoVue,
  },
  setup() {
    const message = 'Hello Vue!';
    const counter = ref(0);

    const decreaseCounter = () => {
      counter.value -= 1;
    };

    const increaseCounter = () => {
      counter.value += 1;
    };

    return {
      message,
      counter,
      decreaseCounter,
      increaseCounter,
    };
  },
};
</script>

<style lang="scss">
$b: '.example-app';

#{$b} {
  padding: 5vh 5vw;
  text-align: center;

  > * + * {
    margin-top: 5vh;
  }

  &__logo {
    width: 5vw;
    margin-right: auto;
    margin-left: auto;
  }

  &__counter {
    font-size: rem(25px);
  }

  &__message {
    font-size: rem(66px);
    text-align: center;
  }

  &__actions {
    display: flex;
    justify-content: center;

    > * + * {
      margin-left: 1em;
    }
  }
}
</style>
