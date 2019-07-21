<template>
  <div class="user">

    <div class="main">
      <div class="top">
        <div class="people-box">
          <img class="img"
               src="https://b-ssl.duitang.com/uploads/item/201801/11/20180111160138_nTtSs.jpeg">
        </div>
        <h2 class="people-name">李某某</h2>
      </div>
      <van-cell title="我的收藏"
                is-link
                to="collect" />
      <van-cell title="我的钱包"
                is-link
                to="purse" />
      <van-cell title="我的订单"
                is-link
                to="orderForm" />
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from '@/common/FooterBar.vue'
export default {
  components: {
    FooterBar
  }
}
</script>

<style scoped lang="scss">
@import "@/style/_default.scss";
.user {
  @include fullscreen(#f0f0f0);
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    .top {
      width: 100%;
      height: 200px;
      background: #fbbc05;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .people-box {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      .people-name {
        font-size: 16px;
        // color: yellow;
        margin: 10px;
      }
    }
  }
}
</style>
