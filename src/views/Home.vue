<template>
  <div class="home">
    <BannerList />
    <Feature />
    <WorkFlowList />
    <InstaSection />
  </div>
</template>

<script>
// @ is an alias to /src
import BannerList from "@/components/utils/BannerList";
import Feature from "@/components/feature";
import WorkFlowList from "@/components/workFlowList";
import InstaSection from "@/components/instagramSection";

export default {
  name: "Home",
  components: { BannerList, Feature, WorkFlowList, InstaSection },
};
</script>
