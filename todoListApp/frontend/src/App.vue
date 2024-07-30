<template>
  <div id="app">
    <customNavBar />
    <router-view />
  </div>
</template>

<script>
import customNavBar from './components/customNavBar.vue';

export default {
  name: 'App',
  components: {
    customNavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
