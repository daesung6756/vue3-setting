import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

import '@/assets/scss/reset.scss';
import '@/assets/scss/layout.scss';
import '@/assets/scss/common.scss';

createApp(App)
  .use(i18n)
  .use(store)
  .use(router)
  .mount('#app');
