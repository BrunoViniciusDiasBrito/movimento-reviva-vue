<template>
  <header class="header__container">
    <div>
      <p class="header__message">Fique ligado para mais informações</p>
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
