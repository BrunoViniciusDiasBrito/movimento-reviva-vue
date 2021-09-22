<template>
  <div class="context">
    <h1>{{ title }}</h1>
    <div class="__body">
      <p>
        Lorem ipsum dollor amet friun sight satt et almun ipsum yrt amet Lorem
        ipsum dollor amet friun sight satt et almun ipsum yrt amet Lorem ipsum
        dollor amet friun sight satt et almun ipsum yrt amet Lorem ipsum dollor
        amet friun sight satt et almun ipsum yrt amet Lorem ipsum dollor amet
        friun sight satt et almun ipsum yrt amet.
      </p>
      <p>
        Lorem ipsum dollor amet friun sight satt et almun ipsum yrt amet Lorem
        ipsum dollor amet friun sight satt et almun ipsum yrt amet Lorem ipsum
        dollor amet friun sight satt et almun ipsum yrt amet Lorem ipsum dollor
        amet friun sight satt et almun ipsum yrt amet Lorem ipsum dollor amet
        friun sight satt et almun ipsum yrt amet.
      </p>
      <p>
        Lorem ipsum dollor amet friun sight satt et almun ipsum yrt amet Lorem
        ipsum dollor amet friun sight satt et almun ipsum yrt amet Lorem ipsum
        dollor amet friun sight satt et almun ipsum yrt amet Lorem ipsum dollor
        amet friun sight satt et almun ipsum yrt amet Lorem ipsum dollor amet
        friun sight satt et almun ipsum yrt amet.
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const title = ref("Nossa História");

    return {
      title,
    };
  },
};
</script>

<style></style>
