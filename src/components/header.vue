<template>
  <header class="header__container">
    <div>
      <p class="header__message">Todos os Domingos as <span>18:00 hrs</span></p>
    </div>

    <Navbar />
  </header>
</template>

<script>
import Navbar from "@/components/navigation/navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style src="@/assets/scss/style.scss" lang="scss" />
