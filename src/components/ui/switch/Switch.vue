<template>
  <transition name="slide">
    <div class="switch">
      <mt-header class="header" title="Switch" :fixed="headerConf.fixed">
        <div slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </div>
      </mt-header>
      <div class="content">
        <div class="row">
          <mt-cell title="普通示例" :label="value1 ? '开' : '关'">
            <mt-switch v-model="value1"></mt-switch>
          </mt-cell>
          <mt-cell title="带显示内容">
            <mt-switch @change="change(value2)" v-model="value2">{{value2 ? '开' : '关'}}</mt-switch>
          </mt-cell>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Switch, Toast } from 'mint-ui'
  import { headerMixin } from 'assets/js/mixins'

  export default {
    name: "Toast",
    mixins: [headerMixin],
    data () {
      return {
        value1: true,
        value2: false
      }
    },
    methods: {
      change (status) {
        Toast({
          message: `开关状态${status ? '开' : '关'}`,
          position: 'bottom',
          duration: 1000
        });
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .switch {
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
        height 50px
        margin-bottom 20px
        .title {
          height 48px
          line-height 48px
          text-align left
          padding-left 10px
          font-weight bold
        }
      }
    }
  }
</style>
