import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';

Vue.use(VueRouter);
const router = new VueRouter({
  // TODO: configure server to always serve index.html for history mode to work properly
  mode: 'history',
  routes: [
    { path: '', component: Home, name: 'home' },
    { path: '*', redirect: { name: 'home' } },
  ],
});

export default router;
