<template>
  <div class="cronograma">
    <BannerList />
    <Calender />
    <InstaSection />
  </div>
</template>

<script>
import BannerList from "@/components/utils/BannerList";
import InstaSection from "../components/instagramSection.vue";
import Calender from "../components/utils/calender.vue";
export default {
  components: { BannerList, Calender, InstaSection },
};
</script>
