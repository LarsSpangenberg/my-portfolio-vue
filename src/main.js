import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import { BootstrapVue } from 'bootstrap-vue';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueScrollTo, { easing: 'ease-in-out' });
Vue.use(BootstrapVue);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
