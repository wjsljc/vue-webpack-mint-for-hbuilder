<template>
  <transition name="slide">
    <div class="accelerometer">
      <mt-header class="header" title="Accelerometer" :fixed="headerConf.fixed">
        <div slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </div>
      </mt-header>
      <div class="content">
        <div class="row-block">
          <mt-button type="primary" @click="cardTurn">摇一摇</mt-button>
        </div>
        <div id="cardWrap" class="cardWrap" ref="cardWrap">
          {{accelerometerInfo.text}}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Button, Indicator } from 'mint-ui'
  import { headerMixin } from 'assets/js/mixins'

  const MAX = 30 // 翻转偏移量

  export default {
    mixins: [headerMixin],
    data () {
      return {
        accelerometerInfo: {
          flag: false,
          cardDom: null,
          player: null,
          timer: null,
          text: '卡片'
        }
      }
    },
    created () {
      plus.screen.lockOrientation('portrait-primary')
    },
    mounted () {
      this.accelerometerInfo.cardDom = this.$refs.cardWrap
      this.watchAcceleration()
    },
    methods: {
      watchAcceleration () {
        let self = this
        plus.accelerometer.watchAcceleration(function (a) {
          if (!self.accelerometerInfo.cardDom) {
            return;
          }
          if (!self.accelerometerInfo.player && (Math.abs(a.xAxis) + Math.abs(a.yAxis) + Math.abs(a.zAxis) > MAX)) {
            console.log("搖一搖成功");
            self.cardTurn();
          } else {

          }
        }, function (e) {
          console.log("摇一摇失败");
        }, {
          frequency: 100 // 更新加速度信息间隔时间
        });
      },
      cardTurn () {
        let self = this
        let player = self.accelerometerInfo.player
        if (!player) {
          player = plus.audio.createPlayer('/static/media/shake.wav')
          console.log('player ' + JSON.stringify(player))
          player.play()
        }
        setTimeout(function () {
          player && player.stop()
          delete self.accelerometerInfo.player
          player = null
        }, 1000);
        self.accelerometerInfo.cardDom.style.webkitTransform = 'rotateY(180deg)';
        self.accelerometerInfo.cardDom.style.msTransform = 'rotateY(180deg)';
        if (self.accelerometerInfo.timer) {
          clearTimeout(self.accelerometerInfo.timer);
        }
        self.accelerometerInfo.timer = setTimeout(function () {
          self.accelerometerInfo.timer = null;
          self.accelerometerInfo.cardDom.style.webkitTransform = '';
          self.accelerometerInfo.cardDom.style.msTransform = '';
        }, 500);
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
          width 100px
          height 100px
          margin 10px auto
          border-radius 100%
        }
      }
      .cardWrap {
        width 90%
        height 250px
        line-height 250px
        margin 0 auto
        text-align center
        border 1px solid $color-text
        transition all .5s
      }
    }
  }
</style>
