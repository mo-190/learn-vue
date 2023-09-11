<template>
  <div class="city-group">
    <van-index-bar :sticky="false" :index-list="indexList">
      <van-index-anchor index="热门"></van-index-anchor>
      <div class="list">
        <template v-for="(city, index) in groupData.hotCities" :key="index">
          <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>

      <template v-for="(group, index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group"></van-index-anchor>
        <template v-for="(city, cityIndex) in group.cities" :key="cityIndex">
          <van-cell :title="city.cityName" @click="cityClick(city)"></van-cell>
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
});
const indexList = computed(() => {
  const list = props.groupData.cities.map((item) => item.group);
  list.unshift("#");
  return list;
});
const router = useRouter();
const cityStore = useCityStore();
const cityClick = (city) => {
  console.log(city);
  cityStore.currentCity = city;
  router.back();
};
</script>

<style scoped lang="less">
.list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  padding-right: 25px;
  .city {
    margin: 6px 0;
    width: 70px;
    height: 28px;
    line-height: 28px;
    border-radius: 14px;
    font-size: 12px;
    text-align: center;
    color: #000;
    background-color: #fff4ec;
  }
}
</style>
