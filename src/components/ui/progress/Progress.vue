<template>
  <transition name="slide">
    <div class="progress" id="lazyLoad">
      <mt-header class="header" title="Progress" :fixed="headerConf.fixed">
        <div slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </div>
      </mt-header>
      <div class="content" ref="content">
        <div class="row">
          <div class="title">基本功能</div>
          <div class="row-container flex-row">
            <div class="desc flex-1">
              默认
            </div>
            <div class="flex-2">
              <mt-progress class="progress-box"
                           :value="progressConf1.value"
                           :bar-height="progressConf1.barHeight"
              >
              </mt-progress>
            </div>
          </div>
          <div class="row-container flex-row">
            <div class="desc flex-1">
              左右文字
            </div>
            <div class=" flex-2">
              <mt-progress class="progress-box"
                           :value="progressConf2.value"
                           :bar-height="progressConf2.barHeight"
              >
                <div class="slot" slot="start">0%</div>
                <div class="slot" slot="end">100%</div>
              </mt-progress>
            </div>
          </div>
        </div>
        <mt-button type="primary"
                   class="upload"
                   @click="upload"
                   :disabled="progressConf3.disabled"
        >
          上传文件
        </mt-button>
        <mt-progress class="progress-box progress-upload"
                     v-show="progressConf3.flag"
                     :value="progressConf3.value"
        >
          <div class="slot" slot="end">{{showValue}}</div>
        </mt-progress>
        <mt-button type="default"
                   class="upload"
                   @click="pauseUpload"
                   v-show="progressConf3.flag"
                   :disabled="!progressConf3.disabled"
        >
          {{progressConf3.pauseText}}
        </mt-button>
        <mt-button type="danger"
                   class="upload"
                   @click="abolishUpload"
                   v-show="progressConf3.flag"
                   :disabled="!progressConf3.disabled"
        >
          取消上传
        </mt-button>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { Progress, Button, Toast } from 'mint-ui'
  import { headerMixin } from 'assets/js/mixins'

  export default {
    mixins: [headerMixin],
    data () {
      return {
        progressConf1: {
          value: 50,
          barHeight: 2
        },
        progressConf2: {
          value: 20,
          barHeight: 5
        },
        progressConf3: {
          flag: false,
          pause: false, // 暂停标识
          pauseText: '暂停',
          timer: null,
          value: 0,
          barHeight: 5,
          disabled: false
        }
      }
    },
    computed: {
      showValue () {
        return this.progressConf3.value.toFixed(2) + '%'
      }
    },
    methods: {
      upload () {
        setTimeout(() => {
          Toast({
            message: '正在使用4G',
            position: 'bottom',
            duration: 3000
          });
        }, 1000)
        this.progressConf3.flag = true
        this.progressConf3.disabled = true
        this.timerHandle()
      },
      pauseUpload () {
        this.progressConf3.pause = !this.progressConf3.pause
        this.progressConf3.pauseText = this.progressConf3.pause ? '继续' : '暂停'
        if (this.progressConf3.pause) { // 暂停状态
          clearInterval(this.progressConf3.timer)
          this.progressConf3.timer = null
        } else {
          this.timerHandle()
        }
      },
      abolishUpload () {
        this.progressConf3.value = 0
        this.progressConf3.flag = false
        this.progressConf3.disabled = false
        clearInterval(this.progressConf3.timer)
        Toast({
          message: '已取消',
          iconClass: 'iconfont icon-caozuochenggong'
        });
      },
      timerHandle () {
        this.progressConf3.timer = setInterval(() => {
          this.progressConf3.value += Math.random()
          if (this.progressConf3.value >= 100) {
            clearInterval(this.progressConf3.timer)
            this.progressConf3.timer = null
            this.progressConf3.value = 0
            this.progressConf3.flag = false
            this.progressConf3.disabled = false
            Toast({
              message: '上传完成',
              iconClass: 'iconfont icon-caozuochenggong'
            });
            setTimeout(() => {
              Toast({
                message: '您的流量已不足',
                position: 'bottom',
                duration: 3000
              });
            }, 1000)
          }
        }, 50)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  @import "~assets/css/flex.styl"
  .progress {
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
        width 100%
        margin 0 auto
        .title {
          height 40px
          line-height 40px
          padding 0 10px
          font-size $font-size-medium
        }
        .row-container {
          background-color white
          padding 5px 10px
          .desc {
            height 50px
            line-height 50px
          }
          .progress-box {
            height 50px
            .slot {
              line-height 50px
              margin 0 5px
            }
          }
        }
      }
      .upload {
        display block
        width 80%
        margin 0 auto
        margin-top 20px
      }
      .progress-box.progress-upload {
        padding 0 10px
        margin 30px 0
      }
    }
  }
</style>
