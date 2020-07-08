<template>
  <div id="app">
    <navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/common/Navigation.vue';
import Footer from './components/common/Footer.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #2c3e50;
}

h1, h2, h3 {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}

p {
  font-family: 'Roboto Slab', serif;
  font-weight: 300;
  line-height: 2rem;
}
</style>
