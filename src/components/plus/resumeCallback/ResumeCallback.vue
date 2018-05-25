<template>
  <transition name="slide">
    <div class="resumeCallback">
      <mt-header class="header" title="ResumeCallback" :fixed="headerConf.fixed">
        <div slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </div>
      </mt-header>
      <div class="content">
        <div class="row">
          切换到后台在切回来试试看（全局有效)
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Button, Toast } from 'mint-ui'
  import { headerMixin } from 'assets/js/mixins'

  export default {
    mixins: [headerMixin],
    data () {
      return {
        locationInfo: {
          flag: false,
          address: ''
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .resumeCallback {
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
    }
  }
</style>
