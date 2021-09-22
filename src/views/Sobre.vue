<template>
  <div class="about">
    <BannerList />
    <AboutContext />
    <InstaSection />
  </div>
</template>
<script>
import BannerList from "@/components/utils/BannerList";
import InstaSection from "@/components/instagramSection";
import AboutContext from "@/components/aboutContext";
export default {
  components: { InstaSection, BannerList, AboutContext },
};
</script>
