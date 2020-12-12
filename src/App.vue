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

h1, h2, h3, h4, h5, h6 {
  font-family: 'Roboto', sans-serif;
}

p {
  font-family: 'Roboto Slab', serif;
  line-height: 2rem;
}

.modal-backdrop {
  opacity: 0.75;
  transition: opacity 0.3s ease-in-out;
}
</style>
