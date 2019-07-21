<template>
  <header class="header-bar">
    <div class="left-icon">
      <a href="javascript:;"
         class="close"
         @click="$router.back()">
        <i class="icon back"></i>
      </a>
    </div>
    <h2>{{title}}</h2>
    <slot></slot>
  </header>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style scoped lang="scss">
@import "@/style/_default.scss";
.header-bar {
  @include wh(100%, auto);
  background: #cd0806;
  position: relative;
  z-index: 100;
  overflow: hidden;
  h2 {
    padding-left: 20px;
    line-height: 44px;
    font-size: $font-size-l;
    color: $default-color;
    font-weight: bold;
  }
  // .left-icon {
  //   @include wh(auto, 44px);
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   padding: 0 20px;
  //   .close {
  //     @include wh(30px, 30px);
  //     // background: #000;
  //     color: #fff;
  //     border-radius: 100%;
  //     font-size: 8px;
  //     text-decoration: none;
  //   }
  // }
}
</style>
