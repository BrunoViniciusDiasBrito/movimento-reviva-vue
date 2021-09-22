<template>
  <nav v-if="!isMobile" class="menu-default">
    <div class="logo">
      <img :src="logo" alt="Reviva Logo" />
    </div>
    <div class="menu-default__items">
      <ul>
        <router-link v-for="route in routeMenu" :key="route.name" :to="route"
          ><li>{{ route.name }}</li></router-link
        >
      </ul>
    </div>
  </nav>

  <nav v-else class="menu-mobile">
    <button @click="handleToggle">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
        />
      </svg>
    </button>
    <transition name="slide-fade">
      <div class="menu-mobile__container" v-if="isToggled">
        <ul>
          <router-link v-for="route in routeMenu" :key="route.name" :to="route"
            ><li>{{ route.name }}</li></router-link
          >
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  data() {
    return {
      isToggled: false,
      logo: require("@/assets/rvv.png"),
      routeMenu: [
        { name: "Home" },
        { name: "Sobre" },
        { name: "Cronograma" },
        { name: "Contato" },
      ],
    };
  },
  methods: {
    handleToggle: function() {
      this.isToggled = !this.isToggled;
    },
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
