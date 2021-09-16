<template>
  <nav v-if="!isMobile">
    <ul>
      <li><router-link :to="{ name: 'Home' }">Inicio</router-link></li>
      <li><router-link :to="{ name: 'Contato' }">Contato</router-link></li>
    </ul>
  </nav>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  data() {
    return {};
  },
  setup() {
    const isMobile = ref(window.innerWidth <= 600);

    return {
      isMobile,
    };
  },
};
</script>

<style src="@/assets/scss/style.scss" lang="scss" />
