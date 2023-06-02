import { createApp } from 'vue';
import ExampleApp from '~/vue-components/ExampleApp.vue';

export default {
  init() {
    createApp(ExampleApp).mount('#example-app');
  },
};
