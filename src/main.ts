/**
 * Vue3 Main script
 */

// Load vue core
import store from '@/store';
import { createApp } from 'vue';

import App from '@/App.vue';
import vuetify from '@/plugins/vuetify';
import router from '@/router';

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import './styles/index.css';

/** Register Vue */
const vue = createApp(App);
vue.use(router);
vue.use(store);
vue.use(vuetify);

vue.component('VueDatePicker', VueDatePicker);

// Run!
router
  .isReady()
  .then(() => vue.mount('#app'))
  .catch(e => console.error(e));
