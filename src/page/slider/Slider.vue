<template>
  <div class="slider" @click="begin">
    <div class="content">
      <mt-swipe :auto="swipeConf.auto"
                :speed="swipeConf.speed"
                :defaultIndex="swipeConf.defaultIndex"
                :continuous="swipeConf.continuous"
                :showIndicators="swipeConf.showIndicators"
                :prevent="swipeConf.prevent"
                :stopPropagation="swipeConf.stopPropagation"
                @change="handleChange"
                class="swipe"
      >
        <mt-swipe-item>
          <div class="box">
            <h3>欢迎使用vue-webpack-mint </h3>
            <h4>for hbuilder</h4>
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="box">
            <h3>制作</h3>
            <h4>By LJC</h4>
          </div>
        </mt-swipe-item>
        <mt-swipe-item @click="begin">
          <div class="box">
            <mt-button type="danger">即将开始体验<span v-show="this.timer">{{time}}</span></mt-button>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Swipe, SwipeItem, Button } from 'mint-ui'
  import { plusReady } from 'assets/js/plusReady'

  export default {
    data () {
      return {
        swipeConf: {
          flag: false,  // 显隐标识
          auto: 0, // 自动播放时间
          speed: 300, // 切换动画时长
          defaultIndex: 0,  // 初始化默认显示的索引
          continuous: false, // 是否循环播放
          showIndicators: true, // 是否显示索引
          prevent: true, // 是否在 touchstart 事件触发时阻止事件的默认行为。设为 true 可提高运行在低版本安卓浏览器时的性能
          stopPropagation: true, // 是否在 touchstart 事件触发时阻止冒泡
        },
        timer: null,
        time: 3
      }
    },
    created () {
//      plusReady(this.plusReady)
    },
    destroyed () {
      clearInterval(this.timer)
    },
    methods: {
      plusReady () {
//        plus.navigator.setFullscreen(true)
      },
      handleChange (index) {
        console.log(index)
        let self = this
        if (index === 2) {
          this.timer = setInterval(() => {
            this.time--
            if (this.time === 0) {
              localStorage.setItem('_slider_flag_', true)
              clearInterval(this.timer)
              console.log('进来了')
              this.$router.push({
                name: 'index'
              })
            }
          }, 1000)
        }
      },
      begin () {

      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .slider {
    position absolute
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    height 100%
    background-color $color-background
    .content {
      height 100%
      .swipe {
        width 100%
        height 100%
        background-color $color-background-w
        .mint-swipe-item {
          text-align center
          .box {
            z-index 999
            position absolute
            left 50%
            top 45%
            width 100%
            transform translate3d(-50%, -50%, 0)
            h3, h4 {
              padding 10px 0
            }
            h3 {
              font-size $font-size-large
            }
            h4 {
              font-size $font-size-large-x
              font-weight bold
            }
          }
        }
      }
    }
  }
</style>
<style lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  .slider {
    .content {
      .mint-swipe-indicator.is-active {
        background-color $color-background-d
      }
    }
  }
</style>
