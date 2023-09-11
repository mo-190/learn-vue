<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search-box></home-search-box>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";
const HomeNavBar = defineAsyncComponent(() =>
  import("./cpns/home-nav-bar.vue")
);
const HomeSearchBox = defineAsyncComponent(() =>
  import("./cpns/home-search-box.vue")
);
const homeStore = useHomeStore();
homeStore.fetchHotSuggests();
</script>

<style scoped lang="less">
.banner {
  img {
    width: 100%;
  }
}
</style>
