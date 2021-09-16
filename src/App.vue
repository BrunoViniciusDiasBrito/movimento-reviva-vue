<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import Header from "@/components/header.vue";
export default {
  name: "App",
  components: { Header },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1440px;
}
</style>
