<template>
  <div class="index">
    <mt-tabbar v-model="tabConf.activeTab" :fixed="tabConf.fixed">
      <mt-tab-item id="UI">
        UI
      </mt-tab-item>
      <mt-tab-item id="PLUS">
        PLUS
      </mt-tab-item>
      <mt-tab-item id="INTRODUCE">
        INTRODUCE
      </mt-tab-item>
    </mt-tabbar>
    <mt-tab-container v-model="tabConf.activeTab" :swipeable="tabConf.isSwiper">
      <mt-tab-container-item id="UI">
        <index-ui></index-ui>
      </mt-tab-container-item>
      <mt-tab-container-item id="PLUS">
        <index-plus></index-plus>
      </mt-tab-container-item>
      <mt-tab-container-item id="INTRODUCE">
        <index-mine></index-mine>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script type="text/ecmascript-6">
  import indexUi from 'page/indexTab/indexUi'
  import indexPlus from 'page/indexTab/indexPlus'
  import indexMine from 'page/indexTab/indexMine'
  import { plusReady } from 'assets/js/plusReady'
  import { Tabbar, TabItem, Toast, Cell } from 'mint-ui'
  import { MyLocalStorage, checkADFlag, checkLoginFlag } from 'assets/js/utils'
  import { LOGIN_FLAG, AD_FLAG, INDEX_ACTIVETAB } from 'assets/js/storageConst'

  export default {
    components: {
      indexUi,
      indexPlus,
      indexMine
    },
    data () {
      return {
        tabConf: {
          activeTab: 'UI',  // 当前tab
          isSwiper: false, // 是否开启swiper模式
          fixed: true,  // 是否固定在底部
        },
      }
    },
    created () {
      console.log("created")
      plusReady(this.plusReady)
      this.setLocalStorage()  // 储存本地存储
    },
    activated () {
      console.log("activated1")
      let activeTab = localStorage.getItem(INDEX_ACTIVETAB)
      this.tabConf.activeTab = activeTab
      console.log(this.tabConf.activeTab)
    },
    methods: {
      plusReady () {
        let self = this
        plus.key.addEventListener('backbutton', function () {
          self.$router.back()
        }, false)
        document.addEventListener("resume", self.resumeCallback, false); // 运行环境从后台切换到前台事件
        document.addEventListener("pause", self.pauseCallback, false);
      },
      setLocalStorage () {
        localStorage.setItem(INDEX_ACTIVETAB, this.tabConf.activeTab)
      },
      resumeCallback () {
        Toast({
          message: '欢迎回来',
          position: 'bottom',
          duration: 3000
        })
        let AD_flag = checkADFlag()
        if (AD_flag) {
          this.adShow()
        }
        let login_flag = checkLoginFlag()
        if (login_flag) {
          this.login()
        } else {
          MyLocalStorage.Cache.set(LOGIN_FLAG, true, 999999) // 切换回来登陆保持时长无限
        }
      },
      pauseCallback () {
        setTimeout(() => {
          MyLocalStorage.Cache.set(LOGIN_FLAG, true, 600) // 切换至后台登陆保持10分钟
        }, 1000)
      },
      adShow () {
        setTimeout(() => {
          this.$router.push({
            name: 'advertisement'
          })
        }, 1000)
      },
      login () {
        this.$router.push({
          name: 'login'
        })
      }
    },
    watch: {
      'tabConf.activeTab' (newVal, oldVal) {
        localStorage.setItem(INDEX_ACTIVETAB, this.tabConf.activeTab)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  .index {
    position absolute
    z-index 0
    top 0
    left 0
    right 0
    bottom 0
    .mint-tabbar {
      height 50px
      a {
        padding 0
      }
    }
    .mint-tab-container {
      padding-bottom 50px
    }
  }
</style>
<style lang="stylus" rel="stylesheet/stylus">
  .index {
    .mint-tabbar {
      a .mint-tab-item-label {
        line-height 50px
      }
    }
    .mint-tab-container {
      .mint-cell-wrapper {
        background-image none
      }
      .mint-cell:last-child {
        background-image none
      }
    }
  }
</style>
