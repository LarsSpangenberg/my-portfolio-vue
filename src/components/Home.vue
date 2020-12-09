<template>
  <div>
    <navigation
      :scrolledPastHeader='scrolledPastHeader'
      @navItemClicked='navItemClicked = $event'
    />
    <intro
      :scrolledPastHeader='scrolledPastHeader'
      :cancelAutoScroll='cancelHeaderAutoScroll'
    />
    <about />
    <portfolio />
    <contact />
    <main-footer />
  </div>
</template>

<script>
import Navigation from './common/Navigation.vue';
import Intro from './Intro.vue';
import About from './About.vue';
import Portfolio from './portfolio/Portfolio.vue';
import Contact from './contact/Contact.vue';
import MainFooter from './common/Footer.vue';

export default {
  name: 'home',
  components: {
    Navigation,
    Intro,
    About,
    Portfolio,
    Contact,
    MainFooter,
  },
  data() {
    return {
      scrollPosition: null,
      navItemClicked: false,
    };
  },
  computed: {
    scrolledPastHeader() {
      // if (this.navItemClicked) return false;

      if (window.innerWidth < 990) {
        if (this.scrollPosition > 100) {
          return true;
        }
      } else if (this.scrollPosition > window.innerHeight / 3) {
        return true;
      }
      return false;
    },
    cancelHeaderAutoScroll() {
      if (this.navItemClicked || this.scrollPosition >= window.innerHeight) {
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
