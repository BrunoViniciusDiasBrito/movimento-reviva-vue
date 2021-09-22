<template>
  <div :class="workFlow.class">
    <img :src="workFlow.url" alt="" />
  </div>
</template>

<script>
export default {
  props: ["workFlow"],
};
</script>

<style></style>
