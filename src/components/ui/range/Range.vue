<template>
  <transition name="slide">
    <div class="range">
      <mt-header class="header" title="Range" :fixed="headerConf.fixed">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="content">
        <div class="row">
          <div class="title">基本功能</div>
          <div class="row-container flex-row">
            <div class="desc flex-1">
              <p>默认</p>
              <b>value : {{range1.value}}</b>
            </div>
            <div class="flex-2">
              <mt-range v-model="range1.value"></mt-range>
            </div>
          </div>
          <div class="row-container flex-row">
            <div class="desc flex-1">
              <p>左右文字</p>
              <b>value : {{range2.value}}</b>
            </div>
            <div class="flex-2">
              <mt-range v-model="range2.value">
                <div class="left" slot="start">0</div>
                <div class="right" slot="end">100</div>
              </mt-range>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="title">自定义</div>
          <div class="row-container flex-row">
            <div class="desc flex-1">
              <p>自定义步长</p>
              <b>value : {{range3.value}}</b>
            </div>
            <div class="flex-2">
              <mt-range v-model="range3.value" :step="range3.step"></mt-range>
            </div>
          </div>
          <div class="row-container flex-row">
            <div class="desc flex-1">
              <p>自定义区间</p>
              <b>value : {{range4.value}}</b>
            </div>
            <div class="flex-2">
              <mt-range v-model="range4.value" :min="range4.min" :max="range4.max">
                <div class="left" slot="start">10</div>
                <div class="right" slot="end">90</div>
              </mt-range>
            </div>
          </div>
          <div class="row-container flex-row">
            <div class="desc flex-1">
              <p>定义线宽</p>
              <b>value : {{range5.value}}</b>
            </div>
            <div class="flex-2">
              <mt-range v-model="range5.value" :barHeight="range5.barHeight"></mt-range>
            </div>
          </div>
          <div class="row-container flex-row">
            <div class="desc flex-1">
              <p>设置无效</p>
              <b>value : {{range6.value}}</b>
            </div>
            <div class="flex-2">
              <mt-range v-model="range6.value" :disabled="range6.disabled"></mt-range>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { Header, Range, Button } from 'mint-ui';

  export default {
    data () {
      return {
        headerConf: {
          fixed: true
        },
        range1: {
          value: 0,
        },
        range2: {
          value: 0,
        },
        range3: {
          value: 0,
          step: 10
        },
        range4: {
          value: 10,
          min: 10,
          max: 90
        },
        range5: {
          value: 0,
          barHeight: 3
        },
        range6: {
          value: 50,
          disabled: true
        }
      }
    },
    methods: {}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  @import "~assets/css/flex.styl"
  .range {
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
            p {
              height 30px
              line-height 30px
              font-size $font-size-medium-x
            }
            b {
              height 20px
              line-height 20px
              font-size: $font-size-medium
              color #888888
            }
          }
          .mt-range-content {
            height 50px
          }
        }
      }
    }
  }
</style>
<style lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/flex.styl"
  .range {
    .content {
      .row {
        .title {
        }
        .row-container {
          .mt-range-content {
            height 50px
            .mt-range-thumb {
              top 10px
            }
          }
          .mt-range {
            height 50px
            line-height 50px
            .left {
              margin-right 5px
            }
            .right {
              margin-left 5px
            }
          }
        }
      }
    }
  }
</style>
