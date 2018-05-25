<template>
  <transition name="slide">
    <div class="advertisement">
      <div class="content">
        <mt-button class="close" type="danger" @click="close">关闭</mt-button>
        <h3>这里是广告位</h3>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { Button } from 'mint-ui'

  export default {
    data () {
      return {}
    },
    methods: {
      close () {
        this.$router.back()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .advertisement {
    position absolute
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background-color $color-background
    .content {
      height 100%
      text-align center
      .close {
        position absolute
        top 10px
        right 10px
        width 60px
        height 30px
        line-height 30px
      }
      h3 {
        position absolute
        left 50%
        top 45%
        width 100%
        transform translate3d(-50%, -50%, 0)
      }
    }
  }
</style>
