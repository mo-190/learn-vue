<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="item in houselist" :key="item.data.houseId">
        <house-item-v9
          v-if="item.discoveryContentType === 9"
          :item-data="item.data"
        >
          {{ item.data.houseName }}
        </house-item-v9>
        <house-item-v3
          v-else-if="item.discoveryContentType === 3"
          :item-data="item.data"
        ></house-item-v3>
      </template>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import { storeToRefs } from "pinia";
import useHomeStore from "@/stores/modules/home";

const HouseItemV9 = defineAsyncComponent(() =>
  import("@/components/house-item-v9/house-item-v9.vue")
);

const HouseItemV3 = defineAsyncComponent(() =>
  import("@/components/house-item-v3/house-item-v3.vue")
);
const homeStore = useHomeStore();
const { houselist } = storeToRefs(homeStore);
</script>

<style scoped lang="less">
.content {
  padding: 10px 8px;

  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
