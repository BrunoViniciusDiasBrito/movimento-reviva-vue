<template>
  <div class="bannerList">
    <BannerItem v-for="banner in banners" :key="banner.id" :banner="banner" />
  </div>
</template>

<script>
import BannerItem from "@/components/utils/BannerItem";
export default {
  data() {
    return {
      banners: [
        {
          id: 1,
          title: "Slide 1",
          url: require("@/assets/impressora.png"),
        },
      ],
    };
  },
  components: { BannerItem },
};
</script>

<style></style>
