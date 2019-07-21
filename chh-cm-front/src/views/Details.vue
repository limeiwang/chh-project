<template>
  <div class="detail">
    <div class="main">
      <div class="tour-header">
        #
      </div>
      <div class="picture-more">
        <swiper :options="swiperOption">
          <swiper-slide><img src="https://dimg03.c-ctrip.com/images/100u0700000020xjcAE89_C_750_420_Q90.jpg"></swiper-slide>
          <swiper-slide><img src="https://dimg03.c-ctrip.com/images/100u0700000020xjcAE89_C_750_420_Q90.jpg"></swiper-slide>
          <swiper-slide><img src="https://dimg03.c-ctrip.com/images/100u0700000020xjcAE89_C_750_420_Q90.jpg"></swiper-slide>
          <swiper-slide><img src="https://dimg03.c-ctrip.com/images/100u0700000020xjcAE89_C_750_420_Q90.jpg"></swiper-slide>
          <swiper-slide><img src="https://dimg03.c-ctrip.com/images/100u0700000020xjcAE89_C_750_420_Q90.jpg"></swiper-slide>
          <swiper-slide><img src="https://dimg03.c-ctrip.com/images/100u0700000020xjcAE89_C_750_420_Q90.jpg"></swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
      </div>
      <div class="tour-profile">
        轮播图
      </div>
      <div class="tour-bigtitle">
        <p>北京直飞|全日空/日航直飞】精选市区5晚酒店 超大行李额 邂逅东京塔 寻梦迪士尼 情怀乐享海贼王乐园 可选B线：单机票 </p>
      </div>
    </div>
    <footer>

    </footer>
  </div>
</template>

<script>
import { getGoodsData } from '@/api'

export default {
  data () {
    return {
      list: [],
      imgIndex: 1,
      swiperOption: {
        notNextTick: true, // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        initialSlide: 0, // 设定初始化时slide的索引
        autoplay: {
          delay: 1500, // 自动切换的时间间隔，单位ms
          stopOnLastSlide: false, // 当切换到最后一个slide时停止自动切换
          disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay。
          reverseDirection: false, // 开启反向自动轮播。
          waitForTransition: true // 等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。
        },
        loop: true,
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: {
          el: '.swiper-pagination',
          bulletElement: 'li', // 设定分页器指示器（小点）的HTML标签。
          dynamicMainBullets: 2, // 动态分页器的主指示点的数量
          hideOnClick: true, // 默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
          clickable: true // 此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        },
        centeredSlides: true,
        paginationClickable: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        keyboard: true,
        mousewheelControl: true,
        observeParents: true, // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true
      }
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      var id = this.$route.params.id
      getGoodsData(id).then(({ data }) => {
        if (data.code === 200) {
          this.list = data.data
          console.log(this.list)
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  .picture-more {
    width: 100%;
    position: relative;
    img {
      width: 100%;
      display: block;
    }
    .swiper-pagination {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
