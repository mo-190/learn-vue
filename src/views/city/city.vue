<template>
  <div class="top-page city">
    <div class="top">
      <van-search
        v-model="searchValue"
        placeholder="城市/区域/位置"
        shape="round"
        show-action
        @cancel="cancelClick"
      ></van-search>

      <van-tabs v-model:active="tabActive" line-height="3">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :name="key" :title="value.title"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key) in allCities" :key="key">
        <city-group v-show="tabActive === key" :groupData="value"></city-group>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
import { storeToRefs } from "pinia";
import useCityStore from "@/stores/modules/city";
import { useRouter } from "vue-router";
const CityGroup = defineAsyncComponent(() => import("./cpns/city-group.vue"));
const searchValue = ref("");
const router = useRouter();
const cancelClick = () => {
  router.back();
};

const tabActive = ref();
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);
</script>

<style scoped lang="less">
.city {
  .top {
    position: relative;
    z-index: 9;
  }
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
