<template>
  <div class="instagram-section">
    <div class="component">
      <div class="__image"><img :src="perfilImage" alt="" srcset="" /></div>
      <div class="name-wrap">
        <div class="__tag">
          movimentoreviva
        </div>
        <div class="__name">ＲＥＶＩＶＡ</div>
      </div>
      <div class="__followers">
        <a href="https://www.instagram.com/movimentoreviva/">Seguir</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perfilImage: require("@/assets/images/instapic.jpg"),
    };
  },
};
</script>

<style></style>
