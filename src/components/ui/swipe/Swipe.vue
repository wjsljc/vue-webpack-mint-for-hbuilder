<template>
  <transition name="slide">
    <div class="swipe-wrap">
      <mt-header class="header" title="Swipe" :fixed="headerConf.fixed">
        <div slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </div>
      </mt-header>
      <div class="content">
        <mt-swipe :auto="swipeConf1.auto"
                  :speed="swipeConf1.speed"
                  :defaultIndex="swipeConf1.defaultIndex"
                  :continuous="swipeConf1.continuous"
                  :showIndicators="swipeConf1.showIndicators"
                  :prevent="swipeConf1.prevent"
                  :stopPropagation="swipeConf1.stopPropagation"
                  @change="handleChange"
                  class="swipe"
        >
          <mt-swipe-item>1</mt-swipe-item>
          <mt-swipe-item>2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { Swipe, SwipeItem, Button } from 'mint-ui'
  import { headerMixin } from 'assets/js/mixins'

  export default {
    mixins: [headerMixin],
    data () {
      return {
        swipeConf1: {
          flag: false,  // 显隐标识
          auto: 0, // 自动播放时间
          speed: 300, // 切换动画时长
          defaultIndex: 0,  // 初始化默认显示的索引
          continuous: true, // 是否循环播放
          showIndicators: true, // 是否显示索引
          prevent: true, // 是否在 touchstart 事件触发时阻止事件的默认行为。设为 true 可提高运行在低版本安卓浏览器时的性能
          stopPropagation: false, // 是否在 touchstart 事件触发时阻止冒泡
        }
      }
    },
    methods: {
      /*
      * 滑动完触发事件
      * */
      handleChange (index) {
        console.log(index)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .swipe-wrap {
    position absolute
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background-color $color-background
    .content {
      padding-top 50px
      .swipe {
        width 100%
        height 300px
        background-color #d7d7d7
        .mint-swipe-item {
          line-height 300px
          text-align center
        }
      }
    }
  }
</style>
