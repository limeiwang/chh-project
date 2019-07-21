<template>
  <aside class="site-sidebar"
         :class="'site-sidebar--' + sidebarLayoutSkin">
    <div class="site-sidebar__inner">
      <el-menu :default-active="menuActiveName || 'home'"
               :collapse="sidebarFold"
               :collapseTransition="false"
               class="site-sidebar__menu">
        <el-menu-item index="home"
                      @click="$router.push({ name: 'home' })">
          <icon-svg name="shouye"
                    class="site-sidebar__menu-icon"></icon-svg>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="purchase"
                      @click="$router.push({ name: 'purchase' })">
          <icon-svg name="shoucang"
                    class="site-sidebar__menu-icon"></icon-svg>
          <span slot="title">采购进货</span>
        </el-menu-item>
        <el-menu-item index="delivery"
                      @click="$router.push({ name: 'delivery' })">
          <icon-svg name="shoucang"
                    class="site-sidebar__menu-icon"></icon-svg>
          <span slot="title">销售出货</span>
        </el-menu-item>
        <el-menu-item index="stock"
                      @click="$router.push({ name: 'stock' })">
          <icon-svg name="shoucang"
                    class="site-sidebar__menu-icon"></icon-svg>
          <span slot="title">库存查看</span>
        </el-menu-item>
        <el-menu-item index="profit"
                      @click="$router.push({ name: 'profit' })">
          <icon-svg name="shoucang"
                    class="site-sidebar__menu-icon"></icon-svg>
          <span slot="title">商品利润</span>
        </el-menu-item>
        <el-menu-item index="other"
                      @click="$router.push({ name: 'other' })">
          <icon-svg name="log"
                    class="site-sidebar__menu-icon"></icon-svg>
          <span slot="title">其他收支</span>
        </el-menu-item>
        <el-menu-item index="statistics"
                      @click="$router.push({ name: 'statistics' })">
          <icon-svg name="tubiao"
                    class="site-sidebar__menu-icon"></icon-svg>
          <span slot="title">销售统计</span>
        </el-menu-item>
        <el-menu-item index="customer"
                      @click="$router.push({ name: 'customer' })">
          <icon-svg name="geren"
                    class="site-sidebar__menu-icon"></icon-svg>
          <span slot="title">客户管理</span>
        </el-menu-item>
        <!-- <el-submenu index="demo">
          <template slot="title">
            <icon-svg name="shoucang"
                      class="site-sidebar__menu-icon"></icon-svg>
            <span>demo</span>
          </template>
          <el-menu-item index="demo-echarts"
                        @click="$router.push({ name: 'demo-echarts' })">
            <icon-svg name="tubiao"
                      class="site-sidebar__menu-icon"></icon-svg>
            <span slot="title">echarts</span>
          </el-menu-item>
          <el-menu-item index="demo-ueditor"
                        @click="$router.push({ name: 'demo-ueditor' })">
            <icon-svg name="editor"
                      class="site-sidebar__menu-icon"></icon-svg>
            <span slot="title">ueditor</span>
          </el-menu-item>
        </el-submenu> -->
        <sub-menu v-for="menu in menuList"
                  :key="menu.menuId"
                  :menu="menu"
                  :dynamicMenuRoutes="dynamicMenuRoutes">
        </sub-menu>
      </el-menu>
    </div>
  </aside>
</template>

<script>
import SubMenu from './main-sidebar-sub-menu'
// import { isURL } from '@/utils/validate'
export default {
  data () {
    return {
      dynamicMenuRoutes: []
    }
  },
  components: {
    SubMenu
  },
  computed: {
    sidebarLayoutSkin: {
      get () { return this.$store.state.common.sidebarLayoutSkin }
    },
    sidebarFold: {
      get () { return this.$store.state.common.sidebarFold }
    },
    menuList: {
      get () { return this.$store.state.common.menuList },
      set (val) { this.$store.commit('common/updateMenuList', val) }
    },
    menuActiveName: {
      get () { return this.$store.state.common.menuActiveName },
      set (val) { this.$store.commit('common/updateMenuActiveName', val) }
    },
    mainTabs: {
      get () { return this.$store.state.common.mainTabs },
      set (val) { this.$store.commit('common/updateMainTabs', val) }
    },
    mainTabsActiveName: {
      get () { return this.$store.state.common.mainTabsActiveName },
      set (val) { this.$store.commit('common/updateMainTabsActiveName', val) }
    }
  },
  watch: {
    $route: 'routeHandle'
  },
  created () {
    this.menuList = JSON.parse(sessionStorage.getItem('menuList') || '[]')
    this.dynamicMenuRoutes = JSON.parse(sessionStorage.getItem('dynamicMenuRoutes') || '[]')
    this.routeHandle(this.$route)
  },
  methods: {
    // 路由操作
    routeHandle (route) {
      if (route.meta.isTab) {
        // tab选中, 不存在先添加
        var tab = this.mainTabs.filter(item => item.name === route.name)[0]
        if (!tab) {
          if (route.meta.isDynamic) {
            route = this.dynamicMenuRoutes.filter(item => item.name === route.name)[0]
            if (!route) {
              return console.error('未能找到可用标签页!')
            }
          }
          tab = {
            menuId: route.meta.menuId || route.name,
            name: route.name,
            title: route.meta.title,
            // type: isURL(route.meta.iframeUrl) ? 'iframe' : 'module',
            iframeUrl: route.meta.iframeUrl || '',
            params: route.params,
            query: route.query
          }
          this.mainTabs = this.mainTabs.concat(tab)
        }
        this.menuActiveName = tab.menuId + ''
        this.mainTabsActiveName = tab.name
      }
    }
  }
}
</script>
