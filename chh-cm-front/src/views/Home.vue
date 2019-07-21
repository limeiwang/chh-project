<template>
  <div class="page home">
    <header-bar title="首页"></header-bar>
    <div class="main">
      <div class="scroll">
        <dl v-for="item in list"
            :key="item.id"
            @click="handleOrder(item.id)"
            class="product-item">
          <dt><img :src="item.prdImgUrl"></dt>
          <dd>
            <h5>{{item.prdTitle}}</h5>
            <span>{{item.comment}}</span>
          </dd>
        </dl>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import { homeDataApi } from '@/api/home'

import FooterBar from '@/common/FooterBar.vue'
import HeaderBar from '@/common/HeaderBar.vue'
export default {
  name: 'home',
  components: {
    FooterBar,
    HeaderBar
  },
  data () {
    return {
      list: [
        {
          id: 1,
          title: '海南三亚国光豪生双飞3-8日自由行',
          describe: '臻选三亚湾国际五星临海海景酒店，畅游4500平泳池，享酒店网红打卡点旅拍，3分钟直达沙滩',
          img: 'http://m.tuniucdn.com/fb2/t1/G1/M00/DF/32/Cii-U1j0IEmIexGgADkVm-_s_QwAAJmEgNnF34AORWz473_w500_h280_c1_t0.jpg'
        },
        {
          id: 2,
          title: '海南三亚国光豪生双飞3-8日自由行',
          describe: '臻选三亚湾国际五星临海海景酒店，畅游4500平泳池，享酒店网红打卡点旅拍，3分钟直达沙滩',
          img: 'http://m.tuniucdn.com/fb2/t1/G1/M00/DF/32/Cii-U1j0IEmIexGgADkVm-_s_QwAAJmEgNnF34AORWz473_w500_h280_c1_t0.jpg'
        }, {
          id: 3,
          title: '海南三亚国光豪生双飞3-8日自由行',
          describe: '臻选三亚湾国际五星临海海景酒店，畅游4500平泳池，享酒店网红打卡点旅拍，3分钟直达沙滩',
          img: 'http://m.tuniucdn.com/fb2/t1/G1/M00/DF/32/Cii-U1j0IEmIexGgADkVm-_s_QwAAJmEgNnF34AORWz473_w500_h280_c1_t0.jpg'
        },
        {
          id: 4,
          title: '海南三亚国光豪生双飞3-8日自由行',
          describe: '臻选三亚湾国际五星临海海景酒店，畅游4500平泳池，享酒店网红打卡点旅拍，3分钟直达沙滩',
          img: 'http://m.tuniucdn.com/fb2/t1/G1/M00/DF/32/Cii-U1j0IEmIexGgADkVm-_s_QwAAJmEgNnF34AORWz473_w500_h280_c1_t0.jpg'
        }, {
          id: 5,
          title: '海南三亚国光豪生双飞3-8日自由行',
          describe: '臻选三亚湾国际五星临海海景酒店，畅游4500平泳池，享酒店网红打卡点旅拍，3分钟直达沙滩',
          img: 'http://m.tuniucdn.com/fb2/t1/G1/M00/DF/32/Cii-U1j0IEmIexGgADkVm-_s_QwAAJmEgNnF34AORWz473_w500_h280_c1_t0.jpg'
        },
        {
          id: 6,
          title: '海南三亚国光豪生双飞3-8日自由行',
          describe: '臻选三亚湾国际五星临海海景酒店，畅游4500平泳池，享酒店网红打卡点旅拍，3分钟直达沙滩',
          img: 'http://m.tuniucdn.com/fb2/t1/G1/M00/DF/32/Cii-U1j0IEmIexGgADkVm-_s_QwAAJmEgNnF34AORWz473_w500_h280_c1_t0.jpg'
        }, {
          id: 7,
          title: '海南三亚国光豪生双飞3-8日自由行',
          describe: '臻选三亚湾国际五星临海海景酒店，畅游4500平泳池，享酒店网红打卡点旅拍，3分钟直达沙滩',
          img: 'http://m.tuniucdn.com/fb2/t1/G1/M00/DF/32/Cii-U1j0IEmIexGgADkVm-_s_QwAAJmEgNnF34AORWz473_w500_h280_c1_t0.jpg'
        },
        {
          id: 8,
          title: '海南三亚国光豪生双飞3-8日自由行',
          describe: '臻选三亚湾国际五星临海海景酒店，畅游4500平泳池，享酒店网红打卡点旅拍，3分钟直达沙滩',
          img: 'http://m.tuniucdn.com/fb2/t1/G1/M00/DF/32/Cii-U1j0IEmIexGgADkVm-_s_QwAAJmEgNnF34AORWz473_w500_h280_c1_t0.jpg'
        }
      ]
    }
  },
  created () {

  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      homeDataApi().then(res => {
        this.list = res.data.data.mItems
      })
    },
    handleOrder (id) {
      this.$router.push({
        name: 'details', params: { id: id }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/style/_default.scss";
.home {
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
    padding: 0 5px;
    .scroll {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .product-item {
        width: 49%;
        margin-top: 5px;
        background: #fff;
        border-radius: 5px;
        dt {
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
        dd {
          padding: 5px;
          h5 {
            font-size: $font-size-l;
            @include line-ellipsis(2);
            line-height: 1.2;
            margin: 5px 0;
          }
          span {
            font-size: $font-size-s;
            @include line-ellipsis(1);
            line-height: 1.2;
            margin: 5px 0;
          }
        }
      }
    }
  }
}
</style>
