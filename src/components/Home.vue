<template>
  <div>
    <navigation :scrolledPastHeader='scrolledPastHeader' />
    <profile :scrolledPastHeader='scrolledPastHeader' />
    <about />
    <portfolio />
    <contact />
    <main-footer />
  </div>
</template>

<script>
import Navigation from './common/Navigation.vue';
import Profile from './Profile.vue';
import About from './About.vue';
import Portfolio from './portfolio/Portfolio.vue';
import Contact from './contact/Contact.vue';
import MainFooter from './common/Footer.vue';

export default {
  name: 'home',
  components: {
    Navigation,
    Profile,
    About,
    Portfolio,
    Contact,
    MainFooter,
  },
  data() {
    return {
      scrollPosition: null,
    };
  },
  computed: {
    scrolledPastHeader() {
      if (window.innerWidth < 990) {
        if (this.scrollPosition > 100) {
          return true;
        }
      } else if (this.scrollPosition > window.innerHeight / 3) {
        return true;
      }
      return false;
    },
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  created() {
    window.addEventListener('scroll', this.updateScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateScroll);
  },
};
</script>
