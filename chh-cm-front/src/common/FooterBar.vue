<template>
  <footer class="footer-bar">
    <router-link class="footer-icon"
                 tag="a"
                 to="/home"
                 active-class="active">
      <!-- <i class="home"></i> -->
      <span class="iconfont icon-meihua"></span>
      <span>首页</span>
    </router-link>
    <router-link class="footer-icon"
                 tag="a"
                 to="/fenle"
                 active-class="active">
      <!-- <i class="sorts"></i> -->
      <span class="iconfont icon-baozhu"></span>
      <span>探索</span>
    </router-link>
    <router-link class="footer-icon"
                 tag="a"
                 to="/shopcar"
                 active-class="active">
      <!-- <i class="cart"></i> -->
      <span class="iconfont icon-fudaoliao"></span>
      <span>请回家</span>
    </router-link>
    <router-link class="footer-icon"
                 tag="a"
                 to="/user"
                 active-class="active">
      <!-- <i class="mine"></i> -->
      <span class="iconfont icon-yuanbao"></span>
      <span>我的</span>
    </router-link>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "@/style/_default.scss";
@import "@/style/icon.scss";
.footer-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  background: #fff;
  z-index: 10;
  border-top: 1px solid $desc-color;
  box-shadow: 0 -1px 10px #ddd;
  display: flex;
  align-items: center;
  a {
    color: $default-color;
    font-size: $font-size-s;
    flex: 1;
    text-align: center;
    position: relative;
    text-decoration: none;
    span.iconfont {
      display: block;
      font-size: 26px;
    }
  }
  .active {
    color: $base-color;
  }
}
</style>
