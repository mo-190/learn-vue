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
const HomeNavBar = defineAsyncComponent(() =>
  import("./cnps/home-nav-bar.vue")
);
const HomeSearchBox = defineAsyncComponent(() =>
  import("./cnps/home-search-box.vue")
);
</script>

<style scoped lang="less">
.banner {
  img {
    width: 100%;
  }
}
</style>
