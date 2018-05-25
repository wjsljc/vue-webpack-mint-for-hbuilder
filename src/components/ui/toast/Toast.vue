<template>
  <transition name="slide">
    <div class="toast">
      <mt-header class="header" title="Toast" :fixed="headerConf.fixed">
        <div slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </div>
      </mt-header>
      <div class="content">
        <mt-button type="default" @click="toast('top')">上方弹出Toast</mt-button>
        <mt-button type="default" @click="toast('middle')">中间弹出Toast</mt-button>
        <mt-button type="default" @click="toast('bottom')">下方弹出Toast</mt-button>
        <mt-button type="default" @click="toast('icon')">带图标的弹出框</mt-button>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Toast, Button } from 'mint-ui'
  import { headerMixin } from 'assets/js/mixins'

  export default {
    name: "Toast",
    mixins: [headerMixin],
    methods: {
      toast (target) {
        switch (target) {
          case 'top':
            Toast({
              message: '弹出位置-上',
              position: 'top',
              duration: 3000
            });
            break
          case 'middle':
            Toast({
              message: '弹出位置-中',
              position: 'middle',
              duration: 3000
            });
            break
          case 'bottom':
            Toast({
              message: '弹出位置-下',
              position: 'bottom',
              duration: 3000
            });
            break
          case 'icon':
            Toast({
              message: '操作成功',
              iconClass: 'iconfont icon-caozuochenggong'
            });
            break
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .toast {
    position absolute
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background-color $color-background
    .content {
      padding-top 50px
      button.mint-button--default {
        display block
        width 60%
        height 40px
        margin 20px auto
        box-shadow 0 0 2px #b8bbbf
      }
    }
  }
</style>
