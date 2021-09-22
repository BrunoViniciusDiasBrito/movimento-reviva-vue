<template>
  <div class="work-flow">
    <WorkFlowItem
      v-for="workFlow in workList"
      :key="workFlow.id"
      :workFlow="workFlow"
    />
  </div>
</template>

<script>
import WorkFlowItem from "@/components/utils/workFlowItem";
export default {
  components: { WorkFlowItem },
  data() {
    return {
      workList: [
        {
          url: require("@/assets/images/gratitude.jpg"),
          class: "__worship",
          id: 0,
        },
        {
          url: require("@/assets/images/corpus-christi.jpg"),
          class: "__prayer",
          id: 1,
        },
        {
          url: require("@/assets/images/virgem-maria.jpg"),
          class: "__study",
          id: 2,
        },
        {
          url: require("@/assets/images/gratitude.jpg"),
          class: "__missions",
          id: 3,
        },
        {
          url: require("@/assets/images/frase-rvv.jpg"),
          class: "__reflexion",
          id: 4,
        },
      ],
    };
  },
};
</script>

<style></style>
