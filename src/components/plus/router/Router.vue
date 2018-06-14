<template>
  <transition name="slide">
    <div class="router">
      <mt-header class="header" title="Router" :fixed="headerConf.fixed">
        <div slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </div>
      </mt-header>
      <div class="content">
        <div class="row">
          <mt-button @click="jump('others')">跳到其他路由</mt-button>
          <mt-button @click="jump('children')">跳到动态子路由</mt-button>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </transition>
</template>

<script>
  import { Button, Indicator } from 'mint-ui'
  import { headerMixin } from 'assets/js/mixins'

  export default {
    mixins: [headerMixin],
    data () {
      return {}
    },
    methods: {
      jump (status) {
        if (status === 'others') {
          this.$router.push({
            name: 'camera'
          })
        } else {
          let str = Math.random() * 10 + ''
          str = str.substring(0, 1)
          this.$router.push({
            path: `/plus/router/routerChildren${str}`
          })
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/variable.styl"
  @import "~assets/css/transition.styl"
  .router {
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
