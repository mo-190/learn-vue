<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="var(--primary-color)">
      <template v-for="(item, index) in tabbarData" :key="item.path">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img
              v-if="currentIndex !== index"
              :src="getAssetsURL(item.image)"
              alt=""
            />
            <img v-else :src="getAssetsURL(item.imageActive)" alt="" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbar.js";
import { getAssetsURL } from "@/utils/load_assets.js";
import { ref } from "vue";

const currentIndex = ref(0);
</script>

<style scoped lang="less">
.tab-bar {
  --van-tabbar-item-icon-size: 30px !important;
  img {
    height: 24px;
  }
}
</style>
