<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search-box></home-search-box>
    <home-categories></home-categories>
    <home-content></home-content>
    <button @click="moreBtnClick"></button>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import useHomeStore from "@/stores/modules/home";
const HomeNavBar = defineAsyncComponent(() =>
  import("./cpns/home-nav-bar.vue")
);
const HomeSearchBox = defineAsyncComponent(() =>
  import("./cpns/home-search-box.vue")
);
const HomeCategories = defineAsyncComponent(() =>
  import("./cpns/home-categories.vue")
);
const HomeContent = defineAsyncComponent(() =>
  import("./cpns/home-content.vue")
);
const homeStore = useHomeStore();
homeStore.fetchHotSuggests();
homeStore.fetchHomeCategories();
homeStore.fetchHouseListData();
const moreBtnClick = () => {
  homeStore.fetchHouseListData(currentPage);
};
</script>

<style scoped lang="less">
.home {
  padding-bottom: 50px;
}
.banner {
  img {
    width: 100%;
  }
}
</style>
