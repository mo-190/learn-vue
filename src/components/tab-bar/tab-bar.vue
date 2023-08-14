<template>
  <div class="tab-bar">
    <div class="tab-bar-ite">首页</div>
    <div class="tab-bar-ite">收藏</div>
    <div class="tab-bar-ite">订单</div>
    <div class="tab-bar-ite">消息</div>
  </div>
</template>

<script setup></script>

<style scoped lang="less">
.tab-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  .tab-bar-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
