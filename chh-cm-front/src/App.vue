<template>
  <div id="app">
    <transition name="router-fade"
                mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
@import "@/style/reset.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
