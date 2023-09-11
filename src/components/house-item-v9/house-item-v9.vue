<template>
  <div class="house-item">
    <div class="house-inner">
      <div class="item-inner">
        <div class="image">
          <img :src="itemData.image.url" alt="" />
        </div>
        <div class="info">
          <div class="summary">{{ itemData.summaryText }}</div>
          <div class="name">{{ itemData.houseName }}</div>
          <div class="tips">
            <div class="stars">
              <van-rate :model-value="itemScore" size="12px" allow-half />
            </div>
            <div class="price">{{ itemData.finalPrice }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({}),
  },
});
const itemScore = computed(() => Number(props.itemData.commentScore));
</script>

<style lang="less" scoped>
.house-item {
  // 每个item宽度占屏幕一半
  width: 50%;

  .house-inner {
    // 信息在img上：子绝父相
    position: relative;

    margin: 5px;

    .image {
      img {
        width: 100%;
        border-radius: 6px;
      }
    }

    .info {
      position: absolute;
      bottom: 0;

      padding: 8px 10px;

      color: #fff;

      .summary {
        font-size: 12px;
      }

      .name {
        // 超过2行就省略号省略...
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        margin: 5px 0;
      }

      .tips {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
