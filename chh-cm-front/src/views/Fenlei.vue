<template>
  <div class="details">
    <header-bar title="探索"></header-bar>
    <div class="main">
      <van-tabs v-model="active"
                sticky
                swipeable
                :border="false"
                color="#c5a683"
                title-active-color="#c5a683"
                title-inactive-color="#c5a683"
                line-height="1.5px"
                line-width="20px">
        <!-- <van-tab title="民间工艺"
                 class="tab-wrap">
          <div class="scroll">
            <dl v-for="item in list"
                :key="item.id"
                @click="handleOrder(item.id)"
                class="product-item">
              <dt><img :src="item.img"></dt>
              <dd>
                <h5>{{item.title}}</h5>
                <span>{{item.describe}}</span>
              </dd>
            </dl>
          </div>
        </van-tab> -->
        <van-tab title="寺庙大观"
                 class="tab-wrap">
          <div class="scroll">
            <dl v-for="item in list2"
                :key="item.id"
                @click="handleOrder(item.id)"
                class="product-item">
              <dt><img :src="item.img"></dt>
              <dd>
                <h5>{{item.title}}</h5>
                <span>{{item.describe}}</span>
              </dd>
            </dl>
          </div>
        </van-tab>
        <van-tab title="拜佛用品"
                 class="tab-wrap">
          <div class="scroll">
            <dl v-for="item in list3"
                :key="item.id"
                @click="handleOrder(item.id)"
                class="product-item">
              <dt><img :src="item.img"></dt>
              <dd>
                <h5>{{item.title}}</h5>
                <span>{{item.describe}}</span>
              </dd>
            </dl>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import HeaderBar from '@/common/HeaderBar.vue'
import FooterBar from '@/common/FooterBar.vue'
export default {
  components: {
    HeaderBar,
    FooterBar
  },
  data () {
    return {
      active: '',
      list: [
        {
          id: 1,
          title: '供应迎善永安观音菩萨桧木雕刻观音佛像摆件手工艺品',
          describe: '臻选三亚湾国际五星临海海景酒店，畅游4500平泳池，享酒店网红打卡点旅拍，3分钟直达沙滩',
          img: 'https://img005.hc360.cn/g8/M00/58/7B/wKhQtVPA4OGEfel5AAAAAC53Pso544.jpg..400x400.jpg'
        },
        {
          id: 2,
          title: '泰山兰亭轩精雕桃木剑镇宅辟邪桃木剑挂件开光桃木加工厂手工艺品',
          describe: '臻选三亚湾国际五星临海海景酒店，畅游4500平泳池，享酒店网红打卡点旅拍，3分钟直达沙滩',
          img: 'https://img007.hc360.cn/m8/M0D/D8/7C/wKhQpVWbaUiEFzqfAAAAANYLR90130.jpg..400x400.jpg'
        }, {
          id: 3,
          title: '皮影diy皮影戏皮影材料包可操作 可定制皮影 厂家批发',
          describe: '臻选三亚湾国际五星临海海景酒店，畅游4500平泳池，享酒店网红打卡点旅拍，3分钟直达沙滩',
          img: 'https://img14.360buyimg.com/n0/jfs/t7672/50/2732533500/543792/cd33aa76/59eefa97Naac475d4.jpg'
        },
        {
          id: 4,
          title: '山中玉文玩核桃狮子头满天星磨盘把件核桃文玩麻核桃特大王勇麒麟纹官帽一对',
          describe: '臻选三亚湾国际五星临海海景酒店，畅游4500平泳池，享酒店网红打卡点旅拍，3分钟直达沙滩',
          img: 'https://img14.360buyimg.com/n0/jfs/t1/19067/23/13421/159489/5ca02948Eea036278/1d721578f90a1cdc.jpg'
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
      ],
      list2: [
        {
          id: 1,
          title: '海南三亚国光豪生双飞3-8日自由行',
          describe: '金山寺位于江苏镇江市西北区。建筑风格符合江南特色，寺庙建筑精巧，庙宇依山而建，山和寺相互辉映，浑然一体。再加上慈寿塔高高地耸立在金山之上，给人拔地而起的感觉，山和寺相互辉映，浑然一体，山是一座庙，庙是一座山，山因寺得名，寺为山增色，因而以“金山寺裹山”著称于世。这种奇特的建筑，集中体现了唐、宋、元、明、清各朝的建筑的艺术精华和主要特征。为此北京万寿山的“佛香阁”、承德的避暑山庄金山亭、扬州瘦西湖的小金山等，都吸取了金山寺的建筑特点。',
          img: 'http://www.simiao.cn/Uploads/Picture/Medical/2017-03-17/11/58cb56cf83f49.jpg'
        },
        {
          id: 2,
          title: '海南三亚国光豪生双飞3-8日自由行',
          describe: '臻选三亚湾国际五星临海海景酒店，畅游4500平泳池，享酒店网红打卡点旅拍，3分钟直达沙滩',
          img: 'http://www.simiao.cn/Uploads/Picture/Medical/2017-03-17/11/58cb56cf83f49.jpg'
        },
        {
          id: 3,
          title: '海南三亚国光豪生双飞3-8日自由行',
          describe: '臻选三亚湾国际五星临海海景酒店，畅游4500平泳池，享酒店网红打卡点旅拍，3分钟直达沙滩',
          img: 'http://www.simiao.cn/Uploads/Picture/Medical/2017-03-17/11/58cb56cf83f49.jpg'
        },
        {
          id: 4,
          title: '海南三亚国光豪生双飞3-8日自由行',
          describe: '臻选三亚湾国际五星临海海景酒店，畅游4500平泳池，享酒店网红打卡点旅拍，3分钟直达沙滩',
          img: 'http://www.simiao.cn/Uploads/Picture/Medical/2017-03-17/11/58cb56cf83f49.jpg'
        },
        {
          id: 5,
          title: '海南三亚国光豪生双飞3-8日自由行',
          describe: '臻选三亚湾国际五星临海海景酒店，畅游4500平泳池，享酒店网红打卡点旅拍，3分钟直达沙滩',
          img: 'http://www.simiao.cn/Uploads/Picture/Medical/2017-03-17/11/58cb56cf83f49.jpg'
        },
        {
          id: 6,
          title: '海南三亚国光豪生双飞3-8日自由行',
          describe: '臻选三亚湾国际五星临海海景酒店，畅游4500平泳池，享酒店网红打卡点旅拍，3分钟直达沙滩',
          img: 'http://www.simiao.cn/Uploads/Picture/Medical/2017-03-17/11/58cb56cf83f49.jpg'
        }
      ],
      list3: [
        {
          id: 1,
          title: '佛教用品 檀香 线香 棒香/竹签香 ',
          describe: '长度：1.8米，直径：8公分（含龙部分），单支包装，16支/箱有两个板：1：万事如意，吉祥，合家平安，财旺。2：步步高升，一本万利，金榜题名。',
          img: 'http://www.zjypw.com/Upload/goods/84/2018-02/5a7819016afb7.jpg'
        },
        {
          id: 2,
          title: '圆通 莲花拜垫 拜椅拜佛垫佛堂礼佛打坐跪垫禅修垫佛具佛教用品大礼拜垫 寺庙道观上香垫子 黄色 小号 ',
          describe: '长度：1.8米，直径：8公分（含龙部分），单支包装，16支/箱有两个板：1：万事如意，吉祥，合家平安，财旺。2：步步高升，一本万利，金榜题名。',
          img: 'https://img14.360buyimg.com/n0/jfs/t7666/111/4309179192/205741/eb220284/5a28af4cNea8ceff1.jpg'
        },
        {
          id: 3,
          title: '佛教用品 檀香 线香 棒香/竹签香 ',
          describe: '长度：1.8米，直径：8公分（含龙部分），单支包装，16支/箱有两个板：1：万事如意，吉祥，合家平安，财旺。2：步步高升，一本万利，金榜题名。',
          img: 'http://www.zjypw.com/Upload/goods/84/2018-02/5a7819016afb7.jpg'
        },
        {
          id: 4,
          title: '圆通 莲花拜垫 拜椅拜佛垫佛堂礼佛打坐跪垫禅修垫佛具佛教用品大礼拜垫 寺庙道观上香垫子 黄色 小号 ',
          describe: '长度：1.8米，直径：8公分（含龙部分），单支包装，16支/箱有两个板：1：万事如意，吉祥，合家平安，财旺。2：步步高升，一本万利，金榜题名。',
          img: 'https://img14.360buyimg.com/n0/jfs/t7666/111/4309179192/205741/eb220284/5a28af4cNea8ceff1.jpg'
        },
        {
          id: 5,
          title: '佛教用品 檀香 线香 棒香/竹签香 ',
          describe: '长度：1.8米，直径：8公分（含龙部分），单支包装，16支/箱有两个板：1：万事如意，吉祥，合家平安，财旺。2：步步高升，一本万利，金榜题名。',
          img: 'http://www.zjypw.com/Upload/goods/84/2018-02/5a7819016afb7.jpg'
        },
        {
          id: 6,
          title: '圆通 莲花拜垫 拜椅拜佛垫佛堂礼佛打坐跪垫禅修垫佛具佛教用品大礼拜垫 寺庙道观上香垫子 黄色 小号 ',
          describe: '长度：1.8米，直径：8公分（含龙部分），单支包装，16支/箱有两个板：1：万事如意，吉祥，合家平安，财旺。2：步步高升，一本万利，金榜题名。',
          img: 'https://img14.360buyimg.com/n0/jfs/t7666/111/4309179192/205741/eb220284/5a28af4cNea8ceff1.jpg'
        }
      ]
    }
  },
  methods: {
    handleOrder (id) {
      this.$router.push({
        name: 'details', params: { id: id }
      })
    }
  },
  watch: {
    active (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/style/_default.scss";
.details {
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
    .tab-wrap {
      width: 100%;
      height: 100%;
      padding: 5px;
    }
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
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
