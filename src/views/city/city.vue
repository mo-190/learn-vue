<template>
  <div class="top-page">
    <van-search
      v-model="searchValue"
      placeholder="城市/区域/位置"
      shape="round"
      show-action
      @cancel="cancelClick"
    ></van-search>

    <van-tabs v-model:active="tabActive" line-height="3">
      <template v-for="(value, key, index) in allCities" :key="key">
        <van-tab :title="value.title"></van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
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
