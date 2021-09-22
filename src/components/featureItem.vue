<template>
  <div class="feature-item">
    <h1>{{ feature.title }}</h1>
    <p>{{ feature.body }}</p>
    <img class="feature-item__image" :src="feature.url" />
  </div>
</template>

<script>
export default {
  props: ["feature"],
};
</script>

<style></style>
