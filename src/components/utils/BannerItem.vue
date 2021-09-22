<template>
  <div class="bannerItem">
    <img :src="banner.url" :alt="banner.title" />
  </div>
</template>

<script>
export default {
  props: ["banner"],
};
</script>

<style></style>
