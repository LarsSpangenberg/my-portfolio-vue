<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
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
