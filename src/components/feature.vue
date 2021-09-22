<template>
  <div class="feature">
    <FeatureItem
      v-for="feature in featureItems"
      :key="feature.title"
      :feature="feature"
    />
  </div>
</template>

<script>
import FeatureItem from "./featureItem.vue";
export default {
  components: { FeatureItem },
  data() {
    return {
      featureItems: [
        {
          title: "Cruz",
          body: "A cruz sagrada seja minha luz.",
          url: require("@/assets/images/cruz.jpg"),
        },
        {
          title: "Amor",
          body: "Amai-vos uns aos outros como eu vos amei.",
          url: require("@/assets/images/coracao.jpg"),
        },
        {
          title: "Caridade",
          body: "Amor e caridade, faça-o com amor.",
          url: require("@/assets/images/caridade.jpg"),
        },
      ],
    };
  },
};
</script>

<style></style>
