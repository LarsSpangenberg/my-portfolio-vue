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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});

export default router;
