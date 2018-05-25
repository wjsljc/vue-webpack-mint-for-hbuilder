<template>
  <transition name="slide">
    <div class="indicator">
      <mt-header class="header" title="Indicator" :fixed="headerConf.fixed">
        <div slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </div>
      </mt-header>
      <div class="content">
        <mt-button type="default" @click="toast('style-1')">加载样式1</mt-button>
        <mt-button type="default" @click="toast('style-2')">加载样式2</mt-button>
        <mt-button type="default" @click="toast('style-3')">加载样式3</mt-button>
        <mt-button type="default" @click="toast('style-4')">加载样式4</mt-button>
        <mt-button type="default" @click="toast('style-text')">带文字的加载样式</mt-button>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Indicator, Button } from 'mint-ui'
  import { headerMixin } from 'assets/js/mixins'

  export default {
    mixins: [headerMixin],
    data () {
      return {
        headerConf: {
          fixed: true
        }
      }
    },
    methods: {
      toast (target) {
        switch (target) {
          case 'style-1':
            Indicator.open({
              spinnerType: 'snake'
            });
            break
          case 'style-2':
            Indicator.open({
              spinnerType: 'triple-bounce'
            })
            break
          case 'style-3':
            Indicator.open({
              spinnerType: 'fading-circle'
            })
            break
          case 'style-4':
            Indicator.open({
              spinnerType: 'double-bounce'
            })
            break
          case 'style-text':
            Indicator.open({
              text: '加载中...',
              spinnerType: 'triple-bounce'
            });
            break
        }
        setTimeout(() => {
          Indicator.close();
        }, 2000)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .indicator {
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
        box-shadow 0 0 2px $color-shadow
      }
    }
  }
</style>
