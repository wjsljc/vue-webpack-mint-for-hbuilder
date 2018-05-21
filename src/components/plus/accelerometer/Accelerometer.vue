<template>
  <transition name="slide">
    <div class="accelerometer">
      <mt-header class="header" title="Accelerometer" :fixed="headerConf.fixed">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <div class="row-block">
          <mt-button type="default">点击获取当前地理信息</mt-button>
          <mt-button type="primary">primary</mt-button>
          <mt-button type="danger">danger</mt-button>
        </div>
        <div id="cardWrap" class="cardWrap" ref="cardWrap">
          123
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Header, Button, Indicator } from 'mint-ui';

  const MAX = 30; // 翻转偏移量

  export default {
    name: "Indicator",
    data () {
      return {
        headerConf: {
          fixed: true
        },
        accelerometerInfo: {
          flag: false,
          cardDom: null
        }
      }
    },
    created () {
      plus.screen.lockOrientation('portrait-primary')
      this.watchAcceleration()
    },
    methods: {
      watchAcceleration () {
        let self = this
        document.addEventListener('DOMContentLoaded', function () {
          self.accelerometerInfo.cardDom = this.$refs.cardWrap
        }, false)
        plus.accelerometer.watchAcceleration(function (a) {
          if (!self.accelerometerInfo.cardDom) {
            return;
          }
          if (!player && (Math.abs(a.xAxis) + Math.abs(a.yAxis) + Math.abs(a.zAxis) > MAX)) {
            console.log("搖一搖成功");
            self.cardTurn();
          }
        }, function (e) {
          console.log("摇一摇失败");
        }, {
          frequency: 100 // 更新加速度信息间隔时间
        });
      },
      cardTurn () {
        alert(1230)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .accelerometer {
    position absolute
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background-color $color-background
    .content {
      padding-top 50px
      .row {
        min-height 50px
        line-height 50px
        margin 10px 0
        text-align center
      }
      .row-block {
        margin 10px 0
        button {
          display block
          width 90%
          margin 10px auto
        }
      }
    }
  }
</style>
