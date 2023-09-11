<template>
  <div class="house-item">
    <div class="house-inner">
      <div class="image">
        <img :src="itemData.image.url" alt="" />
      </div>
      <div class="info">
        <div class="location">
          <van-icon name="location" color="#808080" />
          {{ itemData.location }}
        </div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="price">
          <div class="cheap">￥{{ itemData.finalPrice }}</div>
          <div class="exp">{{ itemData.productPrice }}</div>
          <div class="sale">
            立减￥{{ itemData.productPrice - itemData.finalPrice }}
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
  width: 50%;

  .house-inner {
    margin: 5px;

    .image {
      img {
        width: 100%;
        border-radius: 6px;
      }
    }

    .info {
      padding: 15px 8px 0;

      .location {
        color: #000;
      }

      .name {
        color: #333;
        margin: 5px 0;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .summary {
        color: #666;
        font-size: 12px;
      }

      .price {
        display: flex;
        justify-content: left;
        align-items: center;

        margin: 10px 0;

        .cheap {
          color: var(--primary-color);
        }

        .exp {
          color: #999;
          text-decoration: line-through;
          font-size: 12px;
          margin: 0 5px;
        }

        .sale {
          font-size: 12px;
          color: #fff;
          border-radius: 10px;
          padding: 0 3px;
          background-image: linear-gradient(270deg, #f66, #ff9f9f);
        }
      }
    }
  }
}
</style>
